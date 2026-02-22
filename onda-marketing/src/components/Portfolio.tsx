"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { portfolioItems, categories } from "@/data/portfolio";

export default function Portfolio() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filtered =
    activeCategory === "all"
      ? portfolioItems.slice(0, 4)
      : portfolioItems.filter((p) => p.category === activeCategory).slice(0, 4);

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="label-text text-primary-500 mb-3 block font-outfit">PORTFOLIO</span>
          <h2 className="heading-2 korean-text text-gray-900 mb-4">
            숫자로 증명하는 <span className="text-gradient">성과</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto korean-text">
            약속이 아닌 결과로 말합니다. Before & After 데이터로 확인하세요.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
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

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative rounded-3xl overflow-hidden bg-white border border-gray-100 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary-700">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary-500/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                      {item.duration}
                    </span>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white korean-text">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <p className="text-sm text-gray-500 korean-text mb-5 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Before / After */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Before */}
                    <div className="bg-gray-50 rounded-2xl p-4">
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">
                        Before
                      </span>
                      {item.beforeMetrics.map((m) => (
                        <div key={m.label} className="flex justify-between items-baseline mb-1 last:mb-0">
                          <span className="text-xs text-gray-500">{m.label}</span>
                          <span className="text-sm font-bold text-gray-600">{m.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* After */}
                    <div className="bg-primary-50 rounded-2xl p-4">
                      <span className="text-xs font-semibold text-primary-500 uppercase tracking-wider block mb-2">
                        After
                      </span>
                      {item.afterMetrics.map((m) => (
                        <div key={m.label} className="flex justify-between items-baseline mb-1 last:mb-0">
                          <span className="text-xs text-primary-600">{m.label}</span>
                          <span className="text-sm font-bold text-primary-700">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 sm:mt-16"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-200 text-primary-600 rounded-2xl font-semibold hover:bg-primary-50 hover:border-primary-300 transition-all duration-300 group"
          >
            전체 포트폴리오 보기
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
