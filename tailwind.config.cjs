/** @type {import('tailwindcss').Config} */
const req = require('require-esm-in-cjs');
const customTheme = req('./src/lib/theme/index.js');

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: customTheme,
  plugins: [],
};
