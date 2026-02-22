'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { reviews } from '@/data/reviews';

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-12 bg-sage relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,214,143,0.1),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-mint/15 text-mint text-sm font-medium mb-4">
              Family Stories
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 korean-text">
              분양 가족 이야기
            </h1>
            <p className="text-white/50 text-base sm:text-lg korean-text">
              시그니처펍스와 함께 행복해진 가족들의 이야기
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-10 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-3 gap-4 mb-12"
          >
            {[
              { value: '4.9', label: '평균 만족도', sub: '/ 5.0' },
              { value: '2,800+', label: '분양 가족', sub: '' },
              { value: '98%', label: '재추천율', sub: '' },
            ].map((stat) => (
              <div key={stat.label} className="bg-sage-50 rounded-2xl p-4 sm:p-6 text-center">
                <div className="text-xl sm:text-2xl font-bold gradient-text">
                  {stat.value}
                  <span className="text-sm text-sage/30 ml-1">{stat.sub}</span>
                </div>
                <div className="text-xs sm:text-sm text-sage/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Review list */}
          <div className="space-y-8">
            {reviews.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-sage-50 rounded-3xl overflow-hidden"
              >
                <div className={`flex flex-col lg:flex-row ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Images */}
                  <div className="lg:w-1/2 flex">
                    <div className="w-1/2 relative aspect-[3/4] sm:aspect-square">
                      <Image src={review.beforeImage} alt="Before" fill className="object-cover" />
                      <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-sage/80 backdrop-blur-md text-white text-xs rounded-lg font-medium">
                        분양 당시
                      </div>
                    </div>
                    <div className="w-1/2 relative aspect-[3/4] sm:aspect-square">
                      <Image src={review.afterImage} alt="After" fill className="object-cover" />
                      <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-mint/80 backdrop-blur-md text-white text-xs rounded-lg font-medium">
                        지금 모습
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(review.rating)].map((_, j) => (
                        <svg key={j} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <blockquote className="korean-text text-sage text-base sm:text-lg leading-relaxed mb-6">
                      &ldquo;{review.content}&rdquo;
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-mint to-emerald-500 flex items-center justify-center text-white font-bold">
                        {review.author[0]}
                      </div>
                      <div>
                        <div className="font-semibold text-sage">{review.author}</div>
                        <div className="text-sm text-sage/50">
                          {review.breed} &middot; {review.puppyName} &middot; {review.location}
                        </div>
                        <div className="text-xs text-sage/30 mt-0.5">{review.adoptedDate} 분양</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
