'use client';

import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from './SectionTitle';
import { reviews } from '@/data';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-rose-gold' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const displayReviews = reviews.slice(0, 4);

  return (
    <section id="reviews" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Happy Stories"
          titleEn="Our Families&apos; Stories"
          title="행복한 입양 후기"
          description="시그니처펍스와 함께한 가족들의 이야기를 만나보세요"
        />

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6">
          {displayReviews.map((review) => (
            <div
              key={review.id}
              className="bg-cream rounded-2xl p-5 sm:p-6 border border-rose-gold/10 hover:border-rose-gold/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden flex-shrink-0">
                  <Image
                    src={review.image}
                    alt={review.puppyName}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-brown-deep text-sm sm:text-base">
                      {review.author}
                    </h3>
                    <span className="text-xs text-brown-light/50">{review.date}</span>
                  </div>
                  <p className="text-xs text-rose-gold mb-2">
                    {review.puppyName} ({review.breed})
                  </p>
                  <StarRating rating={review.rating} />
                </div>
              </div>
              <p className="korean-text text-brown-light text-xs sm:text-sm leading-relaxed mt-4 pl-0 sm:pl-24">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <Link
            href="/reviews"
            className="btn-outline"
            style={{ minHeight: 48 }}
          >
            더 많은 후기 보기
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
