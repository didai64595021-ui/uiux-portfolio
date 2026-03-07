"use client";

import { values, stats } from "@/data/content";
import Link from "next/link";

const timeline = [
  { year: "2019", title: "온다마케팅 설립", desc: "실행사 출신 3인이 모여 시작. 기술 중심의 마케팅을 목표로." },
  { year: "2020", title: "100 클라이언트 돌파", desc: "의료, 법률, F&B 업종 중심으로 빠르게 성장." },
  { year: "2021", title: "대행사 대행 시작", desc: "타 대행사들이 기술력을 인정하며 재하청 의뢰 시작." },
  { year: "2022", title: "셀프 광고 툴 출시", desc: "직접 운영을 원하는 소상공인을 위한 자체 도구 개발." },
  { year: "2023", title: "500+ 클라이언트", desc: "누적 500곳 이상의 광고를 운영하며 업계 인정." },
  { year: "2024", title: "AI 마케팅 도입", desc: "AI 기반 키워드 분석, 자동 최적화 시스템 구축." },
];

function ValueIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    code: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    shield: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    chart: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  };
  return <>{icons[type] || icons.code}</>;
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-dark" />
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-glow opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block font-mono text-xs text-neon/60 tracking-widest uppercase mb-4">
              // About ONDA
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-grotesk text-white mb-6">
              영업사원이 아닌
              <br />
              <span className="gradient-neon-text text-glow">기술자</span>가 운영합니다
            </h1>
            <p className="text-base sm:text-lg text-gray-400 korean-text leading-relaxed">
              온다마케팅은 5년간 직접 광고를 집행해온 실행사 출신이 만든 마케팅 에이전시입니다.
              영업팀이 없습니다. 상담부터 운영, 리포팅까지 실제 기술자가 직접 합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 gradient-dark-section" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card p-5 text-center">
                <div className="text-2xl sm:text-3xl font-grotesk font-bold text-neon text-glow mb-1">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-sm text-white mb-0.5 korean-text">{stat.label}</div>
                <div className="text-[10px] text-gray-600 korean-text">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-dark" />
        <div className="absolute inset-0 dot-bg" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block font-mono text-xs text-neon/60 tracking-widest uppercase mb-4">
              // Core Values
            </span>
            <h2 className="section-title text-white">
              우리의 <span className="gradient-neon-text text-glow">원칙</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <div key={value.title} className="neon-card group">
                <div className="neon-card-inner !p-8">
                  <div className="w-12 h-12 rounded-xl bg-neon/10 border border-neon/20 flex items-center justify-center text-neon mb-6 group-hover:bg-neon/20 transition-all">
                    <ValueIcon type={value.icon} />
                  </div>
                  <div className="font-mono text-xs text-neon/50 uppercase tracking-widest mb-2">
                    {value.title}
                  </div>
                  <h3 className="text-xl font-grotesk font-bold text-white mb-4 korean-text">
                    {value.titleKo}
                  </h3>
                  <p className="text-sm text-gray-400 korean-text leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 gradient-dark-section" />
        <div className="absolute inset-0 grid-bg opacity-20" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block font-mono text-xs text-neon/60 tracking-widest uppercase mb-4">
              // Timeline
            </span>
            <h2 className="section-title text-white">
              성장 <span className="gradient-neon-text text-glow">타임라인</span>
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon/30 via-neon/10 to-transparent" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={item.year} className={`relative flex items-start gap-6 sm:gap-8 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-dark border-2 border-neon shadow-[0_0_8px_rgba(0,255,136,0.5)] z-10" />

                  <div className={`ml-10 sm:ml-0 sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? "sm:text-right sm:pr-8" : "sm:text-left sm:pl-8"}`}>
                    <div className="glass-card p-5">
                      <span className="font-mono text-sm text-neon text-glow">{item.year}</span>
                      <h3 className="text-lg font-grotesk font-bold text-white mt-1 mb-2 korean-text">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-400 korean-text">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Difference */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-dark" />
        <div className="absolute inset-0 dot-bg" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block font-mono text-xs text-neon/60 tracking-widest uppercase mb-4">
              // Difference
            </span>
            <h2 className="section-title text-white">
              일반 대행사 vs{" "}
              <span className="gradient-neon-text text-glow">온다</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="neon-card">
              <div className="neon-card-inner !p-0 overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-charcoal-border">
                      <th className="p-4 text-left text-gray-500 font-mono text-xs">항목</th>
                      <th className="p-4 text-center text-gray-500 font-mono text-xs">일반 대행사</th>
                      <th className="p-4 text-center text-neon/60 font-mono text-xs">온다마케팅</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["담당자", "영업사원", "기술자 직접 운영"],
                      ["불가능한 의뢰", "일단 수락", "솔직히 거절"],
                      ["리포트", "월 1회 요약", "주간 + 실시간 대시보드"],
                      ["대행사 대행", "없음", "100곳 이상 대행"],
                      ["계약 조건", "장기 필수", "성과 없으면 해지 가능"],
                    ].map(([item, normal, onda]) => (
                      <tr key={item} className="border-b border-charcoal-border/50">
                        <td className="p-4 text-gray-300 korean-text">{item}</td>
                        <td className="p-4 text-center text-gray-500 korean-text">{normal}</td>
                        <td className="p-4 text-center text-neon korean-text">{onda}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 gradient-dark-section" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-glow opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-white mb-6">
            기술자에게 직접
            <br />
            <span className="gradient-neon-text text-glow">상담</span>받으세요
          </h2>
          <p className="text-gray-400 korean-text mb-8">
            영업 전화 없이, 현재 상태를 무료로 진단해드립니다.
          </p>
          <Link href="/contact" className="neon-button inline-block text-base">
            무료 상담 신청
          </Link>
        </div>
      </section>
    </div>
  );
}
