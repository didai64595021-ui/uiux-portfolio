'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { breeds, statLabels, type Breed, type BreedStats } from '@/data/breeds';

function RadarChart({ stats, size = 200 }: { stats: BreedStats; size?: number }) {
  const center = size / 2;
  const radius = size * 0.36;
  const labels = Object.keys(stats) as (keyof BreedStats)[];

  const getPoint = (index: number, value: number) => {
    const angle = (Math.PI * 2 * index) / labels.length - Math.PI / 2;
    const r = (value / 5) * radius;
    return { x: center + r * Math.cos(angle), y: center + r * Math.sin(angle) };
  };

  const points = labels.map((key, i) => getPoint(i, stats[key]));
  const pathData = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {[1, 2, 3, 4, 5].map((level) => {
        const gridPoints = labels.map((_, i) => getPoint(i, level));
        const gridPath = gridPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';
        return <path key={level} d={gridPath} fill="none" stroke="#1A2F23" strokeOpacity={0.08} strokeWidth={1} />;
      })}
      {labels.map((_, i) => {
        const endPoint = getPoint(i, 5);
        return <line key={i} x1={center} y1={center} x2={endPoint.x} y2={endPoint.y} stroke="#1A2F23" strokeOpacity={0.08} strokeWidth={1} />;
      })}
      <motion.path
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        d={pathData}
        fill="rgba(0, 214, 143, 0.15)"
        stroke="#00D68F"
        strokeWidth={2}
        style={{ transformOrigin: `${center}px ${center}px` }}
      />
      {points.map((p, i) => (
        <motion.circle key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + i * 0.05 }} cx={p.x} cy={p.y} r={4} fill="#00D68F" stroke="white" strokeWidth={2} />
      ))}
      {labels.map((key, i) => {
        const angle = (Math.PI * 2 * i) / labels.length - Math.PI / 2;
        const labelR = radius + 28;
        const x = center + labelR * Math.cos(angle);
        const y = center + labelR * Math.sin(angle);
        return <text key={key} x={x} y={y} textAnchor="middle" dominantBaseline="middle" className="text-[11px] fill-sage/60 font-medium">{statLabels[key]}</text>;
      })}
    </svg>
  );
}

export default function BreedsPage() {
  const [selected, setSelected] = useState<Breed>(breeds[0]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (id) {
      const found = breeds.find((b) => b.id === id);
      if (found) setSelected(found);
    }
  }, []);

  return (
    <main className="min-h-[100svh] bg-white">
      <Header />

      <section className="pt-28 sm:pt-32 pb-12 bg-sage relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,214,143,0.1),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-mint/15 text-mint text-sm font-medium mb-4">
              Breed Explorer
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 korean-text">
              견종 상세 정보
            </h1>
            <p className="text-white/50 text-base sm:text-lg korean-text">
              각 품종의 특성과 양육 정보를 상세히 확인하세요
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breed tabs */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-4 mb-8">
            {breeds.map((breed) => (
              <button
                key={breed.id}
                onClick={() => setSelected(breed)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  selected.id === breed.id
                    ? 'bg-sage text-white shadow-md'
                    : 'bg-sage/5 text-sage/60 hover:bg-sage/10'
                }`}
              >
                <div className="relative w-6 h-6 rounded-full overflow-hidden">
                  <Image src={breed.image} alt={breed.name} fill className="object-cover" />
                </div>
                {breed.name}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* Main info */}
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                  <Image src={selected.image} alt={selected.name} fill className="object-cover" />
                </div>

                <div className="flex flex-col justify-center">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sage mb-2">
                    {selected.name}
                  </h2>
                  <p className="text-sage/40 font-display mb-4">{selected.nameEn}</p>

                  <div className="flex gap-2 flex-wrap mb-6">
                    {selected.characteristics.map((c) => (
                      <span key={c} className="px-3 py-1 bg-mint/10 text-mint text-sm rounded-full font-medium">{c}</span>
                    ))}
                  </div>

                  <p className="korean-text text-sage/70 leading-relaxed mb-8">
                    {selected.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-sage-50 rounded-2xl p-4 text-center">
                      <div className="text-xs text-sage/50 mb-1">원산지</div>
                      <div className="text-sm font-bold text-sage">{selected.origin}</div>
                    </div>
                    <div className="bg-sage-50 rounded-2xl p-4 text-center">
                      <div className="text-xs text-sage/50 mb-1">수명</div>
                      <div className="text-sm font-bold text-sage">{selected.lifespan}</div>
                    </div>
                    <div className="bg-sage-50 rounded-2xl p-4 text-center">
                      <div className="text-xs text-sage/50 mb-1">체중</div>
                      <div className="text-sm font-bold text-sage">{selected.weightRange}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-sage-50 rounded-3xl p-6 sm:p-8 flex flex-col items-center">
                  <h3 className="text-lg font-bold text-sage mb-6">특성 분석</h3>
                  <RadarChart stats={selected.stats} size={240} />
                </div>

                <div className="bg-sage-50 rounded-3xl p-6 sm:p-8">
                  <h3 className="text-lg font-bold text-sage mb-6">예상 월간 양육비</h3>
                  <div className="space-y-4">
                    {Object.entries(selected.monthlyCost).map(([key, value]) => {
                      const labels: Record<string, string> = { food: '사료', grooming: '미용', medical: '의료', supplies: '용품' };
                      const icons: Record<string, string> = { food: '🥘', grooming: '✂️', medical: '🏥', supplies: '🎾' };
                      return (
                        <div key={key}>
                          <div className="flex justify-between items-center mb-1.5">
                            <div className="flex items-center gap-2">
                              <span>{icons[key]}</span>
                              <span className="text-sm text-sage font-medium">{labels[key]}</span>
                            </div>
                            <span className="text-sm font-bold text-sage">{value.toLocaleString()}원</span>
                          </div>
                          <div className="progress-track h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${(value / 100000) * 100}%` }}
                              transition={{ duration: 0.6 }}
                              className="progress-fill h-full"
                            />
                          </div>
                        </div>
                      );
                    })}
                    <div className="pt-4 border-t border-sage/10 flex justify-between items-center">
                      <span className="text-sm text-sage/60">월 합계</span>
                      <span className="text-lg font-bold gradient-text">
                        {Object.values(selected.monthlyCost).reduce((a, b) => a + b, 0).toLocaleString()}원
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
}
