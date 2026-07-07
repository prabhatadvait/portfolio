import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8fafc",
        foreground: "#0c1120",
        muted: "#4b5563",
        primary: {
          DEFAULT: "#4338ca",
          cyan: "#6366f1",
        },
        accent: {
          purple: "#7c3aed",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.13) 0%, transparent 55%), radial-gradient(ellipse at 80% 50%, rgba(124,58,237,0.08) 0%, transparent 45%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(124,58,237,0.04) 100%)",
      },
      boxShadow: {
        glow: "0 0 35px rgba(99, 102, 241, 0.40)",
        "glow-purple": "0 0 30px rgba(124, 58, 237, 0.35)",
        glass: "0 8px 32px rgba(99, 102, 241, 0.08)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
