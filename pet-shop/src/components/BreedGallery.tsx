'use client';

import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from './SectionTitle';
import { breeds } from '@/data';

export default function BreedGallery() {
  return (
    <section id="breeds" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Our Breeds"
          titleEn="Premium Breed Collection"
          title="프리미엄 견종 컬렉션"
          description="엄선된 프리미엄 견종만을 선별하여 건강하고 아름다운 아이들을 소개합니다"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {breeds.map((breed, index) => (
            <Link
              key={breed.id}
              href={`/breeds#${breed.id}`}
              className="group card-luxury"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="image-hover-zoom aspect-[3/4] relative">
                <Image
                  src={breed.image}
                  alt={breed.nameKr}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <p className="font-luxury text-white/70 text-xs sm:text-sm italic">
                    {breed.name}
                  </p>
                  <h3 className="text-white font-semibold text-sm sm:text-base mt-0.5">
                    {breed.nameKr}
                  </h3>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-rose-light text-xs">{breed.size}</span>
                    <span className="w-1 h-1 rounded-full bg-white/30" />
                    <span className="text-white/60 text-xs">{breed.lifespan}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <Link
            href="/breeds"
            className="btn-outline"
            style={{ minHeight: 48 }}
          >
            전체 견종 보기
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
