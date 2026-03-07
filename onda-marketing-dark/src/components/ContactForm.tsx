"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="relative section-padding overflow-hidden" id="contact">
        <div className="absolute inset-0 gradient-dark-section" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="neon-card">
            <div className="neon-card-inner !p-12">
              <div className="w-20 h-20 rounded-full bg-neon/10 border border-neon/30 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-grotesk font-bold text-white mb-3">
                상담 신청 완료
              </h3>
              <p className="text-gray-400 korean-text">
                영업일 기준 24시간 내에 연락드리겠습니다.
                <br />
                빠른 상담을 원하시면 이메일로 문의해주세요.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative section-padding overflow-hidden" id="contact">
      <div className="absolute inset-0 gradient-dark-section" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block font-mono text-xs text-neon/60 tracking-widest uppercase mb-4">
            // Contact
          </span>
          <h2 className="section-title text-white mb-4">
            무료{" "}
            <span className="gradient-neon-text text-glow">진단</span>{" "}
            신청
          </h2>
          <p className="section-subtitle mx-auto">
            현재 마케팅 상태를 무료로 진단해드립니다.
            <br className="hidden sm:block" />
            영업 전화 없습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info Side */}
          <div className="md:col-span-2 space-y-6">
            <div className="glass-card p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-neon/10 border border-neon/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500">이메일</div>
                  <div className="text-sm text-white font-mono">
                    ondadaad@google.com
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-neon/10 border border-neon/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500">오피스</div>
                  <div className="text-sm text-white korean-text">
                    서울 강남구 테헤란로82길 15
                    <br />
                    디아이타워 3층
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-neon/10 border border-neon/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500">응답 시간</div>
                  <div className="text-sm text-white">
                    영업일 24시간 이내
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:col-span-3">
            <div className="neon-card">
              <div className="neon-card-inner">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-500 mb-2 font-mono">
                        이름 *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-dark rounded-lg border border-charcoal-border text-white text-sm focus:outline-none focus:border-neon/40 focus:shadow-[0_0_10px_rgba(0,255,136,0.08)] transition-all"
                        placeholder="홍길동"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-2 font-mono">
                        회사명
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-dark rounded-lg border border-charcoal-border text-white text-sm focus:outline-none focus:border-neon/40 focus:shadow-[0_0_10px_rgba(0,255,136,0.08)] transition-all"
                        placeholder="회사명"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-500 mb-2 font-mono">
                        이메일 *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-dark rounded-lg border border-charcoal-border text-white text-sm focus:outline-none focus:border-neon/40 focus:shadow-[0_0_10px_rgba(0,255,136,0.08)] transition-all"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-2 font-mono">
                        연락처
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-dark rounded-lg border border-charcoal-border text-white text-sm focus:outline-none focus:border-neon/40 focus:shadow-[0_0_10px_rgba(0,255,136,0.08)] transition-all"
                        placeholder="010-0000-0000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-500 mb-2 font-mono">
                        관심 서비스
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-dark rounded-lg border border-charcoal-border text-white text-sm focus:outline-none focus:border-neon/40 transition-all appearance-none"
                      >
                        <option value="">선택</option>
                        <option value="powerlink">파워링크 광고</option>
                        <option value="place">플레이스 최적화</option>
                        <option value="instagram">인스타그램 마케팅</option>
                        <option value="selftool">셀프 광고 툴</option>
                        <option value="all">전체 통합</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-2 font-mono">
                        월 예산
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-dark rounded-lg border border-charcoal-border text-white text-sm focus:outline-none focus:border-neon/40 transition-all appearance-none"
                      >
                        <option value="">선택</option>
                        <option value="50-100">50~100만원</option>
                        <option value="100-300">100~300만원</option>
                        <option value="300-500">300~500만원</option>
                        <option value="500-1000">500~1,000만원</option>
                        <option value="1000+">1,000만원 이상</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 mb-2 font-mono">
                      문의 내용
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className="w-full px-4 py-3 bg-dark rounded-lg border border-charcoal-border text-white text-sm focus:outline-none focus:border-neon/40 focus:shadow-[0_0_10px_rgba(0,255,136,0.08)] transition-all resize-none"
                      placeholder="현재 마케팅 상황이나 원하시는 내용을 자유롭게 작성해주세요."
                    />
                  </div>

                  <button
                    type="submit"
                    className="neon-button w-full text-center text-base"
                  >
                    무료 진단 신청하기
                  </button>

                  <p className="text-[10px] text-gray-600 text-center korean-text">
                    제출 시 개인정보 처리방침에 동의하는 것으로 간주됩니다.
                    영업 전화는 하지 않습니다.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
