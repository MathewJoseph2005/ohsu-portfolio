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

**GitHub Pages (automatic):** push to `main`. The workflow (`.github/workflows/deploy.yml`) builds with `DEPLOY_TARGET=gh-pages` so all URLs carry the `/ohsu-portfolio` base path, then publishes. First time only: enable **Settings → Pages → Source: GitHub Actions**.

**Vercel:** import the repo at vercel.com/new — framework auto-detects Next.js, no env vars needed. Without `DEPLOY_TARGET`, the build emits root-relative URLs. `vercel.json` adds clean-URL caching for media and static chunks.

## Checks before pushing

```bash
npm run typecheck   # tsc --noEmit
npm run build       # must stay green, all routes ○ static
```

## Structure

- `app/page.tsx` — Home (hero crossfade, brand manifesto, founder bio, Instagram CTA)
- `app/work/page.tsx` — Work (Animation, Ads & Logo, Reels, Posters)
- `lib/site.ts` — site constants (brand copy, Instagram URL, `withBase()`)
- `PROJECT_OVERVIEW.md` — full architecture doc (give this to AI assistants as context)
- `vercel.json` — Vercel deploy config (caching, trailing slash)
- `public/work/` — portfolio assets
