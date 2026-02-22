"use client";

import { testimonials } from "@/data/content";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-3.5 h-3.5 text-neon"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="flex-shrink-0 w-[320px] sm:w-[380px] glass-card p-5 sm:p-6 mx-3">
      <Stars count={testimonial.rating} />
      <p className="text-sm text-gray-300 korean-text mt-3 mb-4 leading-relaxed">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-3 border-t border-charcoal-border">
        <div className="w-9 h-9 rounded-full bg-neon/10 border border-neon/20 flex items-center justify-center">
          <span className="text-xs font-grotesk font-bold text-neon">
            {testimonial.name[0]}
          </span>
        </div>
        <div>
          <div className="text-sm font-semibold text-white">
            {testimonial.name}
          </div>
          <div className="text-[11px] text-gray-500">{testimonial.company}</div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialTicker() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-dark" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <span className="inline-block font-mono text-xs text-neon/60 tracking-widest uppercase mb-4">
            // Testimonials
          </span>
          <h2 className="section-title text-white mb-4">
            고객이 말하는{" "}
            <span className="gradient-neon-text text-glow">온다</span>
          </h2>
        </div>

        {/* Ticker Row 1 */}
        <div className="relative mb-4">
          <div className="flex animate-ticker">
            {doubled.map((t, i) => (
              <TestimonialCard key={`r1-${i}`} testimonial={t} />
            ))}
          </div>
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />
        </div>

        {/* Ticker Row 2 (reversed) */}
        <div className="relative">
          <div
            className="flex animate-ticker"
            style={{ animationDirection: "reverse", animationDuration: "35s" }}
          >
            {[...doubled].reverse().map((t, i) => (
              <TestimonialCard key={`r2-${i}`} testimonial={t} />
            ))}
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
