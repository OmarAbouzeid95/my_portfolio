import type { Config } from "tailwindcss";

const config = {
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
      backgroundColor: {
        dark: "#292828",
        lightDark: "#4E4E4E",
        lightWhite: "#FFFFF0",
      },
      borderColor: {
        lightWhite: "#FFFFF0",
        lightDark: "#4E4E4E",
      },
      textColor: {
        lightWhite: "#FFFFF0",
      },
      ringColor: {
        lightWhite: "#FFFFF0",
      },
      ringOffsetColor: {
        transparent: "#292828",
      },
      boxShadowColor: {
        lightWhite: "#FFFFF0",
      },
      boxShadow: {
        all: "0px 0px 10px",
      },
      backgroundImage: {
        "about-pic": "url('src/assets/about-photo-min.png')",
      },
      transitionTimingFunction: {
        "cubic-bezier": "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "50%": { opacity: "0.7" },
          "100%": { opacity: "1" },
        },
        rotate: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.1s ease-in-out",
        rotate: "rotate 15s linear infinite",
      },
      transitionDuration: {
        "1250": "1250ms",
        "600": "600ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
