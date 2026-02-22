import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { adoptionProcess } from '@/data';

export const metadata = {
  title: '분양 절차 | 시그니처펍스 Signature Pups',
  description: '시그니처펍스의 체계적인 5단계 분양 절차를 안내합니다.',
};

const icons: Record<string, JSX.Element> = {
  phone: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  store: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  health: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  contract: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  care: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
};

const details = [
  {
    step: 'phone',
    detail: '전화(010-2395-7347) 또는 카카오톡으로 상담을 예약해 주세요. 원하시는 견종, 성별, 가족 구성원, 주거 환경 등을 상세히 상담해 드립니다. 첫 상담부터 전문 상담사가 1:1로 맞춤 안내를 진행합니다.',
    tips: ['견종별 특성과 관리 방법을 사전에 안내해 드립니다', '가족 환경에 맞는 견종을 추천해 드립니다', '분양 비용과 준비물을 안내해 드립니다'],
  },
  {
    step: 'store',
    detail: '위례점에 직접 방문하여 아이들을 만나보세요. 깨끗하고 쾌적한 환경에서 충분한 시간을 갖고 교감하실 수 있습니다. 전문 스태프가 견종별 특성과 성격을 상세히 설명해 드립니다.',
    tips: ['방문 전 예약을 권장합니다', '가족 구성원 모두 함께 방문하시면 좋습니다', '충분한 교감 시간을 가져보세요'],
  },
  {
    step: 'health',
    detail: '분양 전 전문 수의사의 종합 건강 검진을 실시합니다. 혈액검사, 신체검사, 유전자 검사를 통해 건강한 아이만을 분양합니다. 모든 예방접종 기록을 상세히 제공합니다.',
    tips: ['종합 건강 검진 결과를 투명하게 공개합니다', 'DHPPL, 코로나, 켄넬코프 등 필수 접종을 완료합니다', '유전 질환 검사를 실시합니다'],
  },
  {
    step: 'contract',
    detail: '투명한 계약 절차를 진행합니다. 건강 보증서, 백신 접종 기록, 혈통서(해당 시), 마이크로칩 정보 등 모든 관련 서류를 전달해 드립니다.',
    tips: ['건강 보증서를 발급해 드립니다', '필수 준비물 리스트를 제공합니다', '입양 후 케어 가이드북을 드립니다'],
  },
  {
    step: 'care',
    detail: '입양 후에도 평생 건강 관리를 지원합니다. 사료 추천, 미용 관리, 건강 상담, 행동 교정 등 프리미엄 사후 서비스를 제공합니다. 언제든 연락 주시면 전문 상담을 받으실 수 있습니다.',
    tips: ['평생 건강 상담 서비스를 제공합니다', '협력 동물병원 할인 혜택이 있습니다', '사료/용품 추천 서비스를 진행합니다'],
  },
];

export default function ProcessPage() {
  return (
    <main>
      <Header />

      {/* Hero Banner */}
      <section className="relative h-[50svh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=1920&q=80"
          alt="Adoption process"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-brown-deep/80" />
        <div className="relative z-10 text-center px-4">
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-rose-light/80 mb-3">
            Adoption Process
          </span>
          <h1 className="font-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold">
            분양 절차 안내
          </h1>
          <div className="gold-divider mt-4" />
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="korean-text text-brown-light text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              시그니처펍스는 체계적인 5단계 분양 절차를 통해<br className="hidden sm:block" />
              건강하고 행복한 만남을 약속합니다
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {adoptionProcess.map((step, index) => (
              <div
                key={step.step}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-gold/10 hover:border-rose-gold/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  {/* Icon */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-rose-gold/10 flex flex-col items-center justify-center text-rose-gold flex-shrink-0">
                    {icons[step.icon]}
                    <span className="font-luxury text-[10px] text-rose-gold/60 italic mt-1">
                      Step {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-brown-deep text-lg sm:text-xl mb-1">
                      {step.title}
                    </h3>
                    <p className="font-luxury text-rose-gold/50 text-xs italic mb-3">
                      {step.titleEn}
                    </p>
                    <p className="korean-text text-brown-light text-sm sm:text-base leading-relaxed mb-4">
                      {details[index].detail}
                    </p>

                    {/* Tips */}
                    <div className="space-y-2">
                      {details[index].tips.map((tip, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-rose-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <p className="korean-text text-brown-light/70 text-xs sm:text-sm">
                            {tip}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Connector */}
                {index < adoptionProcess.length - 1 && (
                  <div className="flex justify-center mt-6">
                    <svg className="w-4 h-8 text-rose-gold/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <p className="korean-text text-brown-light text-sm mb-6">
              궁금한 점이 있으시면 언제든 문의해 주세요
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="tel:01023957347"
                className="w-full sm:w-auto btn-primary"
                style={{ minHeight: 48 }}
              >
                전화 상담하기
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto btn-outline"
                style={{ minHeight: 48 }}
              >
                온라인 상담 신청
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
