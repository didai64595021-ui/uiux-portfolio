"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "주소",
    value: "서울 강남구 테헤란로82길 15\n디아이타워 3층",
  },
  {
    icon: Mail,
    label: "이메일",
    value: "ondadaad@google.com",
  },
  {
    icon: Phone,
    label: "전화",
    value: "02-0000-0000",
  },
  {
    icon: Clock,
    label: "운영시간",
    value: "평일 09:00 - 18:00\n주말/공휴일 휴무",
  },
];

const serviceOptions = [
  "파워링크 광고",
  "플레이스 최적화",
  "인스타그램 마케팅",
  "셀프 광고 툴",
  "통합 마케팅",
  "기타",
];

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });
  const formRef = useRef<HTMLDivElement>(null);
  const formInView = useInView(formRef, { once: true, amount: 0.1 });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-100/20 rounded-full blur-3xl" />
        <div className="container-custom relative z-10" ref={heroRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="label-text text-primary-500 mb-3 block font-outfit">CONTACT</span>
            <h1 className="heading-1 korean-text text-gray-900 mb-4">
              무료 진단 <span className="text-gradient">요청하기</span>
            </h1>
            <p className="body-text max-w-2xl mx-auto korean-text">
              현재 마케팅 현황을 분석하고, 개선점과 예상 성과를 무료로 알려드립니다.
              <br className="hidden sm:block" />
              영업 전화 없습니다. 부담 없이 문의하세요.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding bg-white">
        <div className="container-custom" ref={formRef}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="lg:col-span-2"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 korean-text">
                  문의 정보
                </h2>
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    return (
                      <div key={info.label} className="flex gap-4">
                        <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-0.5">
                            {info.label}
                          </span>
                          <p className="text-sm text-gray-700 whitespace-pre-line korean-text">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Map Placeholder */}
                <div className="rounded-2xl overflow-hidden border border-gray-100 aspect-[4/3] relative bg-gray-50">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.354!2d127.0551!3d37.5059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15aaaaaaaab%3A0xdddddddddddddddd!2z7YWM7Zek656A66GcODLquLggMTU!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>
              </motion.div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="lg:col-span-3"
              >
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                    <div className="w-20 h-20 rounded-full bg-primary-50 flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-primary-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 korean-text">
                      문의가 접수되었습니다
                    </h3>
                    <p className="text-gray-500 korean-text mb-6">
                      영업일 기준 24시간 이내에 연락드리겠습니다.
                      <br />감사합니다.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 bg-primary-500 text-white rounded-2xl font-semibold hover:bg-primary-600 transition-colors"
                    >
                      추가 문의하기
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 lg:p-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 korean-text">
                      무료 진단 신청
                    </h2>
                    <p className="text-sm text-gray-500 mb-8 korean-text">
                      아래 양식을 작성해주시면 무료로 마케팅 현황을 분석해드립니다.
                    </p>

                    <div className="space-y-5">
                      {/* Name & Company */}
                      <div className="grid grid-cols-2 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2 korean-text">
                            이름 <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm"
                            placeholder="홍길동"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2 korean-text">
                            회사명 / 업체명
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm"
                            placeholder="온다마케팅"
                          />
                        </div>
                      </div>

                      {/* Email & Phone */}
                      <div className="grid grid-cols-2 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2 korean-text">
                            이메일 <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm"
                            placeholder="example@email.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2 korean-text">
                            연락처 <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm"
                            placeholder="010-0000-0000"
                          />
                        </div>
                      </div>

                      {/* Service Selection */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 korean-text">
                          관심 서비스
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {serviceOptions.map((option) => (
                            <label key={option} className="cursor-pointer">
                              <input type="checkbox" className="peer hidden" />
                              <span className="inline-block px-4 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 peer-checked:bg-primary-500 peer-checked:text-white peer-checked:border-primary-500 transition-all korean-text">
                                {option}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Budget */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 korean-text">
                          월 예상 광고 예산
                        </label>
                        <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm text-gray-600 bg-white">
                          <option value="">선택해주세요</option>
                          <option value="50">50만원 이하</option>
                          <option value="100">50만원 ~ 100만원</option>
                          <option value="300">100만원 ~ 300만원</option>
                          <option value="500">300만원 ~ 500만원</option>
                          <option value="1000">500만원 이상</option>
                          <option value="undecided">미정 / 상담 후 결정</option>
                        </select>
                      </div>

                      {/* Website */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 korean-text">
                          현재 웹사이트 / 플레이스 URL
                        </label>
                        <input
                          type="url"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm"
                          placeholder="https://example.com"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 korean-text">
                          문의 내용
                        </label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm resize-none"
                          placeholder="현재 고민이나 원하시는 목표를 자유롭게 적어주세요."
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="w-full py-4 bg-primary-500 text-white rounded-2xl text-base font-bold hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 flex items-center justify-center gap-2 group"
                      >
                        <Send className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
                        무료 진단 요청하기
                      </button>

                      <p className="text-xs text-center text-gray-400 korean-text">
                        제출하신 정보는 상담 목적으로만 사용되며, 제3자에게 제공되지 않습니다.
                      </p>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
