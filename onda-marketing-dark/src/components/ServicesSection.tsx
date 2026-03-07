"use client";

import { useState } from "react";
import { services } from "@/data/content";
import Link from "next/link";

function ServiceIcon({ type }: { type: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    search: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
    map: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
    instagram: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
      </svg>
    ),
    tool: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  };

  return (
    <div className="w-12 h-12 rounded-xl bg-neon/10 border border-neon/20 flex items-center justify-center text-neon group-hover:bg-neon/20 group-hover:border-neon/40 transition-all duration-300">
      {iconMap[type] || iconMap.search}
    </div>
  );
}

export default function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 grid-bg" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="inline-block font-mono text-xs text-neon/60 tracking-widest uppercase mb-4">
            // Services
          </span>
          <h2 className="section-title text-white mb-4">
            실행사가 만든{" "}
            <span className="gradient-neon-text text-glow">4가지 무기</span>
          </h2>
          <p className="section-subtitle mx-auto">
            영업이 아닌 기술로, 결과로 말하는 서비스
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="neon-card group cursor-pointer"
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="neon-card-inner flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <ServiceIcon type={service.icon} />
                  <div className="flex-1">
                    <div className="font-mono text-[10px] text-neon/50 tracking-wider uppercase mb-1">
                      {service.subtitle}
                    </div>
                    <h3 className="text-lg sm:text-xl font-grotesk font-bold text-white korean-text">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 korean-text mb-4 flex-1">
                  {service.description}
                </p>

                {/* Features */}
                <div
                  className={`space-y-2 mb-4 transition-all duration-500 ${
                    hoveredId === service.id
                      ? "max-h-48 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="w-1 h-1 rounded-full bg-neon flex-shrink-0" />
                      <span className="korean-text">{f}</span>
                    </div>
                  ))}
                </div>

                {/* Metric */}
                <div className="flex items-center justify-between pt-4 border-t border-charcoal-border">
                  <span className="font-mono text-xs text-neon/80">
                    {service.metric}
                  </span>
                  <svg
                    className="w-5 h-5 text-neon/40 group-hover:text-neon group-hover:translate-x-1 transition-all duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <Link href="/services" className="neon-button-outline inline-block text-sm">
            서비스 자세히 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
