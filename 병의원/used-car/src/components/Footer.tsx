import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="container-custom py-12 sm:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 korean-text">
            지금 바로 내 차를 찾아보세요
          </h2>
          <p className="text-white/60 mb-8 korean-text max-w-lg mx-auto">
            전문 컨설턴트가 최적의 차량을 추천해 드립니다. 부담 없이 상담하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/inventory" className="btn-primary text-center">
              전체 재고 보기
            </Link>
            <Link href="/contact" className="btn-outline !border-white/30 !text-white hover:!bg-white hover:!text-navy text-center">
              무료 상담 신청
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-xs">O</span>
              </div>
              <div>
                <span className="font-display font-bold text-base">ONDA</span>
                <span className="font-display text-accent text-[10px] block -mt-0.5 tracking-widest">
                  MOTORS
                </span>
              </div>
            </div>
            <p className="text-white/50 text-sm korean-text leading-relaxed">
              믿을 수 있는 인증 중고차 전문.
              <br />
              AI 시세 분석과 150항목 정밀 점검으로
              <br />
              안심 구매를 약속합니다.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-white/80">서비스</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/inventory", label: "전체 재고" },
                { href: "/calculator", label: "할부 계산기" },
                { href: "/compare", label: "차량 비교" },
                { href: "/contact", label: "상담 예약" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-white/80">고객 지원</h3>
            <ul className="space-y-2.5 text-white/50 text-sm">
              <li>구매 가이드</li>
              <li>금융 안내</li>
              <li>보증 프로그램</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-white/80">연락처</h3>
            <ul className="space-y-2.5 text-white/50 text-sm">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                1588-0000
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@ondamotors.kr
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                서울특별시 강남구 테헤란로 123
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                평일 09:00 ~ 19:00 / 토 10:00 ~ 17:00
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs">
            &copy; 2025 ONDA MOTORS. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            본 사이트는 포트폴리오 데모입니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
