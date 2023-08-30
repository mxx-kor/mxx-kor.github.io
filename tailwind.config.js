/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gray: "rgb(107 114 128)",
        brown: "rgb(120 53 15)",
        orange: "rgb(249 115 22)",
        yellow: "rgb(253 224 71)",
        green: "rgb(22 163 74)",
        blue: "rgb(37 99 235)",
        purple: "rgb(139 92 246)",
        pink: "rgb(219 39 119)",
        red: "rgb(220 38 38)",
      },
    },
    fontFamily: {
      sans: ["var(--font-sans)"],
      spoqa: ["var(--font-spoqa)"],
    },
  },
  plugins: [],
};
