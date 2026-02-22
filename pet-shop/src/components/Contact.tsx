'use client';

import { useState } from 'react';
import SectionTitle from './SectionTitle';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    breed: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('상담 신청이 완료되었습니다. 빠른 시간 내에 연락드리겠습니다.');
    setFormData({ name: '', phone: '', breed: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-gradient-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-gold/30 to-transparent" />
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-rose-gold/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-rose-gold/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          subtitle="Contact Us"
          titleEn="Start Your Journey"
          title="분양 상담 문의"
          description="프리미엄 분양 상담을 신청해 주세요. 전문 상담사가 친절하게 안내해 드립니다."
          light
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Info Cards */}
          <div className="space-y-4 sm:space-y-6">
            {/* Phone */}
            <a
              href="tel:01023957347"
              className="flex items-center gap-4 p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-rose-gold/30 transition-all duration-300 group"
              style={{ minHeight: 48 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-rose-gold/20 flex items-center justify-center text-rose-gold group-hover:bg-rose-gold group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-rose-light/60 tracking-wider uppercase mb-1">Phone</p>
                <p className="text-white font-semibold text-lg">010-2395-7347</p>
                <p className="text-white/50 text-xs mt-0.5">매일 10:00 - 22:00</p>
              </div>
            </a>

            {/* KakaoTalk */}
            <a
              href="#"
              className="flex items-center gap-4 p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-rose-gold/30 transition-all duration-300 group"
              style={{ minHeight: 48 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3c-5.2 0-9.4 3.4-9.4 7.5 0 2.6 1.7 4.9 4.3 6.2l-1.1 4.1c-.1.3.3.5.5.3l4.8-3.2c.3 0 .6.1.9.1 5.2 0 9.4-3.4 9.4-7.5S17.2 3 12 3z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-rose-light/60 tracking-wider uppercase mb-1">KakaoTalk</p>
                <p className="text-white font-semibold text-lg">카카오톡 상담</p>
                <p className="text-white/50 text-xs mt-0.5">실시간 1:1 채팅 상담</p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="flex items-center gap-4 p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-rose-gold/30 transition-all duration-300 group"
              style={{ minHeight: 48 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-pink-500/20 flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-rose-light/60 tracking-wider uppercase mb-1">Instagram</p>
                <p className="text-white font-semibold text-lg">@signaturepups</p>
                <p className="text-white/50 text-xs mt-0.5">새로운 아이들 소식</p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
            <h3 className="font-luxury text-white text-xl sm:text-2xl font-semibold mb-1">
              상담 예약
            </h3>
            <p className="text-white/50 text-sm mb-6">
              아래 양식을 작성해 주시면 빠른 시간 내에 연락드리겠습니다.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white/70 text-xs mb-1.5">이름</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-rose-gold/50 transition-colors"
                  placeholder="이름을 입력해 주세요"
                  required
                  style={{ minHeight: 44 }}
                />
              </div>
              <div>
                <label className="block text-white/70 text-xs mb-1.5">연락처</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-rose-gold/50 transition-colors"
                  placeholder="010-0000-0000"
                  required
                  style={{ minHeight: 44 }}
                />
              </div>
              <div>
                <label className="block text-white/70 text-xs mb-1.5">관심 견종</label>
                <select
                  value={formData.breed}
                  onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white text-sm focus:outline-none focus:border-rose-gold/50 transition-colors appearance-none"
                  style={{ minHeight: 44 }}
                >
                  <option value="" className="bg-brown-deep">선택해 주세요</option>
                  <option value="coton" className="bg-brown-deep">꼬똥 드 뚤레아</option>
                  <option value="maltipoo" className="bg-brown-deep">말티푸</option>
                  <option value="poodle" className="bg-brown-deep">푸들</option>
                  <option value="maltese" className="bg-brown-deep">말티즈</option>
                  <option value="pomeranian" className="bg-brown-deep">포메라니안</option>
                  <option value="bichon" className="bg-brown-deep">미니 비숑</option>
                  <option value="pomsky" className="bg-brown-deep">폼스키</option>
                  <option value="yorkshire" className="bg-brown-deep">요크셔테리어</option>
                  <option value="other" className="bg-brown-deep">기타</option>
                </select>
              </div>
              <div>
                <label className="block text-white/70 text-xs mb-1.5">문의 내용</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-rose-gold/50 transition-colors resize-none"
                  rows={4}
                  placeholder="문의 내용을 입력해 주세요"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-rose-gold text-white font-medium rounded-full hover:bg-rose-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-gold/20"
                style={{ minHeight: 48 }}
              >
                상담 신청하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
