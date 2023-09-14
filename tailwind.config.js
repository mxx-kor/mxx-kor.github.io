/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      sans: ["var(--font-sans)"],
      spoqa: ["var(--font-spoqa)"],
    },
  },
  plugins: [],
};
