'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const vaccinations = [
  { name: '종합백신 1차', age: '6주', status: 'complete' },
  { name: '종합백신 2차', age: '8주', status: 'complete' },
  { name: '종합백신 3차', age: '10주', status: 'pending' },
  { name: '종합백신 4차', age: '12주', status: 'upcoming' },
  { name: '종합백신 5차', age: '14주', status: 'upcoming' },
  { name: '광견병 접종', age: '16주', status: 'upcoming' },
];

const guarantees = [
  {
    icon: '🛡️',
    title: '30일 건강 보증',
    description: '분양 후 30일 이내 선천성 질환 발견 시 100% 보장',
  },
  {
    icon: '🏥',
    title: '수의사 검진 완료',
    description: '분양 전 전문 수의사의 종합 건강 검진 필수 진행',
  },
  {
    icon: '💉',
    title: '기본 접종 완료',
    description: '연령에 맞는 필수 예방접종 완료 후 분양',
  },
  {
    icon: '🧬',
    title: '유전병 검사',
    description: '주요 유전병에 대한 DNA 검사 결과 제공',
  },
  {
    icon: '📋',
    title: '혈통서 발급',
    description: 'KKC 등록 혈통서 및 마이크로칩 등록 제공',
  },
  {
    icon: '📱',
    title: '평생 건강 상담',
    description: '분양 후에도 건강 관련 무료 상담 지원',
  },
];

export default function HealthDashboard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-mint/10 text-mint text-sm font-medium mb-4">
            Health Dashboard
          </span>
          <h2 className="korean-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-sage mb-4">
            건강 관리 대시보드
          </h2>
          <p className="korean-text text-sage/60 text-base sm:text-lg">
            투명한 건강 관리로 안심 분양을 약속합니다
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Vaccination Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-sage-50 rounded-3xl p-6 sm:p-8"
          >
            <h3 className="text-lg sm:text-xl font-bold text-sage mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-mint/15 flex items-center justify-center text-sm">💉</span>
              예방접종 스케줄
            </h3>

            <div className="space-y-4">
              {vaccinations.map((vax, i) => (
                <motion.div
                  key={vax.name}
                  initial={{ opacity: 0, x: -15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4"
                >
                  {/* Status icon */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    vax.status === 'complete'
                      ? 'bg-mint/20'
                      : vax.status === 'pending'
                      ? 'bg-amber-500/20'
                      : 'bg-sage/10'
                  }`}>
                    {vax.status === 'complete' ? (
                      <svg className="w-4 h-4 text-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : vax.status === 'pending' ? (
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                    ) : (
                      <div className="w-2.5 h-2.5 rounded-full bg-sage/30" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex items-center justify-between">
                    <div>
                      <span className={`text-sm font-medium ${
                        vax.status === 'complete' ? 'text-sage' : 'text-sage/50'
                      }`}>
                        {vax.name}
                      </span>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      vax.status === 'complete'
                        ? 'bg-mint/10 text-mint'
                        : vax.status === 'pending'
                        ? 'bg-amber-500/10 text-amber-500'
                        : 'bg-sage/5 text-sage/40'
                    }`}>
                      {vax.age}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Progress */}
            <div className="mt-6 pt-4 border-t border-sage/10">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-sage/50">접종 진행률</span>
                <span className="text-xs text-mint font-semibold">33%</span>
              </div>
              <div className="progress-track h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '33%' } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="progress-fill h-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Health Guarantees */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
            {guarantees.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                className="bg-sage-50 rounded-2xl p-5 hover:bg-mint/5 transition-colors group"
              >
                <span className="text-2xl mb-3 block">{g.icon}</span>
                <h4 className="text-sm sm:text-base font-bold text-sage mb-1.5 group-hover:text-mint transition-colors">
                  {g.title}
                </h4>
                <p className="korean-text text-sage/50 text-xs sm:text-sm leading-relaxed">
                  {g.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
