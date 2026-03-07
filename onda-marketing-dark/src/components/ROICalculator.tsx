"use client";

import { useState, useMemo } from "react";

const industries = [
  { id: "medical", label: "의료/병원", multiplier: 3.5 },
  { id: "law", label: "법률", multiplier: 4.0 },
  { id: "interior", label: "인테리어", multiplier: 2.8 },
  { id: "fnb", label: "F&B/요식업", multiplier: 2.2 },
  { id: "education", label: "교육", multiplier: 3.0 },
  { id: "beauty", label: "뷰티/미용", multiplier: 3.2 },
  { id: "ecommerce", label: "이커머스", multiplier: 2.5 },
  { id: "other", label: "기타", multiplier: 2.0 },
];

function formatKRW(num: number): string {
  if (num >= 10000) return `${(num / 10000).toFixed(0)}억`;
  if (num >= 1000) return `${(num / 1000).toFixed(0)}천만`;
  if (num >= 100) return `${num.toFixed(0)}만`;
  return `${num.toFixed(0)}만`;
}

export default function ROICalculator() {
  const [budget, setBudget] = useState(300);
  const [industry, setIndustry] = useState("medical");

  const selectedIndustry = industries.find((i) => i.id === industry) || industries[0];
  const results = useMemo(() => {
    const m = selectedIndustry.multiplier;
    const expectedRevenue = budget * m;
    const roas = Math.round(m * 100);
    const estimatedClicks = Math.round(budget * 10 * 0.035 * 100) / 100;
    const cpa = Math.round(budget * 10000 / (estimatedClicks * 0.05));

    return {
      expectedRevenue,
      roas,
      estimatedClicks: Math.round(estimatedClicks * 1000),
      cpa,
      profit: expectedRevenue - budget,
    };
  }, [budget, selectedIndustry]);

  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 gradient-dark-section" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block font-mono text-xs text-neon/60 tracking-widest uppercase mb-4">
            // ROI Calculator
          </span>
          <h2 className="section-title text-white mb-4">
            예상{" "}
            <span className="gradient-neon-text text-glow">ROI</span>{" "}
            계산기
          </h2>
          <p className="section-subtitle mx-auto">
            월 광고 예산과 업종을 선택하면
            <br className="hidden sm:block" />
            예상 성과를 계산해드립니다
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="neon-card">
            <div className="neon-card-inner !p-6 sm:!p-10">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Input Side */}
                <div className="space-y-8">
                  {/* Budget Slider */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <label className="text-sm font-grotesk text-gray-300">
                        월 광고 예산
                      </label>
                      <span className="font-grotesk font-bold text-neon text-lg text-glow">
                        {budget}만원
                      </span>
                    </div>
                    <input
                      type="range"
                      min={50}
                      max={2000}
                      step={50}
                      value={budget}
                      onChange={(e) => setBudget(Number(e.target.value))}
                      className="w-full h-2 rounded-full appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #00FF88 0%, #00FF88 ${
                          ((budget - 50) / 1950) * 100
                        }%, #2A2A2A ${((budget - 50) / 1950) * 100}%, #2A2A2A 100%)`,
                      }}
                    />
                    <div className="flex justify-between mt-2 text-[10px] text-gray-600 font-mono">
                      <span>50만</span>
                      <span>500만</span>
                      <span>1,000만</span>
                      <span>2,000만</span>
                    </div>
                  </div>

                  {/* Industry Select */}
                  <div>
                    <label className="block text-sm font-grotesk text-gray-300 mb-4">
                      업종 선택
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {industries.map((ind) => (
                        <button
                          key={ind.id}
                          onClick={() => setIndustry(ind.id)}
                          className={`px-3 py-2.5 rounded-lg text-xs font-grotesk transition-all duration-300 ${
                            industry === ind.id
                              ? "bg-neon/15 text-neon border border-neon/40 box-glow"
                              : "bg-charcoal text-gray-400 border border-charcoal-border hover:border-neon/20 hover:text-gray-300"
                          }`}
                        >
                          {ind.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Results Side */}
                <div className="space-y-4">
                  <div className="text-xs font-mono text-neon/50 tracking-wider uppercase mb-2">
                    예상 결과
                  </div>

                  {/* Main ROI */}
                  <div className="bg-dark/60 rounded-xl p-5 border border-neon/10">
                    <div className="text-sm text-gray-400 mb-1">예상 ROAS</div>
                    <div className="text-4xl sm:text-5xl font-grotesk font-bold text-neon text-glow-strong">
                      {results.roas}%
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-dark/60 rounded-xl p-4 border border-charcoal-border">
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">
                        예상 매출
                      </div>
                      <div className="text-lg font-grotesk font-bold text-white">
                        {formatKRW(results.expectedRevenue)}원
                      </div>
                    </div>
                    <div className="bg-dark/60 rounded-xl p-4 border border-charcoal-border">
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">
                        예상 순이익
                      </div>
                      <div className="text-lg font-grotesk font-bold text-neon">
                        +{formatKRW(results.profit)}원
                      </div>
                    </div>
                    <div className="bg-dark/60 rounded-xl p-4 border border-charcoal-border">
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">
                        예상 유입
                      </div>
                      <div className="text-lg font-grotesk font-bold text-white">
                        {results.estimatedClicks.toLocaleString()}명
                      </div>
                    </div>
                    <div className="bg-dark/60 rounded-xl p-4 border border-charcoal-border">
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">
                        예상 CPA
                      </div>
                      <div className="text-lg font-grotesk font-bold text-white">
                        {results.cpa.toLocaleString()}원
                      </div>
                    </div>
                  </div>

                  <p className="text-[10px] text-gray-600 korean-text">
                    * 업종 평균 데이터 기반 예상치이며, 실제 성과는 다를 수
                    있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
