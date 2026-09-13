'use client';

import { useState } from 'react';
import { withBase } from '@/lib/site';
import GrainOverlay from './GrainOverlay';

export type PosterItem = {
  src: string;
  alt: string;
  /** "Title — dir. Name" or a design-focused line. */
  caption: string;
  instagramUrl: string;
};

/** Split "Title — meta" into its two lines for the caption panel. */
function splitCaption(caption: string): { title: string; meta: string } {
  const idx = caption.indexOf(' — ');
  if (idx === -1) return { title: caption, meta: 'EVRISTA — ORIGINAL DESIGN' };
  return { title: caption.slice(0, idx), meta: caption.slice(idx + 3) };
}

/**
 * Poster showcase card. Hover draws a blush inset frame around the artwork,
 * fades the grain in, and slides up a caption panel (title + director line).
 * The index footer stays visible so the grid reads as a numbered series.
 */
export default function MoviePosterCard({
  item,
  index,
  className = '',
}: {
  item: PosterItem;
  index: number;
  className?: string;
}) {
  const [hover, setHover] = useState(false);
  const { title, meta } = splitCaption(item.caption);

  return (
    <a
      href={item.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label={item.caption}
      className={`group block ${className}`}
    >
      <div className="relative aspect-[3/4] overflow-hidden border hairline bg-ink">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBase(item.src)}
          alt={item.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
        />

        <GrainOverlay visible={hover} />

        {/* Blush inset frame draws itself on hover */}
        <span
          aria-hidden
          className={`pointer-events-none absolute inset-3 z-10 border border-blush/70 transition-all duration-500 ease-out-expo ${
            hover ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
          }`}
        />

        {/* Caption panel slides up from the bottom */}
        <div
          className={`absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-ink/95 via-ink/70 to-transparent px-4 pb-4 pt-16 transition-all duration-500 ease-out-expo ${
            hover ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <p className="label mb-1 text-[8px] text-blush/80">
            POSTER STUDY — {String(index).padStart(2, '0')}
          </p>
          <p className="font-serif text-lg leading-tight text-paper">{title}</p>
          <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.18em] text-paper/60">
            {meta}
          </p>
        </div>
      </div>

      {/* Always-visible footer row */}
      <div className="flex items-center justify-between px-1 pt-3">
        <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-paper/70">
          {title}
        </span>
        <span className="label text-[9px] text-blush/70">OPEN ↗</span>
      </div>
    </a>
  );
}
