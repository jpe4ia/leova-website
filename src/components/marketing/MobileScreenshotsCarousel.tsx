'use client';

import { useEffect, useState } from 'react';
import { mobileScreenshots } from '@/data/mobileScreenshots';

export default function MobileScreenshotsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % mobileScreenshots.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!mobileScreenshots.length) return null;

  return (
    <div className="bg-[#030f11] border border-white/10 rounded-3xl p-4">
      <div className="text-xs uppercase tracking-[0.4em] text-[#5eead4] mb-4 text-center">
        Aperçu LISA
      </div>
      {/* Container avec hauteur fixe basée sur le plus grand screenshot */}
      <div className="relative h-[420px] flex items-center justify-center overflow-hidden rounded-2xl bg-[#010d11]">
        <img
          src={mobileScreenshots[index].src}
          alt={mobileScreenshots[index].caption}
          className="max-w-full max-h-full object-contain rounded-2xl transition-opacity duration-300"
        />
        {/* Caption en overlay en bas */}
        <div className="absolute inset-x-0 bottom-0 py-3 px-4 bg-gradient-to-t from-[#010d11] to-transparent">
          <p className="text-center text-white/90 text-xs font-medium">{mobileScreenshots[index].caption}</p>
        </div>
      </div>
      {/* Indicateurs */}
      <div className="flex justify-center gap-1.5 mt-4 flex-wrap">
        {mobileScreenshots.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === idx ? 'bg-[#2dd4bf] w-4' : 'bg-white/30 hover:bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}

