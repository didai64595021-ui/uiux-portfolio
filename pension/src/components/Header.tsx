"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "홈" },
  { href: "/rooms", label: "객실" },
  { href: "/experience", label: "체험" },
  { href: "/booking", label: "예약" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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
      scrolled || menuOpen ? "bg-cream/95 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="z-[60] relative">
          <div className="font-display">
            <span className={`text-xl font-bold tracking-tight transition-colors ${scrolled || menuOpen ? "text-brown" : "text-white"}`}>
              ONDA
            </span>
            <span className={`block text-[10px] tracking-[0.3em] -mt-1 transition-colors ${scrolled || menuOpen ? "text-gold-dark" : "text-gold"}`}>
              S T A Y
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                scrolled ? "text-brown/70 hover:text-brown hover:bg-brown/5" : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/booking" className="btn-primary ml-3 !py-2 !px-5 text-sm">예약하기</Link>
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden z-[60] relative w-12 h-12 flex items-center justify-center rounded-full ${scrolled || menuOpen ? "bg-brown/5" : "bg-white/10"}`}
          aria-label="메뉴"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block w-5 h-0.5 transition-all duration-300 ${scrolled || menuOpen ? "bg-brown" : "bg-white"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 transition-all duration-300 ${scrolled || menuOpen ? "bg-brown" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 transition-all duration-300 ${scrolled || menuOpen ? "bg-brown" : "bg-white"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && <div className="fixed inset-0 bg-black/30 z-[55] md:hidden" onClick={() => setMenuOpen(false)} />}
      <div className={`fixed top-0 right-0 h-full w-72 bg-cream z-[58] transform transition-transform duration-300 md:hidden ${
        menuOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <nav className="flex flex-col pt-24 px-6 gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              className="text-brown/70 hover:text-brown py-3 px-4 rounded-xl text-base font-medium hover:bg-brown/5 min-h-[48px] flex items-center">
              {link.label}
            </Link>
          ))}
          <Link href="/booking" onClick={() => setMenuOpen(false)} className="btn-primary mt-4 text-center">예약하기</Link>
        </nav>
      </div>
    </header>
  );
}
