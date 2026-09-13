# Evrista — Portfolio Website

> **Hand this file to an AI coding assistant (Copilot, Cursor, etc.) as project context.**
> It describes everything: architecture, conventions, data flow, deployment, and known state.

Dark, editorial, Awwwards-style portfolio for **Evrista**, the creative media venture of
**Rosangela Shaijan**. Two pages (Home + Work) that read as one continuous system.
Fully static — deploys to GitHub Pages with zero server code.

- **Live (GitHub Pages):** https://MathewJoseph2005.github.io/ohsu-portfolio/
- **Repo:** https://github.com/MathewJoseph2005/ohsu-portfolio
- **Local folder:** `evrista-site/` (this folder is the repo root)
- **Stack:** Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion + GSAP, static export

---

## 1. Golden rules (don't break these)

1. **Fully static.** `output: 'export'` in `next.config.js`. No API routes, no server
   actions, no middleware, no ISR. Everything must build to plain HTML/CSS/JS in `out/`.
2. **Base path.** Production builds run under `/ohsu-portfolio` on GitHub Pages.
   `next.config.js` applies `basePath`/`assetPrefix` only when `DEPLOY_TARGET=gh-pages`
   is set — the GitHub Actions workflow sets exactly that; Vercel builds without it and
   gets root-relative URLs.
   - Never hardcode `/ohsu-portfolio` in source.
   - Use `next/link` for internal navigation; never hardcode `/ohsu-portfolio` in source.
3. **Raw asset URLs** (img/video src) go through `withBase('/work/...')` from
   `lib/site.ts` (reads `NEXT_PUBLIC_BASE_PATH`). `next/image` already respects basePath.
4. **No nested `<a>`.** `components/InstagramIcon.tsx` is a pure SVG on purpose —
   consumers wrap it in their own anchor. Nesting `<a>` inside `<a>` causes a
   React hydration error (this was a real bug; keep it fixed).
5. **Client-only interactivity.** Anything using hooks/Framer Motion/GSAP is a
   `'use client'` component in `components/`. Pages themselves are server components.
6. **Reduced motion.** Motion components / scroll effects must respect
   `prefers-reduced-motion` (see `Reveal.tsx`, `ReelsCarousel.tsx`).
7. **Videos are lazy.** All `<video>` elements render through `components/LazyVideo.tsx`
   (IntersectionObserver, `preload="none"`, plays only in view, pauses out of view).
   Do not use raw autoplay `<video>` tags — 7 videos loading at once was a real
   performance bug that was fixed this way.

---

## 2. Design system

| Token | Value |
| --- | --- |
| Background `ink` | `#0A0A0A` |
| Text `paper` | `#F2F0EC` |
| Accent `blush` | `#E8B8A0` (dusty rose — matches the ER logo mark) |
| Display serif | Playfair Display — wordmark, big titles |
| Grotesk | Inter — nav, labels, metadata, body copy (uppercase, letter-spaced) |

- `.label` utility (globals.css): tiny uppercase letter-spaced metadata text.
- `hairline` utility: 1px `rgba(242,240,236,0.12)` borders.
- Recurring motifs: oversized serif word bleeding behind the hero, corner metadata
  ("SYSTEM: ACTIVE — REF. ER-2026"), film-grain overlay (~8% opacity) on media,
  generous negative space, no rounded corners except pill tags.
- Global `Grain` component (fixed, pointer-events-none) sits above everything.

---

## 3. Project structure

```
evrista-site/
├── app/
│   ├── layout.tsx          # Root layout: fonts, metadata, <Grain/>, <Nav/>
│   ├── globals.css         # Tailwind layers + label/hairline utilities
│   ├── page.tsx            # HOME: hero crossfade, manifesto, bio, IG pill, scroll cue
│   └── work/
│       └── page.tsx        # WORK: all content data lives here (arrays at top of file)
├── components/
│   ├── Nav.tsx             # Fixed nav: ER wordmark, HOME/WORK links, IG icon (client)
│   ├── Footer.tsx          # "Designed & built by Rosangela Shaijan", IG, ©, rights
│   ├── InstagramIcon.tsx   # PURE SVG — no <a> (see golden rule 4)
│   ├── PageTransition.tsx  # Fade/wipe wrapper around each page (client)
│   ├── Reveal.tsx          # Scroll-triggered fade+translateY (client, reduced-motion aware)
│   ├── HeroCrossfade.tsx   # ER logo ↔ founder portrait crossfade loop (client)
│   ├── WorkTile.tsx        # Image tile: hover scale + grain + caption slide-up
│   ├── VideoTile.tsx       # Video version of WorkTile (LazyVideo inside)
│   ├── LazyVideo.tsx       # IntersectionObserver-gated <video> (performance)
│   ├── ReelsCarousel.tsx   # Pinned scroll-driven horizontal reel strip (client)
│   ├── GrainOverlay.tsx    # Per-tile grain layer (fades in on hover)
│   └── Grain.tsx           # Page-wide fixed grain
├── lib/
│   └── site.ts             # SITE constants: brand copy, INSTAGRAM_URL, withBase()
├── public/
│   ├── .nojekyll           # Required for GitHub Pages + Next.js _next/ assets
│   ├── icon.png            # Favicon
│   ├── founder.jpg         # Rosangela portrait (hero crossfade + bio block)
│   └── work/               # All portfolio media (see asset map below)
├── .github/workflows/deploy.yml  # GH Pages deploy (build → upload-pages-artifact → deploy-pages)
├── next.config.js          # Static export + conditional basePath
├── tailwind.config.ts      # ink/paper/blush palette, fonts, ease-out-expo
└── PROJECT_OVERVIEW.md     # This file
```

### Data flow convention
All Work-page content is plain arrays (`animationVideos`, `animationArt`, `adsItems`,
`reels`, `posters`) declared at the top of `app/work/page.tsx`, typed by
`WorkItem` / `VideoItem`. Every item carries an `instagramUrl` prop (currently always
`INSTAGRAM_URL` from `lib/site.ts`) so per-post deep links can be swapped in later with
a one-line change per tile.

---

## 4. Pages

### HOME (`app/page.tsx`)
1. **Hero** — framed crossfade: `er-logo.png` ↔ `founder.jpg` (Framer Motion, ~1.2s
   ease, loop + hover), oversized serif "EVRISTA" bleeding behind.
2. **Manifesto** — brand description copy (from `lib/site.ts`), large serif.
3. **Founder bio** — "ROSANGELA SHAIJAN" label + first-person copy + grayscale
   portrait, visually separated from the manifesto.
4. **Instagram pill** CTA and a scroll-cue arrow linking to `/work/`.

### WORK (`app/work/page.tsx`) — four labeled sections
Each section: pill label (`01 / ANIMATION`), large serif title, and a prominent
blush-ruled description paragraph (users must be able to *read* these — keep them
visible, not hover-only).

1. **01 / ANIMATION** — 3 animated illustration videos (`anim-reel-03/04/05.mp4`) +
   5 illustration stills (`anim-*.jpg`). The animated-illustration clips belong HERE,
   not in Reels.
2. **02 / ADS & LOGO** — ER logo, Freelynx Onam poster, "അപ്പോ തുടങ്ങിയാലോ?" branded poster.
3. **03 / REELS** — natural-flow showcase (no scroll-jacking — the pinned
   scroll-driven carousel was removed deliberately because the set is only 3 items):
   staggered 3-across grid on desktop, snap-swipe strip on mobile. Exactly 3 items:
   `dance-reel.mp4` (classical dance), `dance-photo-editorial.jpg` (three-portrait
   composite), `reel-04.mp4` ("Batch of '27–'28" memory film).
4. **04 / POSTERS** — 8-tile grid: 7 film-poster recreations (Aravindante Athidhikal,
   Hi Nanna, Bangalore Days, Oru Kadhal Kanmani, C.I.D Moosa, Ferrari tribute,
   Velaiyilla Pattadhaari) + communion invite.

**Section membership is a settled decision** — the user moved these items around
explicitly multiple times. Do not move media between sections without being asked:
- Dance reel → REELS (not Animation).
- Animated illustrations (sunset couple, moonlit window, eyes close-up) → ANIMATION.
- "Batch of '27–'28" clip → REELS.

---

## 5. Asset map (`public/work/`)

| File | Content |
| --- | --- |
| `er-logo.png` | Evrista ER logo mark |
| `onam-poster.jpg` | Freelynx Onam campaign poster |
| `er-branded-poster.jpg` | "അപ്പോ തുടങ്ങിയാലോ?" branded concept poster |
| `dance-reel.mp4` | Classical dance performance reel (REELS) |
| `dance-photo-editorial.jpg` | Three-portrait dancer editorial composite (REELS) |
| `reel-04.mp4` | "Batch of '27–'28" memory film (REELS) |
| `anim-reel-03.mp4` | Sunset couple animated illustration (ANIMATION) |
| `anim-reel-04.mp4` | Moonlit window / bus-stop night scene (ANIMATION) |
| `anim-reel-05.mp4` | "The eyes, chico" close-up animation (ANIMATION) |
| `anim-naama-teaser.jpg` | നാളം coming-soon teaser, lotus pond illustration |
| `anim-portrait-amber.jpg` | Amber two-face vector portrait |
| `anim-two-shadows.jpg` | Night seaside couple illustration |
| `anim-golden-hour.jpg` | Golden-hour boat vector illustration |
| `anim-eyes-chico.jpg` | Split-frame eyes illustration |
| `poster-*.jpg` (7 files) | Film poster recreations (see section 4) |
| `communion-invite.jpg` | First Holy Communion invitation design |

Source assets (originals, WhatsApp filenames) live in `../evrista-assets/` — copy from
there with clean names if re-importing. Images are already web-sized (76–323 KB).

---

## 6. Deployment

### GitHub Pages (primary — automatic)
- Push to `main` → `.github/workflows/deploy.yml` builds and publishes.
- Workflow sets `NEXT_PUBLIC_BASE_TARGET: github` so URLs carry the `/ohsu-portfolio` prefix.
- Repo Pages settings: **Source = GitHub Actions** (already configured via API).
- Site: https://MathewJoseph2005.github.io/ohsu-portfolio/

### Vercel (secondary)
- Import the repo at vercel.com/new — Next.js auto-detects, no env vars required.
- Without `DEPLOY_TARGET`, builds emit root-relative URLs (no `/ohsu-portfolio`).
- `vercel.json` sets `trailingSlash: true` (matches the exported directory structure
  `/work/` links) plus long-cache for `/_next/static/*` and daily-refresh cache for
  media in `/work/*`.
- Do not add `cleanUrls` — the export already contains `index.html` files inside
  folders; stripping `.html` is a rewrite, not needed.

---

## 7. Known history / gotchas

- **Hydration error (fixed):** `<a>` nested inside `<a>` — caused by
  `InstagramIcon` rendering its own anchor while Footer/Home/Nav wrapped it in
  another. Icon is now pure SVG; keep it that way.
- **Video load times (fixed):** all videos now lazy-load via `LazyVideo.tsx`
  (`preload="none"`, in-view play, out-of-view pause). Keep new videos on this path.
- **npm on this machine is slow** — global installs (e.g. Vercel CLI) can time out;
  project-level `npm install` works but may need a long timeout window.
- **Git line endings:** Windows checkout warns about LF→CRLF; harmless.
- Build check before pushing: `npm run build` — must stay green with all pages
  prerendering as static (○ symbols in the route table).

---

## 8. Prompt recipes for Copilot-style edits

- *"Add a new poster to section 04"* → append a `WorkItem` to `posters` in
  `app/work/page.tsx`, drop the file in `public/work/`, keep the caption format
  (`Title — dir. Director`).
- *"Swap a tile's link to a specific Instagram post"* → change that item's
  `instagramUrl` value (one line).
- *"Add a new video to Animation"* → add a `VideoItem` to `animationVideos`
  (uses LazyVideo automatically).
- *"Change brand copy"* → edit `lib/site.ts` (single source of truth for
  manifesto/bio/constants).
