# Evrista — Portfolio

Dark, editorial single-page-feel portfolio for **Evrista**, the creative media venture of **Rosangela Shaijan**.

Built with Next.js (App Router) + TypeScript, Tailwind CSS, Framer Motion and GSAP — exported fully static for GitHub Pages.

## Live

https://MathewJoseph2005.github.io/ohsu-portfolio/

## Develop

```bash
npm install
npm run dev
```

## Deploy

Push to `main`. The included GitHub Actions workflow (`.github/workflows/deploy.yml`) builds the static site and publishes it.

> First time only: enable Pages in the repo under **Settings → Pages → Source: GitHub Actions**.

## Structure

- `app/page.tsx` — Home (hero crossfade, brand manifesto, founder bio, Instagram CTA)
- `app/work/page.tsx` — Work (Animation, Ads & Logo, Reels, Posters)
- `lib/site.ts` — all site data (copy, captions, asset manifest) in one place
- `public/work/` — portfolio assets
