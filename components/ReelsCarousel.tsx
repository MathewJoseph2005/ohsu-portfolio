'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion';
import { withBase } from '@/lib/site';
import GrainOverlay from './GrainOverlay';
import LazyVideo from './LazyVideo';
import TiltCard from './TiltCard';

type Reel = {
  kind: 'video' | 'image';
  src: string;
  alt: string;
  caption: string;
  sub?: string;
  instagramUrl: string;
};

/**
 * Scroll-driven horizontal Reels — redesigned:
 *  - staggered vertical offsets (the track reads like a filmstrip on a lightbox)
 *  - numbered frames with always-visible captions + sub-lines
 *  - live status readout naming the reel currently in focus
 *  - pointer tilt on each card + blush progress underline
 * Falls back to a plain horizontal drag-scroll under reduced motion.
 */
export default function ReelsCarousel({ reels }: { reels: Reel[] }) {
  const reduce = useReducedMotion();
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ['start start', 'end end'],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    mass: 0.5,
  });

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      setDistance(Math.max(0, track.scrollWidth - window.innerWidth + 48));
    };
    measure();
    window.addEventListener('resize', measure);
    const t = setTimeout(measure, 500);
    return () => {
      window.removeEventListener('resize', measure);
      clearTimeout(t);
    };
  }, [reels.length]);

  const x = useTransform(smooth, [0, 1], [0, -distance]);

  useMotionValueEvent(smooth, 'change', (v) => {
    setActive(Math.min(reels.length - 1, Math.floor(v * reels.length * 0.999)));
  });

  const offsets = ['lg:mt-0', 'lg:mt-16', 'lg:mt-6', 'lg:mt-20', 'lg:mt-10'];

  if (reduce) {
    return (
      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 md:px-10">
        {reels.map((reel, i) => (
          <ReelCard
            key={reel.src + reel.caption}
            reel={reel}
            index={i + 1}
            tilt={false}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      ref={outerRef}
      className="relative"
      style={{ height: `${Math.max(250, 120 + reels.length * 45)}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        {/* Sticky mini-header: live status while cards travel */}
        <div className="mx-auto mb-8 flex w-full max-w-7xl items-end justify-between px-6 md:px-10">
          <div>
            <span className="label">
              NOW SHOWING — {String(active + 1).padStart(2, '0')} /{' '}
              {String(reels.length).padStart(2, '0')}
            </span>
            <motion.p
              key={active}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-2 font-serif text-xl text-paper md:text-2xl"
            >
              {reels[active]?.caption}
            </motion.p>
          </div>
          <span className="label hidden animate-pulse sm:block">
            KEEP SCROLLING ↓
          </span>
        </div>

        <motion.div
          ref={trackRef}
          style={{ x, willChange: 'transform' }}
          className="flex w-max items-start gap-6 pl-6 pr-6 pt-6 md:pl-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))] md:pr-16"
        >
          {reels.map((reel, i) => (
            <motion.div
              key={reel.src + reel.caption}
              className={offsets[i % offsets.length]}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{
                duration: 0.7,
                delay: Math.min(i * 0.05, 0.2),
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <ReelCard reel={reel} index={i + 1} tilt />
            </motion.div>
          ))}
        </motion.div>

        {/* Progress rail */}
        <div className="mx-auto mt-12 w-full max-w-7xl px-6 md:px-10">
          <div className="h-px w-full bg-paper/15">
            <motion.div
              style={{ scaleX: smooth }}
              className="h-px w-full origin-left bg-blush"
            />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="label">SCROLL TO EXPLORE</span>
            <span className="label hidden sm:block">
              {reels.length} FRAMES — ONE CONTINUOUS SEQUENCE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReelCard({
  reel,
  index,
  tilt,
}: {
  reel: Reel;
  index: number;
  tilt: boolean;
}) {
  const [hover, setHover] = useState(false);

  const card = (
    <a
      href={reel.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group block w-[78vw] max-w-[340px] flex-none snap-center md:w-[30vw]"
    >
      {/* Frame number + sub-line, above the media like a contact-sheet note */}
      <div className="mb-3 flex items-baseline justify-between gap-4 px-1">
        <span className="font-serif text-sm italic text-blush">
          {String(index).padStart(2, '0')}
        </span>
        <span className="label truncate text-[9px]">{reel.sub ?? reel.alt}</span>
      </div>

      <div className="relative aspect-[9/16] overflow-hidden border hairline bg-ink">
        {reel.kind === 'video' ? (
          <LazyVideo src={reel.src} className="h-full w-full object-cover" />
        ) : (
          <Image
            src={withBase(reel.src)}
            alt={reel.alt}
            fill
            sizes="(min-width: 768px) 30vw, 78vw"
            className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
          />
        )}
        <GrainOverlay visible={hover} />
        <div
          className={`absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-ink/90 to-transparent px-4 pb-4 pt-14 transition-all duration-500 ease-out-expo ${
            hover ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          }`}
        >
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-paper/90">
            {reel.caption}
          </p>
        </div>
      </div>

      {/* Always-visible caption bar */}
      <div className="flex items-center justify-between border-x border-b hairline px-4 py-3">
        <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-paper/80">
          {reel.caption}
        </span>
        <span className="label shrink-0 text-[9px] text-blush/80">OPEN ↗</span>
      </div>

      {/* Blush underline draws in on hover */}
      <div className="mx-4 h-px origin-left scale-x-0 bg-blush transition-transform duration-500 ease-out-expo group-hover:scale-x-100" />
    </a>
  );

  return tilt ? <TiltCard max={4}>{card}</TiltCard> : card;
}
