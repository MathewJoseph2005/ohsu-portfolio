'use client';

import { useEffect, useState } from 'react';

/**
 * Film-grain overlay. Renders only after mount so the SVG noise (client-generated
 * data URI) never mismatches between server and client render.
 */
export default function Grain() {
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

  if (!noiseUrl) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60]"
      style={{ backgroundImage: `url(${noiseUrl})` }}
    />
  );
}
