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
  return db.prepare('SELECT id, username, email, created_at FROM users WHERE id = ?').get(session.user_id);
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
    const MAX_SIZE = 1024 * 1024; // 1MB cap
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
    user: { id: result.lastInsertRowid, username, email, created_at: createdAt },
  });
}

async function handleLogin(req, res) {
  const body = await readJSONBody(req);
  const { username, password } = body;

  if (typeof username !== 'string' || typeof password !== 'string') {
    return sendJSON(res, 400, { error: 'Username and password are required.' });
  }

  const user = db.prepare('SELECT * FROM users WHERE username = ? OR email = ?').get(username, username);
  if (!user || !verifyPassword(password, user.salt, user.password_hash)) {
    return sendJSON(res, 401, { error: 'Incorrect username or password.' });
  }

  const token = createSession(user.id);
  sendJSON(res, 200, {
    token,
    user: { id: user.id, username: user.username, email: user.email, created_at: user.created_at },
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
  sendJSON(res, 200, { user: { id: user.id, username, email, created_at: user.created_at } });
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
  sendJSON(res, 200, { ok: true });
}

async function handleListRecipes(req, res) {
  const rows = db.prepare(`
    SELECT recipes.*, users.username AS author
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
    created_at: r.created_at,
  }));

  sendJSON(res, 200, { recipes });
}

async function handleCreateRecipe(req, res) {
  const user = getUserFromToken(getBearerToken(req));
  if (!user) {
    return sendJSON(res, 401, { error: 'You must be logged in to share a recipe.' });
  }

  const body = await readJSONBody(req);
  const { title, category, difficulty, intro, ingredients, steps, secret } = body;

  if (typeof title !== 'string' || !title.trim()) {
    return sendJSON(res, 400, { error: 'A recipe title is required.' });
  }
  if (typeof category !== 'string' || !category.trim()) {
    return sendJSON(res, 400, { error: 'A category is required.' });
  }
  if (typeof difficulty !== 'string' || !difficulty.trim()) {
    return sendJSON(res, 400, { error: 'A difficulty is required.' });
  }
  if (!Array.isArray(ingredients) || ingredients.length === 0 || !ingredients.every((i) => typeof i === 'string')) {
    return sendJSON(res, 400, { error: 'At least one ingredient is required.' });
  }
  if (!Array.isArray(steps) || steps.length === 0 || !steps.every((s) => typeof s === 'string')) {
    return sendJSON(res, 400, { error: 'At least one step is required.' });
  }

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
    if (urlPath === '/api/me/password' && req.method === 'POST') return await handleChangePassword(req, res);
    if (urlPath === '/api/recipes' && req.method === 'GET') return await handleListRecipes(req, res);
    if (urlPath === '/api/recipes' && req.method === 'POST') return await handleCreateRecipe(req, res);

    const deleteMatch = urlPath.match(/^\/api\/recipes\/(\d+)$/);
    if (deleteMatch && req.method === 'DELETE') return await handleDeleteRecipe(req, res, Number(deleteMatch[1]));

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
