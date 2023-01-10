/** @type {import('tailwindcss').Config} */
const customTheme = require('./src/lib/theme/index.cjs');
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: customTheme,
  plugins: [],
};
