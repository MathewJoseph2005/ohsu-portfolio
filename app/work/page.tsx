import { INSTAGRAM_URL, withBase } from '@/lib/site';
import PageTransition from '@/components/PageTransition';
import Reveal from '@/components/Reveal';
import WorkTile, { type WorkItem } from '@/components/WorkTile';
import VideoTile, { type VideoItem } from '@/components/VideoTile';
import ReelsCarousel from '@/components/ReelsCarousel';
import Footer from '@/components/Footer';

const ANIMATION_PARAGRAPH =
  'Movement is design in time. This classical dance performance was edited into a reel that keeps the discipline of the form and gives it a contemporary frame — colour, pacing and cuts tuned so the emotion of each gesture reads clearly on a small screen.';

const ADS_PARAGRAPH =
  'Identity work and campaign design. From the Evrista mark itself to festival campaigns and branded concept posters, each piece is built around a single clear idea and executed across type, colour and composition so it feels like one voice.';

const animationTile: WorkItem = {
  src: '/work/dance-reel.mp4',
  alt: 'Classical dance performance reel',
  caption: 'Classical dance performance — edited reel',
  instagramUrl: INSTAGRAM_URL,
};

const animationVideos: VideoItem[] = [
  {
    src: '/work/anim-reel-01.mp4',
    alt: 'Animated motion piece 01',
    caption: 'Animation — motion piece 01',
    instagramUrl: INSTAGRAM_URL,
  },
  {
    src: '/work/anim-reel-02.mp4',
    alt: 'Animated motion piece 02',
    caption: 'Animation — motion piece 02',
    instagramUrl: INSTAGRAM_URL,
  },
  {
    src: '/work/anim-reel-03.mp4',
    alt: 'Animated motion piece 03',
    caption: 'Animation — motion piece 03',
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

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <Reveal>
      <span className="inline-block rounded-full border border-blush/40 px-4 py-2 font-sans text-[10px] uppercase tracking-[0.25em] text-blush">
        {index} / {title}
      </span>
    </Reveal>
  );
}

export default function Work() {
  return (
    <PageTransition>
      {/* ============ HEADER ============ */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-32 md:px-10 md:pt-40">
        <Reveal>
          <p className="label mb-6">SELECTED WORK — 2024–2026</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-serif text-[16vw] leading-[0.95] text-paper md:text-8xl">
            Work
          </h1>
        </Reveal>
      </section>

      {/* ============ 01 ANIMATION ============ */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <SectionLabel index="01" title="ANIMATION" />
        <Reveal delay={0.1} className="mt-8">
          <div className="relative overflow-hidden border hairline">
            <video
              src={withBase(animationTile.src)}
              muted
              loop
              autoPlay
              playsInline
              className="aspect-video w-full object-cover"
            />
            <a
              href={animationTile.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 z-10 rounded-full bg-ink/70 px-4 py-2 font-sans text-[10px] uppercase tracking-[0.2em] text-paper transition-colors duration-300 hover:bg-blush hover:text-ink"
            >
              WATCH ON INSTAGRAM ↗
            </a>
          </div>
        </Reveal>
        {/* Animation motion pieces */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {animationVideos.map((item, i) => (
            <Reveal key={item.src} delay={i * 0.08}>
              <VideoTile item={item} aspect="aspect-[4/5]" />
            </Reveal>
          ))}
        </div>

        {/* Animation illustration frames */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {animationArt.map((item, i) => (
            <Reveal key={item.src} delay={(i % 3) * 0.08}>
              <WorkTile item={item} aspect="aspect-[4/5]" />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-8">
          <p className="max-w-2xl font-sans text-sm leading-relaxed text-paper/60">
            {ANIMATION_PARAGRAPH}
          </p>
        </Reveal>
      </section>

      {/* ============ 02 ADS & LOGO ============ */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <SectionLabel index="02" title="ADS &amp; LOGO" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {adsItems.map((item, i) => (
            <Reveal key={item.src} delay={i * 0.08}>
              <WorkTile item={item} aspect="aspect-[4/5]" />
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.15} className="mt-8">
          <p className="max-w-2xl font-sans text-sm leading-relaxed text-paper/60">
            {ADS_PARAGRAPH}
          </p>
        </Reveal>
      </section>

      {/* ============ 03 REELS ============ */}
      <section className="overflow-hidden border-t hairline py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionLabel index="03" title="REELS" />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl font-sans text-sm leading-relaxed text-paper/60">
              Short-form edits and composites — drag through the reel.
            </p>
          </Reveal>
        </div>
        <div className="mx-auto mt-10 max-w-7xl px-6 md:px-10">
          <Reveal delay={0.15}>
            <ReelsCarousel reels={reels} />
          </Reveal>
        </div>
      </section>

      {/* ============ 04 POSTERS ============ */}
      <section className="border-t hairline">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <SectionLabel index="04" title="POSTERS" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
