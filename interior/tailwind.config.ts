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
        charcoal: { DEFAULT: "#2D2D2D", light: "#444444", dark: "#1A1A1A" },
        caramel: { DEFAULT: "#C1956B", light: "#D4AD87", dark: "#A67B52" },
        sage: { DEFAULT: "#8FBC8F", light: "#A8D4A8", dark: "#6B9B6B" },
        warm: "#F9F7F4",
        text: "#2D2D2D",
      },
      fontFamily: {
        sans: ["Pretendard", "system-ui", "sans-serif"],
        display: ["DM Serif Display", "Georgia", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.7s ease-out forwards",
        "slide-up": "slideUp 0.7s ease-out forwards",
        "reveal": "reveal 1s ease-out forwards",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: { "0%": { opacity: "0", transform: "translateY(30px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        reveal: { "0%": { clipPath: "inset(0 100% 0 0)" }, "100%": { clipPath: "inset(0 0 0 0)" } },
      },
    },
  },
  plugins: [],
};
export default config;
