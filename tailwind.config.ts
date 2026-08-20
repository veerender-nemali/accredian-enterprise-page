import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#15151B",
        muted: "#676774",
        paper: "#F7F6F2",
        violet: "#5B3FC5",
        violetDark: "#3D258F",
        lime: "#D8F26B",
        line: "#E6E4DF"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        display: ["var(--font-space-grotesk)", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(21,21,27,.08)"
      }
    }
  },
  plugins: []
};

export default config;
