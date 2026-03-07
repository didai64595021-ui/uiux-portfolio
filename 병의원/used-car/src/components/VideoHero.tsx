"use client";

import { useState } from "react";
import Link from "next/link";

export default function VideoHero() {
  const [plateNumber, setPlateNumber] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [estimating, setEstimating] = useState(false);

  const handleEstimate = () => {
    if (!plateNumber.trim()) return;
    setEstimating(true);
    setShowResult(false);
    setTimeout(() => {
      setEstimating(false);
      setShowResult(true);
    }, 2000);
  };

  return (
    <section className="relative min-h-[100svh] flex items-start md:items-center overflow-hidden pb-20">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://assets.mixkit.co/videos/42039/42039-720.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />

      {/* Content */}
      <div className="relative z-10 container-custom w-full pt-20 md:pt-24">
        <div className="max-w-2xl">
          <p className="text-accent font-display font-semibold text-sm sm:text-base tracking-widest mb-3 sm:mb-4 animate-fade-in">
            ONDA MOTORS
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 animate-slide-up korean-text">
            믿을 수 있는
            <br />
            <span className="text-gradient bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              내 차 거래
            </span>
            의 시작
          </h1>
          <p className="text-white/70 text-sm sm:text-lg mb-6 sm:mb-8 korean-text max-w-lg animate-slide-up" style={{ animationDelay: "0.2s" }}>
            전문 딜러의 엄선된 인증 중고차.
            <br className="hidden sm:inline" />
            AI 시세 분석으로 합리적인 가격에 만나보세요.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Link href="/inventory" className="btn-primary text-center w-full sm:w-auto">
              전체 재고 보기
            </Link>
            <Link href="/contact" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-navy text-center w-full sm:w-auto">
              무료 상담 신청
            </Link>
          </div>

          {/* AI Price Estimator Mini */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 animate-slide-up relative z-30" style={{ animationDelay: "0.4s" }}>
            <p className="text-white/90 text-sm font-semibold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse-glow" />
              AI 시세 조회
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="차량번호 입력 (예: 12가3456)"
                value={plateNumber}
                onChange={(e) => {
                  setPlateNumber(e.target.value);
                  setShowResult(false);
                }}
                onKeyDown={(e) => e.key === "Enter" && handleEstimate()}
                className="flex-1 bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent min-h-[48px]"
              />
              <button
                onClick={handleEstimate}
                disabled={estimating}
                className="btn-primary w-full sm:w-auto whitespace-nowrap disabled:opacity-60"
              >
                {estimating ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    분석 중...
                  </span>
                ) : (
                  "시세 조회"
                )}
              </button>
            </div>

            {/* Result */}
            {showResult && (
              <div className="mt-4 bg-white/10 rounded-lg p-4 border border-accent/30 animate-slide-up">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <p className="text-white/60 text-xs">AI 추정 시세</p>
                    <p className="text-accent font-display font-bold text-xl sm:text-2xl">2,850만원</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/60 text-xs">시세 범위</p>
                    <p className="text-white/80 text-sm">2,600 ~ 3,100만원</p>
                  </div>
                </div>
                <p className="text-white/50 text-xs mt-2">
                  * 실제 차량 상태에 따라 달라질 수 있습니다
                </p>
              </div>
            )}
          </div>
          {/* Spacer to prevent QuickSearch overlap */}
          <div className="h-16" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
