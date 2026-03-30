"use client";

import { useState, useEffect } from "react";
import { Phone, Calendar } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-primary/95 backdrop-blur-sm border-t border-white/10 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] flex gap-3">
        <a
          href={CONTACT.phoneHref}
          className="flex-1 flex items-center justify-center gap-2 bg-white text-primary font-semibold text-sm py-3 rounded-lg transition-colors active:bg-gray-100"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <a
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 bg-secondary text-white font-semibold text-sm py-3 rounded-lg transition-colors active:bg-[#b8994e]"
        >
          <Calendar className="w-4 h-4" />
          Free Consult
        </a>
      </div>
    </div>
  );
}
