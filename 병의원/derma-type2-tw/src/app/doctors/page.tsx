"use client";

import { doctors } from "@/data/doctors";
import SectionHeader from "@/components/SectionHeader";
import ScrollAnimator from "@/components/ScrollAnimator";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export default function DoctorsPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent text-xs sm:text-sm tracking-[0.2em] uppercase font-medium mb-3">
            Medical Team
          </p>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
            {t('전문 의료진', '專業醫療團隊')}
          </h1>
          <p className="mt-4 text-white/60 text-sm sm:text-base korean-text max-w-lg mx-auto">
            {t(
              '대학병원 출신 피부과 전문의들이 직접 진료합니다. 환자 한 분 한 분에게 최적화된 치료를 약속합니다.',
              '大學醫院出身的皮膚科專科醫師親自診療。我們承諾為每位患者提供最佳化的治療。'
            )}
          </p>
        </div>
      </section>

      {/* Doctor Profiles */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 sm:space-y-24">
            {doctors.map((doctor, index) => (
              <ScrollAnimator key={doctor.id}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    index % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Photo */}
                  <div
                    className={`${index % 2 === 1 ? "lg:order-2" : ""}`}
                  >
                    <div className="aspect-[3/4] max-w-md mx-auto lg:max-w-none rounded-2xl bg-gradient-to-br from-primary/5 to-accent-light/20 flex items-center justify-center relative overflow-hidden">
                      <div className="text-center z-10">
                        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                          <span className="text-5xl sm:text-6xl font-serif text-primary/30">
                            {doctor.name[0]}
                          </span>
                        </div>
                        <p className="text-sm text-gray-cool">
                          {t(doctor.title, doctor.titleZh)}
                        </p>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-bg to-transparent" />
                    </div>
                  </div>

                  {/* Info */}
                  <div
                    className={`${index % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary">
                        {t(doctor.name, doctor.nameZh)}
                      </h2>
                      <span className="px-3 py-1 rounded-full bg-accent/10 text-accent-dark text-xs font-medium">
                        {t(doctor.title, doctor.titleZh)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-cool mb-4">
                      {t(doctor.specialty, doctor.specialtyZh)}
                    </p>

                    {/* Philosophy */}
                    <blockquote className="border-l-2 border-accent pl-4 py-1 mb-6">
                      <p className="text-sm sm:text-base korean-text text-primary/80 italic">
                        &quot;{t(doctor.philosophy, doctor.philosophyZh)}&quot;
                      </p>
                    </blockquote>

                    <p className="text-sm korean-text text-gray-cool mb-6">
                      {t(doctor.bio, doctor.bioZh)}
                    </p>

                    {/* Education */}
                    <div className="mb-5">
                      <h3 className="text-xs font-semibold text-primary/60 uppercase tracking-wider mb-3">
                        Education
                      </h3>
                      <ul className="space-y-2">
                        {doctor.education.map((edu, i) => (
                          <li
                            key={edu}
                            className="flex items-start gap-2 text-sm text-gray-cool"
                          >
                            <svg
                              className="w-4 h-4 text-accent mt-0.5 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {t(edu, doctor.educationZh[i])}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Certifications */}
                    <div className="mb-5">
                      <h3 className="text-xs font-semibold text-primary/60 uppercase tracking-wider mb-3">
                        Certifications
                      </h3>
                      <ul className="space-y-2">
                        {doctor.certifications.map((cert, i) => (
                          <li
                            key={cert}
                            className="flex items-start gap-2 text-sm text-gray-cool"
                          >
                            <svg
                              className="w-4 h-4 text-primary/30 mt-0.5 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {t(cert, doctor.certificationsZh[i])}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialties.map((s, i) => (
                        <span
                          key={s}
                          className="text-xs px-3 py-1.5 rounded-full bg-primary/5 text-primary/70 border border-primary/10"
                        >
                          {t(s, doctor.specialtiesZh[i])}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6">
                      <Link
                        href="/booking"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors min-h-[44px]"
                      >
                        {t(`${doctor.name} 원장 상담 예약`, `預約${doctor.nameZh}院長諮詢`)}
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimator>
            <SectionHeader
              subtitle="Trust"
              title={t('ONDA 피부과가 특별한 이유', 'ONDA皮膚科的獨特之處')}
            />
          </ScrollAnimator>

          <ScrollAnimator>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  ),
                  title: t("전원 전문의", "全員專科醫師"),
                  desc: t("대학병원 출신 피부과 전문의만이 진료합니다", "僅由大學醫院出身的皮膚科專科醫師診療"),
                },
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  ),
                  title: t("정품 보증", "正品保證"),
                  desc: t("모든 시술 재료는 정품만을 사용합니다", "所有療程材料均使用正品"),
                },
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                  ),
                  title: t("맞춤 치료", "客製化治療"),
                  desc: t("AI 진단 기반 개인별 최적화 치료 프로토콜", "基於AI診斷的個人化最佳治療方案"),
                },
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  ),
                  title: t("사후 관리", "術後管理"),
                  desc: t("시술 후 전담 관리 시스템으로 철저한 케어", "療程後專責管理系統提供完善照護"),
                },
              ].map((badge) => (
                <div
                  key={badge.title}
                  className="text-center p-6 rounded-2xl bg-bg border border-gray-warm/50"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3 text-primary">
                    {badge.icon}
                  </div>
                  <h3 className="font-medium text-primary text-sm mb-1">
                    {badge.title}
                  </h3>
                  <p className="text-xs text-gray-cool korean-text">
                    {badge.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-white mb-3">
            {t('전문의 상담 예약', '專科醫師諮詢預約')}
          </h2>
          <p className="text-white/60 text-sm korean-text mb-6">
            {t(
              '피부 고민을 전문의에게 직접 상담받으세요.',
              '直接向專科醫師諮詢您的膚質困擾。'
            )}
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent text-primary font-semibold text-sm hover:bg-accent-dark hover:text-white transition-all min-h-[48px]"
          >
            {t('예약 상담하기', '預約諮詢')}
          </Link>
        </div>
      </section>
    </div>
  );
}
