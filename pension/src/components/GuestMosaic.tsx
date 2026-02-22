"use client";

import { useState } from "react";
import { guestReviews } from "@/data/rooms";

const seasonLabels = { spring: "봄", summer: "여름", autumn: "가을", winter: "겨울" };
const seasonFilters = ["all", "spring", "summer", "autumn", "winter"] as const;

export default function GuestMosaic() {
  const [filter, setFilter] = useState<typeof seasonFilters[number]>("all");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = filter === "all" ? guestReviews : guestReviews.filter((r) => r.season === filter);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <p className="text-gold-dark font-display text-sm tracking-[0.2em] mb-3">GUEST STORIES</p>
          <h2 className="heading-responsive text-brown font-display korean-text mb-4">
            게스트 이야기
          </h2>
          <p className="text-text/50 max-w-md mx-auto korean-text">
            온다 스테이를 다녀간 분들의 생생한 후기와 사진
          </p>
        </div>

        {/* Season Filter */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {seasonFilters.map((s) => (
            <button key={s} onClick={() => setFilter(s)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all min-h-[40px] ${
                filter === s ? "bg-brown text-white" : "bg-cream text-text/50 hover:bg-brown/5"
              }`}
            >
              {s === "all" ? "전체 시즌" : seasonLabels[s]}
            </button>
          ))}
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {filtered.map((review, i) => (
            <div key={i}
              onClick={() => setExpanded(expanded === i ? null : i)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                i === 0 || i === 3 ? "md:row-span-2 aspect-[3/4]" : "aspect-square"
              }`}
            >
              <img src={review.image} alt={review.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className={`absolute inset-0 transition-all duration-300 ${
                expanded === i
                  ? "bg-brown/80"
                  : "bg-gradient-to-t from-brown/60 via-transparent to-transparent group-hover:from-brown/70"
              }`} />

              {/* Basic Info */}
              <div className="absolute bottom-3 left-3 right-3">
                <div className="flex items-center gap-1 mb-1">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <svg key={j} className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white font-semibold text-sm">{review.name}</p>
                <p className="text-white/60 text-xs">{review.room} · {review.date}</p>
              </div>

              {/* Expanded Review Text */}
              {expanded === i && (
                <div className="absolute inset-0 flex items-center justify-center p-5 animate-fade-in">
                  <div className="text-center">
                    <p className="text-white/90 text-sm korean-text leading-relaxed">
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <p className="text-gold mt-3 text-xs font-medium">
                      {review.name} · {review.room}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
