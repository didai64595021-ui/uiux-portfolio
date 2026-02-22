'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';
import Link from 'next/link';
import { puppies, type Puppy } from '@/data';

const filters = ['전체', '분양중', '예약중', '분양완료'] as const;
const breedFilters = ['전체 견종', '말티푸', '포메라니안', '미니 비숑', '리트리버', '꼬똥 드 뚤레아', '폼스키', '푸들', '요크셔테리어'] as const;

function StatusBadge({ status }: { status: Puppy['status'] }) {
  const styles = {
    '분양중': 'status-badge status-available',
    '예약중': 'status-badge status-reserved',
    '분양완료': 'status-badge status-completed',
  };
  return <span className={styles[status]}>{status}</span>;
}

export default function PuppiesPage() {
  const [statusFilter, setStatusFilter] = useState<string>('전체');
  const [breedFilter, setBreedFilter] = useState<string>('전체 견종');

  const filteredPuppies = puppies.filter((p) => {
    const statusMatch = statusFilter === '전체' || p.status === statusFilter;
    const breedMatch = breedFilter === '전체 견종' || p.breedKr === breedFilter;
    return statusMatch && breedMatch;
  });

  return (
    <main>
      <Header />

      {/* Hero Banner */}
      <section className="relative h-[50svh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1920&q=80"
          alt="Available puppies"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-brown-deep/80" />
        <div className="relative z-10 text-center px-4">
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-rose-light/80 mb-3">
            Available Puppies
          </span>
          <h1 className="font-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold">
            분양 중인 아이들
          </h1>
          <div className="gold-divider mt-4" />
          <p className="text-white/60 text-sm sm:text-base mt-4">
            현재 {puppies.filter(p => p.status === '분양중').length}마리의 아이들이 새 가족을 기다리고 있습니다
          </p>
        </div>
      </section>

      {/* Puppies Grid */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8 sm:mb-12">
            {/* Status filter */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide w-full sm:w-auto">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setStatusFilter(filter)}
                  className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    statusFilter === filter
                      ? 'bg-rose-gold text-white shadow-lg shadow-rose-gold/20'
                      : 'bg-white text-brown-light hover:text-rose-gold border border-rose-gold/15'
                  }`}
                  style={{ minHeight: 44 }}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Breed filter */}
            <select
              value={breedFilter}
              onChange={(e) => setBreedFilter(e.target.value)}
              className="px-4 py-2.5 rounded-full text-xs sm:text-sm bg-white border border-rose-gold/15 text-brown-deep focus:outline-none focus:border-rose-gold/40 transition-colors"
              style={{ minHeight: 44 }}
            >
              {breedFilters.map((filter) => (
                <option key={filter} value={filter}>{filter}</option>
              ))}
            </select>
          </div>

          {/* Grid */}
          {filteredPuppies.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
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
                  </div>
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-brown-deep text-base sm:text-lg">{puppy.name}</h3>
                      <span className="text-rose-gold text-xs font-luxury italic">{puppy.breed}</span>
                    </div>
                    <p className="text-brown-light text-xs sm:text-sm mb-3">{puppy.breedKr}</p>
                    <div className="flex items-center gap-3 text-xs text-brown-light mb-3">
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
                    {puppy.color && (
                      <p className="text-xs text-brown-light/60 mb-2">컬러: {puppy.color}</p>
                    )}
                    <p className="korean-text text-xs text-brown-light/70 line-clamp-2 mb-4">
                      {puppy.description}
                    </p>
                    {puppy.status === '분양중' && (
                      <Link
                        href="tel:01023957347"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-rose-gold/10 text-rose-gold text-sm font-medium rounded-full hover:bg-rose-gold hover:text-white transition-all duration-300"
                        style={{ minHeight: 44 }}
                      >
                        분양 문의하기
                      </Link>
                    )}
                    {puppy.status === '예약중' && (
                      <div className="w-full text-center px-4 py-2.5 bg-amber-50 text-amber-600 text-sm font-medium rounded-full">
                        예약 진행중
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-brown-light text-sm">해당 조건에 맞는 아이가 없습니다.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
