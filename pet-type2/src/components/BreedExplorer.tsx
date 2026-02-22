'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { breeds, statLabels, type Breed, type BreedStats } from '@/data/breeds';

function RadarChart({ stats, size = 160 }: { stats: BreedStats; size?: number }) {
  const center = size / 2;
  const radius = size * 0.38;
  const labels = Object.keys(stats) as (keyof BreedStats)[];

  const getPoint = (index: number, value: number) => {
    const angle = (Math.PI * 2 * index) / labels.length - Math.PI / 2;
    const r = (value / 5) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  const points = labels.map((key, i) => getPoint(i, stats[key]));
  const pathData = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Grid */}
      {[1, 2, 3, 4, 5].map((level) => {
        const gridPoints = labels.map((_, i) => getPoint(i, level));
        const gridPath = gridPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';
        return (
          <path
            key={level}
            d={gridPath}
            fill="none"
            stroke="#1A2F23"
            strokeOpacity={0.08}
            strokeWidth={1}
          />
        );
      })}

      {/* Axis lines */}
      {labels.map((_, i) => {
        const endPoint = getPoint(i, 5);
        return (
          <line
            key={i}
            x1={center}
            y1={center}
            x2={endPoint.x}
            y2={endPoint.y}
            stroke="#1A2F23"
            strokeOpacity={0.08}
            strokeWidth={1}
          />
        );
      })}

      {/* Data area */}
      <motion.path
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        d={pathData}
        fill="rgba(0, 214, 143, 0.15)"
        stroke="#00D68F"
        strokeWidth={2}
        style={{ transformOrigin: `${center}px ${center}px` }}
      />

      {/* Data points */}
      {points.map((p, i) => (
        <motion.circle
          key={i}
          initial={{ opacity: 0, r: 0 }}
          animate={{ opacity: 1, r: 4 }}
          transition={{ delay: 0.3 + i * 0.05 }}
          cx={p.x}
          cy={p.y}
          fill="#00D68F"
          stroke="white"
          strokeWidth={2}
        />
      ))}

      {/* Labels */}
      {labels.map((key, i) => {
        const angle = (Math.PI * 2 * i) / labels.length - Math.PI / 2;
        const labelR = radius + 24;
        const x = center + labelR * Math.cos(angle);
        const y = center + labelR * Math.sin(angle);
        return (
          <text
            key={key}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-[10px] sm:text-[11px] fill-sage/60 font-medium"
          >
            {statLabels[key]}
          </text>
        );
      })}
    </svg>
  );
}

function BreedCard({ breed, isActive, onClick }: { breed: Breed; isActive: boolean; onClick: () => void }) {
  return (
    <motion.button
      layout
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative rounded-2xl overflow-hidden text-left transition-all ${
        isActive
          ? 'ring-2 ring-mint shadow-lg shadow-mint/10'
          : 'ring-1 ring-sage/10 hover:ring-mint/30'
      }`}
    >
      <div className="relative aspect-[4/3]">
        <Image src={breed.image} alt={breed.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-sage/70 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-white font-bold text-sm sm:text-base">{breed.name}</h3>
          <p className="text-white/60 text-xs">{breed.nameEn}</p>
        </div>
      </div>
    </motion.button>
  );
}

export default function BreedExplorer() {
  const [activeBreed, setActiveBreed] = useState<Breed>(breeds[0]);

  return (
    <section id="breeds" className="py-16 sm:py-20 md:py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-mint/10 text-mint text-sm font-medium mb-4">
            Breed Explorer
          </span>
          <h2 className="korean-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-sage mb-4">
            견종 탐색기
          </h2>
          <p className="korean-text text-sage/60 text-base sm:text-lg">
            각 견종의 특성을 한눈에 비교해보세요
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Breed grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3">
            {breeds.map((breed) => (
              <BreedCard
                key={breed.id}
                breed={breed}
                isActive={activeBreed.id === breed.id}
                onClick={() => setActiveBreed(breed)}
              />
            ))}
          </div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBreed.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-sage-50 rounded-3xl p-6 sm:p-8 lg:sticky lg:top-24"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden flex-shrink-0">
                  <Image src={activeBreed.image} alt={activeBreed.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-sage">{activeBreed.name}</h3>
                  <p className="text-sage/50 text-sm">{activeBreed.nameEn}</p>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {activeBreed.characteristics.map((c) => (
                      <span key={c} className="px-2 py-0.5 bg-mint/10 text-mint text-xs rounded-full font-medium">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="korean-text text-sage/70 text-sm sm:text-base leading-relaxed mb-6">
                {activeBreed.description}
              </p>

              {/* Info grid */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="bg-white rounded-xl p-3 text-center">
                  <div className="text-xs text-sage/50 mb-1">원산지</div>
                  <div className="text-sm font-semibold text-sage">{activeBreed.origin}</div>
                </div>
                <div className="bg-white rounded-xl p-3 text-center">
                  <div className="text-xs text-sage/50 mb-1">수명</div>
                  <div className="text-sm font-semibold text-sage">{activeBreed.lifespan}</div>
                </div>
                <div className="bg-white rounded-xl p-3 text-center">
                  <div className="text-xs text-sage/50 mb-1">체중</div>
                  <div className="text-sm font-semibold text-sage">{activeBreed.weightRange}</div>
                </div>
              </div>

              {/* Radar chart */}
              <div className="flex justify-center mb-6">
                <RadarChart stats={activeBreed.stats} size={200} />
              </div>

              {/* Stat bars */}
              <div className="space-y-3">
                {(Object.keys(activeBreed.stats) as (keyof BreedStats)[]).map((key) => (
                  <div key={key}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-sage/60">{statLabels[key]}</span>
                      <span className="text-xs text-mint font-medium">{activeBreed.stats[key]}/5</span>
                    </div>
                    <div className="progress-track h-1.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(activeBreed.stats[key] / 5) * 100}%` }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="progress-fill h-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
