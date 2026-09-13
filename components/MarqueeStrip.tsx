'use client';

import { useReducedMotion } from 'framer-motion';

const WORDS = [
  'hand-drawn frames',
  'vector portraits',
  'moonlit windows',
  'close-up eyes',
  'lotus ponds',
  'quiet cinematics',
];

/**
 * Thin infinite marquee of motion-keywords. Sits between the header and the
 * grid, giving the section the texture an editorial spread has between
 * chapters. Pure CSS keyframes; reverses and slows under reduced motion.
 */
export default function MarqueeStrip() {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="relative mt-12 overflow-hidden border-y hairline py-4"
    >
      <div
        className="flex w-max gap-12 whitespace-nowrap will-change-transform"
        style={{
          animation: `evrista-marquee ${reduce ? '60s' : '30s'} linear infinite${
            reduce ? ' reverse' : ''
          }`,
        }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex gap-12" aria-hidden={copy === 1}>
            {WORDS.map((word) => (
              <span
                key={word}
                className="flex items-center gap-12 font-sans text-[11px] uppercase tracking-[0.3em] text-paper/35"
              >
                {word}
                <span className="inline-block h-1 w-1 rotate-45 bg-blush/60" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
