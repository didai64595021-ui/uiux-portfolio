"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { getTreatmentById, treatments } from "@/data/treatments";
import SectionHeader from "@/components/SectionHeader";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ComparisonMatrix from "@/components/ComparisonMatrix";
import JourneyTimeline from "@/components/JourneyTimeline";
import ScrollAnimator from "@/components/ScrollAnimator";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function TreatmentDetailPage() {
  const { t, lang } = useLanguage();
  const params = useParams();
  const treatment = getTreatmentById(params.id as string);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!treatment) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-primary mb-4">
            {t('시술 정보를 찾을 수 없습니다', '找不到療程資訊')}
          </h1>
          <Link
            href="/"
            className="text-accent-dark hover:underline text-sm"
          >
            {t('메인으로 돌아가기', '返回首頁')}
          </Link>
        </div>
      </div>
    );
  }

  const painLabels = lang === 'ko'
    ? ["", "매우 약함", "약함", "보통", "강함", "매우 강함"]
    : ["", "非常輕微", "輕微", "一般", "強烈", "非常強烈"];
  const comparisonIds = [treatment.id, ...treatment.comparisons];

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Link
                href="/"
                className="text-white/40 text-xs hover:text-white/60 transition-colors"
              >
                {t('홈', '首頁')}
              </Link>
              <span className="text-white/20">/</span>
              <span className="text-white/40 text-xs">{t('시술안내', '療程介紹')}</span>
              <span className="text-white/20">/</span>
              <span className="text-accent text-xs">{treatment.name}</span>
            </div>

            <span className="text-4xl mb-4 block">{treatment.icon}</span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              {treatment.name}
            </h1>
            <p className="text-accent/80 text-sm mt-1">
              {treatment.nameEn}
            </p>
            <p className="mt-4 text-white/60 text-sm sm:text-base korean-text max-w-xl">
              {treatment.description}
            </p>

            {/* Quick Stats */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: t("시술 시간", "療程時間"), value: treatment.duration },
                { label: t("권장 횟수", "建議次數"), value: treatment.sessions },
                { label: t("다운타임", "恢復期"), value: treatment.downtime },
                {
                  label: t("통증", "疼痛感"),
                  value: painLabels[treatment.painLevel],
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4"
                >
                  <p className="text-[10px] sm:text-xs text-white/40">
                    {stat.label}
                  </p>
                  <p className="text-sm sm:text-base text-white font-medium mt-0.5">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-accent text-primary font-semibold text-sm hover:bg-accent-dark hover:text-white transition-all min-h-[48px]"
              >
                {t('이 시술 예약하기', '預約此療程')}
              </Link>
              <Link
                href="/quiz"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-white/20 text-white text-sm hover:bg-white/10 transition-all min-h-[48px]"
              >
                {t('AI 피부진단으로 확인', '透過AI膚質檢測確認')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimator>
            <SectionHeader
              subtitle="Process"
              title={t('시술 과정', '療程流程')}
              description={t(
                '체계적인 과정으로 안전하고 효과적인 시술을 제공합니다.',
                '透過系統化的流程，提供安全且有效的療程。'
              )}
            />
          </ScrollAnimator>

          <ScrollAnimator>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {treatment.process.map((step) => (
                <div
                  key={step.step}
                  className="relative bg-white rounded-2xl p-5 sm:p-6 border border-gray-warm/50"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {step.step}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium text-primary text-sm">
                        {step.title}
                      </h3>
                      <p className="text-[10px] text-gray-cool">
                        {step.duration}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm korean-text text-gray-cool">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimator>
            <SectionHeader
              subtitle="Before & After"
              title={t('시술 전후 비교', '療程前後對比')}
              description={t(
                '슬라이더를 드래그하여 시술 전후 변화를 직접 확인해보세요.',
                '拖動滑桿親自確認療程前後的變化。'
              )}
            />
          </ScrollAnimator>

          <ScrollAnimator>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8">
              {treatment.beforeAfter.map((ba, index) => (
                <BeforeAfterSlider
                  key={index}
                  label={`${ba.label} (${ba.sessions}${t('회차', '次')})`}
                />
              ))}
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimator>
            <SectionHeader
              subtitle="Treatment Journey"
              title={t('시술 여정', '療程旅程')}
              description={t(
                '회차별 변화 과정을 한눈에 확인하세요.',
                '一目了然確認每次療程的變化過程。'
              )}
            />
          </ScrollAnimator>

          <ScrollAnimator>
            <JourneyTimeline
              steps={treatment.journey}
              treatmentName={treatment.name}
            />
          </ScrollAnimator>
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimator>
            <SectionHeader
              subtitle="Comparison"
              title={t('시술 비교', '療程比較')}
              description={t(
                '비슷한 효과의 시술들을 비교하고 최적의 선택을 하세요.',
                '比較相似效果的療程，做出最佳選擇。'
              )}
            />
          </ScrollAnimator>

          <ScrollAnimator>
            <ComparisonMatrix treatmentIds={comparisonIds} />
          </ScrollAnimator>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimator>
            <SectionHeader
              subtitle="FAQ"
              title={t('자주 묻는 질문', '常見問題')}
            />
          </ScrollAnimator>

          <ScrollAnimator>
            <div className="space-y-3">
              {treatment.faq.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-warm/50 overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left min-h-[48px]"
                  >
                    <span className="text-sm sm:text-base font-medium text-primary pr-4 korean-text">
                      {item.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-cool flex-shrink-0 transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                      <p className="text-sm korean-text text-gray-cool leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* Other Treatments */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimator>
            <SectionHeader
              subtitle="More Treatments"
              title={t('다른 시술도 확인해보세요', '查看其他療程')}
            />
          </ScrollAnimator>

          <ScrollAnimator>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {treatments
                .filter((tr) => tr.id !== treatment.id)
                .slice(0, 4)
                .map((tr) => (
                  <Link
                    key={tr.id}
                    href={`/treatments/${tr.id}`}
                    className="bg-bg rounded-xl p-4 sm:p-5 border border-gray-warm/50 hover:border-accent/50 hover:shadow-md transition-all group"
                  >
                    <span className="text-2xl block mb-2">{tr.icon}</span>
                    <h3 className="text-sm font-medium text-primary group-hover:text-accent-dark transition-colors">
                      {tr.name}
                    </h3>
                    <p className="text-[10px] text-gray-cool mt-0.5">
                      {tr.nameEn}
                    </p>
                  </Link>
                ))}
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-white mb-3">
            {treatment.name} {t('상담 예약', '諮詢預約')}
          </h2>
          <p className="text-white/60 text-sm korean-text mb-6">
            {t(
              '전문의가 직접 상담하고, 피부 상태에 맞는 최적의 시술 계획을 세워드립니다.',
              '由專科醫師親自諮詢，為您制定最適合膚質狀況的療程計畫。'
            )}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent text-primary font-semibold text-sm hover:bg-accent-dark hover:text-white transition-all min-h-[48px]"
            >
              {t('예약 상담하기', '預約諮詢')}
            </Link>
            <a
              href="tel:02-1234-5678"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-white text-sm hover:bg-white/10 transition-all min-h-[48px]"
            >
              {t('전화 문의 02-1234-5678', '電話諮詢 02-1234-5678')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
