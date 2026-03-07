'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-sage">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920&q=80"
          alt="Happy dogs"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sage/80 via-sage/60 to-sage" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[15%] left-[10%] w-20 h-20 rounded-full bg-mint/10 blur-xl"
        />
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [0, -5, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[30%] right-[15%] w-32 h-32 rounded-full bg-mint/8 blur-2xl"
        />
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[25%] left-[20%] w-24 h-24 rounded-full bg-emerald-500/10 blur-xl"
        />
        {/* Paw prints */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.15, 0], scale: [0.5, 1, 0.5] }}
            transition={{ duration: 4, delay: i * 1.5, repeat: Infinity }}
            className="absolute text-mint/20"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              fontSize: `${20 + Math.random() * 30}px`,
            }}
          >
            🐾
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-12 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mint/15 border border-mint/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
              <span className="text-mint text-sm font-medium">위례 프리미엄 분양샵</span>
            </motion.div>

            <h1 className="korean-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.15] mb-6">
              Premium Life
              <br />
              <span className="gradient-text">with Signature</span>
            </h1>

            <p className="korean-text text-base sm:text-lg text-white/60 max-w-lg mb-8 leading-relaxed">
              건강하고 행복한 반려견과의 특별한 만남.
              <br />
              시그니처펍스에서 당신만의
              <br className="hidden sm:block" />
              시그니처 파트너를 찾아보세요.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/quiz"
                className="w-full sm:w-auto text-center px-8 py-4 bg-gradient-to-r from-mint to-emerald-500 text-white rounded-2xl font-semibold text-base sm:text-lg hover:shadow-xl hover:shadow-mint/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                나에게 맞는 강아지 찾기
              </Link>
              <Link
                href="/puppies"
                className="w-full sm:w-auto text-center px-8 py-4 bg-white/10 text-white border border-white/20 rounded-2xl font-semibold text-base sm:text-lg hover:bg-white/15 transition-all"
              >
                분양 중인 아이들
              </Link>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-8 sm:gap-12 mt-10 pt-8 border-t border-white/10"
            >
              {[
                { value: '2,800+', label: '분양 가족' },
                { value: '100%', label: '건강 보증' },
                { value: '8종', label: '프리미엄 품종' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl sm:text-2xl font-bold text-mint">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-white/40 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero image cluster */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main image */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-[10%] rounded-[2rem] overflow-hidden shadow-2xl shadow-mint/20"
              >
                <Image
                  src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80"
                  alt="Cute puppy"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Floating card 1 */}
              <motion.div
                animate={{ y: [-5, 5, -5], x: [-3, 3, -3] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass-dark rounded-2xl p-4 min-w-[180px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-mint/20 flex items-center justify-center text-lg">🐕</div>
                  <div>
                    <div className="text-white text-sm font-semibold">실시간 분양</div>
                    <div className="text-mint text-xs">6마리 분양 가능</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating card 2 */}
              <motion.div
                animate={{ y: [5, -5, 5], x: [3, -3, 3] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 glass-dark rounded-2xl p-4 min-w-[160px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-mint/20 flex items-center justify-center text-lg">⭐</div>
                  <div>
                    <div className="text-white text-sm font-semibold">4.9 / 5.0</div>
                    <div className="text-white/50 text-xs">분양 만족도</div>
                  </div>
                </div>
              </motion.div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-mint/20 to-transparent blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path d="M0 80V40C240 10 480 0 720 20C960 40 1200 50 1440 30V80H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
