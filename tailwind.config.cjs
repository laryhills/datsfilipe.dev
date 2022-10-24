/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mplus: ['"M PLUS Rounded 1c"', 'sans-serif'],
    },
    extend: {
    },
  },
  plugins: [],
}
