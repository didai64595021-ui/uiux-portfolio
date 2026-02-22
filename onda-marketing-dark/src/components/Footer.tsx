import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-charcoal-border">
      <div className="absolute inset-0 bg-dark-100" />
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-neon/10 border border-neon/30 flex items-center justify-center">
                <span className="font-grotesk font-bold text-neon text-sm">O</span>
              </div>
              <div>
                <span className="font-grotesk font-bold text-white text-sm">ONDA</span>
                <span className="font-mono text-[10px] text-neon/40 ml-1 tracking-wider">MKT</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 korean-text mb-4">
              실행사 출신의 진짜 마케팅.
              <br />
              영업이 아닌 기술로 일합니다.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
              <span className="text-xs font-mono text-neon/60">
                Online & Ready
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {["파워링크 광고", "플레이스 최적화", "인스타그램 마케팅", "셀프 광고 툴"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="/services"
                      className="text-sm text-gray-400 hover:text-neon transition-colors korean-text"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "어바웃", href: "/about" },
                { label: "포트폴리오", href: "/portfolio" },
                { label: "문의하기", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-neon transition-colors korean-text"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-2.5 text-sm text-gray-400">
              <p className="font-mono text-xs">ondadaad@google.com</p>
              <p className="korean-text text-xs">
                서울 강남구 테헤란로82길 15
                <br />
                디아이타워 3층
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-charcoal-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600 font-mono">
            &copy; 2024 ONDA Marketing. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-700 font-mono">
              Designed by ONDA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
