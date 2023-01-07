/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: ['class'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'goyangg': 'wiggle 1s linear infinite',
        'ghost': 'ghost 1s ease-out',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)'},
          '50%': { transform: 'rotate(3deg)' },
        },
        ghost: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      spacing: {
        13: '3.25rem'
      },
      fontFamily: {
        raleway: 'Raleway',
      },
      screens: {
        'tscreen': '846px',
      },
      gridTemplateRows: {
        'test': 'repeat(5, minmax(0, 260px))',
      },
    },
  },
  plugins: [],
}