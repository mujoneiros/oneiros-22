/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#33A2CB',
        secondary: '#142657',
        tertiary: '#298295',
        primaryWhite: '#FEFEFE',
        accent: '#34ACD9',
        aqua: '#1F6983',
        aqua2: '#1D6071',
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
