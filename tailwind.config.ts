import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        dark: "#4E4E4E",
      },
      backgroundImage: {
        "about-pic": "url('src/assets/about-photo-min.png')",
      },
      keyframes: {
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
      transitionTimingFunction: {
        "cubic-bezier": "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
      },
      animation: {
        fadeIn: "fadeIn 0.1s ease-in-out",
        rotate: "rotate 15s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
