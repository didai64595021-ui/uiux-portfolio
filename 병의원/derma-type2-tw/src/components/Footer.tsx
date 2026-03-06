"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const treatmentLinks = [
    { href: "/treatments/laser-toning", label: t("레이저토닝", "雷射淨膚") },
    { href: "/treatments/pico-laser", label: t("피코레이저", "皮秒雷射") },
    { href: "/treatments/botox", label: t("보톡스", "肉毒桿菌") },
    { href: "/treatments/filler", label: t("필러", "玻尿酸填充") },
    { href: "/treatments/lifting", label: t("리프팅", "拉提療程") },
  ];

  const serviceLinks = [
    { href: "/quiz", label: t("AI 피부진단", "AI 膚質診斷") },
    { href: "/cases", label: t("시술사례", "療程案例") },
    { href: "/doctors", label: t("의료진 소개", "醫療團隊介紹") },
    { href: "/routine", label: t("스킨케어 루틴", "護膚保養程序") },
    { href: "/booking", label: t("예약상담", "預約諮詢") },
  ];

  return (
    <footer className="bg-primary text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <span className="text-primary text-sm font-bold">O</span>
              </div>
              <div>
                <p className="text-white font-bold text-lg tracking-tight">
                  ONDA
                </p>
                <p className="text-[10px] text-white/50 tracking-widest -mt-0.5">
                  DERMATOLOGY
                </p>
              </div>
            </div>
            <p className="text-sm korean-text leading-relaxed text-white/60">
              {t('과학적 진단과 프리미엄 시술로', '以科學診斷與頂級療程')}
              <br />
              {t('당신만의 아름다움을 완성합니다.', '打造專屬於您的美麗。')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">{t('시술안내', '療程介紹')}</h3>
            <ul className="space-y-2.5">
              {treatmentLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">{t('서비스', '服務項目')}</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">{t('오시는 길', '交通指南')}</h3>
            <div className="space-y-3 text-sm text-white/50">
              <p>{t('서울특별시 강남구 테헤란로 123', '首爾特別市 江南區 德黑蘭路 123')}</p>
              <p>{t('온다빌딩 4층', 'ONDA大樓 4樓')}</p>
              <div className="pt-2">
                <p className="text-white/70 font-medium">02-1234-5678</p>
                <p className="mt-1">{t('평일 10:00 ~ 19:00', '週一至週五 10:00 ~ 19:00')}</p>
                <p>{t('토요일 10:00 ~ 15:00', '週六 10:00 ~ 15:00')}</p>
                <p>{t('일요일, 공휴일 휴진', '週日及國定假日休診')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; 2026 ONDA DERMATOLOGY. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            {t('본 웹사이트는 포트폴리오 목적으로 제작되었습니다. Design by ONDA', '本網站僅供作品集展示用途。Design by ONDA')}
          </p>
        </div>
      </div>
    </footer>
  );
}
