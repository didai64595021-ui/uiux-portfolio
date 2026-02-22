"use client";

import { useState, useMemo } from "react";

export default function FinanceCalculator() {
  const [price, setPrice] = useState(3000);
  const [downPayment, setDownPayment] = useState(600);
  const [term, setTerm] = useState(48);
  const [rate, setRate] = useState(5.9);

  const monthlyPayment = useMemo(() => {
    const principal = (price - downPayment) * 10000;
    const monthlyRate = rate / 100 / 12;
    if (monthlyRate === 0) return principal / term;
    const payment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, term)) /
      (Math.pow(1 + monthlyRate, term) - 1);
    return Math.round(payment);
  }, [price, downPayment, term, rate]);

  const totalPayment = monthlyPayment * term;
  const totalInterest = totalPayment - (price - downPayment) * 10000;

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-accent font-display font-semibold text-sm tracking-widest mb-2">
            FINANCE CALCULATOR
          </p>
          <h2 className="heading-responsive text-navy korean-text mb-4">
            할부 계산기
          </h2>
          <p className="text-text/60 max-w-lg mx-auto korean-text">
            슬라이더를 조절해 나에게 맞는 할부 플랜을 확인해 보세요
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Sliders */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm space-y-8">
            {/* Price */}
            <div>
              <div className="flex justify-between mb-3">
                <span className="text-sm font-semibold text-navy">차량 가격</span>
                <span className="text-accent font-display font-bold text-lg">{price.toLocaleString()}만원</span>
              </div>
              <input
                type="range"
                min={500}
                max={10000}
                step={100}
                value={price}
                onChange={(e) => {
                  const v = Number(e.target.value);
                  setPrice(v);
                  if (downPayment > v * 0.7) setDownPayment(Math.floor(v * 0.3));
                }}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-text/40 mt-1">
                <span>500만원</span>
                <span>1억원</span>
              </div>
            </div>

            {/* Down Payment */}
            <div>
              <div className="flex justify-between mb-3">
                <span className="text-sm font-semibold text-navy">선수금</span>
                <span className="text-accent font-display font-bold text-lg">
                  {downPayment.toLocaleString()}만원
                  <span className="text-xs text-text/40 ml-1">
                    ({Math.round((downPayment / price) * 100)}%)
                  </span>
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={Math.floor(price * 0.7)}
                step={50}
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-text/40 mt-1">
                <span>0원</span>
                <span>{Math.floor(price * 0.7).toLocaleString()}만원</span>
              </div>
            </div>

            {/* Term */}
            <div>
              <div className="flex justify-between mb-3">
                <span className="text-sm font-semibold text-navy">할부 기간</span>
                <span className="text-accent font-display font-bold text-lg">{term}개월</span>
              </div>
              <div className="flex gap-2">
                {[12, 24, 36, 48, 60, 72].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTerm(t)}
                    className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all min-h-[44px] ${
                      term === t
                        ? "bg-navy text-white"
                        : "bg-bg text-text/60 hover:bg-gray-200"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Rate */}
            <div>
              <div className="flex justify-between mb-3">
                <span className="text-sm font-semibold text-navy">금리</span>
                <span className="text-accent font-display font-bold text-lg">{rate}%</span>
              </div>
              <input
                type="range"
                min={2}
                max={12}
                step={0.1}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-text/40 mt-1">
                <span>2%</span>
                <span>12%</span>
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="flex flex-col gap-6">
            <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center flex-1 flex flex-col justify-center">
              <p className="text-white/60 text-sm mb-2">월 납입금</p>
              <p className="text-accent font-display font-bold text-4xl sm:text-5xl mb-1">
                {Math.round(monthlyPayment / 10000).toLocaleString()}
                <span className="text-xl">만원</span>
              </p>
              <p className="text-white/40 text-sm">
                (정확히 {monthlyPayment.toLocaleString()}원)
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-5 shadow-sm text-center">
                <p className="text-text/50 text-xs mb-1">대출 원금</p>
                <p className="font-bold text-navy text-lg">
                  {(price - downPayment).toLocaleString()}만원
                </p>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm text-center">
                <p className="text-text/50 text-xs mb-1">총 이자</p>
                <p className="font-bold text-accent text-lg">
                  {Math.round(totalInterest / 10000).toLocaleString()}만원
                </p>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm text-center">
                <p className="text-text/50 text-xs mb-1">총 납입액</p>
                <p className="font-bold text-navy text-lg">
                  {Math.round(totalPayment / 10000).toLocaleString()}만원
                </p>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm text-center">
                <p className="text-text/50 text-xs mb-1">할부 기간</p>
                <p className="font-bold text-navy text-lg">{term}개월</p>
              </div>
            </div>

            <p className="text-text/40 text-xs text-center korean-text">
              * 본 계산기는 참고용이며, 실제 금융 조건은 상담 시 달라질 수 있습니다
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
