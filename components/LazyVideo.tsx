'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { withBase } from '@/lib/site';

/**
 * Lazy video: assigns the source and plays only while the element is in
 * (or near) the viewport, pausing when it leaves. Honors reduced motion
 * by loading metadata only and showing native controls instead of autoplay.
 */
export default function LazyVideo({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [ready, setReady] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => setInView(e.isIntersecting)),
      { rootMargin: '250px 0px' },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (inView) {
      if (!el.getAttribute('src')) el.setAttribute('src', withBase(src));
      if (!reduce) el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, [inView, src, reduce]);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload="none"
      controls={reduce ? true : undefined}
      onLoadedData={() => setReady(true)}
      className={`${className ?? ''} transition-opacity duration-700 ${
        ready ? 'opacity-100' : 'opacity-0'
      }`}
    />
  );
}
