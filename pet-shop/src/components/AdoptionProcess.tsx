'use client';

import SectionTitle from './SectionTitle';
import { adoptionProcess } from '@/data';

const icons: Record<string, JSX.Element> = {
  phone: (
    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  store: (
    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  health: (
    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  contract: (
    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  care: (
    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
};

export default function AdoptionProcess() {
  return (
    <section id="process" className="section-padding bg-gradient-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-gold/30 to-transparent" />
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-rose-gold/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-rose-gold/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          subtitle="Adoption Process"
          titleEn="5 Steps to Your New Family"
          title="분양 절차 안내"
          description="체계적인 5단계 분양 절차로 건강하고 행복한 만남을 약속합니다"
          light
        />

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connection line */}
          <div className="absolute top-16 left-0 right-0 h-px bg-rose-gold/20" />

          <div className="grid grid-cols-5 gap-6">
            {adoptionProcess.map((step, index) => (
              <div key={step.step} className="relative text-center">
                {/* Step number circle */}
                <div className="relative z-10 w-32 h-32 mx-auto mb-6 rounded-full bg-brown-medium/50 border border-rose-gold/30 flex flex-col items-center justify-center group hover:border-rose-gold/60 hover:bg-brown-medium/80 transition-all duration-500">
                  <div className="text-rose-gold mb-2">
                    {icons[step.icon]}
                  </div>
                  <span className="font-luxury text-xs text-rose-light/60 italic">
                    Step {step.step}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold text-base mb-1">
                  {step.title}
                </h3>
                <p className="font-luxury text-rose-light/50 text-xs italic mb-3">
                  {step.titleEn}
                </p>
                <p className="korean-text text-white/60 text-xs leading-relaxed px-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {adoptionProcess.map((step, index) => (
            <div key={step.step} className="flex gap-4 sm:gap-6">
              {/* Left - icon */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-brown-medium/50 border border-rose-gold/30 flex items-center justify-center">
                  <div className="text-rose-gold scale-75 sm:scale-90">
                    {icons[step.icon]}
                  </div>
                </div>
                {index < adoptionProcess.length - 1 && (
                  <div className="w-px h-full bg-rose-gold/20 mt-2" />
                )}
              </div>

              {/* Right - content */}
              <div className="pb-6">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-luxury text-rose-light/50 text-xs italic">
                    Step {step.step}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-base sm:text-lg mb-1">
                  {step.title}
                </h3>
                <p className="font-luxury text-rose-light/40 text-xs italic mb-2">
                  {step.titleEn}
                </p>
                <p className="korean-text text-white/60 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <a
            href="tel:01023957347"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-rose-gold text-white font-medium rounded-full hover:bg-rose-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-gold/20"
            style={{ minHeight: 48 }}
          >
            분양 상담 예약하기
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
