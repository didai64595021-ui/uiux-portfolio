"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Target, Zap, Settings, FileText } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "분석",
    subtitle: "Analysis",
    description: "현재 마케팅 현황, 경쟁사, 타겟 고객을 정밀 분석합니다. 데이터 기반으로 문제점을 정확히 진단합니다.",
    icon: Search,
    details: ["키워드 경쟁 분석", "경쟁사 벤치마킹", "타겟 오디언스 리서치", "현재 성과 진단"],
  },
  {
    number: "02",
    title: "전략",
    subtitle: "Strategy",
    description: "분석 결과를 바탕으로 최적의 마케팅 전략을 수립합니다. 목표 KPI와 실행 로드맵을 함께 설계합니다.",
    icon: Target,
    details: ["KPI 설정", "채널 전략 수립", "예산 배분 계획", "콘텐츠 방향 설정"],
  },
  {
    number: "03",
    title: "실행",
    subtitle: "Execution",
    description: "전략을 실제 캠페인으로 전환합니다. 세팅부터 라이브까지 기술자가 직접 실행합니다.",
    icon: Zap,
    details: ["광고 세팅 & 라이브", "콘텐츠 제작 & 배포", "플레이스 최적화", "A/B 테스트 진행"],
  },
  {
    number: "04",
    title: "최적화",
    subtitle: "Optimization",
    description: "실시간 데이터를 모니터링하며 끊임없이 개선합니다. 작은 차이가 큰 성과를 만듭니다.",
    icon: Settings,
    details: ["실시간 성과 모니터링", "입찰가 자동 조절", "광고문안 최적화", "전환율 개선"],
  },
  {
    number: "05",
    title: "보고",
    subtitle: "Reporting",
    description: "투명한 성과 보고서를 제공합니다. 수치로 증명하고, 다음 전략에 반영합니다.",
    icon: FileText,
    details: ["주간/월간 리포트", "ROI 분석 보고", "인사이트 도출", "차기 전략 제안"],
  },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="section-padding bg-gradient-section relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, #00C853 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="label-text text-primary-500 mb-3 block font-outfit">PROCESS</span>
          <h2 className="heading-2 korean-text text-gray-900 mb-4">
            체계적인 <span className="text-gradient">5단계 프로세스</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto korean-text">
            감이 아닌 데이터로, 운이 아닌 시스템으로.
            <br className="hidden sm:block" />
            검증된 프로세스가 일관된 성과를 만듭니다.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200 -translate-x-1/2" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-12 sm:mb-16 last:mb-0 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
                  <div
                    className={`bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-500 group ${
                      isEven ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    {/* Number & Title Row */}
                    <div className={`flex items-center gap-3 mb-3 ${isEven ? "md:justify-end" : ""}`}>
                      <span className="font-outfit text-4xl sm:text-5xl font-bold text-primary-100 group-hover:text-primary-200 transition-colors">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 korean-text">
                          {step.title}
                        </h3>
                        <span className="text-xs font-outfit text-gray-400 tracking-wider">
                          {step.subtitle}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-gray-500 korean-text mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : ""}`}>
                      {step.details.map((detail) => (
                        <span
                          key={detail}
                          className="px-3 py-1 text-xs font-medium text-primary-700 bg-primary-50 rounded-full"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center Node */}
                <div className="relative flex-shrink-0 order-first md:order-none">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border-2 border-primary-200 flex items-center justify-center shadow-lg shadow-primary-500/10 group-hover:border-primary-400 transition-colors z-10 relative">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-500" />
                  </div>
                  {/* Connection dot */}
                  <div className="hidden md:block absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary-400 shadow-lg shadow-primary-500/30" style={{ left: "50%", transform: "translateX(-50%) translateY(-50%)" }} />
                </div>

                {/* Spacer for layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
