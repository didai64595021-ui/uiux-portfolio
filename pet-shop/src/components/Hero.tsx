'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&q=85"
          alt="Premium puppy"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-brown-deep/30 to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-full animate-float hidden md:block" />
      <div className="absolute bottom-32 right-16 w-24 h-24 border border-rose-gold/20 rounded-full animate-float hidden md:block" style={{ animationDelay: '3s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pb-16 sm:pb-0">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 sm:mb-8 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-rose-gold animate-pulse" />
          <span className="text-xs sm:text-sm text-white/90 tracking-wider uppercase">
            Premium Puppy Boutique
          </span>
        </div>

        {/* Title */}
        <h1
          className={`font-luxury transition-all duration-1000 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="block text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide leading-tight">
            Signature Pups
          </span>
          <span className="block text-rose-light text-lg sm:text-xl md:text-2xl lg:text-3xl font-light italic mt-2 sm:mt-4 tracking-wider">
            Premium Life with Signature
          </span>
        </h1>

        {/* Divider */}
        <div
          className={`w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto my-6 sm:my-8 transition-all duration-1000 delay-400 ${
            isLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
        />

        {/* Subtitle */}
        <p
          className={`korean-text text-white/80 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10 transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          건강하고 아름다운 프리미엄 강아지와 함께하는<br className="hidden sm:block" />
          특별한 시작, 시그니처펍스가 함께합니다
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Link
            href="/#puppies"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-rose-gold text-white font-medium rounded-full hover:bg-rose-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-gold/20"
            style={{ minHeight: 48 }}
          >
            분양 중인 아이들 보기
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="tel:01023957347"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white rounded-full hover:bg-white/10 transition-all duration-300"
            style={{ minHeight: 48 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            상담 예약하기
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
