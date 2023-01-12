/** @type {import('tailwindcss').Config} */
const customTheme = require('./src/lib/theme/theme.cjs');
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    ...customTheme,
  },
  plugins: [],
};
