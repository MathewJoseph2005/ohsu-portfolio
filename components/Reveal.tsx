'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * Scroll-reveal wrapper: fade + translateY with a stagger index.
 * Falls back to a simple fade when prefers-reduced-motion is set.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  as = 'div',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'figure' | 'li';
}) {
  const reduce = useReducedMotion();
  const Component = (motion as any)[as] ?? motion.div;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: reduce ? 0.4 : 0.9, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </Component>
  );
}
