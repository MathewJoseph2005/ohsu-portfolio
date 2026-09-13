'use client';

import { useRef } from 'react';
import type { ReactNode } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

/**
 * Editorial showcase wrapper for a single tile.
 *
 * Two independent layers:
 *  - outer: one-shot cinematic reveal (clip-path wipe + fade + rise) on scroll-in
 *  - inner: continuous scroll-linked vertical drift (subtle parallax)
 *
 * With prefers-reduced-motion both collapse to a simple fade and no drift.
 * Purely decorative — children keep all their own interactivity.
 */
export default function ParallaxItem({
  children,
  className = '',
  amplitude = 24,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [amplitude, -amplitude]);
  const y = useSpring(rawY, { stiffness: 90, damping: 30, mass: 0.5 });

  const hidden = reduce
    ? { opacity: 0 }
    : { opacity: 0, y: 32, clipPath: 'inset(12% 8% 12% 8%)' };
  const shown = reduce
    ? { opacity: 1 }
    : { opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' };

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      <motion.div style={reduce ? undefined : { y }} className="h-full w-full">
        {children}
      </motion.div>
    </motion.div>
  );
}
