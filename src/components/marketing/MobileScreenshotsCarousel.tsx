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
    // Container principal avec hauteur TOTALEMENT FIXE
    <div className="bg-[#030f11] border border-white/10 rounded-3xl p-4 h-[560px] overflow-hidden">
      {/* Titre - hauteur fixe */}
      <div className="text-xs uppercase tracking-[0.4em] text-[#5eead4] h-6 text-center">
        Aperçu LISA
      </div>
      
      {/* Zone images - hauteur fixe */}
      <div className="relative h-[420px] overflow-hidden rounded-2xl bg-[#010d11]">
        {mobileScreenshots.map((screenshot, idx) => (
          <img
            key={idx}
            src={screenshot.src}
            alt={screenshot.caption}
            className={`absolute inset-0 w-full h-full object-contain rounded-2xl transition-opacity duration-500 ${
              index === idx ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        {/* Caption overlay - hauteur fixe */}
        <div className="absolute inset-x-0 bottom-0 h-12 flex items-center justify-center bg-gradient-to-t from-[#010d11] via-[#010d11]/90 to-transparent">
          <p className="text-white/90 text-xs font-medium text-center px-4 truncate max-w-full">
            {mobileScreenshots[index].caption}
          </p>
        </div>
      </div>
      
      {/* Indicateurs - hauteur fixe, pas de wrap */}
      <div className="h-10 flex items-center justify-center gap-1.5 overflow-hidden">
        {mobileScreenshots.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 flex-shrink-0 ${
              index === idx ? 'bg-[#2dd4bf] w-4' : 'bg-white/30 w-2'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
