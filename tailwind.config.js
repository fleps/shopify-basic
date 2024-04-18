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
    },
  },
  plugins: [],
}

