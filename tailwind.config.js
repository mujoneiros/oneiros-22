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
        secondary: '#06101C',
        tertiary: '#3EDCF2',
        primaryWhite: '#FEFEFE',
        accent: '#59EDEA',
        aqua: '#1F6983',
        aqua2: '#1D6071',
        grey1: '#A5C1D1',
        secondaryWhite: '#D9D9D9',
        primaryBlack: '#040713',
      },
      fontSize: {
        '2xs': '.625rem',
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Jost: ['Jost', 'sans-serif'],
        stolzl: ['Stolzl Display', 'sans-serif'],
        freak: ['FREAK Grotesk Next', 'sans-serif'],
      },
      animation: {
        fade: 'fade ease-in-out 0.5s',
      },
      keyframes: {
        fade: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px) translateX(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
