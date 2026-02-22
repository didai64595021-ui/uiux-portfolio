'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { reviews } from '@/data/reviews';

export default function ReviewStories() {
  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-mint/10 text-mint text-sm font-medium mb-4">
            Family Stories
          </span>
          <h2 className="korean-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-sage mb-4">
            분양 가족 이야기
          </h2>
          <p className="korean-text text-sage/60 text-base sm:text-lg">
            시그니처펍스와 함께한 행복한 순간들
          </p>
        </motion.div>

        {/* Review Cards */}
        <div className="space-y-6 sm:space-y-8">
          {reviews.slice(0, 3).map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-sage-50 rounded-3xl overflow-hidden ${
                i % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}
            >
              <div className={`flex flex-col lg:flex-row ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Before/After images */}
                <div className="lg:w-1/2 flex">
                  <div className="w-1/2 relative aspect-[3/4] sm:aspect-square">
                    <Image
                      src={review.beforeImage}
                      alt={`${review.puppyName} before`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-sage/80 backdrop-blur-md text-white text-xs rounded-lg font-medium">
                      분양 당시
                    </div>
                  </div>
                  <div className="w-1/2 relative aspect-[3/4] sm:aspect-square">
                    <Image
                      src={review.afterImage}
                      alt={`${review.puppyName} after`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-mint/80 backdrop-blur-md text-white text-xs rounded-lg font-medium">
                      지금 모습
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <blockquote className="korean-text text-sage text-base sm:text-lg leading-relaxed mb-6">
                    &ldquo;{review.content}&rdquo;
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-mint to-emerald-500 flex items-center justify-center text-white font-bold text-sm">
                      {review.author[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-sage text-sm">{review.author}</div>
                      <div className="text-xs text-sage/50">
                        {review.breed} · {review.puppyName} · {review.adoptedDate}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 px-8 py-4 bg-sage-50 text-sage rounded-2xl font-semibold hover:bg-mint/10 hover:text-mint transition-all"
          >
            더 많은 후기 보기
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
