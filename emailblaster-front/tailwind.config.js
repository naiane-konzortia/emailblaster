/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    '.src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      custom1: ["Custom-1", "sans-serif"],
      vision: ["Vision", "sans-serif"],
      visionRegular: ["Vision Regular", "sans-serif"],
    },
    minWidth: {
      '1/2': '50%',
    },
    colors: {
      "primary": '#BDBDBD',
    },
    placeholderColor: {
      'primary': '#BDBDBD',
    },
    extend: {},
  },
  corePlugins: {
    container: false
  },
  plugins: []};