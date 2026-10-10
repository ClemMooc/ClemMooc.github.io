# clemmooc.com

Clem Mooc's product design portfolio. Built with [Astro](https://astro.build) and MDX,
hosted on GitHub Pages, with images stored on Cloudflare R2.

## Running locally
Requires Node.js 22+.

```bash
npm install
npm run dev        # preview at http://localhost:4321
npm run build      # production build into dist/
```

## Images
Images live in the Cloudflare R2 bucket and are referenced by key (e.g. `caravel/hero.png`).
Astro downloads and resizes them at build time.

```bash
npm run media:upload   # upload new files from media/ to R2 (needs `npx wrangler login`)
npm run check:media    # confirm every referenced image exists in R2
```

## Where things are
- `src/content/work/` — one MDX file per case study (filename = URL)
- `src/pages/about.astro` — About page
- `src/site.config.ts` — name, links, email, analytics, image host
- `src/components/` — building blocks used in case studies
- `src/styles/global.css` — colours, fonts, spacing

## Deploying
Every push to `main` builds and publishes the site via GitHub Actions (`.github/workflows/deploy.yml`).
