"use client";

import Link from "next/link";
import { treatments } from "@/data/treatments";
import { doctors } from "@/data/doctors";
import SectionHeader from "@/components/SectionHeader";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import JourneyTimeline from "@/components/JourneyTimeline";
import ScrollAnimator from "@/components/ScrollAnimator";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center bg-primary overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary" />
          <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-accent/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-gradient-to-tr from-accent/3 to-transparent" />
          {/* Decorative circles */}
          <div className="absolute top-[15%] right-[10%] w-64 h-64 rounded-full border border-white/5" />
          <div className="absolute top-[20%] right-[12%] w-48 h-48 rounded-full border border-white/5" />
          <div className="absolute bottom-[20%] left-[5%] w-32 h-32 rounded-full bg-accent/5" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 sm:py-32">
          <div className="max-w-3xl">
            <p className="text-accent text-xs sm:text-sm tracking-[0.3em] uppercase font-medium mb-4 sm:mb-6">
              Premium Skin Clinic
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.15]">
              {t('AI가 분석하는', 'AI分析的')}
              <br />
              <span className="text-accent">{t('나만의', '專屬')}</span> {t('피부 솔루션', '膚質方案')}
            </h1>
            <p className="mt-5 sm:mt-6 text-white/60 text-sm sm:text-base md:text-lg korean-text max-w-xl">
              {t(
                '첨단 AI 피부 진단으로 당신의 피부를 과학적으로 분석하고, 맞춤형 프리미엄 시술 플랜을 제안합니다.',
                '透過尖端AI膚質診斷，科學分析您的膚質，為您量身打造頂級療程方案。'
              )}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/quiz"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent text-primary font-semibold text-sm sm:text-base hover:bg-accent-dark hover:text-white transition-all min-h-[48px] w-full sm:w-auto"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                {t('무료 AI 피부진단 시작', '免費AI膚質檢測')}
              </Link>
              <Link
                href="/booking"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-white font-medium text-sm sm:text-base hover:bg-white/10 transition-all min-h-[48px] w-full sm:w-auto"
              >
                {t('예약 상담하기', '預約諮詢')}
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 sm:mt-16 flex gap-8 sm:gap-12">
              {[
                { value: "15,000+", label: t("누적 시술 건수", "累計療程次數") },
                { value: "98.5%", label: t("만족도", "滿意度") },
                { value: "12+", label: t("전문의 경력(년)", "專科醫師年資") },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-xl sm:text-2xl md:text-3xl font-serif text-accent">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-white/40 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/30 text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* Treatment Comparison Preview */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimator>
            <SectionHeader
              subtitle="Treatments"
              title={t('나에게 맞는 시술은?', '適合我的療程是？')}
              description={t(
                '같은 고민이라도 최적의 시술은 다릅니다. 시술별 차이를 한눈에 비교하고, 나에게 딱 맞는 솔루션을 찾아보세요.',
                '即使是相同的煩惱，最適合的療程也不同。一目了然比較各療程差異，找到最適合您的方案。'
              )}
            />
          </ScrollAnimator>

          <ScrollAnimator>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {treatments.slice(0, 4).map((tr) => (
                <Link
                  key={tr.id}
                  href={`/treatments/${tr.id}`}
                  className="group bg-white rounded-2xl p-5 sm:p-6 border border-gray-warm/50 hover:border-accent/50 hover:shadow-xl transition-all"
                >
                  <span className="text-3xl block mb-3">{tr.icon}</span>
                  <h3 className="font-serif text-lg sm:text-xl text-primary group-hover:text-accent-dark transition-colors">
                    {tr.name}
                  </h3>
                  <p className="text-xs text-gray-cool mt-1 mb-3">
                    {tr.nameEn}
                  </p>
                  <p className="text-sm korean-text text-gray-cool line-clamp-2">
                    {tr.shortDesc}
                  </p>

                  {/* Quick Stats */}
                  <div className="mt-4 pt-4 border-t border-gray-warm/50 grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-[10px] text-gray-cool">{t('시술시간', '療程時間')}</p>
                      <p className="text-xs font-medium text-primary">
                        {tr.duration}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-cool">{t('다운타임', '恢復期')}</p>
                      <p className="text-xs font-medium text-primary">
                        {tr.downtime}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center text-sm text-accent-dark font-medium">
                    {t('자세히 보기', '詳細了解')}
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollAnimator>

          {/* More Treatments */}
          <ScrollAnimator>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {treatments.slice(4).map((tr) => (
                <Link
                  key={tr.id}
                  href={`/treatments/${tr.id}`}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-warm/50 hover:border-accent/50 hover:shadow-md transition-all min-h-[48px]"
                >
                  <span className="text-xl">{tr.icon}</span>
                  <div>
                    <p className="text-sm font-medium text-primary">
                      {tr.name}
                    </p>
                    <p className="text-[10px] text-gray-cool">
                      {tr.nameEn}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* Before/After Slider Showcase */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimator>
            <SectionHeader
              subtitle="Before & After"
              title={t('시술 전후 비교', '療程前後對比')}
              description={t(
                '드래그하여 시술 전후 변화를 직접 확인해보세요. 실제 환자 사례를 기반으로 한 결과입니다.',
                '拖動滑桿親自確認療程前後的變化。結果基於實際患者案例。'
              )}
            />
          </ScrollAnimator>

          <ScrollAnimator>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8">
              <BeforeAfterSlider label={t('레이저토닝 8회차 - 기미 개선', '雷射嫩膚第8次 - 斑點改善')} />
              <BeforeAfterSlider label={t('피코레이저 5회차 - 색소 제거', '皮秒雷射第5次 - 色素去除')} />
            </div>
          </ScrollAnimator>

          <ScrollAnimator>
            <div className="mt-8 text-center">
              <Link
                href="/cases"
                className="inline-flex items-center px-6 py-3 rounded-full border border-primary/20 text-primary text-sm font-medium hover:bg-primary hover:text-white transition-all min-h-[44px]"
              >
                {t('모든 시술 사례 보기', '查看所有療程案例')}
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* Doctor Profiles */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimator>
            <SectionHeader
              subtitle="Medical Team"
              title={t('전문 의료진', '專業醫療團隊')}
              description={t(
                '대학병원 출신 피부과 전문의들이 직접 진료하고 시술합니다.',
                '大學醫院出身的皮膚科專科醫師親自診療與治療。'
              )}
            />
          </ScrollAnimator>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doctor) => (
              <ScrollAnimator key={doctor.id}>
                <Link
                  href="/doctors"
                  className="group block bg-white rounded-2xl overflow-hidden border border-gray-warm/50 hover:shadow-xl transition-all"
                >
                  {/* Doctor Image Placeholder */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-accent-light/20 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center z-10">
                      <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <span className="text-3xl font-serif text-primary/40">
                          {doctor.name[0]}
                        </span>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/80 to-transparent" />
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-serif text-xl text-primary">
                        {doctor.name}
                      </h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent-dark">
                        {doctor.title}
                      </span>
                    </div>
                    <p className="text-sm text-gray-cool mb-3">
                      {doctor.specialty}
                    </p>
                    <p className="text-sm korean-text text-gray-cool/80 line-clamp-2">
                      &quot;{doctor.philosophy}&quot;
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {doctor.specialties.map((s) => (
                        <span
                          key={s}
                          className="text-[10px] px-2 py-1 rounded-full bg-primary/5 text-primary/70"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimator>
            <SectionHeader
              subtitle="Treatment Journey"
              title={t('시술 여정 타임라인', '療程旅程時間線')}
              description={t(
                '회차별 변화 과정을 미리 확인해보세요. 레이저토닝 시술 여정 예시입니다.',
                '提前了解每次療程的變化過程。以雷射嫩膚療程旅程為例。'
              )}
            />
          </ScrollAnimator>

          <ScrollAnimator>
            <JourneyTimeline
              steps={treatments[0].journey}
              treatmentName={treatments[0].name}
            />
          </ScrollAnimator>
        </div>
      </section>

      {/* Skincare Routine Teaser */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollAnimator>
              <div>
                <p className="text-accent text-xs sm:text-sm tracking-[0.2em] uppercase font-medium mb-3">
                  Skincare Routine
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                  {t('시술 효과를', '將療程效果')}
                  <br />
                  {t('극대화하는 루틴', '最大化的護膚流程')}
                </h2>
                <p className="mt-4 text-white/60 text-sm sm:text-base korean-text">
                  {t(
                    '시술만으로는 충분하지 않습니다. 당신의 피부 고민에 맞는 AM/PM 스킨케어 루틴으로 시술 효과를 유지하고 극대화하세요.',
                    '僅靠療程是不夠的。透過適合您膚質困擾的AM/PM護膚流程，維持並最大化療程效果。'
                  )}
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/routine"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-accent text-primary font-semibold text-sm hover:bg-accent-dark hover:text-white transition-all min-h-[48px]"
                  >
                    {t('맞춤 루틴 찾기', '尋找專屬護膚流程')}
                  </Link>
                  <Link
                    href="/quiz"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-all min-h-[48px]"
                  >
                    {t('피부진단 먼저 받기', '先做膚質檢測')}
                  </Link>
                </div>
              </div>
            </ScrollAnimator>

            <ScrollAnimator>
              <div className="grid grid-cols-2 gap-4">
                {/* AM Routine */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-amber-300/20 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-amber-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-white/80">
                      {t('AM 루틴', 'AM 護膚')}
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      t("클렌징", "潔面"),
                      t("세럼", "精華液"),
                      t("크림", "面霜"),
                      t("선크림", "防曬"),
                    ].map((step, i) => (
                      <div
                        key={step}
                        className="flex items-center gap-2 text-xs text-white/50"
                      >
                        <span className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-[10px]">
                          {i + 1}
                        </span>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>

                {/* PM Routine */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-indigo-300/20 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-indigo-300"
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
                    <span className="text-sm font-medium text-white/80">
                      {t('PM 루틴', 'PM 護膚')}
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      t("더블클렌징", "雙重潔面"),
                      t("토너", "化妝水"),
                      t("세럼", "精華液"),
                      t("앰플", "安瓶"),
                      t("크림", "面霜"),
                    ].map((step, i) => (
                      <div
                        key={step}
                        className="flex items-center gap-2 text-xs text-white/50"
                      >
                        <span className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-[10px]">
                          {i + 1}
                        </span>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimator>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimator>
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />
              <div className="relative z-10">
                <p className="text-accent text-xs sm:text-sm tracking-[0.2em] uppercase font-medium mb-3">
                  Start Your Journey
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                  {t('지금 시작하세요', '立即開始')}
                </h2>
                <p className="mt-4 text-white/60 text-sm sm:text-base korean-text max-w-lg mx-auto">
                  {t(
                    'AI 피부 진단으로 2분 만에 나에게 딱 맞는 시술을 찾고, 전문 의료진과의 상담을 예약하세요.',
                    '透過AI膚質診斷，2分鐘內找到最適合您的療程，並預約專業醫療團隊的諮詢。'
                  )}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                  <Link
                    href="/quiz"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent text-primary font-semibold text-sm sm:text-base hover:bg-accent-dark hover:text-white transition-all min-h-[48px]"
                  >
                    {t('무료 AI 피부진단', '免費AI膚質檢測')}
                  </Link>
                  <Link
                    href="/booking"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-white font-medium text-sm sm:text-base hover:bg-white/10 transition-all min-h-[48px]"
                  >
                    {t('바로 예약하기', '立即預約')}
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </section>
    </>
  );
}
