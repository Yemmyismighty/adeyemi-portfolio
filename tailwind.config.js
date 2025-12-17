/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg))",
        surface: "rgb(var(--surface))",
        primary: "rgb(var(--primary))",
        accent: "rgb(var(--accent))",
        text: "rgb(var(--text))",
        muted: "rgb(var(--muted))",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-space)"],
      },
    },
  },
  plugins: [],
};
