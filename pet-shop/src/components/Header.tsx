'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/#breeds', label: '견종 소개' },
  { href: '/#puppies', label: '분양 안내' },
  { href: '/#process', label: '분양 절차' },
  { href: '/#care', label: '케어 시스템' },
  { href: '/#reviews', label: '분양 후기' },
  { href: '/#visit', label: '오시는 길' },
  { href: '/#contact', label: '상담 문의' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-rose-gold/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-rose-gold/10 flex items-center justify-center group-hover:bg-rose-gold/20 transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-rose-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.5 9.5C5.88 9.5 7 8.38 7 7s-1.12-2.5-2.5-2.5S2 5.62 2 7s1.12 2.5 2.5 2.5zm15 0C20.88 9.5 22 8.38 22 7s-1.12-2.5-2.5-2.5S17 5.62 17 7s1.12 2.5 2.5 2.5zm-1.5 1c-1.03 0-1.95.51-2.5 1.3-.55-.79-1.47-1.3-2.5-1.3h-2c-1.03 0-1.95.51-2.5 1.3-.55-.79-1.47-1.3-2.5-1.3H5c-1.66 0-3 1.34-3 3v1h7v-1c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v1h7v-1c0-1.66-1.34-3-3-3h-1zM12 16c-2.21 0-4 1.79-4 4h8c0-2.21-1.79-4-4-4z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className={`font-luxury text-lg sm:text-xl font-semibold tracking-wide transition-colors ${
                  isScrolled ? 'text-brown-deep' : 'text-white'
                }`}>
                  Signature Pups
                </span>
                <span className={`text-[10px] sm:text-xs tracking-[0.15em] uppercase transition-colors ${
                  isScrolled ? 'text-rose-gold' : 'text-white/80'
                }`}>
                  Premium Puppy Boutique
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 xl:px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-rose-gold/10 ${
                    isScrolled
                      ? 'text-brown-deep hover:text-rose-gold'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <Link
              href="tel:01023957347"
              className={`hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                isScrolled
                  ? 'bg-rose-gold text-white hover:bg-rose-dark'
                  : 'bg-white/15 text-white border border-white/30 hover:bg-white/25'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              상담 예약
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-xl transition-colors z-[60]"
              aria-label="메뉴 열기"
              style={{ minWidth: 48, minHeight: 48 }}
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block w-6 h-0.5 transition-all duration-300 ${
                    isMobileMenuOpen
                      ? 'rotate-45 translate-y-2 bg-brown-deep'
                      : isScrolled
                      ? 'bg-brown-deep'
                      : 'bg-white'
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 transition-all duration-300 ${
                    isMobileMenuOpen
                      ? 'opacity-0'
                      : isScrolled
                      ? 'bg-brown-deep'
                      : 'bg-white'
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 transition-all duration-300 ${
                    isMobileMenuOpen
                      ? '-rotate-45 -translate-y-2 bg-brown-deep'
                      : isScrolled
                      ? 'bg-brown-deep'
                      : 'bg-white'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[55] transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-cream z-[58] transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 pb-8 px-6">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-medium text-brown-deep hover:text-rose-gold hover:bg-rose-gold/5 rounded-xl transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-3">
            <Link
              href="tel:01023957347"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-rose-gold text-white rounded-full font-medium transition-colors hover:bg-rose-dark"
              style={{ minHeight: 48 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              010-2395-7347
            </Link>
            <div className="text-center text-xs text-brown-light">
              매일 10:00 - 22:00 운영
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
