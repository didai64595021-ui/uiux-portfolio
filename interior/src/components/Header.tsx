"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "홈" },
  { href: "/portfolio", label: "시공사례" },
  { href: "/estimate", label: "견적" },
  { href: "/consult", label: "상담" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isDark = isHome || scrolled;
  const useSolid = !isHome || scrolled || menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      useSolid ? "bg-warm/95 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="z-[60] relative">
          <span className={`font-display text-xl transition-colors ${useSolid ? "text-charcoal" : "text-white"}`}>
            ONDA
          </span>
          <span className={`block text-[9px] tracking-[0.35em] -mt-1 font-sans font-medium transition-colors ${useSolid ? "text-caramel" : "text-caramel-light"}`}>
            LIVING
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                useSolid ? "text-charcoal/60 hover:text-charcoal hover:bg-charcoal/5" : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/consult" className="btn-accent ml-3 !py-2 !px-5 text-sm">무료 상담</Link>
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden z-[60] relative w-12 h-12 flex items-center justify-center rounded-lg ${useSolid ? "bg-charcoal/5" : "bg-white/10"}`}
          aria-label="메뉴"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block w-5 h-0.5 transition-all duration-300 ${useSolid ? "bg-charcoal" : "bg-white"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 transition-all duration-300 ${useSolid ? "bg-charcoal" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 transition-all duration-300 ${useSolid ? "bg-charcoal" : "bg-white"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && <div className="fixed inset-0 bg-black/30 z-[55] md:hidden" onClick={() => setMenuOpen(false)} />}
      <div className={`fixed top-0 right-0 h-full w-72 bg-warm z-[58] transform transition-transform duration-300 md:hidden ${
        menuOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <nav className="flex flex-col pt-24 px-6 gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              className="text-charcoal/60 hover:text-charcoal py-3 px-4 rounded-lg text-base font-medium hover:bg-charcoal/5 min-h-[48px] flex items-center">
              {link.label}
            </Link>
          ))}
          <Link href="/consult" onClick={() => setMenuOpen(false)} className="btn-accent mt-4 text-center">무료 상담 신청</Link>
        </nav>
      </div>
    </header>
  );
}
