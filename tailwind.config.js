const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js',
    './layout/*.{liquid,json}',
    './sections/*.{liquid,json}',
    './snippets/*.{liquid,json}',
    './templates/**/*.{liquid,json}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Yantramanav', ...defaultTheme.fontFamily.sans],
        serif: ['Kreon', ...defaultTheme.fontFamily.serif],
        'yanone': ['Yanone Kaffeesatz', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        'top-down': {
          '0%': { top: '-50%' },
          '50%': { top: '140px' },
          '100%': { top: '90px' }
        }
      },
      animation: {
        'top-down': 'top-down 200ms ease-out 500ms forwards',
      }
    },
  },
  plugins: [],
}

