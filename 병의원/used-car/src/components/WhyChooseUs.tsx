"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: "🚗", value: 2847, suffix: "+", label: "누적 판매 대수" },
  { icon: "⭐", value: 98.5, suffix: "%", label: "고객 만족도", decimal: true },
  { icon: "🔧", value: 150, suffix: "+", label: "정비 점검 항목" },
  { icon: "📋", value: 3, suffix: "년", label: "품질 보증 기간" },
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "150항목 정밀 점검",
    desc: "엔진부터 외관까지 전문 정비사의 꼼꼼한 인증 검사를 통과한 차량만 판매합니다.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "투명한 가격 정책",
    desc: "AI 시세 분석 기반의 합리적 가격 산정. 숨은 비용 없이 투명하게 안내합니다.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "3년 품질 보증",
    desc: "구매 후에도 안심. 주요 부품 3년 보증 + 24시간 긴급 출동 서비스를 제공합니다.",
  },
];

function Counter({ value, suffix, decimal }: { value: number; suffix: string; decimal?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="font-display font-bold text-3xl sm:text-4xl text-accent">
      {decimal ? count.toFixed(1) : Math.floor(count).toLocaleString()}
      {suffix}
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-accent font-display font-semibold text-sm tracking-widest mb-2">
            WHY ONDA MOTORS
          </p>
          <h2 className="heading-responsive text-navy korean-text">
            온다 모터스를 선택하는 이유
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <Counter value={stat.value} suffix={stat.suffix} decimal={stat.decimal} />
              <p className="text-text/60 text-sm mt-2 korean-text">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group p-6 sm:p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-accent/20">
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-all">
                {f.icon}
              </div>
              <h3 className="font-bold text-navy text-lg mb-2">{f.title}</h3>
              <p className="text-text/60 text-sm korean-text leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
