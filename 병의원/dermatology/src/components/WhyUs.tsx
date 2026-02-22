"use client";

import { motion } from "framer-motion";
import { Shield, Heart, Award } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "피부과 전문의 직접 진료",
    desc: "대학병원 출신 피부과 전문의가 처음부터 끝까지 직접 상담하고 시술합니다. 정확한 진단이 올바른 치료의 시작입니다.",
    highlight: "전문의 1:1 상담",
  },
  {
    icon: Heart,
    title: "환자 중심 맞춤 치료",
    desc: "같은 증상이라도 환자마다 피부 상태와 생활패턴이 다릅니다. 개인별 맞춤 치료 프로토콜로 최적의 결과를 이끌어냅니다.",
    highlight: "개인 맞춤 프로토콜",
  },
  {
    icon: Award,
    title: "최신 장비 & 안전한 시술",
    desc: "FDA 승인 정품 장비만 사용하며, 철저한 위생 관리와 안전 프로토콜로 신뢰할 수 있는 시술 환경을 제공합니다.",
    highlight: "FDA 승인 정품 장비",
  },
];

export default function WhyUs() {
  return (
    <section className="section-padding">
      <div className="container-base">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-primary font-serif text-lg sm:text-xl italic">
            Why ONDA
          </span>
          <h2 className="section-title mt-2 korean-text">
            온다를 선택하는 이유
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              <div className="card text-center h-full">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 sm:mb-6">
                  <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                  {item.highlight}
                </span>
                <h3 className="text-lg sm:text-xl font-bold mb-3 korean-text">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-secondary korean-text leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
