"use client";

import { techStack } from "@/data/content";

const categoryColors: Record<string, string> = {
  광고: "border-blue-500/30 text-blue-400",
  분석: "border-purple-500/30 text-purple-400",
  SEO: "border-neon/30 text-neon",
  디자인: "border-pink-500/30 text-pink-400",
  AI: "border-amber-500/30 text-amber-400",
  자동화: "border-cyan-500/30 text-cyan-400",
};

export default function TechStack() {
  const categories = Array.from(new Set(techStack.map((t) => t.category)));

  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 gradient-dark-section" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block font-mono text-xs text-neon/60 tracking-widest uppercase mb-4">
            // Tech Stack
          </span>
          <h2 className="section-title text-white mb-4">
            우리가 사용하는{" "}
            <span className="gradient-neon-text text-glow">도구들</span>
          </h2>
          <p className="section-subtitle mx-auto">
            검증된 도구와 기술로 최적의 성과를 만듭니다
          </p>
        </div>

        {/* Category Groups */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <div key={cat} className="glass-card p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-2 h-2 rounded-full ${categoryColors[cat]?.includes("blue") ? "bg-blue-400" : categoryColors[cat]?.includes("purple") ? "bg-purple-400" : categoryColors[cat]?.includes("neon") ? "bg-neon" : categoryColors[cat]?.includes("pink") ? "bg-pink-400" : categoryColors[cat]?.includes("amber") ? "bg-amber-400" : "bg-cyan-400"}`} />
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                  {cat}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack
                  .filter((t) => t.category === cat)
                  .map((tool) => (
                    <span
                      key={tool.name}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono border bg-dark/50 transition-all duration-300 hover:scale-105 ${
                        categoryColors[cat] || "border-gray-600/30 text-gray-400"
                      }`}
                    >
                      {tool.name}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Animated connecting lines visual */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-charcoal-border bg-charcoal/30">
            <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
            <span className="text-xs font-mono text-gray-400">
              12+ tools integrated & optimized
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
