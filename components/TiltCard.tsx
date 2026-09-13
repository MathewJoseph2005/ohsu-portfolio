'use client';

import { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion';

/**
 * Subtle pointer-follow 3D tilt. Only engages for real mouse pointers on
 * hover-capable devices; reduced-motion users get a static wrapper.
 * Amplitude is intentionally small (max ±5°) so it reads as polish,
 * not a gimmick.
 */
export default function TiltCard({
  children,
  className = '',
  max = 5,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const active = useRef(false);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 20, mass: 0.4 });
  const sry = useSpring(ry, { stiffness: 150, damping: 20, mass: 0.4 });

  const onPointerEnter = (e: React.PointerEvent) => {
    active.current =
      !reduce &&
      e.pointerType === 'mouse' &&
      typeof window !== 'undefined' &&
      window.matchMedia('(hover: hover)').matches;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!active.current || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * max * 2);
    rx.set(-py * max * 2);
  };

  const onPointerLeave = () => {
    active.current = false;
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerEnter={onPointerEnter}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 900 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
