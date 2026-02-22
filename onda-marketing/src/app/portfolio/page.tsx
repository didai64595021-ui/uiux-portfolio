"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { portfolioItems, categories } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";

export default function PortfolioPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, amount: 0.05 });
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary-100/20 rounded-full blur-3xl" />
        <div className="container-custom relative z-10" ref={heroRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="label-text text-primary-500 mb-3 block font-outfit">PORTFOLIO</span>
            <h1 className="heading-1 korean-text text-gray-900 mb-4">
              숫자로 증명하는 <span className="text-gradient">성과</span>
            </h1>
            <p className="body-text max-w-2xl mx-auto korean-text">
              Before & After 데이터로 확인하세요. 약속이 아닌 결과로 말합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-white" ref={gridRef}>
        <div className="container-custom">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-primary-500 text-white shadow-lg shadow-primary-500/25"
                    : "bg-gray-100 text-gray-600 hover:bg-primary-50 hover:text-primary-600"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group relative rounded-3xl overflow-hidden bg-white border border-gray-100 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative h-48 sm:h-52 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary-700">
                        {item.categoryLabel}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-primary-500/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                        {item.duration}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg sm:text-xl font-bold text-white korean-text">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <p className="text-sm text-gray-500 korean-text mb-4 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    {/* Before / After */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-gray-50 rounded-xl p-3">
                        <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider block mb-1.5">
                          Before
                        </span>
                        {item.beforeMetrics.map((m) => (
                          <div key={m.label} className="flex justify-between items-baseline mb-0.5 last:mb-0">
                            <span className="text-[11px] text-gray-500">{m.label}</span>
                            <span className="text-xs font-bold text-gray-600">{m.value}</span>
                          </div>
                        ))}
                      </div>
                      <div className="bg-primary-50 rounded-xl p-3">
                        <span className="text-[10px] font-semibold text-primary-500 uppercase tracking-wider block mb-1.5">
                          After
                        </span>
                        {item.afterMetrics.map((m) => (
                          <div key={m.label} className="flex justify-between items-baseline mb-0.5 last:mb-0">
                            <span className="text-[11px] text-primary-600">{m.label}</span>
                            <span className="text-xs font-bold text-primary-700">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-xs text-gray-400 font-medium">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-gradient-section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 korean-text text-gray-900 mb-4">
              우리 업종에서도 <span className="text-gradient">가능할까요?</span>
            </h2>
            <p className="body-text korean-text mb-8">
              무료 진단을 통해 업종별 맞춤 전략과 예상 성과를 알려드립니다.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white rounded-2xl text-lg font-bold hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 group"
            >
              무료 진단 요청하기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
