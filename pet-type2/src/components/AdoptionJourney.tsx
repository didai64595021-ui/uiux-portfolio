'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: '상담 예약',
    description: '전화 또는 온라인으로 편하게 상담을 예약하세요. 원하는 품종과 조건을 미리 알려주시면 맞춤 안내를 드립니다.',
    icon: '📞',
    color: 'from-mint to-emerald-400',
  },
  {
    number: '02',
    title: '매장 방문',
    description: '청결한 프리미엄 매장에서 아이들을 직접 만나보세요. 전문 상담사가 1:1로 안내해드립니다.',
    icon: '🏪',
    color: 'from-emerald-400 to-teal-400',
  },
  {
    number: '03',
    title: '건강 확인',
    description: '수의사 건강 검진 결과서, 혈통서, 예방접종 기록을 투명하게 확인하실 수 있습니다.',
    icon: '🏥',
    color: 'from-teal-400 to-cyan-400',
  },
  {
    number: '04',
    title: '분양 계약',
    description: '공정한 계약서 작성 및 건강 보증 안내. 모든 조건을 꼼꼼히 확인하고 진행합니다.',
    icon: '📋',
    color: 'from-cyan-400 to-blue-400',
  },
  {
    number: '05',
    title: '가족 탄생',
    description: '새 가족을 맞이하세요! 첫 일주일 적응 가이드와 필수 용품 체크리스트를 제공합니다.',
    icon: '🏠',
    color: 'from-blue-400 to-violet-400',
  },
  {
    number: '06',
    title: '사후 관리',
    description: '분양 후에도 평생 건강 상담과 메디컬 서비스를 지원합니다. 언제든 연락주세요.',
    icon: '💚',
    color: 'from-violet-400 to-mint',
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex gap-4 sm:gap-6"
    >
      {/* Timeline */}
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.2, type: 'spring', stiffness: 200 }}
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-xl sm:text-2xl shadow-lg`}
        >
          {step.icon}
        </motion.div>
        {index < steps.length - 1 && (
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
            className="w-0.5 flex-1 bg-gradient-to-b from-mint/30 to-transparent mt-3"
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-10 sm:pb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-mint text-xs font-bold tracking-widest">{step.number}</span>
          <h3 className="text-lg sm:text-xl font-bold text-sage">{step.title}</h3>
        </div>
        <p className="korean-text text-sage/60 text-sm sm:text-base leading-relaxed max-w-md">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function AdoptionJourney() {
  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-sage-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-mint/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-emerald-500/5 blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-mint/10 text-mint text-sm font-medium mb-4">
            Adoption Journey
          </span>
          <h2 className="korean-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-sage mb-4">
            분양 여정 안내
          </h2>
          <p className="korean-text text-sage/60 text-base sm:text-lg">
            투명하고 안전한 6단계 분양 프로세스
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
