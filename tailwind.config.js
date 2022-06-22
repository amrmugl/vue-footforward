/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['BebasNeue-Regular', 'sans-serif'],
        supremeLight: ['Supreme-Light', 'sans-serif'],
        supreme: ['Supreme-Regular', 'sans-serif'],
        supremeMedium: ['Supreme-Medium', 'sans-serif'],
        supremeBold: ['Supreme-Bold', 'sans-serif'],
      },
      colors: {
        appBlue: {
          extraLight: '#CDDEFF',
          light: '#83ABFF',
          DEFAULT: '#18233A',
        },
        appGreen: {
          light: '#B8CC8E',
          DEFAULT: '#719A1D',
        },
        appBlack: '#313131',
      },
    },
  },
  plugins: [],
}
