"use client";

import { useState, useEffect } from "react";

export default function PageLoader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show on first visit
    if (sessionStorage.getItem("rlg-loaded")) return;
    sessionStorage.setItem("rlg-loaded", "1");

    // Check reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setVisible(true);
    const timer = setTimeout(() => setVisible(false), 400);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[9999] bg-[#0F1923] flex items-center justify-center transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div className="font-heading text-3xl md:text-4xl text-white">
        <span>REAL</span> <span className="text-[#C8A96E]">Law Group</span>
      </div>
    </div>
  );
}
