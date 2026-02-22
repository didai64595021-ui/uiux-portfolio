"use client";

import { useState } from "react";
import { rooms } from "@/data/rooms";
import Link from "next/link";

const questions = [
  {
    question: "이번 여행의 목적은?",
    options: [
      { label: "로맨틱 데이트", icon: "💑", value: "couple" },
      { label: "가족 힐링", icon: "👨‍👩‍👧‍👦", value: "family" },
      { label: "친구 모임", icon: "👫", value: "group" },
      { label: "혼자만의 시간", icon: "🧘", value: "solo" },
    ],
  },
  {
    question: "가장 기대되는 것은?",
    options: [
      { label: "노천탕/온천", icon: "♨️", value: "bath" },
      { label: "BBQ/요리", icon: "🔥", value: "bbq" },
      { label: "숲 산책/자연", icon: "🌿", value: "nature" },
      { label: "벽난로/프로젝터", icon: "🎬", value: "cozy" },
    ],
  },
  {
    question: "선호하는 분위기는?",
    options: [
      { label: "아늑하고 따뜻한", icon: "🕯️", value: "warm" },
      { label: "넓고 시원한", icon: "🏡", value: "spacious" },
      { label: "모던하고 세련된", icon: "✨", value: "modern" },
      { label: "자연 그대로의", icon: "🌳", value: "natural" },
    ],
  },
];

const recommendations: Record<string, string> = {
  couple: "pine",
  solo: "birch",
  family: "cedar",
  group: "maple",
};

export default function ExperienceQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<typeof rooms[number] | null>(null);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      const type = newAnswers[0];
      const roomId = recommendations[type] || "oak";
      const room = rooms.find((r) => r.id === roomId) || rooms[0];
      setResult(room);
      setStep(questions.length);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <section className="section-padding bg-brown relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <p className="text-gold font-display text-sm tracking-[0.2em] mb-3">FIND YOUR ROOM</p>
          <h2 className="heading-responsive text-white font-display korean-text mb-4">
            나에게 맞는 객실 찾기
          </h2>
          <p className="text-white/50 max-w-md mx-auto korean-text">
            3가지 질문으로 당신에게 딱 맞는 객실과 체험을 추천해 드려요
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          <div className="flex items-center justify-center gap-3 mb-8">
            {questions.map((_, i) => (
              <div key={i} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  step > i ? "bg-gold text-brown" : step === i ? "bg-white text-brown" : "bg-white/20 text-white/40"
                }`}>
                  {step > i ? "✓" : i + 1}
                </div>
                {i < questions.length - 1 && (
                  <div className={`w-12 h-0.5 mx-1 transition-all ${step > i ? "bg-gold" : "bg-white/20"}`} />
                )}
              </div>
            ))}
          </div>

          {/* Questions */}
          {step < questions.length && (
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 animate-fade-in">
              <h3 className="text-white text-xl font-display font-semibold text-center mb-6">
                {questions[step].question}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {questions[step].options.map((opt) => (
                  <button key={opt.value} onClick={() => handleAnswer(opt.value)}
                    className="p-5 rounded-2xl border border-white/20 hover:border-gold hover:bg-gold/10 transition-all text-center group min-h-[80px]"
                  >
                    <span className="text-3xl block mb-2 group-hover:scale-110 transition-transform">{opt.icon}</span>
                    <span className="text-white text-sm font-medium">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Result */}
          {result && (
            <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 animate-scale-in">
              <div className="relative h-48 sm:h-56">
                <img src={result.image} alt={result.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/80 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <p className="text-gold font-display text-xs tracking-widest">{result.nameEn}</p>
                  <h3 className="text-white font-display font-bold text-2xl">{result.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gold text-sm font-semibold mb-2">당신을 위한 추천 객실</p>
                <p className="text-white/70 text-sm korean-text mb-4">{result.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {result.amenities.map((a) => (
                    <span key={a} className="bg-white/10 text-white/70 text-xs px-2.5 py-1 rounded-full">{a}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-white/40 text-xs">1박 요금</p>
                    <p className="text-gold font-display font-bold text-xl">{result.price.toLocaleString()}원~</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/40 text-xs">최대</p>
                    <p className="text-white font-bold">{result.capacity}인</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button onClick={reset} className="btn-outline !border-white/30 !text-white flex-1">
                    다시 하기
                  </button>
                  <Link href="/booking" className="btn-primary !bg-gold !text-brown-dark flex-1 text-center">
                    예약하기
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
