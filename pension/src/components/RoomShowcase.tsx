"use client";

import { useState } from "react";
import { rooms } from "@/data/rooms";
import Link from "next/link";

const typeLabels = { couple: "커플", family: "패밀리", group: "단체" };
const typeFilters = ["all", "couple", "family", "group"] as const;

export default function RoomShowcase() {
  const [filter, setFilter] = useState<typeof typeFilters[number]>("all");
  const [hoveredRoom, setHoveredRoom] = useState<string | null>(null);

  const filtered = filter === "all" ? rooms : rooms.filter((r) => r.type === filter);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-gold-dark font-display text-sm tracking-[0.2em] mb-3">ROOMS</p>
            <h2 className="heading-responsive text-brown font-display korean-text">
              다섯 채의 독립된 공간
            </h2>
          </div>
          <div className="flex bg-cream rounded-2xl p-1 self-start sm:self-auto">
            {typeFilters.map((t) => (
              <button key={t} onClick={() => setFilter(t)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all min-h-[44px] ${
                  filter === t ? "bg-brown text-white shadow-md" : "text-text/50 hover:text-text"
                }`}
              >
                {t === "all" ? "전체" : typeLabels[t]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
          {filtered.map((room) => (
            <div key={room.id}
              className="card group cursor-pointer"
              onMouseEnter={() => setHoveredRoom(room.id)}
              onMouseLeave={() => setHoveredRoom(null)}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={room.image} alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Room Name Overlay */}
                <div className="absolute bottom-4 left-5 right-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-gold font-display text-xs tracking-widest mb-1">{room.nameEn}</p>
                      <h3 className="text-white text-xl sm:text-2xl font-display font-bold">{room.name}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-white/60 text-xs">1박</p>
                      <p className="text-gold font-display font-bold text-lg">
                        {room.price.toLocaleString()}<span className="text-sm">원~</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Highlight Badge */}
                <div className="absolute top-4 left-4 bg-gold/90 backdrop-blur-sm text-brown-dark text-xs font-bold px-3 py-1.5 rounded-full">
                  {room.highlight}
                </div>

                {/* Capacity Badge */}
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-brown text-xs font-medium px-2.5 py-1.5 rounded-full">
                  최대 {room.capacity}인 · {room.size}㎡
                </div>
              </div>

              {/* Details — Expands on hover/tap */}
              <div className={`transition-all duration-500 overflow-hidden ${
                hoveredRoom === room.id ? "max-h-60 opacity-100" : "max-h-0 opacity-0 md:max-h-0 md:opacity-0"
              }`}>
                <div className="p-5 border-t border-gray-100">
                  <p className="text-text/60 text-sm korean-text mb-3">{room.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {room.amenities.map((a) => (
                      <span key={a} className="bg-cream text-brown/70 text-xs px-2.5 py-1 rounded-full">{a}</span>
                    ))}
                  </div>
                  <Link href="/booking" className="btn-primary w-full text-center text-sm">
                    이 객실 예약하기
                  </Link>
                </div>
              </div>

              {/* Mobile Always-Visible */}
              <div className="p-5 border-t border-gray-100 md:hidden">
                <p className="text-text/60 text-sm korean-text mb-3">{room.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {room.amenities.map((a) => (
                    <span key={a} className="bg-cream text-brown/70 text-xs px-2.5 py-1 rounded-full">{a}</span>
                  ))}
                </div>
                <Link href="/booking" className="btn-primary w-full text-center text-sm">이 객실 예약하기</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
