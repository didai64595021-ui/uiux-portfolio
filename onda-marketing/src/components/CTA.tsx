"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, Mail, Clock } from "lucide-react";

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">
            {/* Green gradient background */}
            <div className="bg-gradient-cta p-8 sm:p-12 lg:p-16 relative">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                  backgroundSize: "30px 30px",
                }}
              />

              <div className="relative z-10 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6 sm:mb-8">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="text-sm font-medium text-white/90">무료 진단 받기</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 korean-text leading-tight">
                  지금 바로, 무료로
                  <br />
                  마케팅 진단을 받아보세요
                </h2>

                <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-8 sm:mb-10 korean-text leading-relaxed">
                  현재 마케팅 현황을 분석하고,
                  <br className="hidden sm:block" />
                  개선점과 예상 성과를 무료로 알려드립니다.
                  <br className="hidden sm:block" />
                  부담 없이 시작하세요. 영업 전화 없습니다.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 sm:mb-12">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 rounded-2xl text-base sm:text-lg font-bold hover:bg-gray-50 hover:shadow-xl transition-all duration-300 group"
                  >
                    무료 진단 요청하기
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="tel:02-0000-0000"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-2xl text-base sm:text-lg font-semibold hover:bg-white/10 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    전화 상담하기
                  </a>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white/70">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">ondadaad@google.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm korean-text">평일 09:00 - 18:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
