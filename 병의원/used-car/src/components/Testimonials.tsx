"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "김민수",
    car: "현대 그랜저 IG",
    date: "2024.12",
    rating: 5,
    text: "처음 중고차를 사는 거라 걱정이 많았는데, 온다 모터스에서 친절한 상담과 함께 150항목 점검 리포트를 보여주셔서 안심하고 구매했습니다. 3개월 타고 있는데 아무 문제 없어요!",
    avatar: "KM",
  },
  {
    name: "이지은",
    car: "테슬라 모델3",
    date: "2025.01",
    rating: 5,
    text: "전기차를 중고로 살 때 배터리 상태가 제일 걱정이었는데, 배터리 진단 리포트까지 제공해주셔서 신뢰가 갔어요. 할부 조건도 최저금리로 잘 맞춰주셨습니다.",
    avatar: "LJ",
  },
  {
    name: "박준혁",
    car: "BMW 520i",
    date: "2024.11",
    rating: 5,
    text: "다른 데서 같은 차량을 봤는데 온다 모터스가 300만원 이상 저렴했어요. AI 시세 조회로 적정 가격을 먼저 확인하고 갔더니 딜도 쉬웠습니다.",
    avatar: "PJ",
  },
  {
    name: "최수영",
    car: "기아 K5 DL3",
    date: "2025.02",
    rating: 5,
    text: "온라인으로 차량 비교하고 상담 예약했더니 바로 시승 준비해주셨어요. 직접 타보고 결정할 수 있어서 좋았습니다. 인도 때 세차까지 완벽했어요!",
    avatar: "CS",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-accent font-display font-semibold text-sm tracking-widest mb-2">
            REVIEWS
          </p>
          <h2 className="heading-responsive text-navy korean-text">
            고객 후기
          </h2>
        </div>

        {/* Card Stack */}
        <div className="relative max-w-2xl mx-auto h-[360px] sm:h-[300px]">
          {testimonials.map((t, i) => {
            const offset = (i - active + testimonials.length) % testimonials.length;
            const isActive = offset === 0;
            const zIndex = testimonials.length - offset;

            return (
              <div
                key={i}
                className="absolute inset-0 transition-all duration-500 ease-out"
                style={{
                  zIndex,
                  transform: `translateY(${offset * 16}px) scale(${1 - offset * 0.05})`,
                  opacity: offset > 2 ? 0 : 1 - offset * 0.2,
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                <div className="bg-bg rounded-2xl p-6 sm:p-8 shadow-lg h-full border border-gray-100">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-navy">{t.name}</p>
                      <p className="text-text/50 text-xs">{t.car} · {t.date}</p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <svg key={j} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-text/70 korean-text leading-relaxed text-sm sm:text-base">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border-2 border-navy/20 flex items-center justify-center hover:bg-navy hover:text-white hover:border-navy transition-all"
            aria-label="이전 후기"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === active ? "bg-accent w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`후기 ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border-2 border-navy/20 flex items-center justify-center hover:bg-navy hover:text-white hover:border-navy transition-all"
            aria-label="다음 후기"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
