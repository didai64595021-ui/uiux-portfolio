"use client";

import { useState } from "react";
import { routines } from "@/data/routines";
import SectionHeader from "@/components/SectionHeader";
import ScrollAnimator from "@/components/ScrollAnimator";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export default function RoutinePage() {
  const { t } = useLanguage();
  const [selectedConcern, setSelectedConcern] = useState<string | null>(null);
  const selectedRoutine = selectedConcern
    ? routines.find((r) => r.id === selectedConcern)
    : null;

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent text-xs sm:text-sm tracking-[0.2em] uppercase font-medium mb-3">
            Skincare Routine Builder
          </p>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
            {t('맞춤 스킨케어 루틴', '專屬護膚流程')}
          </h1>
          <p className="mt-4 text-white/60 text-sm sm:text-base korean-text max-w-lg mx-auto">
            {t(
              '피부 고민을 선택하면, 시술 효과를 극대화하는 AM/PM 스킨케어 루틴을 추천해 드립니다.',
              '選擇您的膚質困擾，我們將為您推薦可最大化療程效果的AM/PM護膚流程。'
            )}
          </p>
        </div>
      </section>

      {/* Concern Selection */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimator>
            <SectionHeader
              subtitle="Step 1"
              title={t('피부 고민을 선택하세요', '請選擇您的膚質困擾')}
              description={t(
                '관심 있는 피부 고민을 선택하면 맞춤 루틴을 안내합니다.',
                '選擇您關心的膚質困擾，我們將為您推薦專屬護膚流程。'
              )}
            />
          </ScrollAnimator>

          <ScrollAnimator>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              {routines.map((routine) => (
                <button
                  key={routine.id}
                  onClick={() => setSelectedConcern(routine.id)}
                  className={`text-left p-5 sm:p-6 rounded-2xl border-2 transition-all min-h-[48px] ${
                    selectedConcern === routine.id
                      ? "border-primary bg-primary/5 shadow-lg"
                      : "border-gray-warm/50 bg-white hover:border-accent/50 hover:shadow-md"
                  }`}
                >
                  <h3
                    className={`font-serif text-lg sm:text-xl ${
                      selectedConcern === routine.id
                        ? "text-primary"
                        : "text-text"
                    }`}
                  >
                    {routine.title}
                  </h3>
                  <p className="text-xs text-accent-dark mt-0.5">
                    {routine.concern}
                  </p>
                  <p className="text-sm korean-text text-gray-cool mt-2">
                    {routine.description}
                  </p>
                </button>
              ))}
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* Selected Routine */}
      {selectedRoutine && (
        <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimator>
              <SectionHeader
                subtitle="Step 2"
                title={selectedRoutine.title}
                description={selectedRoutine.description}
              />
            </ScrollAnimator>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* AM Routine */}
              <ScrollAnimator>
                <div className="bg-bg rounded-2xl p-6 sm:p-8 border border-gray-warm/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-amber-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-primary">
                        {t('AM 모닝 루틴', 'AM 早晨護膚')}
                      </h3>
                      <p className="text-xs text-gray-cool">
                        {selectedRoutine.am.length} Steps
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {selectedRoutine.am.map((product) => (
                      <div
                        key={product.order}
                        className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-warm/30"
                      >
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-primary">
                            {product.order}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h4 className="text-sm font-medium text-primary">
                                {product.name}
                              </h4>
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent-dark">
                                {product.type}
                              </span>
                            </div>
                          </div>
                          <p className="text-xs korean-text text-gray-cool mt-1.5">
                            {product.description}
                          </p>
                          <p className="text-[10px] text-accent-dark mt-1">
                            Key: {product.keyIngredient}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimator>

              {/* PM Routine */}
              <ScrollAnimator>
                <div className="bg-bg rounded-2xl p-6 sm:p-8 border border-gray-warm/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-indigo-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-primary">
                        {t('PM 나이트 루틴', 'PM 夜間護膚')}
                      </h3>
                      <p className="text-xs text-gray-cool">
                        {selectedRoutine.pm.length} Steps
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {selectedRoutine.pm.map((product) => (
                      <div
                        key={product.order}
                        className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-warm/30"
                      >
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-primary">
                            {product.order}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h4 className="text-sm font-medium text-primary">
                                {product.name}
                              </h4>
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent-dark">
                                {product.type}
                              </span>
                            </div>
                          </div>
                          <p className="text-xs korean-text text-gray-cool mt-1.5">
                            {product.description}
                          </p>
                          <p className="text-[10px] text-accent-dark mt-1">
                            Key: {product.keyIngredient}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimator>
            </div>

            {/* Tip */}
            <ScrollAnimator>
              <div className="mt-8 bg-accent/5 border border-accent/20 rounded-2xl p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-accent-dark"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-primary mb-1">
                      {t('전문의 팁', '專科醫師建議')}
                    </h4>
                    <p className="text-sm korean-text text-gray-cool">
                      {t(
                        '시술 직후에는 자극적인 성분(레티놀, AHA/BHA 등)의 사용을 피하고, 보습과 자외선 차단에 집중해주세요. 구체적인 시술 후 관리 루틴은 담당 전문의와 상담하시길 권합니다.',
                        '療程後請避免使用刺激性成分（視黃醇、AHA/BHA等），專注於保濕和防曬。具體的療程後護理流程，建議與主治醫師諮詢。'
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimator>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-white mb-3">
            {t('시술과 함께 더 큰 효과를', '搭配療程獲得更大效果')}
          </h2>
          <p className="text-white/60 text-sm korean-text mb-6">
            {t(
              '스킨케어 루틴과 전문 시술을 병행하면 시너지 효과를 얻을 수 있습니다.',
              '結合護膚流程和專業療程，可以獲得加乘效果。'
            )}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent text-primary font-semibold text-sm hover:bg-accent-dark hover:text-white transition-all min-h-[48px]"
            >
              {t('AI 피부진단 받기', 'AI膚質檢測')}
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
