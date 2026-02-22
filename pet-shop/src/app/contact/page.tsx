'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

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
    sub: '연중무휴 운영',
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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
      </svg>
    ),
    label: '대표',
    value: '정재원',
    sub: '시그니처펍스 대표',
  },
];

export default function ContactPage() {
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
    <main>
      <Header />

      {/* Hero Banner */}
      <section className="relative h-[50svh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1920&q=80"
          alt="Contact us"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-brown-deep/80" />
        <div className="relative z-10 text-center px-4">
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-rose-light/80 mb-3">
            Contact & Location
          </span>
          <h1 className="font-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold">
            상담 문의 & 오시는 길
          </h1>
          <div className="gold-divider mt-4" />
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left - Info & Map */}
            <div>
              <h2 className="font-luxury text-2xl sm:text-3xl text-brown-deep font-semibold mb-2">
                시그니처펍스 위례점
              </h2>
              <p className="font-luxury text-rose-gold/60 text-sm italic mb-8">
                Signature Pups Wirye
              </p>

              {/* Info Cards */}
              <div className="space-y-3 sm:space-y-4 mb-8">
                {infoItems.map((item, index) => {
                  const content = (
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-rose-gold/10 hover:border-rose-gold/20 transition-all duration-300 group">
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
              </div>

              {/* Map */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-cream-dark border border-rose-gold/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3175.5!2d127.1!3d37.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z7JyE66CA7KSR7JWZ7YOA7JuM!5e0!3m2!1sko!2skr!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: 'absolute', inset: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="시그니처펍스 위례점 위치"
                />
              </div>

              <div className="mt-4 p-4 rounded-xl bg-rose-gold/5 border border-rose-gold/10">
                <p className="korean-text text-brown-light text-xs sm:text-sm leading-relaxed">
                  <strong className="text-brown-deep">주차 안내:</strong> 위례중앙타워 건물 내 지하 주차장 무료 이용 가능합니다. 위례신도시역에서 도보 5분 거리에 위치해 있습니다.
                </p>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-gold/10 sticky top-24">
                <h3 className="font-luxury text-xl sm:text-2xl text-brown-deep font-semibold mb-1">
                  상담 예약
                </h3>
                <p className="text-brown-light text-sm mb-6">
                  아래 양식을 작성해 주시면 빠른 시간 내에 연락드리겠습니다.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-brown-deep text-xs font-medium mb-1.5">이름 *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-cream border border-rose-gold/15 text-brown-deep placeholder-brown-light/40 text-sm focus:outline-none focus:border-rose-gold/50 transition-colors"
                      placeholder="이름을 입력해 주세요"
                      required
                      style={{ minHeight: 44 }}
                    />
                  </div>
                  <div>
                    <label className="block text-brown-deep text-xs font-medium mb-1.5">연락처 *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-cream border border-rose-gold/15 text-brown-deep placeholder-brown-light/40 text-sm focus:outline-none focus:border-rose-gold/50 transition-colors"
                      placeholder="010-0000-0000"
                      required
                      style={{ minHeight: 44 }}
                    />
                  </div>
                  <div>
                    <label className="block text-brown-deep text-xs font-medium mb-1.5">관심 견종</label>
                    <select
                      value={formData.breed}
                      onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-cream border border-rose-gold/15 text-brown-deep text-sm focus:outline-none focus:border-rose-gold/50 transition-colors appearance-none"
                      style={{ minHeight: 44 }}
                    >
                      <option value="">선택해 주세요</option>
                      <option value="coton">꼬똥 드 뚤레아</option>
                      <option value="maltipoo">말티푸</option>
                      <option value="poodle">푸들</option>
                      <option value="maltese">말티즈</option>
                      <option value="pomeranian">포메라니안</option>
                      <option value="bichon">미니 비숑</option>
                      <option value="pomsky">폼스키</option>
                      <option value="yorkshire">요크셔테리어</option>
                      <option value="other">기타</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-brown-deep text-xs font-medium mb-1.5">문의 내용</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-cream border border-rose-gold/15 text-brown-deep placeholder-brown-light/40 text-sm focus:outline-none focus:border-rose-gold/50 transition-colors resize-none"
                      rows={5}
                      placeholder="궁금하신 점을 자유롭게 작성해 주세요"
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

                <div className="mt-6 pt-6 border-t border-rose-gold/10">
                  <p className="text-xs text-brown-light/60 text-center">
                    빠른 상담을 원하시면 전화({' '}
                    <a href="tel:01023957347" className="text-rose-gold hover:underline">010-2395-7347</a>
                    {' '})로 연락해 주세요
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* License Info */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-brown-light/50">
            동물판매업 등록번호: 3280000-045-2022-0012 | 대표: 정재원
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
