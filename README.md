# First Grade Mineral Suppliers

Marketing website + integrated finance dashboard for First Grade Mineral Suppliers — a mineral trading company operating in Zambia and Tanzania (Est. 2023).

Built with Vite + React. Deploys to any static host: GitHub Pages, Netlify, Vercel, Cloudflare Pages, CodeSandbox, or plain Nginx.

## Features

- Marketing site: hero, minerals, about, branches, gallery, process, why-us, contact form, footer
- Finance Dashboard: multi-project tracking (Tanzania, Zambia, Dubai, China) with startup capital, income/expense entries, charts, trends, and CSV export
- Light / Dark mode toggle (persists across sessions)
- Multi-currency (USD, CNY, ZMW, TZS) with live conversion across all metrics
- Responsive — works down to 320px wide
- Real logo + photos embedded as base64 (no external image requests)
- Persistent storage via browser localStorage

## Deploy to GitHub Pages (recommended)

There are two ways. Pick one.

### Method 1 — Automatic via GitHub Actions (easiest)

This repo includes `.github/workflows/deploy.yml`. It builds and deploys automatically on every push to `main`.

1. Create a new repo on GitHub and push this folder:

   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. On GitHub, go to your repo → **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. Push any commit to `main`, or go to the **Actions** tab and re-run the workflow manually.
5. After the workflow completes (about 60–90 seconds), your site is live at:

   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO/
   ```

### Method 2 — Manual build + push dist

If you don't want to use Actions:

```bash
npm install
npm run build
# The built site is in ./dist
```

Then either:

- Copy the contents of `dist/` into a separate `gh-pages` branch and push that branch, or
- Use the `gh-pages` npm package:
  ```bash
  npm install --save-dev gh-pages
  npx gh-pages -d dist
  ```

Then in **Settings → Pages**, set **Source** to the `gh-pages` branch.

### Important: the `base` path

`vite.config.js` has `base: "./"` set, which makes asset paths relative. This means the site works whether GitHub Pages serves it from `username.github.io/` (user site) or `username.github.io/repo-name/` (project site). You do not need to set `base` per-repo.

## Deploy to Netlify / Vercel / Cloudflare Pages

These all auto-detect Vite. Just connect your GitHub repo and they'll run `npm run build` and serve `dist/` for you. No config needed.

## CodeSandbox

codesandbox.io → Create Sandbox → Import Project → Upload this folder or zip.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build       # outputs to dist/
npm run preview     # serves dist/ locally for testing
```

The `dist/` folder is a fully static site — drop it on any web server.

## Project structure

```
.
├── .github/workflows/deploy.yml   # Auto-deploy to GitHub Pages on push
├── index.html                     # HTML entry
├── package.json                   # Dependencies
├── vite.config.js                 # Vite config (base: "./")
├── public/                        # Static assets
└── src/
    ├── main.jsx                   # React entry
    └── App.jsx                    # Entire app (marketing site + dashboard)
```

## Dependencies

- **react** + **react-dom** — UI framework
- **recharts** — charts (pie, bar, line, area)
- **lucide-react** — icons
- **vite** + **@vitejs/plugin-react** — dev server + bundler

## Tech notes

- Single-file React app (`App.jsx`) with no routing library — uses conditional rendering to swap between marketing site and dashboard
- Currency conversion: all amounts stored internally as USD, converted on display
- Logo and photos are embedded as base64 data URIs inside `App.jsx` (no external asset dependencies)
- Fonts loaded from Google Fonts (Barlow + Barlow Condensed)
- Data persists via `localStorage` under keys `fg-site-settings-v1` and `fg-finance-dash-v4`
