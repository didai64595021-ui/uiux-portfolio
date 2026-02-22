"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { faqItems } from "@/data/faq";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section ref={ref} className="section-padding bg-gradient-section relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="label-text text-primary-500 mb-3 block font-outfit">FAQ</span>
            <h2 className="heading-2 korean-text text-gray-900 mb-4">
              자주 묻는 <span className="text-gradient">질문</span>
            </h2>
            <p className="body-text max-w-xl mx-auto korean-text">
              궁금한 점이 있으시면 언제든 문의해주세요.
            </p>
          </motion.div>

          {/* Accordion */}
          <div className="space-y-3 sm:space-y-4">
            {faqItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <div
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    openId === item.id
                      ? "bg-white border-primary-200 shadow-lg shadow-primary-500/5"
                      : "bg-white border-gray-100 hover:border-gray-200"
                  }`}
                >
                  <button
                    onClick={() => toggle(item.id)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                    aria-expanded={openId === item.id}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="hidden sm:inline-flex flex-shrink-0 w-7 h-7 rounded-lg bg-primary-50 text-primary-500 text-xs font-bold items-center justify-center font-outfit">
                        Q
                      </span>
                      <span className="text-base sm:text-lg font-semibold text-gray-900 korean-text">
                        {item.question}
                      </span>
                    </div>
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openId === item.id
                          ? "bg-primary-500 text-white rotate-0"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {openId === item.id ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {openId === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                          <div className="sm:pl-10">
                            <p className="text-sm sm:text-base text-gray-600 korean-text leading-relaxed">
                              {item.answer}
                            </p>
                            <div className="mt-3">
                              <span className="inline-flex px-2.5 py-1 bg-primary-50 rounded-lg text-xs font-medium text-primary-600">
                                {item.category}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-10 sm:mt-12"
          >
            <p className="text-gray-500 text-sm mb-3 korean-text">
              찾으시는 답변이 없으신가요?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
            >
              직접 문의하기
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
