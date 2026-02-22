import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white/80 pt-12 sm:pt-16 pb-24 lg:pb-12">
      <div className="container-base">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/">
              <span className="font-serif text-2xl font-semibold text-white tracking-wider">
                ONDA
              </span>
              <span className="block text-xs tracking-[0.2em] text-white/60">
                DERMATOLOGY
              </span>
            </Link>
            <p className="text-sm text-white/50 mt-4 korean-text leading-relaxed">
              아름다운 피부, 온다에서 시작됩니다.
              <br />
              피부과 전문의가 직접 진료합니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">진료안내</h4>
            <ul className="space-y-2">
              {[
                { label: "진료과목", href: "/treatments" },
                { label: "의료진 소개", href: "/doctors" },
                { label: "시술전후", href: "/cases" },
                { label: "예약상담", href: "/booking" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 hover:text-primary-light transition-colors min-h-[44px] flex items-center"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">연락처</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/50">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                02-1234-5678
              </li>
              <li className="flex items-start gap-2 text-sm text-white/50">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                info@onda-derm.co.kr
              </li>
              <li className="flex items-start gap-2 text-sm text-white/50 korean-text">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                서울시 강남구 테헤란로 123 온다빌딩 3층
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">진료시간</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div className="korean-text">
                  <p>평일 09:00 - 19:00</p>
                  <p>토요일 09:00 - 15:00</p>
                  <p>점심 13:00 - 14:00</p>
                  <p className="text-white/30 mt-1">일요일/공휴일 휴진</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-white/30 korean-text">
            &copy; 2024 ONDA DERMATOLOGY. All rights reserved. | 사업자등록번호: 123-45-67890
          </p>
        </div>
      </div>
    </footer>
  );
}
