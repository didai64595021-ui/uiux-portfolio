"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, MapPin, Instagram, Wrench } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  Search,
  MapPin,
  Instagram,
  Wrench,
};

const services = [
  {
    id: "powerlink",
    title: "파워링크 광고",
    subtitle: "NAVER POWER LINK",
    description: "키워드 분석부터 입찰 전략, 전환 추적까지. 클릭당 비용은 낮추고, 전환율은 높이는 정교한 운영.",
    icon: "Search",
    color: "from-green-400 to-emerald-600",
    bgColor: "bg-green-50",
    stat: "평균 CTR 340% 개선",
    features: ["키워드 리서치", "입찰 최적화", "A/B 테스트", "ROI 분석"],
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    id: "place",
    title: "플레이스 최적화",
    subtitle: "PLACE SEO",
    description: "네이버 플레이스 상위 노출. 리뷰 관리부터 키워드 최적화까지 체계적으로.",
    icon: "MapPin",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    stat: "상위 3위 달성율 89%",
    features: ["순위 분석", "리뷰 관리", "키워드 최적화"],
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "instagram",
    title: "인스타그램 마케팅",
    subtitle: "INSTAGRAM",
    description: "팔로워가 아닌 전환 중심. 콘텐츠 기획부터 릴스 제작, 인플루언서 협업까지.",
    icon: "Instagram",
    color: "from-teal-400 to-green-600",
    bgColor: "bg-teal-50",
    stat: "도달률 420% 향상",
    features: ["콘텐츠 기획", "릴스 제작", "인플루언서"],
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "self-tool",
    title: "셀프 광고 툴",
    subtitle: "SELF-SERVICE TOOL",
    description: "직접 광고를 운영할 수 있는 자체 개발 툴. 키워드 자동 추천, 입찰가 자동 조절, 성과 대시보드.",
    icon: "Wrench",
    color: "from-lime-400 to-green-600",
    bgColor: "bg-lime-50",
    stat: "운영 시간 70% 절감",
    features: ["자동 추천", "실시간 대시보드", "AI 생성", "비용 예측"],
    gridClass: "md:col-span-2 md:row-span-1",
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-50/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="label-text text-primary-500 mb-3 block font-outfit">OUR SERVICES</span>
          <h2 className="heading-2 korean-text text-gray-900 mb-4">
            성과를 만드는 <span className="text-gradient">4가지 무기</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto korean-text">
            각 서비스는 독립적으로도, 통합적으로도 운영 가능합니다.
            <br className="hidden sm:block" />
            비즈니스 상황에 맞는 최적의 조합을 제안드립니다.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`${service.gridClass} group relative rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 overflow-hidden hover-lift cursor-pointer`}
              >
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon & Subtitle */}
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-600" />
                    </div>
                    <span className="text-xs font-outfit font-medium text-gray-300 tracking-wider">
                      {service.subtitle}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 korean-text group-hover:text-primary-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-500 korean-text mb-4 sm:mb-6 flex-grow leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs font-medium text-primary-700 bg-primary-50 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Stat */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm font-semibold text-primary-600">{service.stat}</span>
                    <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-300">
                      <svg
                        className="w-4 h-4 text-primary-500 group-hover:text-white transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Corner decoration for large cards */}
                {service.gridClass.includes("row-span-2") && (
                  <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-primary-50/50 rounded-full blur-2xl group-hover:bg-primary-100/50 transition-colors duration-500" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 sm:mt-16"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-200 text-primary-600 rounded-2xl font-semibold hover:bg-primary-50 hover:border-primary-300 transition-all duration-300 group"
          >
            서비스 상세 보기
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
