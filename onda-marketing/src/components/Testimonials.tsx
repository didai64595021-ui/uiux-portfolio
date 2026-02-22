"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-50/40 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="label-text text-primary-500 mb-3 block font-outfit">TESTIMONIALS</span>
          <h2 className="heading-2 korean-text text-gray-900 mb-4">
            클라이언트의 <span className="text-gradient">생생한 후기</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto korean-text">
            실제 클라이언트들의 솔직한 이야기를 들어보세요.
          </p>
        </motion.div>

        {/* Desktop: Card Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 hover-lift relative overflow-hidden"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary-100 group-hover:text-primary-200 transition-colors" />

              {/* Rating */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary-400 text-primary-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-sm text-gray-600 korean-text leading-relaxed mb-6 line-clamp-5">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Metric */}
              <div className="px-3 py-1.5 bg-primary-50 rounded-lg inline-block mb-6">
                <span className="text-xs font-bold text-primary-600">{t.metric}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">
                    {t.role} / {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg"
            >
              <Quote className="w-8 h-8 text-primary-200 mb-4" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary-400 text-primary-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600 korean-text leading-relaxed mb-4">
                &ldquo;{testimonials[current].content}&rdquo;
              </p>
              <div className="px-3 py-1.5 bg-primary-50 rounded-lg inline-block mb-4">
                <span className="text-xs font-bold text-primary-600">{testimonials[current].metric}</span>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {testimonials[current].name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {testimonials[current].role} / {testimonials[current].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Nav */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary-50 transition-colors"
              aria-label="이전"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary-500 w-6" : "bg-gray-300"
                  }`}
                  aria-label={`후기 ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary-50 transition-colors"
              aria-label="다음"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Bottom row - Desktop additional testimonials */}
        <div className="hidden md:grid grid-cols-2 gap-6 max-w-5xl mx-auto mt-6">
          {testimonials.slice(3, 5).map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className="group bg-white rounded-3xl p-6 border border-gray-100 hover-lift flex gap-4"
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <Image src={t.image} alt={t.name} fill className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <span className="text-xs text-gray-400">{t.company}</span>
                  <div className="flex gap-0.5 ml-auto">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-3 h-3 fill-primary-400 text-primary-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-500 korean-text line-clamp-2">&ldquo;{t.content}&rdquo;</p>
                <span className="text-xs font-bold text-primary-600 mt-2 inline-block">{t.metric}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
