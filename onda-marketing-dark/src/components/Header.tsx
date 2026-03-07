"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/content";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-dark-strong shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-neon/10 border border-neon/30 flex items-center justify-center group-hover:bg-neon/20 group-hover:border-neon/50 transition-all duration-300 group-hover:box-glow">
                <span className="font-grotesk font-bold text-neon text-sm sm:text-base">
                  O
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-grotesk font-bold text-white text-sm sm:text-base tracking-tight">
                  ONDA
                </span>
                <span className="text-[10px] text-neon/60 font-mono tracking-widest hidden sm:block">
                  MARKETING
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 font-grotesk text-sm transition-all duration-300 rounded-lg ${
                    pathname === link.href
                      ? "text-neon"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-neon shadow-[0_0_6px_#00FF88]" />
                  )}
                </Link>
              ))}
              <Link
                href="/contact"
                className="ml-4 px-5 py-2 text-sm font-grotesk font-semibold text-dark bg-neon rounded-lg hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-all duration-300"
              >
                무료 상담
              </Link>
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-12 h-12 flex items-center justify-center rounded-lg bg-charcoal/50 border border-charcoal-border z-[60]"
              aria-label="메뉴 열기"
            >
              <div className="flex flex-col gap-1.5 w-5">
                <span
                  className={`block h-0.5 bg-neon rounded-full transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-neon rounded-full transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-neon rounded-full transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-[58] md:hidden transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full bg-dark-100 border-l border-charcoal-border p-6 pt-20 flex flex-col">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-lg font-grotesk text-base transition-all ${
                  pathname === link.href
                    ? "text-neon bg-neon/5 border border-neon/20"
                    : "text-gray-400 hover:text-white hover:bg-charcoal"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-4 font-grotesk font-semibold text-dark bg-neon rounded-lg"
            >
              무료 상담 신청
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
