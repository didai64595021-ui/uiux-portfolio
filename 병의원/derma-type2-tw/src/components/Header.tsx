"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Header() {
  const { t, lang, toggleLang } = useLanguage();

  const navLinks = [
    { href: "/quiz", label: t("AI 피부진단", "AI 膚質診斷") },
    { href: "/treatments/laser-toning", label: t("시술안내", "療程介紹") },
    { href: "/cases", label: t("시술사례", "療程案例") },
    { href: "/doctors", label: t("의료진", "醫療團隊") },
    { href: "/routine", label: t("스킨케어", "護膚保養") },
    { href: "/booking", label: t("예약상담", "預約諮詢") },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const showSolid = !isHome || scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[56] transition-all duration-300 ${
          showSolid
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  showSolid ? "bg-primary" : "bg-white/20 backdrop-blur-sm"
                }`}
              >
                <span className="text-white text-sm font-bold">O</span>
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-lg font-bold tracking-tight transition-colors ${
                    showSolid ? "text-primary" : "text-white"
                  }`}
                >
                  ONDA
                </span>
                <span
                  className={`text-[10px] tracking-widest -mt-1 transition-colors ${
                    showSolid ? "text-gray-cool" : "text-white/70"
                  }`}
                >
                  DERMATOLOGY
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href.startsWith("/treatments") &&
                    pathname.startsWith("/treatments"));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      isActive
                        ? showSolid
                          ? "bg-primary text-white"
                          : "bg-white/20 text-white backdrop-blur-sm"
                        : showSolid
                        ? "text-text hover:bg-gray-warm/50"
                        : "text-white/90 hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button + Lang Toggle (desktop) */}
            <div className="hidden lg:flex items-center gap-2">
              <button
                onClick={toggleLang}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                  showSolid
                    ? "border-primary/20 text-primary hover:bg-primary/5"
                    : "border-white/30 text-white hover:bg-white/10"
                }`}
              >
                {lang === 'ko' ? '繁中' : '한국어'}
              </button>
              <Link
                href="/booking"
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  showSolid
                    ? "bg-accent text-primary hover:bg-accent-dark hover:text-white"
                    : "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
                }`}
              >
                {t('온라인 예약', '線上預約')}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden w-12 h-12 flex items-center justify-center rounded-lg transition-colors z-[60] ${
                isOpen
                  ? "bg-primary-dark"
                  : showSolid
                  ? "bg-gray-warm/50"
                  : "bg-white/10"
              }`}
              aria-label={t("메뉴 열기", "開啟選單")}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block h-0.5 rounded-full transition-all duration-300 ${
                    isOpen
                      ? "bg-white rotate-45 translate-y-[7px]"
                      : showSolid
                      ? "bg-primary"
                      : "bg-white"
                  }`}
                />
                <span
                  className={`block h-0.5 rounded-full transition-all duration-300 ${
                    isOpen
                      ? "opacity-0"
                      : showSolid
                      ? "bg-primary"
                      : "bg-white"
                  }`}
                />
                <span
                  className={`block h-0.5 rounded-full transition-all duration-300 ${
                    isOpen
                      ? "bg-white -rotate-45 -translate-y-[7px]"
                      : showSolid
                      ? "bg-primary"
                      : "bg-white"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[55] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-primary z-[58] transform transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-24 px-6 pb-8 h-full flex flex-col">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href.startsWith("/treatments") &&
                  pathname.startsWith("/treatments"));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3.5 rounded-xl text-base font-medium transition-colors min-h-[48px] flex items-center ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto">
            <button
              onClick={toggleLang}
              className="w-full py-3 mb-3 rounded-xl border border-white/20 text-white text-center font-medium text-sm min-h-[48px] hover:bg-white/10 transition-colors"
            >
              {lang === 'ko' ? '繁體中文' : '한국어 (Korean)'}
            </button>
            <Link
              href="/booking"
              className="block w-full py-4 rounded-xl bg-accent text-primary text-center font-semibold text-base min-h-[48px]"
            >
              {t('온라인 예약하기', '線上預約')}
            </Link>
            <div className="mt-6 text-white/50 text-sm text-center">
              <p>ONDA DERMATOLOGY</p>
              <p className="mt-1">02-1234-5678</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
