"use client";

import { useState } from "react";
import { treatments, treatmentCategories } from "@/data/treatments";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ScrollAnimator from "@/components/ScrollAnimator";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export default function CasesPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTreatments =
    activeCategory === "all"
      ? treatments
      : treatments.filter((tr) => tr.category === activeCategory);

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent text-xs sm:text-sm tracking-[0.2em] uppercase font-medium mb-3">
            Before & After Gallery
          </p>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
            {t('시술 전후 사례', '療程前後案例')}
          </h1>
          <p className="mt-4 text-white/60 text-sm sm:text-base korean-text max-w-lg mx-auto">
            {t(
              '드래그 슬라이더로 시술 전후 변화를 직접 확인해보세요. 모든 사례는 실제 시술 결과를 기반으로 합니다.',
              '透過拖動滑桿親自確認療程前後的變化。所有案例均基於實際療程結果。'
            )}
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-16 sm:top-20 z-30 bg-bg/95 backdrop-blur-md border-b border-gray-warm/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide py-4">
            {treatmentCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all min-h-[40px] ${
                  activeCategory === cat.id
                    ? "bg-primary text-white"
                    : "bg-white text-gray-cool hover:bg-gray-warm/50 border border-gray-warm/50"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredTreatments.map((tr) => (
            <div key={tr.id} className="mb-16 last:mb-0">
              <ScrollAnimator>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{tr.icon}</span>
                  <div>
                    <h2 className="font-serif text-xl sm:text-2xl text-primary">
                      {tr.name}
                    </h2>
                    <p className="text-xs text-gray-cool">
                      {tr.nameEn} | {tr.category}
                    </p>
                  </div>
                  <Link
                    href={`/treatments/${tr.id}`}
                    className="ml-auto text-sm text-accent-dark hover:underline hidden sm:block"
                  >
                    {t('시술 상세 보기', '查看療程詳情')}
                  </Link>
                </div>
              </ScrollAnimator>

              <ScrollAnimator>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                  {tr.beforeAfter.map((ba, index) => (
                    <BeforeAfterSlider
                      key={index}
                      label={`${ba.label} (${ba.sessions}${t('회차', '次')})`}
                    />
                  ))}
                </div>
              </ScrollAnimator>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-white mb-3">
            {t('나도 이런 변화를 원한다면', '如果您也想要這樣的改變')}
          </h2>
          <p className="text-white/60 text-sm korean-text mb-6">
            {t(
              'AI 피부 진단으로 나에게 맞는 시술을 찾아보세요.',
              '透過AI膚質診斷找到適合您的療程。'
            )}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent text-primary font-semibold text-sm hover:bg-accent-dark hover:text-white transition-all min-h-[48px]"
            >
              {t('무료 AI 피부진단', '免費AI膚質檢測')}
            </Link>
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-white text-sm hover:bg-white/10 transition-all min-h-[48px]"
            >
              {t('예약 상담하기', '預約諮詢')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
