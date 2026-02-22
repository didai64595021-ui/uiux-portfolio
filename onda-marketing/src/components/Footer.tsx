"use client";

import Link from "next/link";

const footerLinks = {
  서비스: [
    { label: "파워링크 광고", href: "/services#powerlink" },
    { label: "플레이스 최적화", href: "/services#place" },
    { label: "인스타그램 마케팅", href: "/services#instagram" },
    { label: "셀프 광고 툴", href: "/services#self-tool" },
  ],
  회사: [
    { label: "회사소개", href: "/about" },
    { label: "포트폴리오", href: "/portfolio" },
    { label: "문의하기", href: "/contact" },
  ],
  고객지원: [
    { label: "자주 묻는 질문", href: "/#faq" },
    { label: "무료 진단 신청", href: "/contact" },
    { label: "이용약관", href: "#" },
    { label: "개인정보처리방침", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 relative overflow-hidden">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

      <div className="container-custom py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12 sm:mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <span className="text-white font-outfit font-bold text-lg">O</span>
              </div>
              <div className="flex flex-col">
                <span className="font-outfit font-bold text-lg text-white leading-none">
                  ONDA
                </span>
                <span className="text-[10px] text-primary-400 font-medium tracking-wider leading-none mt-0.5">
                  MARKETING
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-sm korean-text">
              실행사 출신의 진짜 마케팅. 영업사원이 아닌 기술자가 직접 운영하는
              디지털 마케팅 에이전시.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {["Instagram", "Blog", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-primary-500/10 hover:text-primary-400 transition-all duration-300"
                  aria-label={social}
                >
                  <span className="text-xs font-outfit font-semibold">
                    {social.charAt(0)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-gray-200 mb-4 korean-text">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-primary-400 transition-colors korean-text"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-xs text-gray-600 korean-text">
                온다마케팅 | 서울 강남구 테헤란로82길 15 디아이타워 3층
              </p>
              <p className="text-xs text-gray-600 mt-1">
                ondadaad@google.com
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-600">
                &copy; 2024 ONDA Marketing. All rights reserved.
              </span>
              <span className="text-xs text-gray-700">
                Designed by{" "}
                <span className="text-primary-500 font-outfit font-semibold">ONDA</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
