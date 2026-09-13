import Link from 'next/link';
import Image from 'next/image';
import { INSTAGRAM_URL, BRAND, FOUNDER, withBase } from '@/lib/site';
import PageTransition from '@/components/PageTransition';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import HeroCrossfade from '@/components/HeroCrossfade';
import InstagramIcon from '@/components/InstagramIcon';

export default function Home() {
  return (
    <PageTransition>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-screen flex-col justify-between pt-24">
        {/* Corner metadata texture */}
        <span className="label absolute left-6 top-24 hidden md:left-10 md:block">
          SYSTEM: ACTIVE — REF. ER-2026
        </span>
        <span className="label absolute right-6 top-24 hidden md:right-10 md:block">
          KOCHI / KERALA — IN
        </span>

        <div className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-12 px-6 md:grid-cols-[1.2fr_1fr] md:px-10">
          <div>
            <h1 className="sr-only">Evrista</h1>
            <Reveal>
              <p className="label mb-6">A CREATIVE MEDIA &amp; DESIGN VENTURE</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-[18vw] leading-[0.9] text-paper md:text-[9rem]">
                Evri<span className="text-blush">sta</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-md font-sans text-sm uppercase leading-relaxed tracking-[0.18em] text-paper/50">
                IDEAS &amp; EMOTIONS, MADE VISIBLE
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <HeroCrossfade />
          </Reveal>
        </div>

        {/* Scroll cue */}
        <Reveal delay={0.4} className="mx-auto w-full max-w-7xl px-6 pb-12 md:px-10">
          <div className="flex items-center justify-between border-t hairline pt-6">
            <span className="label">SCROLL</span>
            <Link
              href="/work/"
              className="label group inline-flex items-center gap-3 text-paper/80 transition-colors duration-300 hover:text-blush"
            >
              VIEW WORK
              <span className="inline-block transition-transform duration-300 group-hover:translate-y-1">
                ↓
              </span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ============ BRAND MANIFESTO ============ */}
      <section className="border-t hairline">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[220px_1fr] md:px-10 md:py-36">
          <Reveal>
            <p className="label">THE VENTURE — 01</p>
          </Reveal>
          <div className="max-w-3xl">
            {BRAND.manifest.map((para, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="mb-8 font-serif text-2xl leading-snug text-paper md:text-4xl md:leading-normal">
                  {para}
                </p>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-3 rounded-full border border-blush/40 px-6 py-3 font-sans text-[11px] uppercase tracking-[0.25em] text-blush transition-all duration-300 hover:border-blush hover:bg-blush hover:text-ink"
              >
                <InstagramIcon className="h-4 w-4" />
                @evrista_prod
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FOUNDER BIO ============ */}
      <section className="border-t hairline bg-paper/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[220px_1fr] md:px-10 md:py-36">
          <Reveal>
            <p className="label">THE PERSON — 02</p>
          </Reveal>

          <div className="grid gap-12 md:grid-cols-[minmax(0,260px)_1fr]">
            <Reveal>
              <figure>
                <div className="relative aspect-[3/4] overflow-hidden border hairline">
                  <Image
                    src={withBase(FOUNDER.portrait)}
                    alt="Rosangela Shaijan"
                    fill
                    sizes="(min-width: 768px) 260px, 60vw"
                    className="object-cover grayscale"
                  />
                </div>
                <figcaption className="label mt-4">ROSANGELA SHAIJAN</figcaption>
              </figure>
            </Reveal>

            <div className="max-w-xl">
              <Reveal>
                <h3 className="label mb-8 text-paper">ROSANGELA SHAIJAN</h3>
              </Reveal>
              {BRAND.bio.map((para, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p className="mb-6 font-sans text-sm leading-relaxed text-paper/70">
                    {para}
                  </p>
                </Reveal>
              ))}
              <Reveal delay={0.2}>
                <p className="label mt-8">PHOTOSHOP — ILLUSTRATOR — POWERPOINT — AFTER EFFECTS — CAPCUT</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="border-t hairline">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center md:px-10 md:py-32">
          <Reveal>
            <p className="label mb-6">SEE THE WORK</p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/work/"
              className="group inline-block font-serif text-[13vw] leading-none text-paper transition-colors duration-500 hover:text-blush md:text-8xl"
            >
              View Work
              <span className="ml-4 inline-block transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
}
