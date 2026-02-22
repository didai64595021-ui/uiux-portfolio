import SectionTitle from './SectionTitle';

const careFeatures = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: '건강 보증 시스템',
    titleEn: 'Health Guarantee',
    description: '전문 수의사의 종합 건강 검진과 유전자 검사를 통해 건강한 아이만을 분양합니다. 분양 후에도 건강 보증 서비스를 제공합니다.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: '예방 접종 관리',
    titleEn: 'Vaccination Program',
    description: 'DHPPL, 코로나, 켄넬코프 등 필수 예방 접종을 완료하고, 접종 기록을 상세히 전달해 드립니다.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: '프리미엄 사료',
    titleEn: 'Premium Nutrition',
    description: '전문 영양사가 선별한 프리미엄 사료와 영양 보충제를 제공하며, 맞춤형 식단 컨설팅을 진행합니다.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: '위생 관리',
    titleEn: 'Hygiene Management',
    description: '매일 전문 스태프가 청결한 환경을 유지하며, 정기적인 소독과 미용 관리를 실시합니다.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: '교육 가이드',
    titleEn: 'Training Guide',
    description: '기본 훈련, 배변 교육, 사회화 교육 등 입양 후 필수 교육 가이드를 상세하게 제공합니다.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: '평생 사후 관리',
    titleEn: 'Lifetime Aftercare',
    description: '분양 후에도 평생 건강 상담, 미용, 호텔링 등 프리미엄 사후 서비스를 지원합니다.',
  },
];

export default function CareSystem() {
  return (
    <section id="care" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Premium Care"
          titleEn="Signature Care System"
          title="프리미엄 케어 시스템"
          description="시그니처펍스만의 체계적인 건강 관리 시스템으로 아이들의 건강을 지킵니다"
        />

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {careFeatures.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 sm:p-8 border border-rose-gold/10 hover:border-rose-gold/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-brown-deep/5"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-rose-gold/10 flex items-center justify-center text-rose-gold mb-5 group-hover:bg-rose-gold group-hover:text-white transition-all duration-500">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-brown-deep text-base sm:text-lg mb-1">
                {feature.title}
              </h3>
              <p className="font-luxury text-rose-gold/60 text-xs italic mb-3">
                {feature.titleEn}
              </p>
              <p className="korean-text text-brown-light text-xs sm:text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
