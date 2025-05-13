/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "block-accent": "#F58431",
      "foreground": "#303B70",
      "accent": "#0091D4",
      "block": "#CEEFFF",
      "background": "#FFFDF8",
      "primary": "#60CCF2",
      "error": "#B54E36"
    },
  },
  plugins: [],
}