import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customgrey: {
          light:"#D0D0D0",
          medium:"#4E4A4A",
          dark:"#272727"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
