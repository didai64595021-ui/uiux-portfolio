"use client";

import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark" />
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-glow opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block font-mono text-xs text-neon/60 tracking-widest uppercase mb-4">
            // Contact Us
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-grotesk text-white mb-6">
            무료{" "}
            <span className="gradient-neon-text text-glow">진단</span>{" "}
            신청
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto korean-text">
            현재 마케팅 상태를 무료로 분석해드립니다.
            <br />
            영업 전화 없이, 기술자가 직접 진단합니다.
          </p>
        </div>
      </section>

      <ContactForm />
      <FAQSection />
    </div>
  );
}
