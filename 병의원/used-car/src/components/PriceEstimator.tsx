"use client";

import { useState } from "react";

export default function PriceEstimator() {
  const [step, setStep] = useState(0);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("2022");
  const [mileage, setMileage] = useState(30000);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ price: number; low: number; high: number } | null>(null);

  const brandModels: Record<string, string[]> = {
    현대: ["그랜저", "소나타", "아반떼", "투싼", "아이오닉5"],
    기아: ["K5", "K8", "셀토스", "스포티지", "EV6"],
    BMW: ["3시리즈", "5시리즈", "X3", "X5"],
    벤츠: ["C클래스", "E클래스", "GLC", "GLE"],
    제네시스: ["G70", "G80", "GV70", "GV80"],
  };

  const handleAnalyze = () => {
    setLoading(true);
    setTimeout(() => {
      const base = Math.floor(Math.random() * 2000 + 2000);
      setResult({
        price: base,
        low: base - Math.floor(Math.random() * 300 + 200),
        high: base + Math.floor(Math.random() * 300 + 200),
      });
      setLoading(false);
      setStep(3);
    }, 2500);
  };

  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-96 h-96 border border-white rounded-full" />
        <div className="absolute bottom-10 left-10 w-64 h-64 border border-white rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <p className="text-accent font-display font-semibold text-sm tracking-widest mb-2">
            AI PRICE CHECK
          </p>
          <h2 className="heading-responsive text-white korean-text mb-4">
            내 차 시세, AI로 바로 확인
          </h2>
          <p className="text-white/60 max-w-lg mx-auto korean-text">
            차량 정보를 입력하면 빅데이터 기반 AI가 실시간 시세를 분석해 드립니다
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-8 px-4">
            {["브랜드 선택", "차량 정보", "시세 분석", "결과 확인"].map((label, i) => (
              <div key={label} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  step >= i ? "bg-accent text-white" : "bg-white/20 text-white/40"
                }`}>
                  {step > i ? "✓" : i + 1}
                </div>
                <span className={`hidden sm:block ml-2 text-xs ${step >= i ? "text-white" : "text-white/40"}`}>
                  {label}
                </span>
                {i < 3 && <div className={`w-8 sm:w-16 h-0.5 mx-2 ${step > i ? "bg-accent" : "bg-white/20"}`} />}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20">
            {step === 0 && (
              <div className="animate-fade-in">
                <h3 className="text-white font-semibold text-lg mb-4">브랜드를 선택하세요</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {Object.keys(brandModels).map((b) => (
                    <button
                      key={b}
                      onClick={() => { setBrand(b); setStep(1); }}
                      className={`p-4 rounded-xl border text-center transition-all min-h-[56px] ${
                        brand === b
                          ? "border-accent bg-accent/20 text-white"
                          : "border-white/20 text-white/70 hover:border-white/40 hover:text-white"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="animate-fade-in">
                <h3 className="text-white font-semibold text-lg mb-4">{brand} — 모델 & 연식</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-white/60 text-sm block mb-2">모델</label>
                    <div className="grid grid-cols-2 gap-2">
                      {brandModels[brand]?.map((m) => (
                        <button
                          key={m}
                          onClick={() => setModel(m)}
                          className={`p-3 rounded-lg border text-sm transition-all min-h-[44px] ${
                            model === m
                              ? "border-accent bg-accent/20 text-white"
                              : "border-white/20 text-white/70 hover:border-white/40"
                          }`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-white/60 text-sm block mb-2">연식</label>
                    <select
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white min-h-[48px]"
                    >
                      {[2024, 2023, 2022, 2021, 2020, 2019].map((y) => (
                        <option key={y} value={y} className="text-navy">{y}년</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => setStep(0)} className="btn-outline !border-white/30 !text-white/70 flex-1">
                      이전
                    </button>
                    <button
                      onClick={() => model && setStep(2)}
                      disabled={!model}
                      className="btn-primary flex-1 disabled:opacity-40"
                    >
                      다음
                    </button>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in">
                <h3 className="text-white font-semibold text-lg mb-4">주행거리</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white/60 text-sm">주행거리</span>
                      <span className="text-accent font-display font-bold">{(mileage / 10000).toFixed(1)}만 km</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={200000}
                      step={5000}
                      value={mileage}
                      onChange={(e) => setMileage(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-white/40 mt-1">
                      <span>0km</span>
                      <span>20만km</span>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4 text-sm text-white/60">
                    <p className="font-semibold text-white/80 mb-1">분석 대상</p>
                    <p>{brand} {model} · {year}년식 · {(mileage / 10000).toFixed(1)}만km</p>
                  </div>

                  <div className="flex gap-3">
                    <button onClick={() => setStep(1)} className="btn-outline !border-white/30 !text-white/70 flex-1">
                      이전
                    </button>
                    <button onClick={handleAnalyze} className="btn-primary flex-1">
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          AI 분석 중...
                        </span>
                      ) : (
                        "시세 분석 시작"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && result && (
              <div className="animate-fade-in text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-1">AI 분석 완료</h3>
                <p className="text-white/50 text-sm mb-6">
                  {brand} {model} · {year}년식 · {(mileage / 10000).toFixed(1)}만km
                </p>

                <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 mb-6">
                  <p className="text-white/60 text-sm mb-1">예상 시세</p>
                  <p className="text-accent font-display font-bold text-4xl sm:text-5xl mb-2">
                    {(result.price / 100).toFixed(1)}
                    <span className="text-lg">만원</span>
                  </p>
                  <p className="text-white/50 text-sm">
                    시세 범위: {(result.low / 100).toFixed(1)} ~ {(result.high / 100).toFixed(1)}만원
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-white/40 text-xs">매수 추천가</p>
                    <p className="text-white font-bold">{(result.low / 100).toFixed(1)}만</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-white/40 text-xs">적정 시세</p>
                    <p className="text-accent font-bold">{(result.price / 100).toFixed(1)}만</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-white/40 text-xs">최고 시세</p>
                    <p className="text-white font-bold">{(result.high / 100).toFixed(1)}만</p>
                  </div>
                </div>

                <button
                  onClick={() => { setStep(0); setResult(null); setBrand(""); setModel(""); }}
                  className="btn-outline !border-white/30 !text-white w-full"
                >
                  다시 조회하기
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
