"use client";

import { useState } from "react";
import Link from "next/link";

const quizSteps = [
  {
    question: "마음에 드는 분위기는?",
    options: [
      { label: "깔끔하고 심플", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&q=80", value: "minimal" },
      { label: "따뜻하고 자연적", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80", value: "natural" },
      { label: "고급스럽고 클래식", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&q=80", value: "classic" },
      { label: "개성 있고 빈티지", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&q=80", value: "vintage" },
    ],
  },
  {
    question: "선호하는 소재는?",
    options: [
      { label: "원목 & 패브릭", img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&q=80", value: "wood" },
      { label: "대리석 & 금속", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80", value: "marble" },
      { label: "콘크리트 & 철재", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80", value: "concrete" },
      { label: "화이트 & 페인트", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80", value: "paint" },
    ],
  },
  {
    question: "가장 중요하게 생각하는 것은?",
    options: [
      { label: "수납 & 실용성", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80", value: "practical" },
      { label: "디자인 & 감성", img: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=400&q=80", value: "design" },
      { label: "넓은 개방감", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80", value: "open" },
      { label: "아이 안전 & 편의", img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&q=80", value: "family" },
    ],
  },
];

const styleResults: Record<string, { name: string; desc: string; keywords: string[] }> = {
  minimal: { name: "미니멀 모던", desc: "깔끔한 라인과 절제된 디자인. 화이트, 그레이 톤 중심에 포인트 우드로 따뜻함을 더합니다.", keywords: ["화이트톤", "히든 수납", "간접조명", "무광 마감"] },
  natural: { name: "내추럴 우드", desc: "원목의 따뜻함과 자연 소재가 주는 편안함. 마치 카페 같은 집을 만듭니다.", keywords: ["원목 바닥", "패브릭", "그린 포인트", "자연광 활용"] },
  classic: { name: "모던 클래식", desc: "클래식한 몰딩과 현대적 요소의 조화. 고급스러우면서도 세련된 공간을 완성합니다.", keywords: ["몰딩", "대리석", "골드 포인트", "샹들리에"] },
  vintage: { name: "레트로 인더스트리얼", desc: "빈티지 감성과 산업적 요소의 만남. 유니크한 개성을 담은 나만의 공간.", keywords: ["노출 벽돌", "철재", "빈티지 조명", "어스 톤"] },
};

export default function StyleQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<typeof styleResults[string] | null>(null);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (step < quizSteps.length - 1) {
      setStep(step + 1);
    } else {
      setResult(styleResults[newAnswers[0]] || styleResults.minimal);
    }
  };

  const reset = () => { setStep(0); setAnswers([]); setResult(null); };

  return (
    <section className="section-padding bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-caramel rounded-full blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <p className="text-caramel text-sm tracking-widest font-semibold mb-3">STYLE FINDER</p>
          <h2 className="heading-responsive text-white font-display korean-text mb-4">
            나의 인테리어 스타일은?
          </h2>
          <p className="text-white/40 max-w-md mx-auto korean-text">
            3가지 질문으로 당신에게 맞는 인테리어 스타일을 찾아드려요
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {!result ? (
            <div className="animate-fade-in" key={step}>
              <div className="flex justify-center gap-2 mb-8">
                {quizSteps.map((_, i) => (
                  <div key={i} className={`h-1 rounded-full transition-all ${
                    i <= step ? "bg-caramel w-12" : "bg-white/20 w-8"
                  }`} />
                ))}
              </div>

              <h3 className="text-white text-xl font-semibold text-center mb-6 korean-text">
                {quizSteps[step].question}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {quizSteps[step].options.map((opt) => (
                  <button key={opt.value} onClick={() => handleAnswer(opt.value)}
                    className="group relative rounded-2xl overflow-hidden aspect-[4/3] border-2 border-transparent hover:border-caramel transition-all"
                  >
                    <img src={opt.img} alt={opt.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                    <p className="absolute bottom-3 left-3 text-white font-semibold text-sm korean-text">{opt.label}</p>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20 animate-fade-in">
              <div className="w-16 h-16 bg-caramel/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎨</span>
              </div>
              <p className="text-caramel text-sm font-semibold mb-1">당신의 스타일</p>
              <h3 className="text-white font-display text-3xl mb-3">{result.name}</h3>
              <p className="text-white/60 korean-text mb-6 max-w-md mx-auto">{result.desc}</p>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {result.keywords.map((k) => (
                  <span key={k} className="bg-white/10 text-white/70 text-xs px-3 py-1.5 rounded-full">{k}</span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/estimate" className="btn-accent text-center">이 스타일로 견적 받기</Link>
                <button onClick={reset} className="btn-outline !border-white/30 !text-white">다시 하기</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
