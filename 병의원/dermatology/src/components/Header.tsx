"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "진료과목", href: "/treatments" },
  { label: "의료진", href: "/doctors" },
  { label: "시술전후", href: "/cases" },
  { label: "예약상담", href: "/booking" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-close on navigation
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
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container-base flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="relative z-50">
            <span className={`font-serif text-xl sm:text-2xl font-semibold tracking-wider transition-colors duration-300 ${
              scrolled ? "text-foreground" : "text-white"
            }`}>
              ONDA
            </span>
            <span className={`block text-[10px] sm:text-xs tracking-[0.2em] transition-colors duration-300 ${
              scrolled ? "text-secondary" : "text-white/80"
            }`}>
              DERMATOLOGY
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-primary ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:02-1234-5678"
              className="btn-primary text-sm flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              예약문의
            </a>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`relative z-[60] lg:hidden w-12 h-12 flex items-center justify-center rounded-xl transition-colors ${
              isOpen ? "bg-foreground/10" : scrolled ? "bg-muted" : "bg-white/15"
            }`}
            aria-label="메뉴"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className={`w-5 h-5 ${scrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[55] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-[58] lg:hidden
          transform transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="pt-24 px-8">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-foreground py-3 px-4 rounded-xl
                  hover:bg-muted transition-colors min-h-[48px] flex items-center"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 pt-8 border-t border-accent/50">
            <a
              href="tel:02-1234-5678"
              className="btn-primary w-full text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              전화 예약
            </a>
            <p className="text-sm text-secondary mt-4 text-center korean-text">
              평일 09:00 - 19:00 | 토 09:00 - 15:00
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
