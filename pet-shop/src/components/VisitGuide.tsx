import SectionTitle from './SectionTitle';

const infoItems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: '주소',
    value: '경기도 성남시 수정구 위례광장로 300',
    sub: '위례중앙타워 1층',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: '영업시간',
    value: '매일 10:00 - 22:00',
    sub: '연중무휴',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: '전화',
    value: '010-2395-7347',
    sub: '상담 예약 가능',
    href: 'tel:01023957347',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    label: '교통편',
    value: '위례신도시역 도보 5분',
    sub: '주차장 완비',
  },
];

export default function VisitGuide() {
  return (
    <section id="visit" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Visit Us"
          titleEn="How to Find Us"
          title="오시는 길"
          description="시그니처펍스 위례점에서 직접 아이들을 만나보세요"
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[400px] bg-cream-dark border border-rose-gold/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3175.5!2d127.1!3d37.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z7JyE66GA7KSR7JWZ7YOA7JuM!5e0!3m2!1sko!2skr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="시그니처펍스 위례점 위치"
            />
          </div>

          {/* Info */}
          <div className="space-y-4 sm:space-y-6">
            {infoItems.map((item, index) => {
              const content = (
                <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-cream hover:bg-cream-dark transition-colors duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-rose-gold/10 flex items-center justify-center text-rose-gold flex-shrink-0 group-hover:bg-rose-gold group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-xs text-rose-gold font-medium tracking-wider uppercase">
                      {item.label}
                    </span>
                    <p className="font-semibold text-brown-deep text-sm sm:text-base mt-0.5">
                      {item.value}
                    </p>
                    {item.sub && (
                      <p className="text-xs text-brown-light mt-0.5">{item.sub}</p>
                    )}
                  </div>
                </div>
              );

              if (item.href) {
                return (
                  <a key={index} href={item.href} className="block" style={{ minHeight: 44 }}>
                    {content}
                  </a>
                );
              }
              return <div key={index}>{content}</div>;
            })}

            {/* Directions note */}
            <div className="p-4 sm:p-5 rounded-2xl bg-rose-gold/5 border border-rose-gold/15">
              <h4 className="font-semibold text-brown-deep text-sm mb-2 flex items-center gap-2">
                <svg className="w-4 h-4 text-rose-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                방문 안내
              </h4>
              <p className="korean-text text-brown-light text-xs sm:text-sm leading-relaxed">
                방문 전 전화 또는 카카오톡으로 예약해 주시면 더욱 편안한 상담이 가능합니다. 위례중앙타워 1층에 위치하며, 건물 내 주차장을 무료로 이용하실 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
