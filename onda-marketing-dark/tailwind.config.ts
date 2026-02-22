import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          DEFAULT: "#00FF88",
          50: "#E6FFF3",
          100: "#B3FFD9",
          200: "#80FFBF",
          300: "#4DFFA6",
          400: "#1AFF8C",
          500: "#00FF88",
          600: "#00CC6D",
          700: "#009952",
          800: "#006637",
          900: "#00331B",
        },
        dark: {
          DEFAULT: "#0A0A0A",
          50: "#1A1A1A",
          100: "#141414",
          200: "#111111",
          300: "#0D0D0D",
          400: "#0A0A0A",
          500: "#070707",
          600: "#050505",
          700: "#030303",
          800: "#020202",
          900: "#000000",
        },
        charcoal: {
          DEFAULT: "#161616",
          light: "#1E1E1E",
          lighter: "#252525",
          border: "#2A2A2A",
        },
      },
      fontFamily: {
        sans: ["Pretendard", "system-ui", "sans-serif"],
        grotesk: ["Space Grotesk", "monospace"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        "glow-pulse": "glow-pulse 2s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
        "ticker": "ticker 30s linear infinite",
        "ticker-fast": "ticker 20s linear infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "typewriter": "typewriter 3s steps(40) forwards",
        "blink": "blink 1s step-end infinite",
        "count-up": "count-up 2s ease-out forwards",
        "scan-line": "scan-line 4s linear infinite",
        "matrix-rain": "matrix-rain 10s linear infinite",
        "border-glow": "border-glow 3s ease-in-out infinite",
        "slide-right": "slide-right 0.5s ease-out forwards",
      },
      keyframes: {
        "glow-pulse": {
          "0%": { boxShadow: "0 0 5px #00FF88, 0 0 10px #00FF8840" },
          "100%": { boxShadow: "0 0 20px #00FF88, 0 0 40px #00FF8860, 0 0 60px #00FF8830" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "ticker": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "typewriter": {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        "blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "count-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "matrix-rain": {
          "0%": { transform: "translateY(-100%)", opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
        "border-glow": {
          "0%, 100%": { borderColor: "#00FF8840" },
          "50%": { borderColor: "#00FF88" },
        },
        "slide-right": {
          "0%": { width: "0%" },
          "100%": { width: "var(--target-width)" },
        },
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(0,255,136,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.03) 1px, transparent 1px)",
        "radial-glow": "radial-gradient(ellipse at center, rgba(0,255,136,0.15) 0%, transparent 70%)",
      },
      backgroundSize: {
        "grid-pattern": "60px 60px",
      },
    },
  },
  plugins: [],
};

export default config;
