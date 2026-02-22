import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';
import Link from 'next/link';
import { reviews } from '@/data';

export const metadata = {
  title: '분양 후기 | 시그니처펍스 Signature Pups',
  description: '시그니처펍스와 함께한 가족들의 행복한 입양 후기를 만나보세요.',
};

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

export default function ReviewsPage() {
  return (
    <main>
      <Header />

      {/* Hero Banner */}
      <section className="relative h-[50svh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1583337130417-13571a247212?w=1920&q=80"
          alt="Happy families"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-brown-deep/80" />
        <div className="relative z-10 text-center px-4">
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-rose-light/80 mb-3">
            Happy Stories
          </span>
          <h1 className="font-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold">
            행복한 입양 후기
          </h1>
          <div className="gold-divider mt-4" />
          <p className="text-white/60 text-sm sm:text-base mt-4">
            {reviews.length}개의 행복한 이야기
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-12 sm:mb-16">
            <div className="text-center p-4 sm:p-6 bg-white rounded-2xl border border-rose-gold/10">
              <p className="font-luxury text-2xl sm:text-3xl text-rose-gold font-semibold">5.0</p>
              <StarRating rating={5} />
              <p className="text-xs text-brown-light mt-2">평균 만족도</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white rounded-2xl border border-rose-gold/10">
              <p className="font-luxury text-2xl sm:text-3xl text-rose-gold font-semibold">{reviews.length}</p>
              <p className="text-xs text-brown-light mt-2">총 후기 수</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white rounded-2xl border border-rose-gold/10">
              <p className="font-luxury text-2xl sm:text-3xl text-rose-gold font-semibold">100%</p>
              <p className="text-xs text-brown-light mt-2">재추천율</p>
            </div>
          </div>

          {/* Review List */}
          <div className="space-y-4 sm:space-y-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl p-5 sm:p-8 border border-rose-gold/10 hover:border-rose-gold/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-2xl overflow-hidden flex-shrink-0">
                    <Image
                      src={review.image}
                      alt={review.puppyName}
                      fill
                      className="object-cover"
                      sizes="112px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                      <div>
                        <h3 className="font-semibold text-brown-deep text-base sm:text-lg">
                          {review.author}
                        </h3>
                        <p className="text-xs text-rose-gold">
                          {review.puppyName} ({review.breed})
                        </p>
                      </div>
                      <div className="text-right">
                        <StarRating rating={review.rating} />
                        <p className="text-xs text-brown-light/50 mt-1">{review.date}</p>
                      </div>
                    </div>
                    <div className="gold-divider mx-0 my-4 w-full" style={{ background: 'linear-gradient(90deg, rgba(192,139,110,0.2), transparent)' }} />
                    <p className="korean-text text-brown-light text-sm sm:text-base leading-relaxed">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 sm:mt-16 p-8 sm:p-12 bg-white rounded-3xl border border-rose-gold/10">
            <h3 className="font-luxury text-xl sm:text-2xl text-brown-deep font-semibold mb-2">
              나도 행복한 가족이 되고 싶다면?
            </h3>
            <p className="korean-text text-brown-light text-sm mb-6">
              시그니처펍스에서 당신의 소울메이트를 만나보세요
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/puppies"
                className="w-full sm:w-auto btn-primary"
                style={{ minHeight: 48 }}
              >
                분양 중인 아이들 보기
              </Link>
              <Link
                href="tel:01023957347"
                className="w-full sm:w-auto btn-outline"
                style={{ minHeight: 48 }}
              >
                상담 예약하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
