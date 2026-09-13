'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

/**
 * Count-up statistic. Renders zero-padded on the server (hydration-safe),
 * then animates from 0 to `value` the first time it scrolls into view.
 * Under reduced motion it snaps straight to the final value.
 */
export default function AnimatedStat({
  value,
  label,
  pad = 2,
}: {
  value: number;
  label: string;
  pad?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setN(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return (
    <div ref={ref}>
      <p className="font-serif text-5xl leading-none text-paper md:text-6xl">
        {String(n).padStart(pad, '0')}
      </p>
      <p className="label mt-3">{label}</p>
    </div>
  );
}
