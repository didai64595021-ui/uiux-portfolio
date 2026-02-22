"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const terminalLines = [
  { text: "$ onda init --project marketing", delay: 0 },
  { text: "> Analyzing market data...", delay: 800 },
  { text: "> Optimizing keywords... done.", delay: 1600 },
  { text: "> Deploying campaigns...", delay: 2400 },
  { text: '> Status: "상위노출 달성" ✓', delay: 3200 },
  { text: "> ROI: +350% achieved", delay: 4000 },
  { text: "$ _", delay: 4800 },
];

function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "01アイウエオカキクケコONDA마케팅성과";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = Array(Math.floor(columns)).fill(1);

    function draw() {
      if (!ctx || !canvas) return;
      ctx.fillStyle = "rgba(10, 10, 10, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00FF8815";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 50);
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-30 pointer-events-none"
    />
  );
}

function TerminalWindow() {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const timers = terminalLines.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto lg:mx-0">
      <div className="rounded-xl overflow-hidden border border-charcoal-border bg-dark-200/90 backdrop-blur-md shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-charcoal/80 border-b border-charcoal-border">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-3 text-xs text-gray-500 font-mono">
            onda-marketing ~ %
          </span>
        </div>
        {/* Terminal Body */}
        <div className="p-4 sm:p-6 font-mono text-sm sm:text-base space-y-2 min-h-[240px]">
          {terminalLines.slice(0, visibleLines).map((line, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 animate-fade-in-up ${
                line.text.includes("$")
                  ? "text-neon"
                  : line.text.includes("✓") || line.text.includes("+350%")
                  ? "text-neon text-glow"
                  : "text-gray-400"
              }`}
            >
              <span className="korean-text">{line.text}</span>
              {i === visibleLines - 1 && i === terminalLines.length - 1 && (
                <span className="inline-block w-2 h-5 bg-neon animate-blink ml-1" />
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Glow effect under terminal */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-neon/10 blur-2xl rounded-full" />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-dark">
      {/* Matrix rain background */}
      <MatrixRain />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial-glow opacity-40 pointer-events-none" />

      {/* Scan line */}
      <div className="absolute inset-0 scan-line pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon/20 bg-neon/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
              <span className="font-mono text-xs text-neon tracking-wider">
                GROWTH ENGINE v5.0
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-grotesk leading-[1.1] mb-6">
              <span className="text-white">We</span>{" "}
              <span className="gradient-neon-text text-glow-strong">Hack</span>
              <br />
              <span className="text-white">Growth.</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light mb-3 korean-subtitle">
              실행사 출신의 진짜 마케팅
            </p>
            <p className="text-sm sm:text-base text-gray-500 max-w-lg mx-auto lg:mx-0 korean-body mb-8">
              영업사원이 아닌 5년차 기술자가 직접 운영합니다.
              <br className="hidden sm:block" />
              불가능한 건 솔직히 말하고, 가능한 건 확실히 성과를 냅니다.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/contact" className="neon-button text-center text-base">
                무료 진단 받기
              </Link>
              <Link
                href="/portfolio"
                className="neon-button-outline text-center text-base"
              >
                성과 사례 보기
              </Link>
            </div>

            {/* Mini stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-10 pt-10 border-t border-charcoal-border">
              {[
                { num: "500+", label: "클라이언트" },
                { num: "350%", label: "평균 ROAS" },
                { num: "97%", label: "재계약률" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-xl sm:text-2xl font-grotesk font-bold text-neon text-glow">
                    {s.num}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Terminal */}
          <div className="hidden lg:block">
            <TerminalWindow />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-gray-600 font-mono">scroll</span>
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          className="text-neon/40"
        >
          <rect
            x="1"
            y="1"
            width="14"
            height="22"
            rx="7"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="8" cy="8" r="2" fill="currentColor" className="animate-bounce" />
        </svg>
      </div>
    </section>
  );
}
