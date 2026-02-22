"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    budget: "",
    message: "",
    contactMethod: "phone",
    timeSlot: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-navy mb-4 korean-text">
            상담 신청이 완료되었습니다
          </h1>
          <p className="text-text/60 korean-text mb-8">
            전담 컨설턴트가 영업일 기준 24시간 이내에 연락드리겠습니다.
            <br />
            빠른 상담을 원하시면 1588-0000으로 전화해 주세요.
          </p>
          <a href="/" className="btn-primary">
            홈으로 돌아가기
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <div className="bg-navy py-12 sm:py-16">
        <div className="container-custom">
          <p className="text-accent font-display font-semibold text-sm tracking-widest mb-2">
            CONTACT
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white korean-text">
            상담 예약
          </h1>
          <p className="text-white/60 mt-3 korean-text">
            전문 컨설턴트가 최적의 차량을 추천해 드립니다
          </p>
        </div>
      </div>

      <div className="container-custom py-8 sm:py-12">
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-navy">상담 신청서</h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">이름 *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-bg border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 min-h-[48px]"
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">연락처 *</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-bg border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 min-h-[48px]"
                    placeholder="010-0000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy mb-2">이메일</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-bg border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 min-h-[48px]"
                  placeholder="example@email.com"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">관심 차종</label>
                  <select
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="w-full bg-bg border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 min-h-[48px]"
                  >
                    <option value="">선택해주세요</option>
                    <option value="sedan">세단</option>
                    <option value="suv">SUV</option>
                    <option value="electric">전기차</option>
                    <option value="import">수입차</option>
                    <option value="undecided">미정 (상담 희망)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">예산</label>
                  <select
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className="w-full bg-bg border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 min-h-[48px]"
                  >
                    <option value="">선택해주세요</option>
                    <option value="under2000">2,000만원 이하</option>
                    <option value="2000-3000">2,000 ~ 3,000만원</option>
                    <option value="3000-4000">3,000 ~ 4,000만원</option>
                    <option value="4000-5000">4,000 ~ 5,000만원</option>
                    <option value="over5000">5,000만원 이상</option>
                  </select>
                </div>
              </div>

              {/* Contact Method */}
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">선호 연락 방법</label>
                <div className="flex gap-3">
                  {[
                    { value: "phone", label: "전화" },
                    { value: "kakao", label: "카카오톡" },
                    { value: "email", label: "이메일" },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setForm({ ...form, contactMethod: opt.value })}
                      className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all min-h-[44px] ${
                        form.contactMethod === opt.value
                          ? "bg-navy text-white"
                          : "bg-bg text-text/60 hover:bg-gray-200"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slot */}
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">상담 희망 시간</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {["오전 (9-12시)", "오후 (12-15시)", "저녁 (15-18시)", "무관"].map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setForm({ ...form, timeSlot: slot })}
                      className={`py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all min-h-[44px] ${
                        form.timeSlot === slot
                          ? "bg-navy text-white"
                          : "bg-bg text-text/60 hover:bg-gray-200"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy mb-2">문의 내용</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full bg-bg border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                  placeholder="관심 차량, 원하시는 조건 등 자유롭게 작성해 주세요."
                />
              </div>

              <button type="submit" className="btn-primary w-full text-lg">
                무료 상담 신청하기
              </button>

              <p className="text-text/40 text-xs text-center korean-text">
                * 본 사이트는 포트폴리오 데모입니다. 실제 상담이 진행되지 않습니다.
              </p>
            </form>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-navy mb-4">빠른 연락</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-text/50">전화 상담</p>
                    <p className="font-bold text-navy">1588-0000</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-text/50">영업 시간</p>
                    <p className="text-sm font-medium text-navy">평일 09:00 ~ 19:00</p>
                    <p className="text-sm font-medium text-navy">토요일 10:00 ~ 17:00</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-text/50">전시장 위치</p>
                    <p className="text-sm font-medium text-navy">서울 강남구 테헤란로 123</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-10 h-10 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-400 text-sm">지도 영역</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-text/60 korean-text">
                  서울 강남구 테헤란로 123 온다빌딩 1~2F
                </p>
                <p className="text-xs text-text/40 mt-1 korean-text">
                  강남역 3번 출구 도보 5분
                </p>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-accent/5 rounded-2xl p-6 border border-accent/10">
              <h3 className="font-bold text-navy text-sm mb-3">안심 상담 보장</h3>
              <ul className="text-xs text-text/60 space-y-2 korean-text">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  강매 절대 없음 — 편안한 상담 분위기
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  차량 이력 100% 공개
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  개인정보 보호 철저
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
