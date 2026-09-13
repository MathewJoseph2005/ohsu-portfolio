import { INSTAGRAM_URL } from '@/lib/site';
import PageTransition from '@/components/PageTransition';
import Reveal from '@/components/Reveal';
import MaskedText from '@/components/MaskedText';
import AnimatedStat from '@/components/AnimatedStat';
import WorkTile, { type WorkItem } from '@/components/WorkTile';
import VideoTile, { type VideoItem } from '@/components/VideoTile';
import ReelsCarousel from '@/components/ReelsCarousel';
import ParallaxItem from '@/components/ParallaxItem';
import MarqueeStrip from '@/components/MarqueeStrip';
import MoviePosterCard from '@/components/MoviePosterCard';
import Footer from '@/components/Footer';

const HERO_LINE =
  'Every piece below began as a feeling — a song, a scene, a festival, a face — and became something you can look at. Four rooms, one studio.';

const ANIMATION_DESCRIPTION =
  'Illustration given time. Hand-drawn characters, moonlit windows and close-up eyes move frame by frame — each clip and still is built around a single feeling, from coming-soon teasers to quiet cinematic moments. Watch long enough and the stills start to blink.';

const ADS_DESCRIPTION =
  'Identity work and campaign design. From the Evrista mark itself to festival campaigns and branded concept posters — every piece is built around one clear idea and carried across type, colour and composition so it speaks with a single voice.';

const REELS_DESCRIPTION =
  'Short-form edits and photo composites made for the scroll — classical performance footage, editorial portraiture and memory films. This is work designed to be held on a phone: vertical frames, cut to music, paced for the thumb. Keep scrolling and the sequence travels with you.';

const POSTERS_DESCRIPTION =
  'Hand-redrawn poster studies — films from Bangalore Days to Hi Nanna reimagined with new type, colour and composition. Each one is rebuilt from scratch in Photoshop and Illustrator: the anatomy of a poster reduced to what makes it work, then remade in the Evrista voice. Alongside them, personal commission work like a First Holy Communion invitation.';

const FOOTER_NOTE =
  'Every frame here started as an experiment. Some of them became commissions; all of them became lessons. If something on this page made you stop for a second, the next one is already being drawn.';

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
    caption: 'Classical dance — edited performance reel',
    sub: 'PERFORMANCE / EDIT',
    instagramUrl: INSTAGRAM_URL,
  },
  {
    kind: 'image' as const,
    src: '/work/dance-photo-editorial.jpg',
    alt: 'Three-portrait dancer editorial composite',
    caption: 'Dancer editorial — three-portrait composite',
    sub: 'PHOTO COMPOSITE',
    instagramUrl: INSTAGRAM_URL,
  },
  {
    kind: 'video' as const,
    src: '/work/reel-04.mp4',
    alt: 'Batch of 27–28 film reel',
    caption: 'Batch of ’27–’28 — memory film reel',
    sub: 'MEMORY FILM',
    instagramUrl: INSTAGRAM_URL,
  },
];

type PosterEntry = {
  src: string;
  alt: string;
  caption: string;
  sub: string;
  instagramUrl: string;
};

const posters: PosterEntry[] = [
  {
    src: '/work/poster-aravindante.jpg',
    alt: 'Aravindante Athidhikal poster recreation',
    caption: 'Aravindante Athidhikal — dir. M. Mohanan',
    sub: 'TYPE / TEXTURE / RE-COMPOSITION',
    instagramUrl: INSTAGRAM_URL,
  },
  {
    src: '/work/poster-hinanna.jpg',
    alt: 'Hi Nanna poster recreation',
    caption: 'Hi Nanna — dir. Shouryuv',
    sub: 'ILLUSTRATION / PALETTE STUDY',
    instagramUrl: INSTAGRAM_URL,
  },
  {
    src: '/work/poster-bangaloredays.jpg',
    alt: 'Bangalore Days poster recreation',
    caption: 'Bangalore Days — dir. Anjali Menon',
    sub: 'COLLAGE / LAYOUT STUDY',
    instagramUrl: INSTAGRAM_URL,
  },
  {
    src: '/work/poster-orukadhal.jpg',
    alt: 'Oru Kadhal Kanmani poster recreation',
    caption: 'Oru Kadhal Kanmani — a film by Mani Ratnam',
    sub: 'MINIMAL / PAIR PORTRAIT',
    instagramUrl: INSTAGRAM_URL,
  },
  {
    src: '/work/poster-cidmoosa.jpg',
    alt: 'C.I.D Moosa poster recreation',
    caption: 'C.I.D Moosa — dir. Jhony Antony',
    sub: 'COMEDY / CHARACTER STUDY',
    instagramUrl: INSTAGRAM_URL,
  },
  {
    src: '/work/poster-ferrari.jpg',
    alt: 'Ferrari tribute poster',
    caption: 'Ferrari — tribute poster',
    sub: 'TRIBUTE / MOTION TYPE',
    instagramUrl: INSTAGRAM_URL,
  },
  {
    src: '/work/poster-velaiilla.jpg',
    alt: 'Velaiyilla Pattadhaari poster recreation',
    caption: 'Velaiyilla Pattadhaari — dir. R. Velraj',
    sub: 'MASS / HIGH-CONTRAST STUDY',
    instagramUrl: INSTAGRAM_URL,
  },
  {
    src: '/work/communion-invite.jpg',
    alt: 'First Holy Communion invitation design',
    caption: 'First Holy Communion — invitation design',
    sub: 'COMMISSION / STATIONERY',
    instagramUrl: INSTAGRAM_URL,
  },
];

/**
 * Section heading system: pill label, masked serif title reveal and a
 * prominent blush-ruled description so every section explains itself.
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
      <h2 className="mt-6 font-serif text-5xl leading-[1.05] text-paper md:text-7xl">
        <MaskedText text={display} delay={0.1} />
      </h2>
      <Reveal delay={0.16}>
        <p className="mt-5 border-l-2 border-blush/50 pl-5 font-sans text-base leading-relaxed text-paper/80 md:text-lg md:leading-relaxed">
          {description}
        </p>
      </Reveal>
    </div>
  );
}

/** Oversized ghost word bleeding behind a section (decorative). */
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
        <h1 className="font-serif text-[16vw] leading-[0.95] text-paper md:text-8xl">
          <MaskedText text="Work" by="letters" stagger={0.12} />
        </h1>
        <Reveal delay={0.18}>
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-paper/80 md:text-lg">
            {HERO_LINE}
          </p>
        </Reveal>

        {/* Stats strip */}
        <div className="mt-16 grid grid-cols-2 gap-10 border-t hairline pt-10 md:grid-cols-4">
          <AnimatedStat value={16} label="PIECES SHOWN" />
          <AnimatedStat value={4} label="DISCIPLINES" pad={1} />
          <AnimatedStat value={8} label="FILMS RE-POSTERED" />
          <AnimatedStat value={100} label="HANDMADE — NO TEMPLATES" pad={3} />
        </div>
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
      <section className="relative mx-auto max-w-7xl px-6 pb-32 md:px-10">
        <SectionHeader
          index="02"
          title="ADS &amp; LOGO"
          display="Ads & Logo"
          description={ADS_DESCRIPTION}
        />

        <div className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <GhostWord word="MARK" className="left-0 top-24 hidden lg:block" />
          {adsItems.map((item, i) => (
            <ParallaxItem key={item.src} delay={i * 0.06} amplitude={20 + i * 8}>
              <WorkTile item={item} aspect="aspect-[4/5]" />
            </ParallaxItem>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-xl font-sans text-[11px] uppercase leading-loose tracking-[0.22em] text-paper/40">
            LOGO, CAMPAIGN, CONCEPT — ONE VOICE ACROSS THREE SIZES. A MARK SHOULD
            SURVIVE A FAVICON AND A HOARDING WITHOUT CHANGING ITS ACCENT.
          </p>
        </Reveal>
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
      <section className="relative border-t hairline">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <SectionHeader
            index="04"
            title="POSTERS"
            display="Posters"
            description={POSTERS_DESCRIPTION}
          />

          <MarqueeStrip
            words={[
              'bangalore days',
              'hi nanna',
              'oru kadhal kanmani',
              'c.i.d moosa',
              'ferrari',
              'vip',
              'aravindante athidhikal',
            ]}
          />

          <div className="relative mt-14">
            <GhostWord word="FRAME" className="right-0 top-24 hidden lg:block" />

            {/* Editorial bento: feature poster + staircased grid */}
            <div className="relative z-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-12">
              <ParallaxItem className="lg:col-span-5" amplitude={16}>
                <MoviePosterCard item={posters[0]} index={1} />
              </ParallaxItem>
              <ParallaxItem className="lg:col-span-4 lg:mt-16" amplitude={30}>
                <MoviePosterCard item={posters[1]} index={2} />
              </ParallaxItem>
              <ParallaxItem className="lg:col-span-3 lg:mt-32" amplitude={44}>
                <MoviePosterCard item={posters[2]} index={3} />
              </ParallaxItem>
              <ParallaxItem className="lg:col-span-3" amplitude={24}>
                <MoviePosterCard item={posters[3]} index={4} />
              </ParallaxItem>
              <ParallaxItem className="lg:col-span-4 lg:mt-12" amplitude={36}>
                <MoviePosterCard item={posters[4]} index={5} />
              </ParallaxItem>
              <ParallaxItem className="lg:col-span-5 lg:mt-24" amplitude={28}>
                <MoviePosterCard item={posters[5]} index={6} />
              </ParallaxItem>
              <ParallaxItem className="lg:col-span-4 lg:col-start-3" amplitude={22}>
                <MoviePosterCard item={posters[6]} index={7} />
              </ParallaxItem>
              <ParallaxItem className="lg:col-span-4" amplitude={34}>
                <MoviePosterCard item={posters[7]} index={8} />
              </ParallaxItem>
            </div>

            <span className="label absolute -top-8 right-0 hidden lg:block">
              08 STUDIES — 01 INVITATION
            </span>
          </div>
        </div>
      </section>

      {/* ============ CLOSER ============ */}
      <section className="border-t hairline">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center md:px-10 md:py-32">
          <Reveal>
            <p className="label mb-6">THAT&apos;S THE ARCHIVE — FOR NOW</p>
          </Reveal>
          <h2 className="mx-auto max-w-3xl font-serif text-3xl leading-snug text-paper md:text-5xl">
            <MaskedText
              text="New frames are always in development."
              delay={0.1}
            />
          </h2>
          <Reveal delay={0.25}>
            <p className="mx-auto mt-8 max-w-xl font-sans text-base leading-relaxed text-paper/70">
              {FOOTER_NOTE}
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center gap-3 rounded-full border border-blush/40 px-8 py-4 font-sans text-[11px] uppercase tracking-[0.25em] text-blush transition-all duration-300 hover:border-blush hover:bg-blush hover:text-ink"
            >
              FOLLOW THE PROCESS — @EVRISTA_PROD ↗
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
}
