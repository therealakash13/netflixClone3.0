import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1C1C1E",
        secondary: "#2C2C2E",
        accent: "#E50914",
        "accent-hover": "#FF3D47",
        "text-muted": "#B0B0B0",
        "border-default": "#3A3A3C",
      },
    },
  },
  plugins: [],
};

export default config;
