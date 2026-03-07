'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-sage text-white relative overflow-hidden">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">새로운 퍼피 소식 받기</h3>
            <p className="text-white/50 text-sm mb-6 korean-text">
              새로운 아이들의 소식과 특별 이벤트를 가장 먼저 받아보세요
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일 주소 입력"
                className="flex-1 px-5 py-3 bg-white/10 border border-white/10 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-mint/50"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-mint text-white rounded-xl font-semibold text-sm hover:bg-emerald-500 transition-colors flex-shrink-0"
              >
                {subscribed ? '구독 완료!' : '구독'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-mint to-emerald-600 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                  <path d="M4.5 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm15 0a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM12 21c-4.5 0-8-3-8-7.5 0-3 2-5.5 4-6.5.5-.25 1 .1 1 .65v1.5c0 .35.15.65.4.85L12 12l2.6-2.5c.25-.2.4-.5.4-.85v-1.5c0-.55.5-.9 1-.65 2 1 4 3.5 4 6.5 0 4.5-3.5 7.5-8 7.5z"/>
                </svg>
              </div>
              <span className="font-display font-bold text-lg">Signature Pups</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed korean-text">
              프리미엄 강아지 분양 전문
              <br />
              시그니처펍스 위례점
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white/80">서비스</h4>
            <ul className="space-y-2.5">
              {['분양 안내', '견종 탐색', '메디컬 케어', '해외 분양'].map((item) => (
                <li key={item}>
                  <Link href="/" className="text-white/40 text-sm hover:text-mint transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-white/80">고객지원</h4>
            <ul className="space-y-2.5">
              {['분양 후기', '자주 묻는 질문', '상담 예약', '오시는 길'].map((item) => (
                <li key={item}>
                  <Link href="/" className="text-white/40 text-sm hover:text-mint transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white/80">연락처</h4>
            <div className="space-y-3 text-sm text-white/40">
              <div>
                <span className="text-white/60">전화</span>
                <a href="tel:01023957347" className="block text-mint font-medium mt-0.5">
                  010-2395-7347
                </a>
              </div>
              <div>
                <span className="text-white/60">영업시간</span>
                <p className="mt-0.5">매일 10:00 - 22:00</p>
              </div>
              <div>
                <span className="text-white/60">주소</span>
                <p className="mt-0.5 korean-text">경기도 성남시 수정구 위례광장로 300, 위례중앙타워 1층</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs">
            &copy; 2026 Signature Pups. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Design by ONDA
          </p>
        </div>
      </div>
    </footer>
  );
}
