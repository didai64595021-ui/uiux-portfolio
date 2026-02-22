"use client";

import { services } from "@/data/content";
import Link from "next/link";

function ServiceIcon({ type, size = "w-8 h-8" }: { type: string; size?: string }) {
  const icons: Record<string, React.ReactNode> = {
    search: (
      <svg className={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
    map: (
      <svg className={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
    instagram: (
      <svg className={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
      </svg>
    ),
    tool: (
      <svg className={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  };
  return <>{icons[type] || icons.search}</>;
}

const processSteps = [
  { step: "01", title: "무료 진단", desc: "현재 마케팅 상태와 개선 포인트를 분석합니다." },
  { step: "02", title: "전략 수립", desc: "업종과 목표에 맞는 맞춤 전략을 제안합니다." },
  { step: "03", title: "캠페인 집행", desc: "데이터 기반으로 광고를 세팅하고 운영합니다." },
  { step: "04", title: "최적화 & 리포트", desc: "실시간 최적화와 투명한 성과 리포트를 제공합니다." },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-dark" />
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-glow opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block font-mono text-xs text-neon/60 tracking-widest uppercase mb-4">
            // All Services
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-grotesk text-white mb-6">
            실행사의{" "}
            <span className="gradient-neon-text text-glow">무기</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto korean-text">
            영업이 아닌 기술로, 허황된 약속 대신 데이터로 일합니다.
            각 서비스는 5년간의 실전 경험에서 설계되었습니다.
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="relative section-padding">
        <div className="absolute inset-0 gradient-dark-section" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-neon/10 border border-neon/20 flex items-center justify-center text-neon mb-6">
                  <ServiceIcon type={service.icon} />
                </div>

                <div className="font-mono text-[10px] text-neon/50 uppercase tracking-widest mb-2">
                  {service.subtitle}
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-white mb-4 korean-text">
                  {service.title}
                </h2>
                <p className="text-gray-400 korean-text mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-neon/10 border border-neon/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-300 korean-text">{f}</span>
                    </div>
                  ))}
                </div>

                {/* Metric */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon/20 bg-neon/5">
                  <span className="w-2 h-2 rounded-full bg-neon" />
                  <span className="font-mono text-sm text-neon">{service.metric}</span>
                </div>
              </div>

              {/* Visual Card */}
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <div className="neon-card">
                  <div className="neon-card-inner !p-0 overflow-hidden">
                    <div className="bg-charcoal/50 p-8 sm:p-10 min-h-[300px] flex flex-col justify-center items-center text-center">
                      <div className="w-24 h-24 rounded-3xl bg-neon/10 border border-neon/20 flex items-center justify-center text-neon mb-6">
                        <ServiceIcon type={service.icon} size="w-12 h-12" />
                      </div>
                      <div className="font-grotesk text-4xl font-bold text-neon text-glow mb-2">
                        {service.metric.split(" ")[1] || service.metric}
                      </div>
                      <div className="text-sm text-gray-500">{service.metric.split(" ")[0]}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-dark" />
        <div className="absolute inset-0 dot-bg" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block font-mono text-xs text-neon/60 tracking-widest uppercase mb-4">
              // Process
            </span>
            <h2 className="section-title text-white mb-4">
              진행{" "}
              <span className="gradient-neon-text text-glow">프로세스</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={step.step} className="glass-card p-6 text-center group">
                <div className="font-mono text-5xl font-bold text-charcoal-border/40 group-hover:text-neon/20 transition-colors mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-grotesk font-bold text-white mb-2 korean-text">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 korean-text">{step.desc}</p>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-neon/20">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
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
            어떤 서비스가 맞는지
            <br />
            <span className="gradient-neon-text text-glow">무료로 진단</span>받으세요
          </h2>
          <p className="text-gray-400 korean-text mb-8">
            업종과 현재 상황에 따라 최적의 서비스 조합이 달라집니다.
            <br />
            5분 상담으로 맞춤 전략을 안내받으세요.
          </p>
          <Link href="/contact" className="neon-button inline-block text-base">
            무료 진단 신청하기
          </Link>
        </div>
      </section>
    </div>
  );
}
