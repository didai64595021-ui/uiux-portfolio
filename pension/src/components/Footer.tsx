import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brown text-white">
      {/* CTA */}
      <div className="border-b border-white/10">
        <div className="container-custom py-14 sm:py-20 text-center">
          <p className="text-gold font-display text-sm tracking-[0.2em] mb-4">RESERVE YOUR STAY</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 korean-text">
            숲 속의 쉼, 지금 예약하세요
          </h2>
          <p className="text-white/50 mb-8 korean-text max-w-md mx-auto">
            프라이빗 독채에서 자연과 함께하는 특별한 시간을 선물하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/booking" className="btn-primary !bg-gold !text-brown-dark hover:!bg-gold-light text-center">
              온라인 예약
            </Link>
            <a href="tel:031-000-0000" className="btn-outline !border-white/30 !text-white hover:!bg-white/10 text-center">
              전화 예약 031-000-0000
            </a>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="font-display mb-4">
              <span className="text-lg font-bold">ONDA</span>
              <span className="block text-[10px] tracking-[0.3em] -mt-0.5 text-gold">S T A Y</span>
            </div>
            <p className="text-white/40 text-sm korean-text leading-relaxed">
              가평 자연 속 프라이빗 펜션.<br/>
              전용 노천탕과 편백 숲이 있는<br/>
              특별한 힐링 공간.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-4 text-white/70">객실 안내</h3>
            <ul className="space-y-2.5 text-white/40 text-sm">
              <li>소나무채 (커플)</li>
              <li>자작나무채 (커플)</li>
              <li>참나무채 (패밀리)</li>
              <li>편백나무채 (패밀리)</li>
              <li>단풍나무채 (단체)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-4 text-white/70">이용 안내</h3>
            <ul className="space-y-2.5 text-white/40 text-sm">
              <li>체크인: 15:00</li>
              <li>체크아웃: 11:00</li>
              <li>바비큐: 18:00~22:00</li>
              <li>객실 내 금연</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-4 text-white/70">연락처</h3>
            <ul className="space-y-2.5 text-white/40 text-sm">
              <li>031-000-0000</li>
              <li>stay@ondastay.kr</li>
              <li>경기도 가평군 상면 숲속길 123</li>
              <li>카카오톡: @ondastay</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/25 text-xs">&copy; 2025 ONDA STAY. All rights reserved.</p>
          <p className="text-white/25 text-xs">본 사이트는 포트폴리오 데모입니다.</p>
        </div>
      </div>
    </footer>
  );
}
