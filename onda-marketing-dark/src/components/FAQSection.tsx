"use client";

import { useState, useMemo } from "react";
import { faqItems } from "@/data/content";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const filteredFaq = useMemo(() => {
    if (!search.trim()) return faqItems;
    const q = search.toLowerCase();
    return faqItems.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 dot-bg" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block font-mono text-xs text-neon/60 tracking-widest uppercase mb-4">
            // FAQ
          </span>
          <h2 className="section-title text-white mb-4">
            자주 묻는{" "}
            <span className="gradient-neon-text text-glow">질문</span>
          </h2>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            placeholder="질문을 검색하세요..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-charcoal rounded-xl border border-charcoal-border text-white placeholder:text-gray-600 font-grotesk text-sm focus:outline-none focus:border-neon/40 focus:shadow-[0_0_15px_rgba(0,255,136,0.1)] transition-all duration-300"
          />
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {filteredFaq.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "border-neon/30 bg-neon/[0.02]"
                    : "border-charcoal-border bg-charcoal/30 hover:border-neon/10"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left min-h-[56px]"
                >
                  <span
                    className={`font-grotesk text-sm sm:text-base korean-text pr-4 transition-colors duration-300 ${
                      isOpen ? "text-neon" : "text-gray-300"
                    }`}
                  >
                    {item.question}
                  </span>
                  <svg
                    className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                      isOpen ? "text-neon rotate-180" : "text-gray-600"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5 pt-0">
                    <div className="h-px bg-charcoal-border mb-4" />
                    <p className="text-sm text-gray-400 korean-text leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredFaq.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 font-mono text-sm">
              검색 결과가 없습니다
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
