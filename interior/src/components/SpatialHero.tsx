"use client";

import { useState } from "react";
import Link from "next/link";

const roomSpots = [
  { id: "living", label: "거실", x: "20%", y: "45%", desc: "가족이 모이는 공간, 세련되게", link: "/space/living" },
  { id: "kitchen", label: "주방", x: "55%", y: "35%", desc: "효율과 디자인이 만나는 곳", link: "/space/kitchen" },
  { id: "bedroom", label: "안방", x: "75%", y: "55%", desc: "매일의 시작과 끝, 편안하게", link: "/space/bedroom" },
  { id: "bathroom", label: "욕실", x: "85%", y: "30%", desc: "나만의 스파 공간으로", link: "/space/bathroom" },
  { id: "kids", label: "아이방", x: "40%", y: "60%", desc: "성장과 함께하는 맞춤 공간", link: "/space/kids" },
];

export default function SpatialHero() {
  const [activeRoom, setActiveRoom] = useState<string | null>(null);

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-charcoal">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80"
        alt="인테리어"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/50 to-charcoal/90" />

      <div className="relative z-10 container-custom w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-caramel font-sans font-semibold text-sm tracking-widest mb-4 animate-fade-in">
              ONDA LIVING
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 animate-slide-up">
              공간을 바꾸면
              <br />
              <span className="text-caramel">삶</span>이 바뀝니다
            </h1>
            <p className="text-white/50 text-base sm:text-lg mb-8 korean-text max-w-lg animate-slide-up" style={{ animationDelay: "0.2s" }}>
              15년 경력의 디자이너가 만드는 맞춤 인테리어.
              <br />
              아파트, 주택, 사무실까지 —
              <br className="hidden sm:block" />
              당신의 공간을 새롭게 설계합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Link href="/estimate" className="btn-accent text-center w-full sm:w-auto">
                무료 견적 받기
              </Link>
              <Link href="/portfolio" className="btn-outline !border-white/30 !text-white hover:!bg-white/10 text-center w-full sm:w-auto">
                시공사례 보기
              </Link>
            </div>
          </div>

          {/* Right: Interactive Room Map */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square max-w-md mx-auto">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="공간"
                className="w-full h-full object-cover rounded-3xl opacity-60"
              />
              <div className="absolute inset-0 bg-charcoal/40 rounded-3xl" />

              {/* Room Hotspots */}
              {roomSpots.map((spot) => (
                <div key={spot.id}
                  className="absolute group"
                  style={{ left: spot.x, top: spot.y, transform: "translate(-50%, -50%)" }}
                >
                  <button
                    onMouseEnter={() => setActiveRoom(spot.id)}
                    onMouseLeave={() => setActiveRoom(null)}
                    onClick={() => setActiveRoom(activeRoom === spot.id ? null : spot.id)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      activeRoom === spot.id
                        ? "bg-caramel text-white scale-125 shadow-lg shadow-caramel/40"
                        : "bg-white/20 text-white hover:bg-caramel/60 backdrop-blur-sm"
                    }`}
                  >
                    <span className="w-2 h-2 bg-current rounded-full" />
                  </button>

                  {/* Tooltip */}
                  <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 transition-all duration-300 ${
                    activeRoom === spot.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                  }`}>
                    <div className="bg-white rounded-xl p-3 shadow-xl whitespace-nowrap text-center min-w-[140px]">
                      <p className="font-bold text-charcoal text-sm">{spot.label}</p>
                      <p className="text-charcoal/50 text-xs mt-0.5 korean-text">{spot.desc}</p>
                      <Link href={spot.link} className="text-caramel text-xs font-semibold mt-1 block hover:underline">
                        사례 보기 →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              {/* Label */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white/40 text-xs">공간을 클릭해 보세요</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          {[
            { value: "15년+", label: "업력" },
            { value: "1,200+", label: "시공 실적" },
            { value: "4.9", label: "고객 평점" },
            { value: "3년", label: "하자 보증" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
              <p className="text-caramel font-display text-xl sm:text-2xl font-bold">{stat.value}</p>
              <p className="text-white/40 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
