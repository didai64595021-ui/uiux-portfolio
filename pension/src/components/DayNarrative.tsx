"use client";

import { useEffect, useRef, useState } from "react";

const scenes = [
  {
    time: "07:00",
    title: "숲의 아침",
    desc: "테라스에서 새소리와 함께 맞이하는 아침. 안개 낀 소나무 숲 사이로 햇살이 스며듭니다.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    bg: "from-amber-50 to-cream",
    emoji: "☀️",
  },
  {
    time: "09:00",
    title: "편백 숲 산책",
    desc: "펜션 뒤편 편백 숲길을 천천히 걸어보세요. 피톤치드 가득한 공기가 온몸을 감쌉니다.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    bg: "from-green-50 to-cream",
    emoji: "🌲",
  },
  {
    time: "12:00",
    title: "자연 속 점심",
    desc: "전용 BBQ 데크에서 숯불 바비큐를. 인근 농장 식재료로 준비한 신선한 재료와 함께.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    bg: "from-orange-50 to-cream",
    emoji: "🍖",
  },
  {
    time: "15:00",
    title: "여유로운 오후",
    desc: "보드게임, 독서, 낮잠... 아무것도 하지 않아도 되는 시간. 그것이 진짜 휴식입니다.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    bg: "from-blue-50 to-cream",
    emoji: "📖",
  },
  {
    time: "18:00",
    title: "노을 타임",
    desc: "테라스에서 바라보는 산 너머 노을. 하루 중 가장 아름다운 순간이 찾아옵니다.",
    image: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=800&q=80",
    bg: "from-orange-100 to-cream",
    emoji: "🌅",
  },
  {
    time: "21:00",
    title: "별빛 아래 온천",
    desc: "전용 노천탕에 몸을 담그고 올려다보는 밤하늘. 도시에서는 볼 수 없는 별들이 쏟아집니다.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    bg: "from-indigo-50 to-cream",
    emoji: "✨",
  },
];

export default function DayNarrative() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(idx);
          }
        });
      },
      { threshold: 0.6 }
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-dark font-display text-sm tracking-[0.2em] mb-3">A DAY AT ONDA STAY</p>
          <h2 className="heading-responsive text-brown font-display korean-text">
            온다에서의 하루
          </h2>
        </div>

        {/* Narrative Scroll */}
        <div className="relative max-w-5xl mx-auto">
          {/* Time Progress Bar (desktop) */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-brown/10">
            <div
              className="w-full bg-gold transition-all duration-500"
              style={{ height: `${((activeIndex + 1) / scenes.length) * 100}%` }}
            />
          </div>

          {scenes.map((scene, i) => (
            <div
              key={i}
              ref={(el) => { sectionRefs.current[i] = el; }}
              data-index={i}
              className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-20 last:mb-0 transition-all duration-700 ${
                activeIndex >= i ? "opacity-100 translate-y-0" : "opacity-30 translate-y-4"
              }`}
            >
              {/* Time Dot */}
              <div className="hidden lg:flex absolute -left-3 w-6 h-6 items-center justify-center">
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex >= i ? "bg-gold scale-125" : "bg-brown/20"
                }`} />
              </div>

              {/* Image */}
              <div className={`w-full lg:w-1/2 ${i % 2 === 1 ? "lg:order-2" : ""} lg:pl-12`}>
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-lg">
                  <img src={scene.image} alt={scene.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1.5">
                    <span className="text-lg">{scene.emoji}</span>
                    <span className="text-brown font-display font-bold text-sm">{scene.time}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`w-full lg:w-1/2 ${i % 2 === 1 ? "lg:order-1 lg:text-right lg:pr-12" : "lg:pl-12"}`}>
                <span className="text-gold-dark font-display text-sm tracking-widest">{scene.time}</span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-brown mt-2 mb-3">
                  {scene.title}
                </h3>
                <p className="text-text/60 korean-text leading-relaxed">{scene.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
