"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "온라인 차량 탐색",
    desc: "AI 추천 시스템으로 나에게 맞는 차량을 빠르게 찾아보세요. 실시간 필터와 비교 기능을 활용하세요.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "전문 상담 & 시승",
    desc: "전담 컨설턴트가 차량 이력과 상태를 상세히 설명하고, 원하시면 시승도 가능합니다.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "150항목 정밀 점검",
    desc: "전문 정비사의 꼼꼼한 인증 검사. 엔진, 미션, 전장, 외관 등 150개 항목을 빠짐없이 확인합니다.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "맞춤 금융 설계",
    desc: "할부, 리스, 렌트 등 다양한 금융 옵션 중 최적의 플랜을 설계해 드립니다. 온라인 계산기로 미리 확인하세요.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "안심 인도 & 보증",
    desc: "깨끗하게 세차된 차량을 원하는 장소에서 인도. 3년 품질 보증과 24시간 긴급 출동 서비스가 함께합니다.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

export default function BuyProcess() {
  const [activeStep, setActiveStep] = useState(-1);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            setActiveStep((prev) => Math.max(prev, idx));
          }
        });
      },
      { threshold: 0.5 }
    );

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-accent font-display font-semibold text-sm tracking-widest mb-2">
            BUYING PROCESS
          </p>
          <h2 className="heading-responsive text-navy korean-text">
            5단계 안심 구매 프로세스
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-200" />

          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => { stepRefs.current[i] = el; }}
              data-index={i}
              className={`relative flex items-start mb-12 last:mb-0 transition-all duration-700 ${
                activeStep >= i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                  activeStep >= i
                    ? "bg-accent text-white shadow-lg shadow-accent/30"
                    : "bg-white border-2 border-gray-200 text-gray-400"
                }`}>
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <div className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${
                i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
              }`}>
                <span className="text-accent font-display font-bold text-sm">{step.number}</span>
                <h3 className="font-bold text-navy text-lg mt-1 mb-2 korean-text">{step.title}</h3>
                <p className="text-text/60 text-sm korean-text leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
