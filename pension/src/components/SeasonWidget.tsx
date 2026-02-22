"use client";

import { useState, useEffect } from "react";
import { seasonalActivities } from "@/data/rooms";

function getCurrentSeason(): keyof typeof seasonalActivities {
  const month = new Date().getMonth() + 1;
  if (month >= 3 && month <= 5) return "spring";
  if (month >= 6 && month <= 8) return "summer";
  if (month >= 9 && month <= 11) return "autumn";
  return "winter";
}

export default function SeasonWidget() {
  const [activeSeason, setActiveSeason] = useState<keyof typeof seasonalActivities>("spring");

  useEffect(() => {
    setActiveSeason(getCurrentSeason());
  }, []);

  const season = seasonalActivities[activeSeason];
  const seasons = Object.entries(seasonalActivities) as [keyof typeof seasonalActivities, typeof season][];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-gold-dark font-display text-sm tracking-[0.2em] mb-3">SEASONS</p>
          <h2 className="heading-responsive text-brown font-display korean-text">
            계절마다 다른 즐거움
          </h2>
        </div>

        {/* Season Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {seasons.map(([key, s]) => (
            <button key={key} onClick={() => setActiveSeason(key)}
              className={`relative px-5 py-3 rounded-2xl text-sm font-semibold transition-all min-h-[48px] ${
                activeSeason === key
                  ? "bg-brown text-white shadow-lg"
                  : "bg-white text-text/50 hover:bg-brown/5"
              }`}
            >
              {s.label}
              {key === getCurrentSeason() && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full border-2 border-cream" />
              )}
            </button>
          ))}
        </div>

        {/* Season Content */}
        <div className="max-w-3xl mx-auto animate-fade-in" key={activeSeason}>
          <div className="grid grid-cols-2 gap-4">
            {season.activities.map((activity, i) => (
              <div key={i}
                className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                    style={{ backgroundColor: season.color + "30" }}
                  >
                    {["🌸", "🏊", "🍂", "❄️"][seasons.findIndex(([k]) => k === activeSeason)]}
                  </div>
                  <p className="font-semibold text-brown text-sm korean-text">{activity}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Special Package */}
          <div className="mt-8 bg-brown/5 rounded-3xl p-6 sm:p-8 text-center border border-brown/10">
            <p className="text-gold-dark font-display text-xs tracking-widest mb-2">SEASONAL PACKAGE</p>
            <h3 className="text-lg font-display font-bold text-brown mb-2 korean-text">
              {season.label} 특별 패키지
            </h3>
            <p className="text-text/50 text-sm korean-text mb-4">
              {activeSeason === "spring" && "벚꽃 산책 + 봄나물 체험 + 특제 봄차 서비스"}
              {activeSeason === "summer" && "계곡 입장권 + BBQ 세트 + 수박 서비스"}
              {activeSeason === "autumn" && "단풍 트레킹 가이드 + 와인 세트 + 호두파이"}
              {activeSeason === "winter" && "스키장 할인권 + 핫초코 세트 + 군고구마"}
            </p>
            <a href="/booking" className="btn-primary !bg-gold !text-brown-dark text-sm">
              패키지 예약하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
