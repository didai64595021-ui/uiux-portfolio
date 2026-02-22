"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "첫 방문 시 어떤 절차로 진행되나요?",
    a: "첫 방문 시 접수 → 피부 상태 정밀 진단(피부분석기) → 전문의 상담 → 치료 계획 수립 순으로 진행됩니다. 상담 시간은 약 30분 정도 소요되며, 당일 시술도 가능합니다.",
  },
  {
    q: "레이저 시술 후 일상생활이 바로 가능한가요?",
    a: "대부분의 레이저 시술은 시술 당일부터 일상생활이 가능합니다. 다만 시술 종류에 따라 1~3일 정도 붉은기가 있을 수 있으며, 자외선 차단제 사용을 권장합니다. 시술 전 정확한 회복 기간을 안내해 드립니다.",
  },
  {
    q: "보톡스/필러는 얼마나 자주 맞아야 하나요?",
    a: "보톡스는 보통 3~6개월 간격으로, 필러는 6개월~1년 간격으로 유지 시술을 권장합니다. 다만 개인의 근육량, 대사율에 따라 차이가 있어 전문의 상담 후 맞춤 스케줄을 안내해 드립니다.",
  },
  {
    q: "시술 비용과 결제 방법은 어떻게 되나요?",
    a: "시술 비용은 개인 상태와 시술 범위에 따라 달라지며, 상담 시 정확한 비용을 안내해 드립니다. 카드 결제, 현금, 무이자 할부 등 다양한 결제 방법을 지원하며, 합리적인 가격 정책을 운영합니다.",
  },
  {
    q: "주차가 가능한가요?",
    a: "건물 지하주차장 이용이 가능하며, 진료 시간 동안 주차비를 지원해 드립니다. 접수 시 차량번호를 말씀해 주시면 됩니다.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding">
      <div className="container-base max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-primary font-serif text-lg sm:text-xl italic">
            FAQ
          </span>
          <h2 className="section-title mt-2 korean-text">
            자주 묻는 질문
          </h2>
        </motion.div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl border border-accent/30 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left
                  min-h-[56px] hover:bg-muted/50 transition-colors"
              >
                <span className="text-sm sm:text-base font-semibold pr-4 korean-text">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-secondary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-secondary korean-text leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
