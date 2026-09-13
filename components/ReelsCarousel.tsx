'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
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

export default function ReelsCarousel({ reels }: { reels: Reel[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!el) return;
    isDown.current = true;
    startX.current = e.clientX;
    startScroll.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
    el.classList.add('cursor-grabbing');
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!el || !isDown.current) return;
    const dx = e.clientX - startX.current;
    el.scrollLeft = startScroll.current - dx;
  }, []);

  const endDrag = useCallback((e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!el) return;
    isDown.current = false;
    if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
    el.classList.remove('cursor-grabbing');
  }, []);

  // GSAP: gentle momentum ease once pointer drag ends (progressive enhancement)
  useEffect(() => {
    let ctx: gsap.Context | undefined;
    let cancelled = false;
    (async () => {
      const gsapMod = await import('gsap');
      if (cancelled) return;
      const gsap = gsapMod.default ?? gsapMod;
      const el = trackRef.current;
      if (!el) return;
      ctx = gsap.context(() => {
        let target = el.scrollLeft;
        let raf = 0;
        el.addEventListener(
          'wheel',
          (e) => {
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
              e.preventDefault();
              target = Math.max(
                0,
                Math.min(el.scrollWidth - el.clientWidth, target + e.deltaX),
              );
              gsap.to(el, { scrollTo: undefined, duration: 0 }); // no-op guard
              cancelAnimationFrame(raf);
              const step = () => {
                el.scrollLeft += (target - el.scrollLeft) * 0.18;
                if (Math.abs(target - el.scrollLeft) > 1)
                  raf = requestAnimationFrame(step);
              };
              cancelAnimationFrame(raf);
              raf = requestAnimationFrame(step);
            }
          },
          { passive: false },
        );
      }, el);
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <div
      ref={trackRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:thin] cursor-grab select-none"
    >
      {reels.map((reel) => (
        <ReelCard key={reel.src + reel.caption} reel={reel} />
      ))}
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
