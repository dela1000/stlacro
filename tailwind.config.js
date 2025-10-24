/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      minHeight: (theme) => ({
        ...theme('spacing'),
      }),
      height: {
        100: '25rem',
        120: '30rem',
        140: '35rem',
        160: '40rem',
        175: '43.75rem',
        200: '50rem',
      },
      width: {
        100: '25rem',
        120: '30rem',
        140: '35rem',
        160: '40rem',
        175: '43.75rem',
        200: '50rem',
      },
    },
  },
  plugins: [],
};
