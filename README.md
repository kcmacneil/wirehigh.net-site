# wirehigh.net-site

Static site for wirehigh.net — an overview of power and communications infrastructure, with a page per
discipline. Hosted on Vercel (project `wirehigh.net-site`).

## Files

- `index.html` — front page (hero, disciplines, reference table)
- `services/*.html` — one page per discipline
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
