
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        "background-alt": "hsl(var(--background-alt))",
        "background-alt2": "hsl(var(--background-alt2))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        neon: {
          DEFAULT: "hsl(var(--neon))",
          muted: "hsl(var(--neon-muted))"
        },
        input: {
          bg: "hsl(var(--input-bg))",
          border: "hsl(var(--input-border))",
          focus: "hsl(var(--input-focus))",
          text: "hsl(var(--input-text))"
        },
        dropdown: {
          bg: "hsl(var(--dropdown-bg))",
          hover: "hsl(var(--dropdown-hover))"
        },
        card: {
          DEFAULT: "rgba(var(--card-rgb), 0.05)",
          hover: "rgba(var(--card-rgb), 0.1)",
        },
        glass: {
          DEFAULT: "rgba(var(--card-rgb), 0.05)",
          hover: "rgba(var(--card-rgb), 0.08)",
        }
      },
      fontFamily: {
        sans: ["SF Pro Display", "system-ui", "sans-serif"],
        body: ["SF Pro Text", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
        "slide-in": "slide-in 0.5s ease-out forwards",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
