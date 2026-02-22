import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="border-b border-white/10">
        <div className="container-custom py-14 sm:py-20 text-center">
          <p className="text-caramel text-sm tracking-widest font-semibold mb-4">START YOUR PROJECT</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 korean-text">
            공간의 변화, 지금 시작하세요
          </h2>
          <p className="text-white/40 mb-8 korean-text max-w-md mx-auto">
            무료 상담부터 3D 시뮬레이션까지. 온다 리빙이 함께합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/consult" className="btn-accent text-center">무료 상담 신청</Link>
            <Link href="/estimate" className="btn-outline !border-white/20 !text-white hover:!bg-white/5 text-center">견적 시뮬레이션</Link>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <span className="font-display text-lg">ONDA</span>
            <span className="block text-[9px] tracking-[0.35em] -mt-0.5 text-caramel">LIVING</span>
            <p className="text-white/30 text-sm mt-4 korean-text leading-relaxed">
              15년 경력의 인테리어 전문기업.<br/>아파트, 주택, 사무실, 상업공간까지.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-4 text-white/60">서비스</h3>
            <ul className="space-y-2 text-white/30 text-sm">
              <li><Link href="/portfolio" className="hover:text-white transition-colors">시공사례</Link></li>
              <li><Link href="/estimate" className="hover:text-white transition-colors">견적 시뮬레이션</Link></li>
              <li><Link href="/consult" className="hover:text-white transition-colors">무료 상담</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-4 text-white/60">시공 범위</h3>
            <ul className="space-y-2 text-white/30 text-sm">
              <li>아파트 리모델링</li><li>주택/빌라</li><li>사무실 인테리어</li><li>상업공간 (카페/매장)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-4 text-white/60">연락처</h3>
            <ul className="space-y-2 text-white/30 text-sm">
              <li>02-000-0000</li>
              <li>living@ondaliving.kr</li>
              <li>서울 강남구 논현로 456</li>
              <li>평일 09:00~18:00</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/20 text-xs">&copy; 2025 ONDA LIVING. All rights reserved.</p>
          <p className="text-white/20 text-xs">본 사이트는 포트폴리오 데모입니다.</p>
        </div>
      </div>
    </footer>
  );
}
