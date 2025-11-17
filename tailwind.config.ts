import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        spring: {
          primary: "#FF69B4",
          secondary: "#90EE90",
          accent: "#FFD700",
          background: "#F0FFF0",
          text: "#2D5016",
        },
        summer: {
          primary: "#FF7F50",
          secondary: "#4169E1",
          accent: "#FF8C00",
          background: "#F0F8FF",
          text: "#1B4B82",
        },
        autumn: {
          primary: "#DC143C",
          secondary: "#D2691E",
          accent: "#B8860B",
          background: "#FFF8DC",
          text: "#8B4513",
        },
        winter: {
          primary: "#9370DB",
          secondary: "#87CEEB",
          accent: "#F5F5F5",
          background: "#F0F8FF",
          text: "#2F2F4F",
        },
      },
    },
  },
  plugins: [],
};

export default config;
