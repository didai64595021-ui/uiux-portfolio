"use client";

import { useState, useEffect, useRef } from "react";
import { cars } from "@/data/cars";
import Link from "next/link";

const tabs = ["인기", "신규", "특가"] as const;

export default function FeaturedCars() {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("인기");
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered = cars.filter((c) => c.badge === activeTab);

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-accent font-display font-semibold text-sm tracking-widest mb-2">
              FEATURED
            </p>
            <h2 className="heading-responsive text-navy korean-text">
              엄선된 추천 차량
            </h2>
          </div>
          {/* Tabs */}
          <div className="flex bg-bg rounded-xl p-1 self-start sm:self-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all min-h-[44px] ${
                  activeTab === tab
                    ? "bg-navy text-white shadow-md"
                    : "text-text/60 hover:text-text"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((car, i) => (
            <div
              key={car.id}
              className={`card group cursor-pointer ${
                visible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {car.badge && (
                  <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white ${
                    car.badge === "인기" ? "bg-accent" :
                    car.badge === "신규" ? "bg-green-500" :
                    "bg-red-500"
                  }`}>
                    {car.badge}
                  </span>
                )}
                <div className="absolute top-3 right-3 bg-navy/80 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                  {car.fuel}
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-xs text-text/50 font-medium">{car.brand}</p>
                    <h3 className="font-bold text-navy text-lg">{car.model}</h3>
                  </div>
                  <p className="text-accent font-display font-bold text-xl">
                    {(car.price / 100).toFixed(1)}
                    <span className="text-xs text-text/50 ml-0.5">만원</span>
                  </p>
                </div>

                <div className="flex items-center gap-3 text-xs text-text/50 mb-4">
                  <span>{car.year}년</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span>{(car.mileage / 10000).toFixed(1)}만km</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span>{car.transmission}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {car.features.slice(0, 3).map((f) => (
                    <span key={f} className="bg-bg text-text/60 text-xs px-2 py-1 rounded-md">
                      {f}
                    </span>
                  ))}
                </div>

                <Link
                  href="/inventory"
                  className="block text-center bg-navy/5 hover:bg-navy hover:text-white text-navy font-semibold py-2.5 rounded-lg transition-all text-sm min-h-[44px] flex items-center justify-center"
                >
                  자세히 보기
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <Link href="/inventory" className="btn-outline">
            전체 재고 {cars.length}대 보기 →
          </Link>
        </div>
      </div>
    </section>
  );
}
