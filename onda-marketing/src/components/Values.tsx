"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Fingerprint, ShieldCheck, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Fingerprint,
    title: "Identity",
    titleKr: "기술자 출신",
    description:
      "영업 후 하청을 주는 구조가 아닙니다. 5년간 실행사에서 직접 광고를 운영한 기술자가 분석부터 보고까지 전 과정을 직접 수행합니다.",
    highlight: "분석-전략-실행-최적화-보고, 직접",
    color: "from-primary-400 to-primary-600",
    bgGradient: "from-primary-50 to-emerald-50",
  },
  {
    icon: ShieldCheck,
    title: "Honesty",
    titleKr: "불가능한 건 거절",
    description:
      "안되는 건 안된다고 말합니다. 과대 약속으로 계약을 따내는 것보다, 솔직한 진단으로 신뢰를 쌓는 것이 더 중요합니다. 모든 것이 가능하다는 곳은 의심하세요.",
    highlight: "솔직한 진단, 신뢰",
    color: "from-emerald-400 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
  },
  {
    icon: TrendingUp,
    title: "Performance",
    titleKr: "상위노출은 수단",
    description:
      "상위 노출은 목표가 아닙니다. 진짜 목표는 클라이언트의 매출 성장입니다. 모든 전략과 실행은 실제 비즈니스 성과를 향합니다.",
    highlight: "매출 성장, 실제 비즈니스 성과",
    color: "from-teal-400 to-green-600",
    bgGradient: "from-teal-50 to-green-50",
  },
];

export default function Values() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="section-padding bg-gradient-section relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-50/30 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="label-text text-primary-500 mb-3 block font-outfit">OUR VALUES</span>
          <h2 className="heading-2 korean-text text-gray-900 mb-4">
            온다마케팅의 <span className="text-gradient">3가지 원칙</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto korean-text">
            원칙을 지키는 것이 결국 최고의 성과를 만듭니다.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 overflow-hidden hover-lift h-full">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                        <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Title */}
                    <div className="mb-4">
                      <h3 className="font-outfit text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                        {value.title}
                      </h3>
                      <span className="text-sm font-semibold text-primary-500 korean-text">
                        {value.titleKr}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-500 korean-text leading-relaxed mb-4">
                      {value.description}
                    </p>

                    {/* Highlight */}
                    <div className="pt-4 border-t border-gray-100">
                      <span className="text-xs font-semibold text-primary-600 korean-text">
                        {value.highlight}
                      </span>
                    </div>
                  </div>

                  {/* Decorative number */}
                  <div className="absolute -bottom-4 -right-2 font-outfit text-[120px] font-bold text-gray-50 group-hover:text-primary-50 transition-colors duration-500 leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
