/** @type {import('tailwindcss').Config} */
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
        t_error: '#D86161',
      },
      borderColor: {
        'primary-border': '#1597E4',
      },
    },
  },
  plugins: [],
};
