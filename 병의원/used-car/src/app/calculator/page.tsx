"use client";

import FinanceCalculator from "@/components/FinanceCalculator";
import Link from "next/link";

export default function CalculatorPage() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <div className="bg-navy py-12 sm:py-16">
        <div className="container-custom">
          <p className="text-accent font-display font-semibold text-sm tracking-widest mb-2">
            CALCULATOR
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white korean-text">
            할부 계산기
          </h1>
          <p className="text-white/60 mt-3 korean-text">
            차량 가격과 조건을 조절하여 월 납입금을 미리 확인해 보세요
          </p>
        </div>
      </div>

      {/* Calculator */}
      <FinanceCalculator />

      {/* Info Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-xl sm:text-2xl font-bold text-navy mb-8 text-center korean-text">
            자동차 할부 금융 안내
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-bg rounded-2xl p-6">
              <h3 className="font-bold text-navy mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                일반 할부
              </h3>
              <ul className="text-sm text-text/60 space-y-2 korean-text">
                <li>• 금리: 연 4.9% ~ 8.9%</li>
                <li>• 기간: 12 ~ 72개월</li>
                <li>• 선수금: 차량가의 0 ~ 70%</li>
                <li>• 소유권: 할부 완납 시 이전</li>
              </ul>
            </div>

            <div className="bg-bg rounded-2xl p-6">
              <h3 className="font-bold text-navy mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                오토리스
              </h3>
              <ul className="text-sm text-text/60 space-y-2 korean-text">
                <li>• 금리: 연 3.9% ~ 7.5%</li>
                <li>• 기간: 24 ~ 60개월</li>
                <li>• 보증금: 차량가의 0 ~ 30%</li>
                <li>• 소유권: 리스사 (만기 시 인수 가능)</li>
              </ul>
            </div>

            <div className="bg-bg rounded-2xl p-6">
              <h3 className="font-bold text-navy mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                장기렌트
              </h3>
              <ul className="text-sm text-text/60 space-y-2 korean-text">
                <li>• 월 렌트료에 보험/세금 포함</li>
                <li>• 기간: 24 ~ 60개월</li>
                <li>• 보증금: 차량가의 0 ~ 30%</li>
                <li>• 관리 편의성 우수</li>
              </ul>
            </div>

            <div className="bg-bg rounded-2xl p-6">
              <h3 className="font-bold text-navy mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                맞춤 컨설팅
              </h3>
              <ul className="text-sm text-text/60 space-y-2 korean-text">
                <li>• 전문 금융 컨설턴트 1:1 상담</li>
                <li>• 최저 금리 금융사 비교</li>
                <li>• 개인 신용에 맞는 최적 플랜</li>
                <li>• 당일 승인 가능</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/contact" className="btn-primary">
              맞춤 금융 상담 신청 →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
