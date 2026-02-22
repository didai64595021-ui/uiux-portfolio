"use client";

import { useState } from "react";
import { caseStudies } from "@/data/content";
import Link from "next/link";

const allTags = ["전체", "파워링크", "플레이스", "인스타그램", "콘텐츠", "키워드", "로컬"];

const additionalCases = [
  {
    id: 5,
    client: "P 교육 플랫폼",
    industry: "교육",
    period: "7개월",
    description: "네이버 파워링크와 인스타 리타겟팅으로 수강생 유입 파이프라인 구축",
    metrics: {
      before: { visitors: "월 수강생 45명", cost: "CPA 78,000원", conversion: "1.8%" },
      after: { visitors: "월 수강생 187명", cost: "CPA 23,000원", conversion: "5.2%" },
    },
    improvement: "+315%",
    tags: ["파워링크", "인스타그램"],
  },
  {
    id: 6,
    client: "Y 뷰티 브랜드",
    industry: "뷰티",
    period: "6개월",
    description: "인스타그램 콘텐츠 전략 + 인플루언서 협업으로 브랜드 인지도 폭발",
    metrics: {
      before: { visitors: "팔로워 2,300명", cost: "참여율 0.8%", conversion: "월 매출 800만원" },
      after: { visitors: "팔로워 23,000명", cost: "참여율 4.5%", conversion: "월 매출 4,200만원" },
    },
    improvement: "+425%",
    tags: ["인스타그램", "콘텐츠"],
  },
];

const allCases = [...caseStudies, ...additionalCases];

export default function PortfolioPage() {
  const [activeTag, setActiveTag] = useState("전체");

  const filtered =
    activeTag === "전체"
      ? allCases
      : allCases.filter((c) => c.tags.includes(activeTag));

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-dark" />
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-glow opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block font-mono text-xs text-neon/60 tracking-widest uppercase mb-4">
            // Portfolio
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-grotesk text-white mb-6">
            성과{" "}
            <span className="gradient-neon-text text-glow">포트폴리오</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto korean-text">
            실제 클라이언트의 마케팅 성과입니다. 모든 수치는 실제 데이터 기반이며,
            고객 동의 하에 공개합니다.
          </p>

          {/* Summary Stats */}
          <div className="flex items-center justify-center gap-8 sm:gap-12 mt-10">
            {[
              { num: "500+", label: "클라이언트" },
              { num: "100+", label: "대행사 대행" },
              { num: "350%", label: "평균 ROAS" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-grotesk font-bold text-neon text-glow">
                  {s.num}
                </div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter & Cases */}
      <section className="relative section-padding">
        <div className="absolute inset-0 gradient-dark-section" />
        <div className="absolute inset-0 dot-bg" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 sm:mb-14">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full text-xs font-grotesk transition-all duration-300 ${
                  activeTag === tag
                    ? "bg-neon/15 text-neon border border-neon/40"
                    : "bg-charcoal text-gray-500 border border-charcoal-border hover:text-gray-300 hover:border-neon/20"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Cases Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((study) => (
              <div key={study.id} className="neon-card group">
                <div className="neon-card-inner">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] text-neon/50 uppercase tracking-wider">
                          {study.industry}
                        </span>
                        <span className="text-gray-700">|</span>
                        <span className="font-mono text-[10px] text-gray-600">
                          {study.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-grotesk font-bold text-white">
                        {study.client}
                      </h3>
                    </div>
                    <span className="font-grotesk font-bold text-neon text-2xl text-glow">
                      {study.improvement}
                    </span>
                  </div>

                  <p className="text-sm text-gray-400 korean-text mb-6">
                    {study.description}
                  </p>

                  {/* Before / After */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-red-500/5 rounded-xl p-4 border border-red-500/10">
                      <div className="text-[10px] font-mono text-red-400/60 uppercase tracking-wider mb-3">
                        Before
                      </div>
                      {Object.entries(study.metrics.before).map(([, val]) => (
                        <div key={val} className="text-xs text-gray-500 mb-1.5 korean-text">
                          {val}
                        </div>
                      ))}
                    </div>
                    <div className="bg-neon/5 rounded-xl p-4 border border-neon/10">
                      <div className="text-[10px] font-mono text-neon/60 uppercase tracking-wider mb-3">
                        After
                      </div>
                      {Object.entries(study.metrics.after).map(([, val]) => (
                        <div key={val} className="text-xs text-neon/70 mb-1.5 korean-text">
                          {val}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-[10px] font-mono rounded bg-charcoal text-gray-500 border border-charcoal-border"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-dark" />
        <div className="absolute inset-0 grid-bg opacity-20" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-white mb-6">
            다음 성공 사례의
            <br />
            <span className="gradient-neon-text text-glow">주인공이 되세요</span>
          </h2>
          <p className="text-gray-400 korean-text mb-8">
            무료 진단으로 시작하세요. 영업 전화는 하지 않습니다.
          </p>
          <Link href="/contact" className="neon-button inline-block text-base">
            무료 진단 받기
          </Link>
        </div>
      </section>
    </div>
  );
}
