/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1597E4',
        c_white: '#FFFFFF',
        c_border: '#E6E6E6',
        t_white: '#FAFAFA',
        t_dark: '#212121',
        t_grey: '#7A7A7A',
        t_dark_grey:"#212427",
        t_light_grey:"#646464",
        t_error: '#D86161',
        r_border: '#D8D8D8'
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [],
};
