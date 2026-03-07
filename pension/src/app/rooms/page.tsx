"use client";

import { rooms } from "@/data/rooms";
import Link from "next/link";

export default function RoomsPage() {
  return (
    <div className="pt-20 min-h-[100svh]">
      <div className="bg-brown py-14 sm:py-20">
        <div className="container-custom text-center">
          <p className="text-gold font-display text-sm tracking-[0.2em] mb-3">ROOMS</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white korean-text">
            다섯 채의 독립된 공간
          </h1>
          <p className="text-white/50 mt-4 korean-text">각 객실은 완전한 프라이버시가 보장되는 독채입니다</p>
        </div>
      </div>

      <div className="container-custom py-10 sm:py-16 space-y-16">
        {rooms.map((room, i) => (
          <div key={room.id} className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12 items-center`}>
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
                <img src={room.image} alt={room.name} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute top-4 left-4 bg-gold/90 text-brown-dark text-xs font-bold px-3 py-1.5 rounded-full">
                  {room.highlight}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <p className="text-gold-dark font-display text-xs tracking-[0.2em] mb-2">{room.nameEn}</p>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-brown mb-4">{room.name}</h2>
              <p className="text-text/60 korean-text leading-relaxed mb-6">{room.description}</p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-cream rounded-xl p-3 text-center">
                  <p className="text-text/40 text-xs">정원</p>
                  <p className="font-bold text-brown">{room.capacity}인</p>
                </div>
                <div className="bg-cream rounded-xl p-3 text-center">
                  <p className="text-text/40 text-xs">면적</p>
                  <p className="font-bold text-brown">{room.size}㎡</p>
                </div>
                <div className="bg-cream rounded-xl p-3 text-center">
                  <p className="text-text/40 text-xs">1박</p>
                  <p className="font-bold text-gold-dark">{(room.price / 10000).toFixed(0)}만원~</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {room.amenities.map((a) => (
                  <span key={a} className="bg-cream text-brown/70 text-xs px-3 py-1.5 rounded-full">{a}</span>
                ))}
              </div>

              <div className="bg-brown/5 rounded-xl p-4 mb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-text/50">평일 (일~목)</span>
                  <span className="font-bold text-brown">{room.price.toLocaleString()}원</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-text/50">주말 (금~토)</span>
                  <span className="font-bold text-brown">{room.weekendPrice.toLocaleString()}원</span>
                </div>
              </div>

              <Link href="/booking" className="btn-primary w-full sm:w-auto text-center active:scale-[0.98]">
                이 객실 예약하기
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
