"use client";

import { useState, useEffect } from "react";
import { Phone, Calendar } from "lucide-react";
import Link from "next/link";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden safe-area-bottom">
      <div className="bg-white/95 backdrop-blur-md border-t border-accent/30 px-4 py-3">
        <div className="flex gap-3 max-w-lg mx-auto">
          <a
            href="tel:02-1234-5678"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl
              bg-foreground text-white font-medium text-sm min-h-[48px]
              active:scale-[0.98] transition-transform"
          >
            <Phone className="w-4 h-4" />
            전화상담
          </a>
          <Link
            href="/booking"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl
              bg-primary text-white font-medium text-sm min-h-[48px]
              active:scale-[0.98] transition-transform"
          >
            <Calendar className="w-4 h-4" />
            온라인 예약
          </Link>
        </div>
      </div>
    </div>
  );
}
