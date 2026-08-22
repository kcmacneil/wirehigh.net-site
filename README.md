# wirehigh.net-site

Static site for wirehigh.net, deployed on Vercel (project `wirehigh.net-site`).

## Structure

- `public/` — static assets served at the site root (`index.html`, `styles.css`, `main.js`)
- `vercel.json` — Vercel configuration (clean URLs, no trailing slash)

## Local preview

```bash
python3 -m http.server 8000 --directory public
# open http://localhost:8000
```

## Deploy

Pushes to `main` deploy to production via the Vercel Git integration; other branches get preview deployments.
