"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Fingerprint, ShieldCheck, TrendingUp, Users, Award, Clock } from "lucide-react";

function CountUp({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    let animationFrame: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));
      if (progress < 1) animationFrame = requestAnimationFrame(step);
    };
    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return (
    <span ref={ref} className="font-outfit font-bold text-3xl sm:text-4xl md:text-5xl text-primary-600">
      {count}
      {suffix}
    </span>
  );
}

const timeline = [
  { year: "2019", title: "온다마케팅 설립", description: "5년 실행사 경험을 바탕으로 독립, 서울 강남 사무실 오픈" },
  { year: "2020", title: "100+ 클라이언트 돌파", description: "의료, 뷰티, F&B 등 다양한 업종 성공 사례 축적" },
  { year: "2021", title: "셀프 광고 툴 런칭", description: "자체 개발 광고 자동화 툴 출시, 200+ 기업 사용" },
  { year: "2022", title: "대행사 대행 사업 시작", description: "타 대행사의 실행 파트너로 100+ 대행사 협력" },
  { year: "2023", title: "500+ 클라이언트 달성", description: "누적 클라이언트 500개 돌파, 팀 확장" },
  { year: "2024", title: "통합 마케팅 솔루션", description: "파워링크 + 플레이스 + SNS 통합 솔루션 고도화" },
];

const values = [
  {
    icon: Fingerprint,
    title: "Identity",
    titleKr: "기술자 출신",
    description: "영업사원이 아닌, 실행사에서 5년간 직접 광고를 운영한 기술자가 모였습니다.",
  },
  {
    icon: ShieldCheck,
    title: "Honesty",
    titleKr: "솔직한 진단",
    description: "안되는 건 안된다고 말합니다. 과대 약속 대신 솔직한 진단으로 신뢰를 쌓습니다.",
  },
  {
    icon: TrendingUp,
    title: "Performance",
    titleKr: "성과 중심",
    description: "상위노출은 수단일 뿐. 진짜 목표는 클라이언트의 매출 성장입니다.",
  },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });
  const storyRef = useRef<HTMLDivElement>(null);
  const storyInView = useInView(storyRef, { once: true, amount: 0.15 });
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.1 });

  return (
    <>
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-primary-100/20 rounded-full blur-3xl" />
        <div className="container-custom relative z-10" ref={heroRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="label-text text-primary-500 mb-3 block font-outfit">ABOUT US</span>
            <h1 className="heading-1 korean-text text-gray-900 mb-4">
              실행사 출신의 <span className="text-gradient">진짜 마케팅</span>
            </h1>
            <p className="body-text max-w-2xl mx-auto korean-text">
              영업사원이 아닌 기술자가 직접 운영하는 디지털 마케팅 에이전시.
              <br className="hidden sm:block" />
              온다마케팅의 이야기를 소개합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div ref={storyRef} className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center"
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                    alt="온다마케팅 팀"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 w-full">
                <span className="label-text text-primary-500 mb-3 block font-outfit">OUR STORY</span>
                <h2 className="heading-2 text-gray-900 mb-6 korean-text">
                  왜 <span className="text-gradient">&apos;실행사 출신&apos;</span>이<br />
                  중요할까요?
                </h2>
                <div className="space-y-4 text-gray-600 korean-text leading-relaxed">
                  <p>
                    대부분의 마케팅 대행사는 영업팀이 계약을 따고, 실제 광고 운영은
                    하청 업체나 신입에게 맡깁니다. 클라이언트가 만나는 사람과
                    실제로 광고를 만지는 사람이 다릅니다.
                  </p>
                  <p>
                    온다마케팅은 다릅니다. 대표를 포함한 전 팀원이 5년 이상
                    실행사에서 직접 광고를 운영한 기술자 출신입니다.
                    분석-전략-실행-최적화-보고, 모든 과정을 직접 수행합니다.
                  </p>
                  <p className="font-semibold text-gray-900">
                    그래서 불가능한 건 거절합니다. 가능한 것에만 집중합니다.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 sm:py-20 bg-gradient-section">
        <div className="container-custom" ref={statsRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: Clock, value: 5, suffix: "년+", label: "실행사 운영" },
              { icon: Users, value: 500, suffix: "+", label: "클라이언트" },
              { icon: Award, value: 100, suffix: "+", label: "대행사 대행" },
              { icon: TrendingUp, value: 95, suffix: "%", label: "재계약률" },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="text-center p-6 rounded-2xl bg-white border border-gray-100"
                >
                  <Icon className="w-6 h-6 text-primary-500 mx-auto mb-3" />
                  <CountUp end={stat.value} suffix={stat.suffix} />
                  <div className="text-sm text-gray-500 mt-1 korean-text">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16">
            <span className="label-text text-primary-500 mb-3 block font-outfit">OUR VALUES</span>
            <h2 className="heading-2 korean-text text-gray-900">
              온다마케팅의 <span className="text-gradient">3가지 원칙</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="text-center p-8 rounded-3xl border border-gray-100 hover-lift group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-outfit text-2xl font-bold text-gray-900 mb-1">
                    {value.title}
                  </h3>
                  <span className="text-sm text-primary-500 font-semibold korean-text block mb-3">
                    {value.titleKr}
                  </span>
                  <p className="text-sm text-gray-500 korean-text leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gradient-section">
        <div className="container-custom" ref={timelineRef}>
          <div className="text-center mb-12 sm:mb-16">
            <span className="label-text text-primary-500 mb-3 block font-outfit">HISTORY</span>
            <h2 className="heading-2 korean-text text-gray-900">
              온다마케팅의 <span className="text-gradient">발자취</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary-200 md:-translate-x-1/2" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 md:gap-10 mb-8 last:mb-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 hidden md:block ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                  {i % 2 === 0 && (
                    <div className="bg-white rounded-2xl p-5 border border-gray-100 inline-block">
                      <div className="font-outfit text-xl font-bold text-primary-500 mb-1">{item.year}</div>
                      <h3 className="text-base font-bold text-gray-900 korean-text mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-500 korean-text">{item.description}</p>
                    </div>
                  )}
                </div>

                {/* Node */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-500 border-4 border-white shadow-lg z-10 relative" />

                <div className={`flex-1 ${i % 2 !== 0 ? "md:text-right" : ""}`}>
                  {/* Mobile: always show */}
                  <div className="md:hidden bg-white rounded-2xl p-5 border border-gray-100">
                    <div className="font-outfit text-xl font-bold text-primary-500 mb-1">{item.year}</div>
                    <h3 className="text-base font-bold text-gray-900 korean-text mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 korean-text">{item.description}</p>
                  </div>
                  {/* Desktop: alternating */}
                  {i % 2 !== 0 && (
                    <div className="hidden md:inline-block bg-white rounded-2xl p-5 border border-gray-100">
                      <div className="font-outfit text-xl font-bold text-primary-500 mb-1">{item.year}</div>
                      <h3 className="text-base font-bold text-gray-900 korean-text mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-500 korean-text">{item.description}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 korean-text text-gray-900 mb-4">
              함께 <span className="text-gradient">성장</span>할 준비가 되셨나요?
            </h2>
            <p className="body-text korean-text mb-8">
              무료 진단으로 시작하세요. 솔직한 분석과 실현 가능한 전략을 제안드립니다.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white rounded-2xl text-lg font-bold hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 group"
            >
              무료 진단 요청하기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
