# The Culinary Journal

Your original recipe/travel-log site, plus a real backend: users can create an
account, log in, and share recipes that everyone visiting the site can see in
a new **Community** tab. Sharing a recipe requires being logged in — if you
click "Share a Recipe" while logged out, the site tells you to log in first
and opens the login form.

## What's new

- **Community tab** — a public feed of recipes shared by users, separate from
  your curated Master Recipes and Travel Log.
- **Real accounts** — sign up / log in with a username, email, and password.
  Passwords are salted and hashed (`scrypt`), never stored in plain text.
- **A real shared database** — every visitor sees the same set of community
  recipes. It's a SQLite file (`data.db`) on the server, not per-browser
  storage.
- **Login-gated sharing** — the "Share a Recipe" button checks your login
  status. Logged out → toast message + login modal. Logged in → the recipe
  form, and your new recipe is immediately visible to everyone.
- Recipe authors can delete their own shared recipes (others can't).

Your existing 71 master recipes and travel log entries are untouched — they
still live as static data in `scripts.js`, exactly as before.

## Architecture

- **`server.js`** — a single Node.js file with zero external dependencies. It
  uses only built-in modules: `http` for the server, `node:sqlite` for the
  database, and `crypto` for password hashing and session tokens. It also
  serves the frontend files in `public/`.
- **`public/index.html` / `public/scripts.js`** — your original frontend,
  extended with the Community tab, login/signup modal, and share-recipe form.
- **`data.db`** — created automatically on first run. This is the real,
  shared database. Delete it to reset all accounts and shared recipes.

No framework, no build step, no `npm install` needed to run it locally.

## Running it locally

Requires **Node.js 22.5 or newer** (for the built-in `node:sqlite` module —
run `node --version` to check; upgrade at nodejs.org if needed).

```bash
node server.js
```

Then open **http://localhost:3000** in your browser. That's it — the server
serves both the site and the API from the same address.

To use a different port:

```bash
PORT=8080 node server.js
```

## API reference

All endpoints are under `/api`, and return JSON.

| Method | Route | Auth required | Purpose |
|---|---|---|---|
| POST | `/api/register` | No | Create an account `{username, email, password}` → `{token, user}` |
| POST | `/api/login` | No | Log in `{username, password}` → `{token, user}` |
| POST | `/api/logout` | Yes | Invalidate the current session |
| GET | `/api/me` | Yes | Get the logged-in user |
| GET | `/api/recipes` | No | List all community recipes |
| POST | `/api/recipes` | Yes | Share a new recipe |
| DELETE | `/api/recipes/:id` | Yes (owner only) | Delete your own recipe |

Authenticated requests send `Authorization: Bearer <token>`.

## Deploying so "everyone" can actually see it

Right now this only runs on your machine. To make the Community tab truly
shared across visitors on the internet, you need to deploy the server
somewhere it stays running, for example:

1. **Railway, Render, or Fly.io** — point them at this folder, run
   `node server.js` as the start command, and they'll give you a public URL.
   Set a `DB_PATH` on a persistent volume/disk if the platform offers one
   (some free tiers reset the filesystem on redeploy, which would wipe
   `data.db`).
2. **A VPS you control** (e.g. a small droplet) — copy the folder over, run
   `node server.js` under a process manager like `pm2` or a `systemd`
   service so it restarts automatically, and put it behind a reverse proxy
   (nginx/Caddy) for HTTPS.

You don't need to change any code to deploy — the server already serves the
frontend and API from the same origin, and reads `PORT` from the environment.

## A note on security for production use

This is a solid, real implementation (hashed + salted passwords, random
session tokens, ownership checks, input validation, HTML-escaping of
user content to prevent stored XSS). Before putting real user data on the
public internet, you'd also want to:

- Serve over HTTPS (a reverse proxy or your hosting platform typically
  handles this).
- Add rate limiting on `/api/login` and `/api/register` to slow down
  brute-force attempts.
- Back up `data.db` periodically.
