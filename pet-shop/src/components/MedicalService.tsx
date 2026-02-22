import SectionTitle from './SectionTitle';
import Image from 'next/image';

const medicalServices = [
  {
    title: '종합 건강 검진',
    description: '혈액검사, 신체검사, 심장사상충 검사 등 전문 수의사의 종합 건강 검진을 실시합니다.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: '유전자 검사',
    description: '유전 질환 검사를 통해 건강한 아이만을 엄선하여 분양합니다.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: '예방 접종 완료',
    description: 'DHPPL, 코로나, 켄넬코프, 광견병 등 필수 예방접종을 완료합니다.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: '구충 관리',
    description: '내부/외부 기생충 예방 및 구충제를 정기적으로 투여합니다.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: '건강 보증서 발급',
    description: '분양 시 건강 보증서와 함께 상세한 건강 기록을 전달해 드립니다.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: '사후 의료 지원',
    description: '분양 후에도 협력 동물병원과 연계하여 의료 지원 서비스를 제공합니다.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function MedicalService() {
  return (
    <section id="medical" className="section-padding bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80"
                alt="Happy healthy puppies"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-deep/20 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-4 -right-4 sm:bottom-6 sm:right-6 bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-rose-gold/10 max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-brown-deep">건강 보증</p>
                  <p className="text-[10px] text-brown-light">100% Health Guaranteed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <SectionTitle
              subtitle="Medical Service"
              titleEn="Health & Wellness"
              title="메디컬 서비스"
              description="전문 수의사와 함께하는 체계적인 건강 관리 시스템으로 아이들의 건강을 최우선으로 지킵니다"
              align="left"
            />

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
              {medicalServices.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 sm:p-4 rounded-xl hover:bg-white transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-gold/10 flex items-center justify-center text-rose-gold flex-shrink-0 group-hover:bg-rose-gold group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-brown-deep text-sm mb-1">
                      {service.title}
                    </h4>
                    <p className="korean-text text-brown-light text-xs leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
