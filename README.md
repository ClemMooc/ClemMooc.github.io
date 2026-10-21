# Clem Mooc — portfolio

Portfolio of Clem Mooc, a research program manager in Seattle.
**Live site: [clemmooc.github.io](https://clemmooc.github.io)**

Case studies: Cisco Webex (Heads Up), GymMate, Lunar Crafts & Designs, Caravel Autism Health,
Frank Ocean: By the Numbers, and Our Stories Are Your Stories.

## How it's built
- [Astro](https://astro.build) static site, with case studies written in MDX
- Hosted on GitHub Pages; every push to `main` deploys via GitHub Actions
- Original images stored in Cloudflare R2, resized to WebP at build time
- Google Analytics 4, with named click events for key actions
- Checked against WCAG 2.2 AA with axe

## Running locally
Requires Node.js 22+.

```bash
npm install
npm run dev        # preview at http://localhost:4321
npm run build      # production build into dist/
```

## Images
Images are referenced by their R2 key (e.g. `caravel/hero.png`).

```bash
npm run media:upload     # upload new files from media/ to R2 (needs `npx wrangler login`)
npm run check:media      # confirm every referenced image exists in R2
npm run capture:gymmate  # capture GymMate screenshots from the public demo
```

## Where things are
- `src/content/work/` — one MDX file per case study (filename = URL)
- `src/pages/` — home, About, 404, and the case study template
- `src/data/experience.ts` — experience and education
- `src/site.config.ts` — name, links, email, analytics, image host
- `src/components/` — building blocks used in case studies
- `src/styles/global.css` — colors, fonts, spacing
