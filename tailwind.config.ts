import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "deep-purple": {
          50: "#f3e8ff",
          100: "#e9d5ff",
          200: "#d8b4fe",
          300: "#c084fc",
          400: "#a855f7",
          500: "#9333ea",
          600: "#7e22ce",
          700: "#6b21a8",
          800: "#581c87",
          900: "#1a0b2e",
          950: "#130722",
        },
        "warm-gold": {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        "saffron": {
          50: "#fff8f1",
          100: "#ffeedf",
          200: "#ffdbbd",
          300: "#ffc192",
          400: "#ffa15c",
          500: "#ff9933",
          600: "#f0710a",
          700: "#c8570a",
          800: "#9e4310",
          900: "#7f3a11",
        },
        "sandalwood": {
          50: "#fcfaf7",
          100: "#f7f3eb",
          200: "#efe5d3",
          300: "#e2d1b5",
          400: "#d2b48c",
          500: "#bf9e6f",
          600: "#a98357",
          700: "#8c6846",
          800: "#74563d",
          900: "#5e4733",
        },
        "forest": {
          50: "#f4f7f4",
          100: "#e4ece4",
          200: "#c9dbc9",
          300: "#a3c0a2",
          400: "#769f75",
          500: "#548252",
          600: "#3f673e",
          700: "#345233",
          800: "#2e4a29",
          900: "#1a2e19",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-noto-sans-devanagari)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(to bottom right, #1a0b2e, #4c1d95)",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [flowbite.plugin()],
} satisfies Config;
