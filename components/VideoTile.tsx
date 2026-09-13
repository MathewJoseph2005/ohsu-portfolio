'use client';

import { useState } from 'react';
import { withBase } from '@/lib/site';
import GrainOverlay from './GrainOverlay';

export type VideoItem = {
  src: string;
  alt: string;
  caption: string;
  instagramUrl: string;
};

export default function VideoTile({
  item,
  aspect = 'aspect-[4/5]',
}: {
  item: VideoItem;
  aspect?: string;
  priority?: boolean;
}) {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={item.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`group relative block overflow-hidden border hairline bg-ink ${aspect}`}
      aria-label={item.caption}
    >
      <video
        src={withBase(item.src)}
        muted
        loop
        playsInline
        autoPlay
        className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
      />

      <GrainOverlay visible={hover} />

      <div
        className={`absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-ink/90 via-ink/60 to-transparent px-4 pb-4 pt-16 transition-all duration-500 ease-out-expo ${
          hover ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-paper/90">
          {item.caption}
        </p>
      </div>

      <span className="label absolute left-3 top-3 z-20 text-[9px] text-paper/40">
        EVRISTA
      </span>
      <span className="label absolute right-3 top-3 z-20 text-[9px] text-paper/40">
        OPEN ↗
      </span>
    </a>
  );
}
