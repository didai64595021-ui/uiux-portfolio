'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from './SectionTitle';
import { puppies, type Puppy } from '@/data';

const filters = ['전체', '분양중', '예약중', '분양완료'] as const;

function StatusBadge({ status }: { status: Puppy['status'] }) {
  const styles = {
    '분양중': 'status-badge status-available',
    '예약중': 'status-badge status-reserved',
    '분양완료': 'status-badge status-completed',
  };

  return <span className={styles[status]}>{status}</span>;
}

export default function AvailablePuppies() {
  const [activeFilter, setActiveFilter] = useState<string>('전체');

  const filteredPuppies = activeFilter === '전체'
    ? puppies
    : puppies.filter(p => p.status === activeFilter);

  return (
    <section id="puppies" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Available Now"
          titleEn="Meet Our Puppies"
          title="분양 중인 아이들"
          description="건강하고 사랑스러운 아이들이 새 가족을 기다리고 있습니다"
        />

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-rose-gold text-white shadow-lg shadow-rose-gold/20'
                  : 'bg-white text-brown-light hover:text-rose-gold border border-rose-gold/15 hover:border-rose-gold/30'
              }`}
              style={{ minHeight: 44 }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Puppies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredPuppies.map((puppy) => (
            <div key={puppy.id} className="card-luxury group">
              <div className="image-hover-zoom aspect-square relative">
                <Image
                  src={puppy.image}
                  alt={puppy.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute top-3 left-3">
                  <StatusBadge status={puppy.status} />
                </div>
                {puppy.status === '분양완료' && (
                  <div className="absolute inset-0 bg-white/40" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-brown-deep text-base sm:text-lg">
                    {puppy.name}
                  </h3>
                  <span className="text-rose-gold text-xs sm:text-sm font-luxury italic">
                    {puppy.breed}
                  </span>
                </div>
                <p className="text-brown-light text-xs sm:text-sm mb-3">
                  {puppy.breedKr}
                </p>
                <div className="flex items-center gap-3 text-xs text-brown-light">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-rose-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    {puppy.gender}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-brown-light/30" />
                  <span>{puppy.age}</span>
                  {puppy.weight && (
                    <>
                      <span className="w-1 h-1 rounded-full bg-brown-light/30" />
                      <span>{puppy.weight}</span>
                    </>
                  )}
                </div>
                <p className="korean-text text-xs text-brown-light/70 mt-3 line-clamp-2">
                  {puppy.description}
                </p>
                {puppy.status === '분양중' && (
                  <Link
                    href="tel:01023957347"
                    className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-rose-gold/10 text-rose-gold text-sm font-medium rounded-full hover:bg-rose-gold hover:text-white transition-all duration-300"
                    style={{ minHeight: 44 }}
                  >
                    분양 문의하기
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <Link
            href="/puppies"
            className="btn-outline"
            style={{ minHeight: 48 }}
          >
            전체 분양 목록 보기
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
