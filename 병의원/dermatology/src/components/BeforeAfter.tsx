"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    category: "여드름 흉터",
    desc: "프락셀 레이저 3회 시술",
    before: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b8?w=400&h=300&fit=crop",
    after: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=400&h=300&fit=crop",
  },
  {
    category: "색소 치료",
    desc: "피코레이저 5회 시술",
    before: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=300&fit=crop",
    after: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=400&h=300&fit=crop",
  },
  {
    category: "리프팅",
    desc: "울쎄라 + 써마지 병행",
    before: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=300&fit=crop",
    after: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=300&fit=crop",
  },
];

export default function BeforeAfter() {
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
            Before &amp; After
          </span>
          <h2 className="section-title mt-2 korean-text">
            시술 전후 비교
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto korean-text">
            실제 환자분들의 시술 결과를 확인하세요
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cases.map((item, i) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card !p-0 overflow-hidden group"
            >
              <div className="grid grid-cols-2">
                <div className="relative">
                  <div
                    className="aspect-square bg-cover bg-center bg-muted"
                    style={{ backgroundImage: `url('${item.before}')` }}
                  />
                  <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white bg-foreground/60 backdrop-blur-sm px-2 py-1 rounded">
                    BEFORE
                  </span>
                </div>
                <div className="relative">
                  <div
                    className="aspect-square bg-cover bg-center bg-muted"
                    style={{ backgroundImage: `url('${item.after}')` }}
                  />
                  <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white bg-primary/80 backdrop-blur-sm px-2 py-1 rounded">
                    AFTER
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <span className="text-xs text-primary font-semibold">
                  {item.category}
                </span>
                <p className="text-sm sm:text-base text-secondary mt-1 korean-text">
                  {item.desc}
                </p>
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
          <Link
            href="/cases"
            className="btn-outline inline-flex items-center gap-2"
          >
            더 많은 사례 보기
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
