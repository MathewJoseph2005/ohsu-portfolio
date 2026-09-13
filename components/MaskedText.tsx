'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * Masked line reveal — each word (or letter) rises out of an overflow
 * hidden mask with a stagger. The standard editorial headline move.
 * Server-render is the resting state; animation runs on scroll-in.
 * Falls back to a simple fade under prefers-reduced-motion.
 */
export default function MaskedText({
  text,
  by = 'words',
  className = '',
  delay = 0,
  stagger = 0.045,
  accentFrom,
}: {
  text: string;
  by?: 'words' | 'letters';
  className?: string;
  delay?: number;
  stagger?: number;
  /** Unit index from which letters/words render in the blush accent. */
  accentFrom?: number;
}) {
  const reduce = useReducedMotion();

  const units =
    by === 'letters' ? Array.from(text) : text.split(' ').filter(Boolean);

  return (
    <span className={className} aria-label={text}>
      {units.map((unit, i) => {
        // Preserve natural spacing between words.
        if (unit === ' ') return ' ';

        return (
          <span key={`${unit}-${i}`}>
            <span
              aria-hidden="true"
              className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom"
            >
              <motion.span
                className={`inline-block will-change-transform ${
                  accentFrom !== undefined && i >= accentFrom ? 'text-blush' : ''
                }`}
                initial={reduce ? { opacity: 0 } : { y: '112%' }}
                whileInView={reduce ? { opacity: 1 } : { y: '0%' }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{
                  duration: 0.9,
                  delay: delay + i * stagger,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {unit}
              </motion.span>
            </span>
            {by === 'words' ? ' ' : ''}
          </span>
        );
      })}
    </span>
  );
}
