'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { puppies, statusColor, type PuppyStatus } from '@/data/puppies';

type FilterStatus = 'all' | PuppyStatus;
type FilterGender = 'all' | '남아' | '여아';

const allBreeds = [...new Set(puppies.map((p) => p.breed))];

export default function PuppiesPage() {
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all');
  const [filterGender, setFilterGender] = useState<FilterGender>('all');
  const [filterBreed, setFilterBreed] = useState<string>('all');

  const filtered = useMemo(() => {
    return puppies.filter((p) => {
      if (filterStatus !== 'all' && p.status !== filterStatus) return false;
      if (filterGender !== 'all' && p.gender !== filterGender) return false;
      if (filterBreed !== 'all' && p.breed !== filterBreed) return false;
      return true;
    });
  }, [filterStatus, filterGender, filterBreed]);

  return (
    <main className="min-h-[100svh] bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-12 bg-sage relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,214,143,0.1),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mint/15 text-mint text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
              Live Puppy Feed
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 korean-text">
              분양 중인 아이들
            </h1>
            <p className="text-white/50 text-base sm:text-lg korean-text">
              건강하고 사랑스러운 퍼피들을 만나보세요
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Smart filters */}
          <div className="bg-sage-50 rounded-2xl p-4 sm:p-6 mb-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {/* Status */}
              <div>
                <label className="block text-xs text-sage/50 mb-2 font-medium">분양 상태</label>
                <div className="flex gap-1.5 flex-wrap">
                  {(['all', '분양중', '예약중', '분양완료'] as FilterStatus[]).map((s) => (
                    <button
                      key={s}
                      onClick={() => setFilterStatus(s)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        filterStatus === s
                          ? 'bg-sage text-white'
                          : 'bg-white text-sage/60 hover:bg-sage/10'
                      }`}
                    >
                      {s === 'all' ? '전체' : s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Gender */}
              <div>
                <label className="block text-xs text-sage/50 mb-2 font-medium">성별</label>
                <div className="flex gap-1.5">
                  {(['all', '남아', '여아'] as FilterGender[]).map((g) => (
                    <button
                      key={g}
                      onClick={() => setFilterGender(g)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        filterGender === g
                          ? 'bg-sage text-white'
                          : 'bg-white text-sage/60 hover:bg-sage/10'
                      }`}
                    >
                      {g === 'all' ? '전체' : g}
                    </button>
                  ))}
                </div>
              </div>

              {/* Breed */}
              <div>
                <label className="block text-xs text-sage/50 mb-2 font-medium">품종</label>
                <select
                  value={filterBreed}
                  onChange={(e) => setFilterBreed(e.target.value)}
                  className="w-full px-3 py-2 bg-white rounded-lg text-xs text-sage border-none focus:ring-2 focus:ring-mint/30"
                >
                  <option value="all">전체 품종</option>
                  {allBreeds.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-sage/10 flex justify-between items-center">
              <span className="text-xs text-sage/40">
                {filtered.length}마리 검색됨
              </span>
              <button
                onClick={() => { setFilterStatus('all'); setFilterGender('all'); setFilterBreed('all'); }}
                className="text-xs text-mint hover:text-emerald-600 transition-colors"
              >
                필터 초기화
              </button>
            </div>
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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
                    className="group bg-white rounded-2xl overflow-hidden ring-1 ring-sage/8 card-hover"
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <Image src={puppy.image} alt={puppy.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full ${sc.bg} backdrop-blur-md`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${sc.dot} ${puppy.status === '분양중' ? 'status-pulse' : ''}`} />
                        <span className={`text-xs font-semibold ${sc.text}`}>{puppy.status}</span>
                      </div>
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-sm">
                        {puppy.gender === '여아' ? '♀' : '♂'}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-sage/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div className="flex gap-2 flex-wrap">
                          {puppy.personality.map((p) => (
                            <span key={p} className="px-2 py-0.5 bg-white/20 text-white text-xs rounded-full backdrop-blur-sm">{p}</span>
                          ))}
                        </div>
                      </div>
                    </div>

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
                          <Link href="/contact" className="text-xs font-semibold text-mint hover:text-emerald-600 transition-colors">
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

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-lg font-bold text-sage mb-2 korean-text">검색 결과가 없습니다</h3>
              <p className="text-sage/50 text-sm korean-text">필터 조건을 변경해보세요</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
