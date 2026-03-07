"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { spaces } from "@/data/spaces";

export default function SpaceDetailPage() {
  const params = useParams();
  const space = spaces[params.id as string];
  const [activeImage, setActiveImage] = useState(0);

  if (!space) {
    return (
      <div className="pt-20 min-h-[100svh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-charcoal mb-4">공간을 찾을 수 없습니다</h1>
          <Link href="/" className="btn-accent active:scale-[0.98]">홈으로 돌아가기</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-[100svh]">
      {/* Hero Banner */}
      <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <img
          src={space.heroImage}
          alt={space.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-charcoal/20" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <div className="container-custom">
            <p className="text-caramel text-sm tracking-widest font-semibold mb-2">{space.nameEn}</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display text-white mb-3 korean-text">
              {space.name} 인테리어
            </h1>
            <p className="text-white/60 max-w-2xl korean-text text-sm sm:text-base">{space.description}</p>
          </div>
        </div>
      </div>

      {/* Quick Info Bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="container-custom py-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-charcoal/40 text-xs mb-1">예상 비용</p>
              <p className="font-bold text-charcoal text-sm sm:text-base">{space.priceRange}</p>
            </div>
            <div>
              <p className="text-charcoal/40 text-xs mb-1">시공 기간</p>
              <p className="font-bold text-charcoal text-sm sm:text-base">{space.timeline}</p>
            </div>
            <div>
              <p className="text-charcoal/40 text-xs mb-1">인기 스타일</p>
              <p className="font-bold text-caramel text-sm sm:text-base">{space.popularStyles[0]}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="section-padding bg-warm">
        <div className="container-custom">
          <div className="text-center mb-10">
            <p className="text-caramel text-sm tracking-widest font-semibold mb-2">FEATURES</p>
            <h2 className="heading-responsive text-charcoal korean-text">{space.name} 설계 포인트</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {space.features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-charcoal mb-2 korean-text">{f.title}</h3>
                <p className="text-charcoal/50 text-sm korean-text">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <p className="text-caramel text-sm tracking-widest font-semibold mb-2">GALLERY</p>
            <h2 className="heading-responsive text-charcoal korean-text">시공 사례 갤러리</h2>
          </div>

          {/* Main Image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-4">
            <img
              src={space.gallery[activeImage].image}
              alt={space.gallery[activeImage].caption}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/60 to-transparent p-6">
              <p className="text-white text-sm korean-text">{space.gallery[activeImage].caption}</p>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {space.gallery.map((g, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                aria-label={`갤러리 이미지 ${i + 1}: ${g.caption}`}
                className={`relative aspect-[4/3] rounded-lg overflow-hidden transition-all ${
                  activeImage === i ? "ring-2 ring-caramel ring-offset-2" : "opacity-60 hover:opacity-100"
                }`}
              >
                <img src={g.image} alt={g.caption} className="w-full h-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Design Tips */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <div className="text-center mb-10">
            <p className="text-caramel text-sm tracking-widest font-semibold mb-2">DESIGN TIPS</p>
            <h2 className="heading-responsive text-white korean-text">{space.name} 인테리어 팁</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {space.tips.map((tip, i) => (
              <div key={i} className="flex gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <div className="w-8 h-8 bg-caramel/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-caramel font-bold text-sm">{i + 1}</span>
                </div>
                <p className="text-white/70 text-sm korean-text leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Styles */}
      <section className="section-padding bg-warm">
        <div className="container-custom">
          <div className="text-center mb-10">
            <p className="text-caramel text-sm tracking-widest font-semibold mb-2">POPULAR STYLES</p>
            <h2 className="heading-responsive text-charcoal korean-text">인기 스타일</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {space.popularStyles.map((style) => (
              <span key={style} className="bg-white px-6 py-3 rounded-full text-charcoal font-medium shadow-sm text-sm">
                {style}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white text-center">
        <div className="container-custom max-w-2xl">
          <h2 className="text-xl sm:text-2xl font-display font-bold text-charcoal mb-4 korean-text">
            {space.name} 인테리어, 무료로 상담받으세요
          </h2>
          <p className="text-charcoal/50 korean-text mb-6">
            전문 디자이너가 현장을 방문하여 맞춤 견적을 무료로 제공해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/estimate" className="btn-accent active:scale-[0.98]">무료 견적 받기</Link>
            <Link href="/consult" className="btn-outline active:scale-[0.98]">상담 신청</Link>
          </div>
        </div>
      </section>

      {/* Other Spaces */}
      <section className="py-10 bg-warm border-t border-gray-100">
        <div className="container-custom">
          <h3 className="text-center font-bold text-charcoal mb-6 korean-text">다른 공간 둘러보기</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {Object.values(spaces)
              .filter((s) => s.id !== space.id)
              .map((s) => (
                <Link
                  key={s.id}
                  href={`/space/${s.id}`}
                  className="bg-white px-5 py-3 rounded-xl text-sm font-medium text-charcoal hover:bg-caramel hover:text-white transition-all shadow-sm min-h-[44px] inline-flex items-center"
                >
                  {s.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
