'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
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
 * Reels showcase — built for a small, curated set (3 frames):
 * a staggered three-across grid on desktop so every reel is visible
 * at once, and a snap-swipe strip on mobile. No scroll-hijacking:
 * the page keeps its natural flow. Numbered frames, always-visible
 * captions, pointer tilt, blush hover underline.
 */
export default function ReelsCarousel({ reels }: { reels: Reel[] }) {
  const reduce = useReducedMotion();

  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-14 md:px-10">
      {/* Horizontal snap-swipe on small screens; staggered grid from lg up */}
      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
        {reels.map((reel, i) => (
          <motion.div
            key={reel.src + reel.caption}
            className={`w-[78vw] max-w-[340px] flex-none snap-center lg:w-auto lg:max-w-none ${
              i === 1 ? 'lg:mt-16' : i === 2 ? 'lg:mt-6' : ''
            }`}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{
              duration: 0.8,
              delay: Math.min(i * 0.08, 0.24),
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <ReelCard reel={reel} index={i + 1} />
          </motion.div>
        ))}
      </div>

      <p className="label mt-6">SWIPE OR SCROLL — EACH FRAME OPENS ON INSTAGRAM ↗</p>
    </div>
  );
}

function ReelCard({ reel, index }: { reel: Reel; index: number }) {
  const [hover, setHover] = useState(false);

  return (
    <TiltCard max={4}>
      <a
        href={reel.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="group block"
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
              sizes="(min-width: 1024px) 30vw, 78vw"
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
    </TiltCard>
  );
}
