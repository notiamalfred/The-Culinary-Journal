// server.js
// The Journal — Community Recipes backend
// Zero external dependencies: uses only Node's built-in http, sqlite, and crypto modules.
// Requires Node.js 22.5+ (for the built-in node:sqlite module).

const http = require('http');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { DatabaseSync } = require('node:sqlite');

const PORT = process.env.PORT || 3000;
const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'data.db');
const PUBLIC_DIR = path.join(__dirname, 'public');
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

// ---------- Database setup ----------

const db = new DatabaseSync(DB_PATH);

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    salt TEXT NOT NULL,
    avatar TEXT,
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS sessions (
    token TEXT PRIMARY KEY,
    user_id INTEGER NOT NULL,
    expires_at TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS recipes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    difficulty TEXT NOT NULL,
    intro TEXT,
    ingredients TEXT NOT NULL,
    steps TEXT NOT NULL,
    secret TEXT,
    created_at TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
`);

// Safe migration for databases created before the avatar column existed.
try {
  db.exec('ALTER TABLE users ADD COLUMN avatar TEXT');
} catch (e) {
  // Column already exists — nothing to do.
}

// ---------- Password helpers ----------

function hashPassword(password, salt) {
  return crypto.scryptSync(password, salt, 64).toString('hex');
}

function makeSaltedHash(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = hashPassword(password, salt);
  return { salt, hash };
}

function verifyPassword(password, salt, hash) {
  const candidate = hashPassword(password, salt);
  const a = Buffer.from(candidate, 'hex');
  const b = Buffer.from(hash, 'hex');
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

// Used to keep login timing consistent whether or not the account exists — see handleLogin.
const DUMMY_SALT = crypto.randomBytes(16).toString('hex');
const DUMMY_HASH = hashPassword('not-a-real-password-used-only-for-timing', DUMMY_SALT);

// ---------- Session helpers ----------

function createSession(userId) {
  const token = crypto.randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + SESSION_TTL_MS).toISOString();
  db.prepare('INSERT INTO sessions (token, user_id, expires_at) VALUES (?, ?, ?)')
    .run(token, userId, expiresAt);
  return token;
}

function getUserFromToken(token) {
  if (!token) return null;
  const session = db.prepare('SELECT * FROM sessions WHERE token = ?').get(token);
  if (!session) return null;
  if (new Date(session.expires_at) < new Date()) {
    db.prepare('DELETE FROM sessions WHERE token = ?').run(token);
    return null;
  }
  return db.prepare('SELECT id, username, email, avatar, created_at FROM users WHERE id = ?').get(session.user_id);
}

function getBearerToken(req) {
  const header = req.headers['authorization'] || '';
  const match = header.match(/^Bearer (.+)$/);
  return match ? match[1] : null;
}

// ---------- Validation helpers ----------

function isValidEmail(email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidUsername(username) {
  return typeof username === 'string' && /^[a-zA-Z0-9_]{3,20}$/.test(username);
}

// Strictly validates a data: URL is a real, well-formed image — not just a string that
// *starts with* the right prefix. Checks the base64 charset end-to-end, decodes it, and
// verifies the decoded bytes actually match the claimed format's magic number. This closes
// off using the avatar field to smuggle arbitrary HTML/attributes into the src="..." attribute.
function isValidImageDataUrl(dataUrl) {
  const match = /^data:image\/(png|jpe?g|webp|gif);base64,([A-Za-z0-9+/]+=*)$/.exec(dataUrl);
  if (!match) return false;

  const mime = match[1].toLowerCase();
  const base64Data = match[2];
  if (base64Data.length % 4 !== 0) return false;

  let bytes;
  try {
    bytes = Buffer.from(base64Data, 'base64');
  } catch (e) {
    return false;
  }
  if (bytes.length < 12) return false;

  if (mime === 'png') return bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4E && bytes[3] === 0x47;
  if (mime === 'jpg' || mime === 'jpeg') return bytes[0] === 0xFF && bytes[1] === 0xD8 && bytes[2] === 0xFF;
  if (mime === 'gif') return bytes[0] === 0x47 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x38;
  if (mime === 'webp') {
    return bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46 &&
           bytes[8] === 0x57 && bytes[9] === 0x45 && bytes[10] === 0x42 && bytes[11] === 0x50;
  }
  return false;
}

// ---------- Rate limiting ----------
// Simple in-memory fixed-window limiter, keyed by client IP. Good enough for a
// single-process deployment; a multi-instance deployment would need a shared store
// (e.g. Redis) instead, since each process keeps its own counters.

const rateLimitStore = new Map(); // key -> { count, windowStart }

function getClientIp(req) {
  return req.socket.remoteAddress || 'unknown';
}

// Returns { limited: false } if the call is allowed (and counts it), or
// { limited: true, retryAfterSeconds } if the caller has exceeded `max` calls in `windowMs`.
function checkRateLimit(key, max, windowMs) {
  const now = Date.now();
  const entry = rateLimitStore.get(key);
  if (!entry || now - entry.windowStart > windowMs) {
    rateLimitStore.set(key, { count: 1, windowStart: now });
    return { limited: false };
  }
  entry.count++;
  if (entry.count > max) {
    return { limited: true, retryAfterSeconds: Math.ceil((windowMs - (now - entry.windowStart)) / 1000) };
  }
  return { limited: false };
}

// Periodic cleanup so the map doesn't grow forever on a long-running process.
setInterval(() => {
  const cutoff = Date.now() - 60 * 60 * 1000;
  for (const [key, entry] of rateLimitStore) {
    if (entry.windowStart < cutoff) rateLimitStore.delete(key);
  }
}, 10 * 60 * 1000).unref();

// ---------- JSON request/response helpers ----------

function sendJSON(res, status, data) {
  const body = JSON.stringify(data);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(body),
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
  });
  res.end(body);
}

function readJSONBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    let size = 0;
    const MAX_SIZE = 2 * 1024 * 1024; // 2MB cap (comfortably fits a resized avatar image)
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > MAX_SIZE) {
        reject(new Error('Payload too large'));
        req.destroy();
        return;
      }
      data += chunk;
    });
    req.on('end', () => {
      if (!data) return resolve({});
      try {
        resolve(JSON.parse(data));
      } catch (e) {
        reject(new Error('Invalid JSON'));
      }
    });
    req.on('error', reject);
  });
}

// ---------- Route handlers ----------

async function handleRegister(req, res) {
  const ip = getClientIp(req);
  const limit = checkRateLimit(`register:${ip}`, 5, 60 * 60 * 1000); // 5 registrations / hour per IP
  if (limit.limited) {
    res.setHeader('Retry-After', String(limit.retryAfterSeconds));
    return sendJSON(res, 429, { error: 'Too many accounts created from this connection. Please try again later.' });
  }

  const body = await readJSONBody(req);
  const { username, email, password } = body;

  if (!isValidUsername(username)) {
    return sendJSON(res, 400, { error: 'Username must be 3-20 characters: letters, numbers, underscores only.' });
  }
  if (!isValidEmail(email)) {
    return sendJSON(res, 400, { error: 'Please provide a valid email address.' });
  }
  if (typeof password !== 'string' || password.length < 8) {
    return sendJSON(res, 400, { error: 'Password must be at least 8 characters.' });
  }

  const existing = db.prepare('SELECT id FROM users WHERE username = ? OR email = ?').get(username, email);
  if (existing) {
    return sendJSON(res, 409, { error: 'That username or email is already taken.' });
  }

  const { salt, hash } = makeSaltedHash(password);
  const createdAt = new Date().toISOString();
  const result = db.prepare(
    'INSERT INTO users (username, email, password_hash, salt, created_at) VALUES (?, ?, ?, ?, ?)'
  ).run(username, email, hash, salt, createdAt);

  const token = createSession(result.lastInsertRowid);
  sendJSON(res, 201, {
    token,
    user: { id: result.lastInsertRowid, username, email, avatar: null, created_at: createdAt },
  });
}

async function handleLogin(req, res) {
  const ip = getClientIp(req);
  const limit = checkRateLimit(`login:${ip}`, 10, 15 * 60 * 1000); // 10 attempts / 15 min per IP
  if (limit.limited) {
    res.setHeader('Retry-After', String(limit.retryAfterSeconds));
    return sendJSON(res, 429, { error: 'Too many login attempts. Please try again later.' });
  }

  const body = await readJSONBody(req);
  const { username, password } = body;

  if (typeof username !== 'string' || typeof password !== 'string') {
    return sendJSON(res, 400, { error: 'Username and password are required.' });
  }

  const user = db.prepare('SELECT * FROM users WHERE username = ? OR email = ?').get(username, username);

  // Always run the (slow) password hash, even for a nonexistent account, so a nonexistent
  // username and a wrong password take the same amount of time to reject. Otherwise the
  // response-time difference itself would leak which usernames are registered.
  const targetSalt = user ? user.salt : DUMMY_SALT;
  const targetHash = user ? user.password_hash : DUMMY_HASH;
  const passwordOk = verifyPassword(password, targetSalt, targetHash);

  if (!user || !passwordOk) {
    return sendJSON(res, 401, { error: 'Incorrect username or password.' });
  }

  const token = createSession(user.id);
  sendJSON(res, 200, {
    token,
    user: { id: user.id, username: user.username, email: user.email, avatar: user.avatar, created_at: user.created_at },
  });
}

async function handleLogout(req, res) {
  const token = getBearerToken(req);
  if (token) db.prepare('DELETE FROM sessions WHERE token = ?').run(token);
  sendJSON(res, 200, { ok: true });
}

async function handleMe(req, res) {
  const user = getUserFromToken(getBearerToken(req));
  if (!user) return sendJSON(res, 401, { error: 'Not logged in.' });
  sendJSON(res, 200, { user });
}

async function handleUpdateProfile(req, res) {
  const user = getUserFromToken(getBearerToken(req));
  if (!user) return sendJSON(res, 401, { error: 'Not logged in.' });

  const body = await readJSONBody(req);
  const { username, email } = body;

  if (!isValidUsername(username)) {
    return sendJSON(res, 400, { error: 'Username must be 3-20 characters: letters, numbers, underscores only.' });
  }
  if (!isValidEmail(email)) {
    return sendJSON(res, 400, { error: 'Please provide a valid email address.' });
  }

  const conflict = db.prepare(
    'SELECT id FROM users WHERE (username = ? OR email = ?) AND id != ?'
  ).get(username, email, user.id);
  if (conflict) {
    return sendJSON(res, 409, { error: 'That username or email is already taken.' });
  }

  db.prepare('UPDATE users SET username = ?, email = ? WHERE id = ?').run(username, email, user.id);
  sendJSON(res, 200, { user: { id: user.id, username, email, avatar: user.avatar, created_at: user.created_at } });
}

async function handleChangePassword(req, res) {
  const user = getUserFromToken(getBearerToken(req));
  if (!user) return sendJSON(res, 401, { error: 'Not logged in.' });

  const body = await readJSONBody(req);
  const { currentPassword, newPassword } = body;

  if (typeof currentPassword !== 'string' || typeof newPassword !== 'string') {
    return sendJSON(res, 400, { error: 'Current and new password are required.' });
  }
  if (newPassword.length < 8) {
    return sendJSON(res, 400, { error: 'New password must be at least 8 characters.' });
  }

  const fullUser = db.prepare('SELECT * FROM users WHERE id = ?').get(user.id);
  if (!verifyPassword(currentPassword, fullUser.salt, fullUser.password_hash)) {
    return sendJSON(res, 401, { error: 'Current password is incorrect.' });
  }

  const { salt, hash } = makeSaltedHash(newPassword);
  db.prepare('UPDATE users SET password_hash = ?, salt = ? WHERE id = ?').run(hash, salt, user.id);

  // Invalidate every existing session for this account (including the one used for this
  // request) so a previously stolen token stops working the moment the password changes,
  // then issue a fresh token so the browser that just changed the password isn't logged out.
  db.prepare('DELETE FROM sessions WHERE user_id = ?').run(user.id);
  const newToken = createSession(user.id);

  sendJSON(res, 200, { ok: true, token: newToken });
}

async function handleUpdateAvatar(req, res) {
  const user = getUserFromToken(getBearerToken(req));
  if (!user) return sendJSON(res, 401, { error: 'Not logged in.' });

  const body = await readJSONBody(req);
  const { avatar } = body;

  if (avatar === null) {
    db.prepare('UPDATE users SET avatar = NULL WHERE id = ?').run(user.id);
    return sendJSON(res, 200, { user: { ...user, avatar: null } });
  }

  if (typeof avatar !== 'string' || avatar.length > 700000) {
    return sendJSON(res, 400, { error: 'That image is too large. Please choose a smaller photo.' });
  }
  if (!isValidImageDataUrl(avatar)) {
    return sendJSON(res, 400, { error: 'Please upload a valid image (PNG, JPEG, WEBP, or GIF).' });
  }

  db.prepare('UPDATE users SET avatar = ? WHERE id = ?').run(avatar, user.id);
  sendJSON(res, 200, { user: { ...user, avatar } });
}

async function handleDeleteAccount(req, res) {
  const user = getUserFromToken(getBearerToken(req));
  if (!user) return sendJSON(res, 401, { error: 'Not logged in.' });

  db.prepare('DELETE FROM recipes WHERE user_id = ?').run(user.id);
  db.prepare('DELETE FROM sessions WHERE user_id = ?').run(user.id);
  db.prepare('DELETE FROM users WHERE id = ?').run(user.id);

  sendJSON(res, 200, { ok: true });
}

async function handleListRecipes(req, res) {
  const rows = db.prepare(`
    SELECT recipes.*, users.username AS author, users.avatar AS authorAvatar
    FROM recipes
    JOIN users ON users.id = recipes.user_id
    ORDER BY recipes.created_at DESC
  `).all();

  const recipes = rows.map((r) => ({
    id: r.id,
    title: r.title,
    category: r.category,
    difficulty: r.difficulty,
    intro: r.intro,
    ingredients: JSON.parse(r.ingredients),
    steps: JSON.parse(r.steps),
    secret: r.secret,
    author: r.author,
    authorAvatar: r.authorAvatar,
    created_at: r.created_at,
  }));

  sendJSON(res, 200, { recipes });
}

// Shared validation for both creating and editing a recipe. Returns an error string,
// or null if the fields are valid.
function validateRecipeFields({ title, category, difficulty, ingredients, steps }) {
  if (typeof title !== 'string' || !title.trim()) return 'A recipe title is required.';
  if (typeof category !== 'string' || !category.trim()) return 'A category is required.';
  if (typeof difficulty !== 'string' || !difficulty.trim()) return 'A difficulty is required.';
  if (!Array.isArray(ingredients) || ingredients.length === 0 || !ingredients.every((i) => typeof i === 'string')) {
    return 'At least one ingredient is required.';
  }
  if (!Array.isArray(steps) || steps.length === 0 || !steps.every((s) => typeof s === 'string')) {
    return 'At least one step is required.';
  }
  return null;
}

async function handleCreateRecipe(req, res) {
  const user = getUserFromToken(getBearerToken(req));
  if (!user) {
    return sendJSON(res, 401, { error: 'You must be logged in to share a recipe.' });
  }

  const body = await readJSONBody(req);
  const { title, category, difficulty, intro, ingredients, steps, secret } = body;

  const validationError = validateRecipeFields({ title, category, difficulty, ingredients, steps });
  if (validationError) return sendJSON(res, 400, { error: validationError });

  const createdAt = new Date().toISOString();
  const result = db.prepare(`
    INSERT INTO recipes (user_id, title, category, difficulty, intro, ingredients, steps, secret, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    user.id,
    title.trim(),
    category.trim(),
    difficulty.trim(),
    typeof intro === 'string' ? intro.trim() : '',
    JSON.stringify(ingredients),
    JSON.stringify(steps),
    typeof secret === 'string' ? secret.trim() : '',
    createdAt
  );

  sendJSON(res, 201, {
    recipe: {
      id: result.lastInsertRowid,
      title, category, difficulty, intro, ingredients, steps, secret,
      author: user.username,
      created_at: createdAt,
    },
  });
}

async function handleUpdateRecipe(req, res, id) {
  const user = getUserFromToken(getBearerToken(req));
  if (!user) return sendJSON(res, 401, { error: 'You must be logged in to edit a recipe.' });

  const recipe = db.prepare('SELECT * FROM recipes WHERE id = ?').get(id);
  if (!recipe) return sendJSON(res, 404, { error: 'Recipe not found.' });
  if (recipe.user_id !== user.id) return sendJSON(res, 403, { error: 'You can only edit your own recipes.' });

  const body = await readJSONBody(req);
  const { title, category, difficulty, intro, ingredients, steps, secret } = body;

  const validationError = validateRecipeFields({ title, category, difficulty, ingredients, steps });
  if (validationError) return sendJSON(res, 400, { error: validationError });

  db.prepare(`
    UPDATE recipes SET title = ?, category = ?, difficulty = ?, intro = ?, ingredients = ?, steps = ?, secret = ?
    WHERE id = ?
  `).run(
    title.trim(),
    category.trim(),
    difficulty.trim(),
    typeof intro === 'string' ? intro.trim() : '',
    JSON.stringify(ingredients),
    JSON.stringify(steps),
    typeof secret === 'string' ? secret.trim() : '',
    id
  );

  sendJSON(res, 200, {
    recipe: {
      id, title, category, difficulty, intro, ingredients, steps, secret,
      author: user.username,
      created_at: recipe.created_at,
    },
  });
}

async function handleDeleteRecipe(req, res, id) {
  const user = getUserFromToken(getBearerToken(req));
  if (!user) return sendJSON(res, 401, { error: 'You must be logged in.' });

  const recipe = db.prepare('SELECT * FROM recipes WHERE id = ?').get(id);
  if (!recipe) return sendJSON(res, 404, { error: 'Recipe not found.' });
  if (recipe.user_id !== user.id) return sendJSON(res, 403, { error: 'You can only delete your own recipes.' });

  db.prepare('DELETE FROM recipes WHERE id = ?').run(id);
  sendJSON(res, 200, { ok: true });
}

// ---------- Static file serving ----------

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
};

function serveStatic(req, res) {
  let urlPath = req.url.split('?')[0];
  if (urlPath === '/') urlPath = '/index.html';

  const filePath = path.normalize(path.join(PUBLIC_DIR, urlPath));
  // Prevent path traversal outside the public directory
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('Not found');
    }
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
    res.end(content);
  });
}

// ---------- Router ----------

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === 'OPTIONS') {
      res.writeHead(204, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
      });
      return res.end();
    }

    const urlPath = req.url.split('?')[0];

    if (urlPath === '/api/register' && req.method === 'POST') return await handleRegister(req, res);
    if (urlPath === '/api/login' && req.method === 'POST') return await handleLogin(req, res);
    if (urlPath === '/api/logout' && req.method === 'POST') return await handleLogout(req, res);
    if (urlPath === '/api/me' && req.method === 'GET') return await handleMe(req, res);
    if (urlPath === '/api/me' && req.method === 'PUT') return await handleUpdateProfile(req, res);
    if (urlPath === '/api/me' && req.method === 'DELETE') return await handleDeleteAccount(req, res);
    if (urlPath === '/api/me/password' && req.method === 'POST') return await handleChangePassword(req, res);
    if (urlPath === '/api/me/avatar' && req.method === 'PUT') return await handleUpdateAvatar(req, res);
    if (urlPath === '/api/recipes' && req.method === 'GET') return await handleListRecipes(req, res);
    if (urlPath === '/api/recipes' && req.method === 'POST') return await handleCreateRecipe(req, res);

    const recipeIdMatch = urlPath.match(/^\/api\/recipes\/(\d+)$/);
    if (recipeIdMatch && req.method === 'DELETE') return await handleDeleteRecipe(req, res, Number(recipeIdMatch[1]));
    if (recipeIdMatch && req.method === 'PUT') return await handleUpdateRecipe(req, res, Number(recipeIdMatch[1]));

    if (urlPath.startsWith('/api/')) {
      return sendJSON(res, 404, { error: 'Unknown API route.' });
    }

    return serveStatic(req, res);
  } catch (err) {
    console.error(err);
    sendJSON(res, 500, { error: 'Internal server error.' });
  }
});

server.listen(PORT, () => {
  console.log(`The Journal server running at http://localhost:${PORT}`);
  console.log(`Database file: ${DB_PATH}`);
});
