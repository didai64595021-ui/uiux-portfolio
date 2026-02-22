"use client";

import { useState } from "react";
import { attractions } from "@/data/rooms";

const typeLabels = { nature: "자연", food: "맛집", activity: "액티비티", culture: "문화" };
const typeColors = { nature: "bg-green-100 text-green-700", food: "bg-orange-100 text-orange-700", activity: "bg-blue-100 text-blue-700", culture: "bg-purple-100 text-purple-700" };

export default function AreaMap() {
  const [selected, setSelected] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all" ? attractions : attractions.filter((a) => a.type === filter);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-gold-dark font-display text-sm tracking-[0.2em] mb-3">NEIGHBORHOOD</p>
          <h2 className="heading-responsive text-brown font-display korean-text mb-4">
            주변 즐길거리
          </h2>
          <p className="text-text/50 max-w-md mx-auto korean-text">
            호스트가 직접 추천하는 주변 명소들. 펜션에서 가까운 순으로 정렬했어요.
          </p>
        </div>

        {/* Filter */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {["all", "nature", "food", "activity", "culture"].map((t) => (
            <button key={t} onClick={() => setFilter(t)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all min-h-[40px] ${
                filter === t ? "bg-brown text-white" : "bg-white text-text/50 hover:bg-brown/5"
              }`}
            >
              {t === "all" ? "전체" : typeLabels[t as keyof typeof typeLabels]}
            </button>
          ))}
        </div>

        {/* Map-style Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center: Pension */}
          <div className="flex justify-center mb-8">
            <div className="bg-brown text-white rounded-2xl px-6 py-4 text-center shadow-lg relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-gold rounded-full flex items-center justify-center text-brown text-xs font-bold">
                ★
              </div>
              <p className="font-display font-bold">ONDA STAY</p>
              <p className="text-white/60 text-xs">여기서 출발!</p>
            </div>
          </div>

          {/* Attractions Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            {filtered.map((attr) => (
              <button key={attr.id}
                onClick={() => setSelected(selected === attr.id ? null : attr.id)}
                className={`text-left bg-white rounded-2xl p-5 transition-all duration-300 border-2 ${
                  selected === attr.id ? "border-gold shadow-lg" : "border-transparent shadow-sm hover:shadow-md"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{attr.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-brown">{attr.name}</h3>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${typeColors[attr.type]}`}>
                        {typeLabels[attr.type]}
                      </span>
                    </div>
                    <p className="text-text/50 text-sm korean-text">{attr.description}</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-text/40">
                      <span>{attr.distance}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full" />
                      <span>{attr.time}</span>
                    </div>

                    {/* Host Recommendation */}
                    {selected === attr.id && (
                      <div className="mt-3 bg-gold/10 rounded-xl p-3 animate-fade-in">
                        <p className="text-xs font-semibold text-gold-dark mb-1">🏠 호스트 추천</p>
                        <p className="text-sm text-brown/70 korean-text">{attr.recommendation}</p>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
