"use client";

import { values } from "@/data/content";

function ValueIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    code: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    shield: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    chart: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  };

  return <>{icons[type] || icons.code}</>;
}

export default function ValuesSection() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 gradient-dark-section" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block font-mono text-xs text-neon/60 tracking-widest uppercase mb-4">
            // Our Values
          </span>
          <h2 className="section-title text-white mb-4">
            왜{" "}
            <span className="gradient-neon-text text-glow">온다</span>
            인가
          </h2>
          <p className="section-subtitle mx-auto">
            대행사를 고르는 기준이 달라져야 합니다
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value, i) => (
            <div key={value.title} className="group">
              <div className="neon-card h-full">
                <div className="neon-card-inner flex flex-col h-full !p-8">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-neon/10 border border-neon/20 flex items-center justify-center text-neon mb-6 group-hover:bg-neon/20 group-hover:border-neon/40 group-hover:box-glow transition-all duration-500">
                    <ValueIcon type={value.icon} />
                  </div>

                  {/* Number */}
                  <div className="font-mono text-6xl font-bold text-charcoal-border/50 mb-4">
                    0{i + 1}
                  </div>

                  {/* Title */}
                  <div className="mb-2">
                    <span className="font-mono text-xs text-neon/50 uppercase tracking-widest">
                      {value.title}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-grotesk font-bold text-white mb-4 korean-text">
                    {value.titleKo}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 korean-text leading-relaxed flex-1">
                    {value.description}
                  </p>

                  {/* Bottom line */}
                  <div className="mt-6 pt-4 border-t border-charcoal-border">
                    <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-neon to-neon/20 rounded-full transition-all duration-700" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
