'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { withBase } from '@/lib/site';

/**
 * Framed editorial hero. ER logo and the founder portrait crossfade on a
 * loop (1.2s ease) and on hover; oversized EVRISTA bleeds behind the frame.
 */
export default function HeroCrossfade() {
  const reduce = useReducedMotion();
  const [showPortrait, setShowPortrait] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setShowPortrait((v) => !v), 3600);
    return () => clearInterval(id);
  }, [reduce]);

  const portraitVisible = showPortrait;

  const frameClass =
    'relative aspect-[3/4] w-full max-w-md overflow-hidden border hairline bg-ink';

  const inner = (
    <div className={frameClass}>
      {/* Oversized serif word bleeding behind */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center select-none"
      >
        <span className="font-serif text-[22vw] leading-none text-paper/[0.06] md:text-[13rem]">
          EVRISTA
        </span>
      </span>

      {/* ER logo layer */}
      <motion.div
        className="absolute inset-0 z-10 flex items-center justify-center"
        animate={{ opacity: portraitVisible ? 0 : 1 }}
        transition={{ duration: reduce ? 0 : 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          animate={reduce ? undefined : { scale: [1, 1.04, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative h-56 w-56 md:h-64 md:w-64"
        >
          <Image
            src={withBase('/work/er-logo.png')}
            alt="Evrista ER logo mark"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Portrait layer */}
      <motion.div
        className="absolute inset-0 z-20"
        animate={{ opacity: portraitVisible ? 1 : 0 }}
        transition={{ duration: reduce ? 0 : 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ pointerEvents: 'none' }}
      >
        <Image
          src={withBase('/rosangela-portrait.jpg')}
          alt="Portrait of Rosangela Shaijan"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Subtle blush glow pulse behind frame content */}
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10"
        animate={reduce ? undefined : { opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(232,184,160,0.25) 0%, transparent 65%)',
        }}
      />
    </div>
  );

  return (
    <div
      onMouseEnter={() => setShowPortrait(true)}
      onMouseLeave={() => setShowPortrait(false)}
      className="relative flex items-center justify-center px-6 md:px-0"
    >
      {inner}
    </div>
  );
}
