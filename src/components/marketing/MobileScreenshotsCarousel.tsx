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
    <div className="lg:hidden bg-[#030f11] border border-white/10 rounded-3xl p-4 mb-6">
      <div className="text-xs uppercase tracking-[0.4em] text-[#5eead4] mb-4 text-center">
        Aperçu
      </div>
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={mobileScreenshots[index].src}
          alt={mobileScreenshots[index].caption}
          className="w-full h-auto object-cover rounded-2xl"
        />
        <div className="absolute inset-x-0 bottom-3 text-center text-white/80 text-xs">{mobileScreenshots[index].caption}</div>
      </div>
      <div className="flex justify-center gap-2 mt-3">
        {mobileScreenshots.map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 rounded-full transition ${index === idx ? 'bg-[#2dd4bf]' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  );
}

