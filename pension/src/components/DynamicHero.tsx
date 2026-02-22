"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const timeThemes = {
  morning: {
    label: "아침",
    greeting: "상쾌한 아침이에요",
    bg: "from-amber-100/80 via-orange-200/60 to-sky-300/40",
    overlay: "from-brown/60 via-brown/30 to-transparent",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1920&q=80",
    accent: "text-gold",
  },
  afternoon: {
    label: "오후",
    greeting: "햇살 가득한 오후예요",
    bg: "from-sky-200/60 via-blue-100/40 to-emerald-100/30",
    overlay: "from-brown/50 via-brown/20 to-transparent",
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=1920&q=80",
    accent: "text-gold",
  },
  evening: {
    label: "저녁",
    greeting: "노을이 아름다운 시간이에요",
    bg: "from-orange-300/70 via-rose-200/50 to-purple-300/40",
    overlay: "from-brown/70 via-brown/40 to-brown/20",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80",
    accent: "text-gold-light",
  },
  night: {
    label: "밤",
    greeting: "별이 빛나는 밤이에요",
    bg: "from-slate-900/80 via-indigo-900/60 to-purple-900/40",
    overlay: "from-brown-dark/80 via-brown-dark/60 to-brown-dark/40",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80",
    accent: "text-gold-light",
  },
};

function getTimeOfDay(): keyof typeof timeThemes {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) return "morning";
  if (hour >= 12 && hour < 17) return "afternoon";
  if (hour >= 17 && hour < 21) return "evening";
  return "night";
}

export default function DynamicHero() {
  const [time, setTime] = useState<keyof typeof timeThemes>("morning");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTime(getTimeOfDay());
    setMounted(true);
  }, []);

  const theme = timeThemes[time];

  return (
    <section className="relative h-[100svh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={theme.image}
          alt="ONDA STAY"
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
      </div>

      {/* Dynamic Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${theme.overlay} transition-all duration-1000`} />

      {/* Night Stars */}
      {time === "night" && mounted && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="absolute w-1 h-1 bg-white rounded-full animate-glow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 60}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.7 + 0.3,
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="max-w-2xl">
          {/* Time Badge */}
          {mounted && (
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-gold animate-glow" />
              <span className="text-white/80 text-sm font-medium">
                지금은 {theme.greeting}
              </span>
            </div>
          )}

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.15] mb-6 animate-slide-up">
            숲 속에서
            <br />
            <span className={theme.accent}>쉼</span>을 만나다
          </h1>

          <p className="text-white/70 text-base sm:text-lg mb-8 korean-text max-w-lg animate-slide-up" style={{ animationDelay: "0.2s" }}>
            가평 자연 속 프라이빗 펜션. 전용 노천탕, 편백 숲 산책로,
            계절마다 달라지는 특별한 체험이 기다립니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Link href="/rooms" className="btn-primary !bg-gold !text-brown-dark hover:!bg-gold-light text-center w-full sm:w-auto">
              객실 둘러보기
            </Link>
            <Link href="/booking" className="btn-outline !border-white/40 !text-white hover:!bg-white/10 text-center w-full sm:w-auto">
              예약하기
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="flex gap-6 mt-10 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            {[
              { value: "5", label: "독채 객실" },
              { value: "4.9", label: "평점" },
              { value: "2,000+", label: "누적 후기" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-gold font-display font-bold text-xl sm:text-2xl">{stat.value}</p>
                <p className="text-white/50 text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
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
