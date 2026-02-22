"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/50 to-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl hidden lg:block" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl hidden lg:block" />

      {/* Content */}
      <div className="container-base relative z-10 pb-16 sm:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 sm:mb-8">
            <Sparkles className="w-4 h-4 text-primary-light" />
            <span className="text-xs sm:text-sm text-white/90 font-medium">
              피부과 전문의 직접 진료
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight korean-text">
            아름다운 피부,
            <br />
            <span className="text-primary-light">온다</span>에서 시작됩니다
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/80 mt-4 sm:mt-6 max-w-lg korean-text leading-relaxed">
            과학적 근거와 섬세한 미적 감각으로
            <br className="hidden sm:block" />
            당신만의 건강한 아름다움을 설계합니다
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10">
            <Link
              href="/booking"
              className="btn-primary text-center flex items-center justify-center gap-2 text-base sm:w-auto"
            >
              온라인 예약
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/treatments"
              className="border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full
                font-medium transition-all duration-300 hover:bg-white/10
                text-center min-h-[44px] flex items-center justify-center"
            >
              진료과목 보기
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
