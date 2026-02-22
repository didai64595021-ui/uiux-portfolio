'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { puppies, statusColor, type PuppyStatus } from '@/data/puppies';

type FilterKey = 'all' | PuppyStatus;

const filters: { key: FilterKey; label: string }[] = [
  { key: 'all', label: '전체' },
  { key: '분양중', label: '분양중' },
  { key: '예약중', label: '예약중' },
  { key: '분양완료', label: '분양완료' },
];

export default function LivePuppyFeed() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');

  const filtered = activeFilter === 'all'
    ? puppies
    : puppies.filter((p) => p.status === activeFilter);

  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-mint/10 text-mint text-sm font-medium mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-mint animate-pulse mr-2 align-middle" />
            Live Feed
          </span>
          <h2 className="korean-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-sage mb-4">
            지금 만날 수 있는 아이들
          </h2>
          <p className="korean-text text-sage/60 text-base sm:text-lg">
            실시간으로 분양 상태가 업데이트됩니다
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeFilter === f.key
                  ? 'bg-sage text-white shadow-lg shadow-sage/20'
                  : 'bg-sage/5 text-sage/60 hover:bg-sage/10'
              }`}
            >
              {f.label}
              {f.key !== 'all' && (
                <span className="ml-1.5 text-xs opacity-60">
                  {puppies.filter((p) => p.status === f.key).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Puppy grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((puppy) => {
              const sc = statusColor[puppy.status];
              return (
                <motion.div
                  key={puppy.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-2xl overflow-hidden ring-1 ring-sage/8 card-hover"
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={puppy.image}
                      alt={puppy.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Status badge */}
                    <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full ${sc.bg} backdrop-blur-md`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${sc.dot} ${puppy.status === '분양중' ? 'status-pulse' : ''}`} />
                      <span className={`text-xs font-semibold ${sc.text}`}>{puppy.status}</span>
                    </div>
                    {/* Gender badge */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-sm">
                      {puppy.gender === '여아' ? '♀' : '♂'}
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-sage/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="flex gap-2 flex-wrap">
                        {puppy.personality.map((p) => (
                          <span key={p} className="px-2 py-0.5 bg-white/20 text-white text-xs rounded-full backdrop-blur-sm">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-sage">{puppy.name}</h3>
                      <span className="text-xs text-sage/40 font-medium">{puppy.age}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm text-sage/60">{puppy.breed}</span>
                      <span className="w-1 h-1 rounded-full bg-sage/20" />
                      <span className="text-sm text-sage/60">{puppy.gender}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs text-sage/40">{puppy.weight}</span>
                        <span className="w-1 h-1 rounded-full bg-sage/20" />
                        <span className="text-xs text-sage/40">{puppy.color}</span>
                      </div>
                      {puppy.status === '분양중' && (
                        <Link
                          href="/contact"
                          className="text-xs font-semibold text-mint hover:text-emerald-600 transition-colors"
                        >
                          문의하기 →
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/puppies"
            className="inline-flex items-center gap-2 px-8 py-4 bg-sage text-white rounded-2xl font-semibold hover:bg-sage/90 transition-all hover:shadow-lg"
          >
            모든 아이들 보기
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
