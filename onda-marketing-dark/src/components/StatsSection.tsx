"use client";

import { useState, useEffect, useRef } from "react";
import { stats } from "@/data/content";

function useInView(ref: React.RefObject<HTMLElement | null>, threshold = 0.3) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return inView;
}

function AnimatedNumber({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      if (step >= steps) {
        setCurrent(target);
        clearInterval(timer);
      } else {
        const easeOut = 1 - Math.pow(1 - step / steps, 3);
        setCurrent(Math.floor(target * easeOut));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="tabular-nums">
      {current}
      {suffix}
    </span>
  );
}

function MiniChart({ inView }: { inView: boolean }) {
  const bars = [35, 45, 30, 60, 55, 75, 65, 85, 70, 95, 80, 100];

  return (
    <div className="flex items-end gap-1 h-12">
      {bars.map((h, i) => (
        <div
          key={i}
          className="w-2 rounded-t transition-all duration-700 ease-out"
          style={{
            height: inView ? `${h}%` : "4px",
            backgroundColor: `rgba(0, 255, 136, ${0.2 + (h / 100) * 0.6})`,
            transitionDelay: `${i * 80}ms`,
            boxShadow:
              h > 70 ? "0 0 8px rgba(0, 255, 136, 0.4)" : "none",
          }}
        />
      ))}
    </div>
  );
}

function PulseRing() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neon/10"
          style={{
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
            animation: `pulse-ring 3s ease-in-out ${i * 0.5}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative section-padding overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-dark-section" />
      <div className="absolute inset-0 dot-bg" />
      <PulseRing />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="inline-block font-mono text-xs text-neon/60 tracking-widest uppercase mb-4">
            // Live Dashboard
          </span>
          <h2 className="section-title text-white mb-4">
            숫자로 말하는{" "}
            <span className="gradient-neon-text text-glow">성과</span>
          </h2>
          <p className="section-subtitle mx-auto">
            허황된 약속 대신, 실제 데이터로 증명합니다
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="neon-card group"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="neon-card-inner text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold text-neon text-glow mb-2">
                  <AnimatedNumber
                    target={stat.number}
                    suffix={stat.suffix}
                    inView={inView}
                  />
                </div>
                <div className="text-sm sm:text-base font-semibold text-white mb-1 korean-text">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500 korean-text">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live chart area */}
        <div className="neon-card max-w-3xl mx-auto">
          <div className="neon-card-inner">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-neon animate-pulse" />
                <span className="font-mono text-sm text-gray-400">
                  Campaign Performance
                </span>
              </div>
              <span className="font-mono text-xs text-neon/60">
                Last 12 months
              </span>
            </div>
            <MiniChart inView={inView} />
            <div className="flex justify-between mt-3 text-[10px] text-gray-600 font-mono">
              <span>JAN</span>
              <span>MAR</span>
              <span>MAY</span>
              <span>JUL</span>
              <span>SEP</span>
              <span>NOV</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
