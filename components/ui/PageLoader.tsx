'use client';

import { useState, useEffect } from 'react';

export default function PageLoader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1400);
    const removeTimer = setTimeout(() => setRemoved(true), 2000);
    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (removed) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-[#0F1923] flex flex-col items-center justify-center transition-opacity duration-600 ${
        hidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="font-heading text-3xl md:text-4xl text-white overflow-hidden">
        <span className="inline-block animate-slide-up">REAL</span>{' '}
        <span className="inline-block animate-slide-up-delay text-[#C8A96E]">Law Group</span>
      </div>
      <div className="w-28 h-0.5 bg-white/10 mt-6 rounded-full overflow-hidden">
        <div className="h-full bg-[#C8A96E] rounded-full animate-load-bar" />
      </div>
    </div>
  );
}
