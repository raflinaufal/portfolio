// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    // screens: {
    //   sm: "640px",
    //   md: "768px",
    //   lg: "1024px",
    //   xl: "1280px",
    //   "2xl": "1536px",
    // },
    extend: {
      colors: {
        dark: {
          background: "#121212",
          primary: "#1E88E5",
          secondary: "#BB86FC",
          accent: "#03DAC6",
          "text-primary": "#FFFFFF",
          "text-secondary": "#B0BEC5",
        },
        light: {
          background: "#FFFFFF",
          primary: "#1E88E5",
          secondary: "#6200EA",
          accent: "#03DAC6",
          "text-primary": "#000000",
          "text-secondary": "#757575",
        },
      },
    },
  },

  plugins: [],
};

export default config;
