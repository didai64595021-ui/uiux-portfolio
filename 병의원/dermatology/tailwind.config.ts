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
        primary: "#C48B6C",
        "primary-dark": "#A67355",
        "primary-light": "#D4A88A",
        background: "#FAF8F6",
        foreground: "#2D2926",
        secondary: "#8C7B6F",
        accent: "#E8D5C4",
        muted: "#F0ECE8",
        dark: "#1A1714",
      },
      fontFamily: {
        sans: ["var(--font-pretendard)", "Pretendard", "sans-serif"],
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
