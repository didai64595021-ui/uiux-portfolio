"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const rotatingWords = ["성과", "전환", "매출", "성장", "신뢰"];

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let animationFrame: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };
    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);
  return count;
}

// Particle system for background
function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      hue: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.3 + 0.1,
        hue: Math.random() * 40 + 120, // green hue range
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 50%, ${p.opacity})`;
        ctx.fill();

        // Draw connections
        particles.forEach((p2, j) => {
          if (i === j) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `hsla(145, 70%, 50%, ${0.06 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const years = useCountUp(5, 2000, isVisible);
  const clients = useCountUp(500, 2500, isVisible);
  const agencies = useCountUp(100, 2000, isVisible);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Particle Background */}
      <Particles />

      {/* Abstract gradient blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary-300/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-100/10 rounded-full blur-3xl animate-pulse-soft" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,200,83,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,83,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-custom relative z-10 pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-200/50">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-sm font-medium text-primary-700">
                5년차 실행사 출신의 기술자가 직접 운영합니다
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-center mb-8"
          >
            <h1 className="heading-1 korean-text text-gray-900 mb-4">
              <span className="block">영업사원이 아닌</span>
              <span className="block mt-2 sm:mt-3">
                <span className="text-gradient">기술자</span>가 만드는
              </span>
              <span className="block mt-2 sm:mt-3">
                진짜{" "}
                <span className="relative inline-block min-w-[100px] sm:min-w-[140px]">
                  <span
                    key={wordIndex}
                    className="inline-block text-gradient animate-fade-up"
                  >
                    {rotatingWords[wordIndex]}
                  </span>
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-10 korean-subtitle"
          >
            불가능한 건 거절합니다. 상위노출은 수단일 뿐, 진짜 목표는
            <br className="hidden sm:block" />
            클라이언트의 매출 성장입니다.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 sm:mb-20"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-primary-500 text-white rounded-2xl text-base sm:text-lg font-bold hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 text-center group"
            >
              <span className="flex items-center justify-center gap-2">
                무료 진단 요청하기
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link
              href="/portfolio"
              className="w-full sm:w-auto px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-2xl text-base sm:text-lg font-semibold hover:border-primary-300 hover:text-primary-600 hover:bg-primary-50/50 transition-all duration-300 text-center"
            >
              성과 사례 보기
            </Link>
          </motion.div>

          {/* Stats Counter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: years, suffix: "년+", label: "실행사 운영 경험", prefix: "" },
              { value: clients, suffix: "+", label: "함께한 클라이언트", prefix: "" },
              { value: agencies, suffix: "+", label: "대행사 대행 실적", prefix: "" },
            ].map((stat, i) => (
              <div
                key={i}
                className="relative text-center p-4 sm:p-6 rounded-2xl glass-card group hover:shadow-lg transition-all duration-300"
              >
                <div className="font-outfit font-bold text-3xl sm:text-4xl md:text-5xl text-primary-600 mb-1 sm:mb-2">
                  {stat.prefix}
                  {stat.value}
                  <span className="text-primary-400">{stat.suffix}</span>
                </div>
                <div className="text-xs sm:text-sm text-gray-500 font-medium korean-text">
                  {stat.label}
                </div>
                {/* Decorative line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-400 rounded-full group-hover:w-12 transition-all duration-500" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-400 font-medium tracking-wider">SCROLL</span>
        <div className="w-5 h-8 rounded-full border-2 border-gray-300 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-primary-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
