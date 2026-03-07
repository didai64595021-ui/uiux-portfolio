"use client";

import { useState } from "react";
import { caseStudies } from "@/data/content";

const allTags = ["전체", "파워링크", "플레이스", "인스타그램", "콘텐츠", "키워드", "로컬"];

export default function CaseStudies() {
  const [activeTag, setActiveTag] = useState("전체");

  const filtered =
    activeTag === "전체"
      ? caseStudies
      : caseStudies.filter((c) => c.tags.includes(activeTag));

  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 dot-bg" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block font-mono text-xs text-neon/60 tracking-widest uppercase mb-4">
            // Case Studies
          </span>
          <h2 className="section-title text-white mb-4">
            성과{" "}
            <span className="gradient-neon-text text-glow">타임라인</span>
          </h2>
          <p className="section-subtitle mx-auto">
            실제 클라이언트의 Before & After.
            <br className="hidden sm:block" />
            숫자는 거짓말하지 않습니다.
          </p>
        </div>

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

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon/20 via-neon/10 to-transparent" />

          <div className="space-y-6 md:space-y-12">
            {filtered.map((study, i) => (
              <div
                key={study.id}
                className={`relative md:flex items-start gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-dark border-2 border-neon shadow-[0_0_10px_rgba(0,255,136,0.5)] z-10 top-8" />

                {/* Card */}
                <div className="md:w-[calc(50%-2rem)] w-full">
                  <div className="glass-card p-5 sm:p-6 group">
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
                        <h3 className="text-lg font-grotesk font-bold text-white">
                          {study.client}
                        </h3>
                      </div>
                      <span className="font-grotesk font-bold text-neon text-xl text-glow">
                        {study.improvement}
                      </span>
                    </div>

                    <p className="text-sm text-gray-400 korean-text mb-5">
                      {study.description}
                    </p>

                    {/* Before / After */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-red-500/5 rounded-lg p-3 border border-red-500/10">
                        <div className="text-[10px] font-mono text-red-400/60 uppercase tracking-wider mb-2">
                          Before
                        </div>
                        {Object.entries(study.metrics.before).map(([key, val]) => (
                          <div key={key} className="text-xs text-gray-500 mb-1 korean-text">
                            {val}
                          </div>
                        ))}
                      </div>
                      <div className="bg-neon/5 rounded-lg p-3 border border-neon/10">
                        <div className="text-[10px] font-mono text-neon/60 uppercase tracking-wider mb-2">
                          After
                        </div>
                        {Object.entries(study.metrics.after).map(([key, val]) => (
                          <div key={key} className="text-xs text-neon/70 mb-1 korean-text">
                            {val}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex gap-2 mt-4">
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

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
