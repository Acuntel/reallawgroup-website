import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B2D4F",
        secondary: "#866A2D",
        accent: "#2A5F8F",
        background: "#FAFAF8",
        dark: "#0F1923",
        text: "#1A1A1A",
        "text-muted": "#5A6475",
        success: "#2D7A4F",
        border: "#E5E7EB",
        "light-gold": "#F5F0E6",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
