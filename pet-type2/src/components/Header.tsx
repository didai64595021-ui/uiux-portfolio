'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: '퍼피 매칭', href: '/quiz' },
  { label: '분양 중', href: '/puppies' },
  { label: '견종 탐색', href: '/#breeds' },
  { label: '후기', href: '/reviews' },
  { label: '상담하기', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-sage/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-mint to-emerald-600 flex items-center justify-center shadow-lg shadow-mint/30 group-hover:shadow-mint/50 transition-shadow">
                <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor">
                  <path d="M4.5 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm15 0a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM12 21c-4.5 0-8-3-8-7.5 0-3 2-5.5 4-6.5.5-.25 1 .1 1 .65v1.5c0 .35.15.65.4.85L12 12l2.6-2.5c.25-.2.4-.5.4-.85v-1.5c0-.55.5-.9 1-.65 2 1 4 3.5 4 6.5 0 4.5-3.5 7.5-8 7.5z"/>
                </svg>
              </div>
              <div>
                <span className={`font-display font-bold text-base sm:text-lg tracking-tight transition-colors ${scrolled ? 'text-sage' : 'text-white'}`}>
                  Signature Pups
                </span>
                <span className={`hidden sm:block text-[10px] tracking-widest uppercase transition-colors ${scrolled ? 'text-sage/50' : 'text-white/60'}`}>
                  Premium Pet Adoption
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-mint/10 ${
                    scrolled ? 'text-sage/70 hover:text-sage' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="ml-3 px-5 py-2.5 bg-gradient-to-r from-mint to-emerald-500 text-white rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-mint/30 transition-all hover:scale-105"
              >
                무료 상담
              </Link>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-12 h-12 flex items-center justify-center rounded-xl transition-colors relative z-[60]"
              aria-label="메뉴"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`block h-0.5 rounded-full transition-all duration-300 ${
                    isOpen
                      ? 'bg-white rotate-45 translate-y-[9px]'
                      : scrolled ? 'bg-sage' : 'bg-white'
                  }`}
                />
                <span
                  className={`block h-0.5 rounded-full transition-all duration-300 ${
                    isOpen
                      ? 'opacity-0 scale-0'
                      : scrolled ? 'bg-sage' : 'bg-white'
                  }`}
                />
                <span
                  className={`block h-0.5 rounded-full transition-all duration-300 ${
                    isOpen
                      ? 'bg-white -rotate-45 -translate-y-[9px]'
                      : scrolled ? 'bg-sage' : 'bg-white'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-sage/60 backdrop-blur-sm z-[55] lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-sage z-[58] lg:hidden flex flex-col"
            >
              <div className="pt-24 px-6 flex-1 flex flex-col">
                <nav className="flex flex-col gap-2">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-4 text-white/80 hover:text-mint text-lg font-medium rounded-xl hover:bg-white/5 transition-all"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <div className="mt-auto pb-8">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-6 py-4 bg-gradient-to-r from-mint to-emerald-500 text-white rounded-2xl font-semibold text-lg"
                  >
                    무료 상담 신청
                  </Link>
                  <div className="mt-6 text-center">
                    <p className="text-white/40 text-sm">매일 10:00 - 22:00</p>
                    <a href="tel:01023957347" className="text-mint text-lg font-semibold mt-1 block">
                      010-2395-7347
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
