"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Calendar, MapPin } from "lucide-react";

export default function CTA() {
  return (
    <section className="section-padding bg-foreground text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-base relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-primary-light font-serif text-lg sm:text-xl italic">
            Reservation
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 korean-text">
            지금 바로 상담을 시작하세요
          </h2>
          <p className="text-white/70 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg korean-text leading-relaxed">
            피부 고민, 혼자 고민하지 마세요.
            <br />
            전문의와의 1:1 상담으로 최적의 솔루션을 찾아드립니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-10">
            <Link
              href="/booking"
              className="btn-primary text-center flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              온라인 예약
            </Link>
            <a
              href="tel:02-1234-5678"
              className="border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full
                font-medium transition-all duration-300 hover:bg-white/10
                text-center min-h-[44px] flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              02-1234-5678
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 max-w-3xl mx-auto"
        >
          <div className="text-center p-4 sm:p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
            <MapPin className="w-5 h-5 text-primary-light mx-auto mb-2" />
            <p className="text-xs sm:text-sm text-white/70 korean-text">
              서울시 강남구 테헤란로 123
              <br />
              온다빌딩 3층
            </p>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
            <Phone className="w-5 h-5 text-primary-light mx-auto mb-2" />
            <p className="text-xs sm:text-sm text-white/70">
              02-1234-5678
              <br />
              (평일 09-19 / 토 09-15)
            </p>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
            <Calendar className="w-5 h-5 text-primary-light mx-auto mb-2" />
            <p className="text-xs sm:text-sm text-white/70 korean-text">
              점심시간 13:00 - 14:00
              <br />
              일요일/공휴일 휴진
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
