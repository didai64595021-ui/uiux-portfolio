"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Link from "next/link";

const doctors = [
  {
    name: "김온다",
    role: "대표원장",
    specialty: "피부과 전문의",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop",
    careers: [
      "서울대학교 의과대학 졸업",
      "서울대학교병원 피부과 전문의",
      "대한피부과학회 정회원",
      "대한레이저의학회 정회원",
    ],
  },
  {
    name: "이수진",
    role: "진료원장",
    specialty: "피부과 전문의",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop",
    careers: [
      "연세대학교 의과대학 졸업",
      "세브란스병원 피부과 전공의",
      "대한미용피부외과학회 정회원",
      "보톡스/필러 공인 인증의",
    ],
  },
];

export default function Doctors() {
  return (
    <section className="section-padding bg-white">
      <div className="container-base">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-primary font-serif text-lg sm:text-xl italic">
            Doctors
          </span>
          <h2 className="section-title mt-2 korean-text">
            전문 의료진 소개
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto korean-text">
            풍부한 임상 경험과 전문성을 갖춘 의료진이
            <br className="hidden sm:block" />
            최선의 진료를 약속합니다
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {doctors.map((doc, i) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card overflow-hidden !p-0"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center bg-muted"
                  style={{ backgroundImage: `url('${doc.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="text-xs font-medium text-white/90 bg-primary/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    {doc.specialty}
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-baseline gap-3 mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold">{doc.name}</h3>
                  <span className="text-sm text-primary font-medium">
                    {doc.role}
                  </span>
                </div>
                <ul className="space-y-2">
                  {doc.careers.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-2 text-sm text-secondary korean-text"
                    >
                      <GraduationCap className="w-4 h-4 text-primary/60 mt-0.5 flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-14"
        >
          <Link href="/doctors" className="btn-outline inline-flex items-center gap-2">
            의료진 상세보기
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
