"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Zap,
  Syringe,
  ArrowUpRight,
  Sparkles,
  Scissors,
} from "lucide-react";
import Link from "next/link";

const treatments = [
  {
    icon: Droplets,
    title: "피부질환 치료",
    desc: "여드름, 아토피, 건선 등 피부질환을 근본적으로 치료합니다",
    items: ["여드름/흉터", "아토피 피부염", "건선/습진"],
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Zap,
    title: "레이저 시술",
    desc: "최신 레이저 장비로 정밀하고 안전한 피부 개선을 제공합니다",
    items: ["피코레이저", "프락셀", "색소/홍조"],
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: Syringe,
    title: "보톡스 & 필러",
    desc: "자연스러운 볼륨감과 주름 개선으로 동안 피부를 만듭니다",
    items: ["보톡스", "필러", "스킨보톡스"],
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: ArrowUpRight,
    title: "리프팅",
    desc: "처진 피부를 탄력 있게 끌어올려 또렷한 윤곽을 만듭니다",
    items: ["울쎄라", "써마지", "실 리프팅"],
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Sparkles,
    title: "피부관리",
    desc: "전문 피부관리 프로그램으로 건강한 피부를 유지합니다",
    items: ["수분관리", "미백관리", "모공관리"],
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Scissors,
    title: "탈모치료",
    desc: "체계적인 두피 진단과 맞춤 치료로 모발 건강을 회복합니다",
    items: ["두피진단", "메조테라피", "PRP 치료"],
    color: "bg-cyan-50 text-cyan-600",
  },
];

export default function Treatments() {
  return (
    <section id="treatments" className="section-padding bg-white">
      <div className="container-base">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-primary font-serif text-lg sm:text-xl italic">
            Treatments
          </span>
          <h2 className="section-title mt-2 korean-text">
            전문 진료과목
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto korean-text">
            피부과 전문의의 정확한 진단과 맞춤 치료로
            <br className="hidden sm:block" />
            건강하고 아름다운 피부를 되찾아 드립니다
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {treatments.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href="/treatments" className="card block group cursor-pointer h-full">
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${item.color}
                    flex items-center justify-center mb-4 sm:mb-5
                    group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors korean-text">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-secondary mb-4 korean-text leading-relaxed">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.items.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 bg-muted rounded-full text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-14"
        >
          <Link
            href="/treatments"
            className="btn-outline inline-flex items-center gap-2"
          >
            전체 진료과목 보기
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
