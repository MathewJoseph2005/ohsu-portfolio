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

type Reel = {
  kind: 'video' | 'image';
  src: string;
  alt: string;
  caption: string;
  instagramUrl: string;
};

/**
 * Scroll-driven horizontal Reels.
 *
 * Vertical scroll through a tall pinned section drives the cards
 * horizontally (scrub + spring smoothing), so every reel is revealed
 * in sequence. Falls back to a plain horizontal drag-scroll when
 * prefers-reduced-motion is set.
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

  // Spring smoothing = the "smooth animation" feel on scroll.
  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    mass: 0.5,
  });

  // Measure how far the track needs to travel: full width minus viewport,
  // plus a little end padding so the last card clears the edge.
  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const scrollWidth = track.scrollWidth;
      const viewport = window.innerWidth;
      setDistance(Math.max(0, scrollWidth - viewport + 48));
    };
    measure();
    window.addEventListener('resize', measure);
    // Re-measure after fonts/media settle.
    const t = setTimeout(measure, 500);
    return () => {
      window.removeEventListener('resize', measure);
      clearTimeout(t);
    };
  }, [reels.length]);

  // Start slightly inset so the first card aligns with the page grid,
  // end with the last card fully visible.
  const x = useTransform(smooth, [0, 1], [0, -distance]);

  useMotionValueEvent(smooth, 'change', (v) => {
    setActive(Math.min(reels.length - 1, Math.floor(v * reels.length)));
  });

  if (reduce) {
    return (
      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 md:px-10">
        {reels.map((reel) => (
          <ReelCard key={reel.src + reel.caption} reel={reel} />
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
        {/* Sticky mini-header: counter + hint stays while cards travel */}
        <div className="mx-auto mb-8 flex w-full max-w-7xl items-center justify-between px-6 md:px-10">
          <span className="label">
            {String(active + 1).padStart(2, '0')} / {String(reels.length).padStart(2, '0')}
          </span>
          <span className="label animate-pulse">KEEP SCROLLING ↓</span>
        </div>

        <motion.div
          ref={trackRef}
          style={{ x, willChange: 'transform' }}
          className="flex w-max items-stretch gap-6 pl-6 pr-6 md:pl-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))] md:pr-16"
        >
          {reels.map((reel, i) => (
            <motion.div
              key={reel.src + reel.caption}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{
                duration: 0.7,
                delay: Math.min(i * 0.05, 0.2),
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <ReelCard reel={reel} />
            </motion.div>
          ))}
        </motion.div>

        {/* Progress rail */}
        <div className="mx-auto mt-10 w-full max-w-7xl px-6 md:px-10">
          <div className="h-px w-full bg-paper/15">
            <motion.div
              style={{ scaleX: smooth }}
              className="h-px w-full origin-left bg-blush"
            />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="label">SCROLL TO EXPLORE</span>
            <span className="label hidden sm:block">ALL {reels.length} REELS IN VIEW SEQUENCE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReelCard({ reel }: { reel: Reel }) {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={reel.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative block w-[78vw] max-w-[340px] flex-none snap-center border hairline bg-ink md:w-[30vw]"
    >
      <div className="relative aspect-[9/16] overflow-hidden">
        {reel.kind === 'video' ? (
          <LazyVideo
            src={reel.src}
            className="h-full w-full object-cover"
          />
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
      <div className="flex items-center justify-between px-4 py-3">
        <span className="label text-[9px] text-paper/40">{reel.alt}</span>
        <span className="label text-[9px] text-paper/40">OPEN ↗</span>
      </div>
    </a>
  );
}
