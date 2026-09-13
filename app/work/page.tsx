import { INSTAGRAM_URL } from '@/lib/site';
import PageTransition from '@/components/PageTransition';
import Reveal from '@/components/Reveal';
import WorkTile, { type WorkItem } from '@/components/WorkTile';
import VideoTile, { type VideoItem } from '@/components/VideoTile';
import ReelsCarousel from '@/components/ReelsCarousel';
import ParallaxItem from '@/components/ParallaxItem';
import MarqueeStrip from '@/components/MarqueeStrip';
import Footer from '@/components/Footer';

const ANIMATION_DESCRIPTION =
  'Illustration given time. Hand-drawn characters, moonlit windows and close-up eyes move frame by frame — each clip and still is built around a single feeling, from coming-soon teasers to quiet cinematic moments.';

const ADS_DESCRIPTION =
  'Identity work and campaign design. From the Evrista mark itself to festival campaigns and branded concept posters — every piece is built around one clear idea and carried across type, colour and composition so it speaks with a single voice.';

const REELS_DESCRIPTION =
  'Short-form edits and photo composites made for the scroll — classical performance footage, editorial portraiture and memory films. Keep scrolling and the sequence travels with you.';

const POSTERS_DESCRIPTION =
  'Hand-redrawn poster recreations and tribute design — films from Bangalore Days to Hi Nanna reimagined with new type, colour and composition, alongside personal work like a First Holy Communion invitation.';

const animationVideos: VideoItem[] = [
  {
    src: '/work/anim-reel-03.mp4',
    alt: 'Sunset couple animated illustration',
    caption: 'Sunset couple — animated illustration, two shadows by the sea',
    instagramUrl: INSTAGRAM_URL,
  },
  {
    src: '/work/anim-reel-04.mp4',
    alt: 'Moonlit window animated illustration',
    caption: 'Moonlit window — animated illustration, bus-stop night scene',
    instagramUrl: INSTAGRAM_URL,
  },
  {
    src: '/work/anim-reel-05.mp4',
    alt: 'Eyes close-up animated illustration',
    caption: 'The eyes, chico — animated illustration close-up',
    instagramUrl: INSTAGRAM_URL,
  },
];

const animationArt: WorkItem[] = [
  {
    src: '/work/anim-naama-teaser.jpg',
    alt: 'Coming-soon teaser with hand-drawn lotus pond illustration',
    caption: 'Coming-soon teaser — hand-drawn lotus pond illustration',
    instagramUrl: INSTAGRAM_URL,
  },
  {
    src: '/work/anim-portrait-amber.jpg',
    alt: 'Amber-toned two-face vector portrait illustration',
    caption: 'Amber portrait — two-face vector illustration, digital art',
    instagramUrl: INSTAGRAM_URL,
  },
  {
    src: '/work/anim-two-shadows.jpg',
    alt: 'Couple walking by the sea at night under stars, illustration',
    caption: 'Two shadows, one unspoken story — night seaside illustration',
    instagramUrl: INSTAGRAM_URL,
  },
  {
    src: '/work/anim-golden-hour.jpg',
    alt: 'Two figures in a boat at golden hour, vector illustration',
    caption: 'Golden hour — sunset boat vector illustration',
    instagramUrl: INSTAGRAM_URL,
  },
  {
    src: '/work/anim-eyes-chico.jpg',
    alt: 'Split-frame close-up of two pairs of eyes, illustration',
    caption: 'The eyes chico, they never lie — split-frame illustration',
    instagramUrl: INSTAGRAM_URL,
  },
];

const adsItems: WorkItem[] = [
  {
    src: '/work/er-logo.png',
    alt: 'Evrista ER logo mark',
    caption: 'Evrista — ER logo mark, brand identity',
    instagramUrl: INSTAGRAM_URL,
  },
  {
    src: '/work/onam-poster.jpg',
    alt: 'Freelynx Onam campaign poster',
    caption: 'Freelynx — Onam festival campaign poster',
    instagramUrl: INSTAGRAM_URL,
  },
  {
    src: '/work/er-branded-poster.jpg',
    alt: 'Malayalam branded concept poster',
    caption: '“അപ്പോ തുടങ്ങിയാലോ?” — Evrista branded concept poster',
    instagramUrl: INSTAGRAM_URL,
  },
];

const reels = [
  {
    kind: 'video' as const,
    src: '/work/dance-reel.mp4',
    alt: 'Classical dance performance reel',
    caption: 'Classical dance performance — edited reel',
    instagramUrl: INSTAGRAM_URL,
  },
  {
    kind: 'image' as const,
    src: '/work/dance-photo-editorial.jpg',
    alt: 'Three-portrait dancer editorial composite',
    caption: 'Dancer editorial — three-portrait composite, digital photo art',
    instagramUrl: INSTAGRAM_URL,
  },
  {
    kind: 'video' as const,
    src: '/work/reel-04.mp4',
    alt: 'Batch of 27–28 film reel',
    caption: 'Batch of ’27–’28 — memory film reel',
    instagramUrl: INSTAGRAM_URL,
  },
];

const posters: WorkItem[] = [
  {
    src: '/work/poster-aravindante.jpg',
    alt: 'Aravindante Athidhikal poster recreation',
    caption: 'Aravindante Athidhikal — dir. M. Mohanan',
    instagramUrl: INSTAGRAM_URL,
  },
  {
    src: '/work/poster-hinanna.jpg',
    alt: 'Hi Nanna poster recreation',
    caption: 'Hi Nanna — dir. Shouryuv',
    instagramUrl: INSTAGRAM_URL,
  },
  {
    src: '/work/poster-bangaloredays.jpg',
    alt: 'Bangalore Days poster recreation',
    caption: 'Bangalore Days — dir. Anjali Menon',
    instagramUrl: INSTAGRAM_URL,
  },
  {
    src: '/work/poster-orukadhal.jpg',
    alt: 'Oru Kadhal Kanmani poster recreation',
    caption: 'Oru Kadhal Kanmani — a film by Mani Ratnam',
    instagramUrl: INSTAGRAM_URL,
  },
  {
    src: '/work/poster-cidmoosa.jpg',
    alt: 'C.I.D Moosa poster recreation',
    caption: 'C.I.D Moosa — dir. Jhony Antony',
    instagramUrl: INSTAGRAM_URL,
  },
  {
    src: '/work/poster-ferrari.jpg',
    alt: 'Ferrari tribute poster',
    caption: 'Ferrari — tribute poster',
    instagramUrl: INSTAGRAM_URL,
  },
  {
    src: '/work/poster-velaiilla.jpg',
    alt: 'Velaiyilla Pattadhaari poster recreation',
    caption: 'Velaiyilla Pattadhaari — dir. R. Velraj',
    instagramUrl: INSTAGRAM_URL,
  },
  {
    src: '/work/communion-invite.jpg',
    alt: 'First Holy Communion invitation design',
    caption: 'First Holy Communion — invitation design',
    instagramUrl: INSTAGRAM_URL,
  },
];

/**
 * Section heading system: pill label, oversized serif title and a
 * prominent, readable description so every section explains itself.
 */
function SectionHeader({
  index,
  title,
  display,
  description,
}: {
  index: string;
  title: string;
  display: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <Reveal>
        <span className="inline-block rounded-full border border-blush/40 px-4 py-2 font-sans text-[10px] uppercase tracking-[0.25em] text-blush">
          {index} / {title}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-6 font-serif text-5xl leading-[1.05] text-paper md:text-7xl">
          {display}
        </h2>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="mt-5 border-l-2 border-blush/50 pl-5 font-sans text-base leading-relaxed text-paper/80 md:text-lg md:leading-relaxed">
          {description}
        </p>
      </Reveal>
    </div>
  );
}

/** Oversized ghost word bleeding behind the Animation showcase (decorative). */
function GhostWord({ word, className = '' }: { word: string; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute z-0 select-none font-serif text-[22vw] leading-none text-paper/[0.04] ${className}`}
    >
      {word}
    </span>
  );
}

export default function Work() {
  return (
    <PageTransition>
      {/* ============ HEADER ============ */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-32 md:px-10 md:pt-40">
        <Reveal>
          <p className="label mb-6">SELECTED WORK — 2024–2026</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-serif text-[16vw] leading-[0.95] text-paper md:text-8xl">
            Work
          </h1>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-paper/80 md:text-lg">
            Motion, identity, editorial and poster work by Evrista — a studio built on
            turning ideas and emotions into visuals people can feel.
          </p>
        </Reveal>
      </section>

      {/* ============ 01 ANIMATION ============ */}
      <section className="relative mx-auto max-w-7xl px-6 pb-32 md:px-10">
        <SectionHeader
          index="01"
          title="ANIMATION"
          display="Animation"
          description={ANIMATION_DESCRIPTION}
        />

        <MarqueeStrip />

        <div className="relative">
          <GhostWord
            word="MOTION"
            className="right-0 top-40 hidden lg:block"
          />

          {/* Feature row: first clip cinematic-wide, second smaller and pushed down */}
          <div className="relative z-10 mt-14 grid gap-6 lg:grid-cols-12">
            <ParallaxItem className="lg:col-span-7" amplitude={18}>
              <VideoTile item={animationVideos[0]} aspect="aspect-[4/3]" />
            </ParallaxItem>
            <ParallaxItem className="lg:col-span-4 lg:col-start-9 lg:mt-40" amplitude={36}>
              <VideoTile item={animationVideos[1]} aspect="aspect-[4/5]" />
            </ParallaxItem>
          </div>

          {/* Interlude: third clip + first stills, overlapping the ghost word */}
          <div className="relative z-10 mt-24 grid gap-6 lg:grid-cols-12">
            <ParallaxItem className="lg:col-span-4 lg:col-start-2" amplitude={30}>
              <VideoTile item={animationVideos[2]} aspect="aspect-[4/5]" />
            </ParallaxItem>
            <ParallaxItem className="lg:col-span-4 lg:col-start-7 lg:mt-16" amplitude={42}>
              <WorkTile item={animationArt[0]} aspect="aspect-[4/5]" />
            </ParallaxItem>
            <ParallaxItem className="lg:col-span-3 lg:col-start-11" amplitude={26}>
              <WorkTile item={animationArt[1]} aspect="aspect-[4/5]" />
            </ParallaxItem>
          </div>

          {/* Remaining stills: offset staircase rhythm instead of a flat row */}
          <div className="relative z-10 mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-12">
            <ParallaxItem className="lg:col-span-4" amplitude={22}>
              <WorkTile item={animationArt[2]} aspect="aspect-[4/5]" />
            </ParallaxItem>
            <ParallaxItem className="lg:col-span-4 lg:mt-20" amplitude={34}>
              <WorkTile item={animationArt[3]} aspect="aspect-[4/5]" />
            </ParallaxItem>
            <ParallaxItem className="lg:col-span-4 lg:mt-40" amplitude={44}>
              <WorkTile item={animationArt[4]} aspect="aspect-[4/5]" />
            </ParallaxItem>
          </div>

          {/* Decorative corner metadata */}
          <span className="label absolute left-0 top-24 hidden lg:block">
            SEQ. 01 — FRAMES IN MOTION
          </span>
          <span className="label absolute bottom-0 right-0 hidden lg:block">
            RENDER: LOOP ∞
          </span>
        </div>
      </section>

      {/* ============ 02 ADS & LOGO ============ */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <SectionHeader
          index="02"
          title="ADS &amp; LOGO"
          display="Ads & Logo"
          description={ADS_DESCRIPTION}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {adsItems.map((item, i) => (
            <Reveal key={item.src} delay={i * 0.08}>
              <WorkTile item={item} aspect="aspect-[4/5]" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ 03 REELS ============ */}
      <section className="border-t hairline">
        <div className="mx-auto max-w-7xl px-6 pt-24 md:px-10">
          <SectionHeader
            index="03"
            title="REELS"
            display="Reels"
            description={REELS_DESCRIPTION}
          />
        </div>
        <ReelsCarousel reels={reels} />
      </section>

      {/* ============ 04 POSTERS ============ */}
      <section className="border-t hairline">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <SectionHeader
            index="04"
            title="POSTERS"
            display="Posters"
            description={POSTERS_DESCRIPTION}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {posters.map((item, i) => (
              <Reveal key={item.src} delay={(i % 4) * 0.08}>
                <WorkTile item={item} aspect="aspect-[3/4]" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
}
