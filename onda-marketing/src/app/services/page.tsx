"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { Search, MapPin, Instagram, Wrench, Check, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Search,
  MapPin,
  Instagram,
  Wrench,
};

function ServiceDetail({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const Icon = iconMap[service.icon];
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      id={service.id}
      className="scroll-mt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-16 items-center`}
      >
        {/* Image Side */}
        <div className="flex-1 w-full">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

            {/* Stats overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex gap-3">
              {service.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex-1 bg-white/90 backdrop-blur-sm rounded-2xl p-3 sm:p-4"
                >
                  <div className="font-outfit text-xl sm:text-2xl font-bold text-primary-600">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-600 korean-text">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="flex-1 w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center">
              <Icon className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <span className="text-xs font-outfit text-gray-400 tracking-wider block">
                {service.subtitle}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 korean-text">
                {service.title}
              </h2>
            </div>
          </div>

          <p className="text-base sm:text-lg text-gray-600 korean-text leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Features */}
          <div className="space-y-3 mb-8">
            {service.features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-primary-600" />
                </div>
                <span className="text-sm sm:text-base text-gray-700 korean-text">{feature}</span>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-2xl font-semibold hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 group"
          >
            무료 상담 신청
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <>
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl" />
        <div className="container-custom relative z-10" ref={heroRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="label-text text-primary-500 mb-3 block font-outfit">SERVICES</span>
            <h1 className="heading-1 korean-text text-gray-900 mb-4">
              성과를 만드는 <span className="text-gradient">서비스</span>
            </h1>
            <p className="body-text max-w-2xl mx-auto korean-text">
              각 서비스는 5년간의 실전 경험을 바탕으로 설계되었습니다.
              <br className="hidden sm:block" />
              데이터 기반의 정밀한 운영으로 확실한 성과를 만듭니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto space-y-20 sm:space-y-28 lg:space-y-36">
            {services.map((service, i) => (
              <ServiceDetail key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-gradient-section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 korean-text text-gray-900 mb-4">
              어떤 서비스가 맞을지 <span className="text-gradient">모르겠다면?</span>
            </h2>
            <p className="body-text korean-text mb-8">
              무료 진단을 통해 비즈니스에 가장 적합한 서비스를 추천드립니다.
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
