# wirehigh.net-site

Static site for wirehigh.net — data center infrastructure cabling and cable management technique, with a
page per topic. Hosted on Vercel (project `wirehigh.net-site`).

## Files

- `index.html` — front page (hero, topics, media reference table)
- `topics/*.html` — one page per topic
- `assets/hero.jpg` — hero image
- `styles.css` — styling
- `vercel.json` — Vercel config (clean URLs)

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Pushes to `main` deploy via the Vercel Git integration, or from the CLI:

```bash
npx vercel        # preview deployment
npx vercel --prod # production deployment
```
