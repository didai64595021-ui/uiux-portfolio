"use client";

import { useState } from "react";
import { materials } from "@/data/projects";

const categoryLabels: Record<string, string> = { flooring: "바닥재", tile: "타일", countertop: "상판", paint: "페인트", cabinet: "수납장" };
const tierLabels: Record<string, string> = { standard: "스탠다드", premium: "프리미엄", luxury: "럭셔리" };
const tierColors: Record<string, string> = { standard: "bg-gray-100 text-gray-600", premium: "bg-caramel/10 text-caramel-dark", luxury: "bg-charcoal/10 text-charcoal" };

export default function MaterialLibrary() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [favs, setFavs] = useState<string[]>([]);

  const categories = Array.from(new Set(materials.map((m) => m.category)));
  const filtered = activeCategory === "all" ? materials : materials.filter((m) => m.category === activeCategory);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-10">
          <p className="text-caramel text-sm tracking-widest font-semibold mb-3">MATERIALS</p>
          <h2 className="heading-responsive text-charcoal font-display korean-text mb-4">소재 라이브러리</h2>
          <p className="text-text/50 max-w-md mx-auto korean-text">
            온다 리빙이 엄선한 파트너사 자재들. 직접 보고 만져보실 수 있습니다.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          <button onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all min-h-[40px] ${
              activeCategory === "all" ? "bg-charcoal text-white" : "bg-white text-text/50"
            }`}
          >전체</button>
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all min-h-[40px] ${
                activeCategory === cat ? "bg-charcoal text-white" : "bg-white text-text/50"
              }`}
            >{categoryLabels[cat]}</button>
          ))}
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((mat) => (
            <div key={mat.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
              <div className="relative h-40 overflow-hidden">
                <img src={mat.image} alt={mat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button
                  onClick={() => setFavs((prev) => prev.includes(mat.id) ? prev.filter((f) => f !== mat.id) : [...prev, mat.id])}
                  className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    favs.includes(mat.id) ? "bg-caramel text-white" : "bg-white/80 text-text/40 hover:bg-caramel hover:text-white"
                  }`}
                  aria-label="즐겨찾기"
                >
                  <svg className="w-4 h-4" fill={favs.includes(mat.id) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>

                {/* Color Swatch */}
                <div className="absolute bottom-3 left-3 w-6 h-6 rounded-full border-2 border-white shadow-md"
                  style={{ backgroundColor: mat.color }}
                />
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${tierColors[mat.tier]}`}>
                    {tierLabels[mat.tier]}
                  </span>
                  <span className="text-[10px] text-text/30">{categoryLabels[mat.category]}</span>
                </div>
                <h3 className="font-bold text-charcoal text-sm">{mat.name}</h3>
                <p className="text-text/40 text-xs mt-0.5">{mat.brand}</p>
                <p className="text-caramel text-xs font-semibold mt-2">{mat.priceRange}</p>
              </div>
            </div>
          ))}
        </div>

        {favs.length > 0 && (
          <div className="mt-8 bg-caramel/10 rounded-2xl p-4 text-center border border-caramel/20">
            <p className="text-sm text-charcoal korean-text">
              <span className="font-bold">{favs.length}개</span>의 소재를 선택했습니다.
              상담 시 선택하신 소재 목록을 함께 전달해 드립니다.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
