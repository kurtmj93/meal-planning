# Quick & Cheap Meal Plans

A single-source-of-truth Astro site for 13 budget-friendly meal plans. Each plan uses overlapping ingredients across 3–4 recipes, serving 2 (one meal now, one leftover later).

## Features

- **13 meal plans** with full recipes, shopping lists, price estimates, and scaling info
- **Single data source** (`src/data/plans.ts`) — no more drift between hub and plan pages
- **Interactive shopping checklists** — click to strike through items
- **Print-friendly** — CSS handles print styles automatically
- **Theme-colored** — each plan has its own color for the back-to-hub button and accents
- **Responsive** — works on mobile and desktop

## Structure

```
meal-plan-astro/
├── src/
│   ├── data/plans.ts          ← Single source of truth for all plan data
│   ├── types/plans.ts         ← TypeScript interfaces
│   ├── layouts/Base.astro     ← Shared HTML shell
│   ├── styles/global.css      ← All shared styles
│   ├── pages/
│   │   ├── index.astro        ← Hub page
│   │   └── plans/[slug].astro ← Plan detail page (13 pages generated)
├── public/
│   ├── favicon.svg
│   └── favicon.ico
├── astro.config.mjs
└── package.json
```

## Development

```bash
npm install
npm run dev      # Start dev server at http://localhost:4321
npm run build    # Build to dist/
npm run preview  # Preview production build
```

## Deployment

### GitHub Pages

1. Push this repo to GitHub
2. Go to Settings → Pages → Source: Deploy from a branch
3. Select `main` branch and `/ (root)`
4. The site will be available at `https://<username>.github.io/<repo>/`

### Netlify / Vercel

Connect the repo and deploy. Astro generates static HTML that works on any static host.

## Data

All plan data lives in `src/data/plans.ts`. Each plan has:
- Shopping list (produce, protein, pantry, dairy)
- Price items with low/high estimates
- 3–4 recipes with ingredients, leftovers, instructions, and calorie estimates
- Ingredient usage tracker
- Scaling info with cost per meal
