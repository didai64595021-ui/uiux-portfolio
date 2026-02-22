import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brown-deep text-white/70">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-rose-gold/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-rose-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.5 9.5C5.88 9.5 7 8.38 7 7s-1.12-2.5-2.5-2.5S2 5.62 2 7s1.12 2.5 2.5 2.5zm15 0C20.88 9.5 22 8.38 22 7s-1.12-2.5-2.5-2.5S17 5.62 17 7s1.12 2.5 2.5 2.5zm-1.5 1c-1.03 0-1.95.51-2.5 1.3-.55-.79-1.47-1.3-2.5-1.3h-2c-1.03 0-1.95.51-2.5 1.3-.55-.79-1.47-1.3-2.5-1.3H5c-1.66 0-3 1.34-3 3v1h7v-1c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v1h7v-1c0-1.66-1.34-3-3-3h-1zM12 16c-2.21 0-4 1.79-4 4h8c0-2.21-1.79-4-4-4z"/>
                </svg>
              </div>
              <div>
                <span className="font-luxury text-white text-lg font-semibold tracking-wide">
                  Signature Pups
                </span>
              </div>
            </div>
            <p className="korean-text text-sm leading-relaxed mb-4">
              건강하고 아름다운 프리미엄 강아지와 함께하는 특별한 시작. 시그니처펍스가 함께합니다.
            </p>
            <p className="text-xs text-white/40 font-luxury italic">
              Premium Life with Signature
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: '/breeds', label: '견종 소개' },
                { href: '/puppies', label: '분양 안내' },
                { href: '/process', label: '분양 절차' },
                { href: '/reviews', label: '분양 후기' },
                { href: '/contact', label: '상담 문의' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-rose-gold transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Breeds */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">
              Breeds
            </h4>
            <ul className="space-y-2.5">
              {[
                '꼬똥 드 뚤레아',
                '말티푸',
                '푸들',
                '말티즈',
                '포메라니안',
                '미니 비숑',
                '폼스키',
                '요크셔테리어',
              ].map((breed) => (
                <li key={breed}>
                  <span className="text-sm">{breed}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">
              Contact
            </h4>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-white/40 mb-0.5">Address</p>
                <p className="text-sm">경기도 성남시 수정구 위례광장로 300</p>
                <p className="text-sm">위례중앙타워 1층</p>
              </div>
              <div>
                <p className="text-xs text-white/40 mb-0.5">Phone</p>
                <a href="tel:01023957347" className="text-sm hover:text-rose-gold transition-colors">
                  010-2395-7347
                </a>
              </div>
              <div>
                <p className="text-xs text-white/40 mb-0.5">Hours</p>
                <p className="text-sm">매일 10:00 - 22:00</p>
              </div>
              <div>
                <p className="text-xs text-white/40 mb-0.5">Owner</p>
                <p className="text-sm">정재원</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <div className="text-center sm:text-left space-y-1">
              <p>&copy; 2025 시그니처펍스 Signature Pups. All rights reserved.</p>
              <p>동물판매업 등록번호: 3280000-045-2022-0012</p>
            </div>
            <div className="flex items-center gap-1">
              <span>Designed by</span>
              <span className="text-rose-gold font-medium">ONDA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Safe area bottom */}
      <div className="safe-area-bottom" />
    </footer>
  );
}
