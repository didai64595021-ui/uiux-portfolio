'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const areas = [
  {
    id: 'entrance',
    name: '매장 입구',
    description: '넓고 밝은 프리미엄 매장 입구. 깨끗한 환경이 첫인상부터 다릅니다.',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&q=80',
    hotspots: [
      { x: 30, y: 50, label: '안내 데스크', desc: '전문 상담사가 상시 대기합니다' },
      { x: 70, y: 40, label: '상담 공간', desc: '편안한 1:1 상담이 가능합니다' },
    ],
  },
  {
    id: 'puppy-zone',
    name: '퍼피 존',
    description: '아이들이 건강하게 생활하는 청결한 공간. 매일 소독 및 관리됩니다.',
    image: 'https://images.unsplash.com/photo-1583337130417-13571f57e42f?w=1200&q=80',
    hotspots: [
      { x: 25, y: 45, label: '개별 사육장', desc: '위생적인 개별 관리 시스템' },
      { x: 65, y: 55, label: '놀이 공간', desc: '사회화를 위한 놀이 시간 운영' },
    ],
  },
  {
    id: 'medical',
    name: '메디컬 센터',
    description: '전문 의료진이 상주하는 건강관리 센터. 최신 의료 장비를 구비하고 있습니다.',
    image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=1200&q=80',
    hotspots: [
      { x: 40, y: 50, label: '진료실', desc: '수의사 상시 진료 가능' },
      { x: 75, y: 35, label: '건강 검사', desc: '최신 의료 장비로 정밀 검사' },
    ],
  },
  {
    id: 'care',
    name: '케어 라운지',
    description: '분양 전후 케어 서비스를 제공하는 프리미엄 공간입니다.',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=80',
    hotspots: [
      { x: 35, y: 60, label: '그루밍 존', desc: '전문 미용 서비스 제공' },
      { x: 60, y: 40, label: '교육 공간', desc: '기본 훈련 교육 진행' },
    ],
  },
];

export default function VirtualVisit() {
  const [activeArea, setActiveArea] = useState(areas[0]);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-sage relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(0,214,143,0.08),transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-mint/15 text-mint text-sm font-medium mb-4">
            Virtual Visit
          </span>
          <h2 className="korean-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            매장 가상 투어
          </h2>
          <p className="korean-text text-white/50 text-base sm:text-lg">
            방문 전에 미리 둘러보세요
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Area selector */}
          <div className="lg:col-span-1 flex lg:flex-col gap-2 overflow-x-auto scrollbar-hide pb-2 lg:pb-0">
            {areas.map((area) => (
              <button
                key={area.id}
                onClick={() => { setActiveArea(area); setActiveHotspot(null); }}
                className={`flex-shrink-0 p-4 rounded-2xl text-left transition-all ${
                  activeArea.id === area.id
                    ? 'bg-mint/15 border border-mint/30'
                    : 'bg-white/5 border border-white/5 hover:bg-white/10'
                }`}
              >
                <h3 className={`font-semibold text-sm sm:text-base ${
                  activeArea.id === area.id ? 'text-mint' : 'text-white/80'
                }`}>
                  {area.name}
                </h3>
                <p className="text-white/40 text-xs mt-1 hidden lg:block korean-text">
                  {area.description}
                </p>
              </button>
            ))}
          </div>

          {/* Image viewer */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeArea.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="relative rounded-3xl overflow-hidden aspect-[16/10]"
              >
                <Image
                  src={activeArea.image}
                  alt={activeArea.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage/50 to-transparent" />

                {/* Hotspots */}
                {activeArea.hotspots.map((hs) => (
                  <motion.button
                    key={hs.label}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                    onClick={() => setActiveHotspot(activeHotspot === hs.label ? null : hs.label)}
                    className="absolute group"
                    style={{ left: `${hs.x}%`, top: `${hs.y}%`, transform: 'translate(-50%, -50%)' }}
                  >
                    <span className="relative flex h-6 w-6 sm:h-8 sm:w-8">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint/40" />
                      <span className="relative inline-flex rounded-full h-6 w-6 sm:h-8 sm:w-8 bg-mint items-center justify-center">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                      </span>
                    </span>

                    {/* Tooltip */}
                    <AnimatePresence>
                      {activeHotspot === hs.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 glass-dark rounded-xl p-3 min-w-[160px] text-center"
                        >
                          <div className="text-white text-sm font-semibold">{hs.label}</div>
                          <div className="text-white/60 text-xs mt-0.5 korean-text">{hs.desc}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                ))}

                {/* Area name */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg sm:text-xl">{activeArea.name}</h3>
                  <p className="text-white/60 text-sm korean-text">{activeArea.description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
