'use client';

import { useEffect, useState } from 'react';

/** Grain overlay for a single tile — fades to ~8% opacity when visible. */
export default function GrainOverlay({ visible }: { visible: boolean }) {
  const [noiseUrl, setNoiseUrl] = useState<string | null>(null);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const imageData = ctx.createImageData(canvas.width, canvas.height);
    for (let i = 0; i < imageData.data.length; i += 4) {
      const value = Math.floor(Math.random() * 255);
      imageData.data[i] = value;
      imageData.data[i + 1] = value;
      imageData.data[i + 2] = value;
      imageData.data[i + 3] = 22; // ~8% opacity
    }
    ctx.putImageData(imageData, 0, 0);
    setNoiseUrl(canvas.toDataURL());
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
      style={{
        backgroundImage: noiseUrl ? `url(${noiseUrl})` : undefined,
        opacity: visible && noiseUrl ? 1 : 0,
      }}
    />
  );
}
