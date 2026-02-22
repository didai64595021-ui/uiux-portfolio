'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { breeds, type Breed } from '@/data/breeds';

const costLabels: Record<string, { label: string; icon: string; color: string }> = {
  food: { label: '사료', icon: '🥘', color: '#00D68F' },
  grooming: { label: '미용', icon: '✂️', color: '#4ECC88' },
  medical: { label: '의료', icon: '🏥', color: '#00B577' },
  supplies: { label: '용품', icon: '🎾', color: '#008F5E' },
};

function formatCost(n: number) {
  return n.toLocaleString() + '원';
}

export default function CostCalculator() {
  const [selected, setSelected] = useState<Breed>(breeds[0]);

  const costs = selected.monthlyCost;
  const total = Object.values(costs).reduce((a, b) => a + b, 0);
  const maxCost = Math.max(...Object.values(costs));

  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-sage-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-mint/5 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-mint/10 text-mint text-sm font-medium mb-4">
            Cost Calculator
          </span>
          <h2 className="korean-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-sage mb-4">
            월간 양육비 계산기
          </h2>
          <p className="korean-text text-sage/60 text-base sm:text-lg">
            품종별 예상 월간 양육비를 확인해보세요
          </p>
        </motion.div>

        <div className="bg-white rounded-3xl shadow-xl shadow-sage/5 p-6 sm:p-8 lg:p-10">
          {/* Breed selector */}
          <div className="mb-8">
            <label className="block text-sm text-sage/60 mb-3 font-medium">품종 선택</label>
            <div className="flex gap-2 flex-wrap">
              {breeds.map((breed) => (
                <button
                  key={breed.id}
                  onClick={() => setSelected(breed)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    selected.id === breed.id
                      ? 'bg-sage text-white shadow-md'
                      : 'bg-sage/5 text-sage/60 hover:bg-sage/10'
                  }`}
                >
                  {breed.name}
                </button>
              ))}
            </div>
          </div>

          {/* Cost breakdown */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Bar chart */}
            <div className="space-y-5">
              {(Object.entries(costs) as [string, number][]).map(([key, value]) => {
                const info = costLabels[key];
                const percent = (value / maxCost) * 100;
                return (
                  <div key={key}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{info.icon}</span>
                        <span className="text-sm font-medium text-sage">{info.label}</span>
                      </div>
                      <span className="text-sm font-bold text-sage">{formatCost(value)}</span>
                    </div>
                    <div className="h-3 bg-sage/5 rounded-full overflow-hidden">
                      <motion.div
                        key={`${selected.id}-${key}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${percent}%` }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{ background: info.color }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Total */}
            <div className="flex flex-col items-center justify-center bg-sage-50 rounded-2xl p-6 sm:p-8">
              <span className="text-sm text-sage/50 mb-1">예상 월간 양육비</span>
              <motion.span
                key={selected.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-3xl sm:text-4xl font-bold gradient-text mb-2"
              >
                {formatCost(total)}
              </motion.span>
              <span className="text-xs text-sage/40">/ 월</span>

              {/* Donut chart */}
              <div className="relative w-40 h-40 mt-6">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  {(() => {
                    let offset = 0;
                    const entries = Object.entries(costs) as [string, number][];
                    return entries.map(([key, value]) => {
                      const percent = (value / total) * 100;
                      const circumference = Math.PI * 70;
                      const dashLen = (percent / 100) * circumference;
                      const dashGap = circumference - dashLen;
                      const currentOffset = offset;
                      offset += dashLen;
                      return (
                        <motion.circle
                          key={key}
                          initial={{ strokeDasharray: `0 ${circumference}` }}
                          animate={{ strokeDasharray: `${dashLen} ${dashGap}` }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          cx="50"
                          cy="50"
                          r="35"
                          fill="none"
                          stroke={costLabels[key].color}
                          strokeWidth="8"
                          strokeLinecap="round"
                          strokeDashoffset={-currentOffset}
                        />
                      );
                    });
                  })()}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xs text-sage/40">연간 약</span>
                  <span className="text-sm font-bold text-sage">{formatCost(total * 12)}</span>
                </div>
              </div>

              {/* Legend */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-1 mt-4">
                {Object.entries(costLabels).map(([key, info]) => (
                  <div key={key} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ background: info.color }} />
                    <span className="text-xs text-sage/60">{info.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-xs text-sage/30 mt-6 text-center korean-text">
            * 위 금액은 평균 추정치이며, 실제 비용은 지역, 관리 방식 등에 따라 달라질 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
