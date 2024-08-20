/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./*.{html,js}",
    "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  colors: {
    transparent: 'transparent',
    current: 'currentColor',
    black: colors.black,
    red: colors.red,
    white: colors.white,
    gray: colors.gray,
    emerald: colors.emerald,
    indigo: colors.indigo,
    yellow: colors.yellow,
  },
}