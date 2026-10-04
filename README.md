# Dr. Cheng Fu — personal academic website

Astro static site. Bilingual: English at `/`, Chinese at `/zh/`.

## Develop

    npm install
    npm run dev        # http://localhost:4321
    npm run build      # output in dist/
    npm run preview
    npm run check      # astro check

## Deploy

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds and publishes
`dist/` to GitHub Pages (Settings → Pages → Source: GitHub Actions).

## Content

See `docs/superpowers/specs/` for the design spec and `docs/superpowers/plans/` for plans.
