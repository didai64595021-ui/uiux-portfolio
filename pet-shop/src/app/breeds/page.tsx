import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';
import Link from 'next/link';
import { breeds } from '@/data';

export const metadata = {
  title: '견종 소개 | 시그니처펍스 Signature Pups',
  description: '꼬똥 드 뚤레아, 말티푸, 푸들, 포메라니안 등 프리미엄 견종을 소개합니다.',
};

export default function BreedsPage() {
  return (
    <main>
      <Header />

      {/* Hero Banner */}
      <section className="relative h-[50svh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920&q=80"
          alt="Premium breeds"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-brown-deep/80" />
        <div className="relative z-10 text-center px-4">
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-rose-light/80 mb-3">
            Our Breeds
          </span>
          <h1 className="font-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold">
            프리미엄 견종 컬렉션
          </h1>
          <div className="gold-divider mt-4" />
        </div>
      </section>

      {/* Breed Cards */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 sm:space-y-24">
            {breeds.map((breed, index) => (
              <div
                key={breed.id}
                id={breed.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden image-hover-zoom">
                    <Image
                      src={breed.image}
                      alt={breed.nameKr}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  {/* Gallery thumbnails */}
                  <div className="flex gap-2 mt-3">
                    {breed.gallery.map((img, i) => (
                      <div key={i} className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-white shadow-md">
                        <Image
                          src={img}
                          alt={`${breed.nameKr} ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <span className="font-luxury text-rose-gold/60 text-sm italic">
                    {breed.name}
                  </span>
                  <h2 className="font-luxury text-2xl sm:text-3xl md:text-4xl font-semibold text-brown-deep mt-1 mb-4">
                    {breed.nameKr}
                  </h2>
                  <div className="gold-divider mx-0 mb-6" />

                  <p className="korean-text text-brown-light text-sm sm:text-base leading-relaxed mb-6">
                    {breed.description}
                  </p>

                  {/* Traits */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {breed.traits.map((trait) => (
                      <span
                        key={trait}
                        className="px-3 py-1.5 rounded-full bg-rose-gold/10 text-rose-gold text-xs font-medium"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-4 p-4 sm:p-5 bg-white rounded-2xl border border-rose-gold/10">
                    <div className="text-center">
                      <p className="text-xs text-brown-light/60 mb-1">크기</p>
                      <p className="font-semibold text-brown-deep text-sm">{breed.size}</p>
                    </div>
                    <div className="text-center border-x border-rose-gold/10">
                      <p className="text-xs text-brown-light/60 mb-1">체중</p>
                      <p className="font-semibold text-brown-deep text-sm">{breed.weight}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-brown-light/60 mb-1">수명</p>
                      <p className="font-semibold text-brown-deep text-sm">{breed.lifespan}</p>
                    </div>
                  </div>

                  <Link
                    href="tel:01023957347"
                    className="mt-6 btn-primary inline-flex"
                    style={{ minHeight: 48 }}
                  >
                    분양 문의하기
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
