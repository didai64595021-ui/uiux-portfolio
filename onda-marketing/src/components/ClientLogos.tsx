"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Placeholder brand names for the marquee
const brands = [
  "강남 프리미엄 치과",
  "모브 패션",
  "홍대 브런치 카페",
  "판교 IT 스타트업",
  "역삼 필라테스",
  "서초 인테리어",
  "송파 피부과",
  "분당 법무법인",
  "성수 레스토랑",
  "압구정 헤어살롱",
  "청담 뷰티클리닉",
  "잠실 부동산",
];

const brandsRow2 = [
  "강서 정형외과",
  "마포 요가원",
  "용산 전자상가",
  "노원 학원",
  "종로 한의원",
  "영등포 호텔",
  "구로 물류센터",
  "동작 세무법인",
  "관악 동물병원",
  "서대문 베이커리",
  "은평 네일샵",
  "도봉 카센터",
];

export default function ClientLogos() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-16 sm:py-20 bg-white relative overflow-hidden">
      <div className="container-custom mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="label-text text-primary-500 mb-3 block font-outfit">TRUSTED BY</span>
          <h2 className="heading-3 korean-text text-gray-900">
            <span className="text-gradient font-outfit">500+</span> 클라이언트가 선택한 파트너
          </h2>
        </motion.div>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex animate-marquee">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={`row1-${i}`}
              className="flex-shrink-0 mx-3 px-6 py-3 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-primary-50 hover:border-primary-200 transition-all duration-300"
            >
              <span className="text-sm font-medium text-gray-500 whitespace-nowrap korean-text">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Reverse) */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex animate-marquee-reverse">
          {[...brandsRow2, ...brandsRow2].map((brand, i) => (
            <div
              key={`row2-${i}`}
              className="flex-shrink-0 mx-3 px-6 py-3 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-primary-50 hover:border-primary-200 transition-all duration-300"
            >
              <span className="text-sm font-medium text-gray-500 whitespace-nowrap korean-text">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
