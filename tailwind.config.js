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
    extend: {},
  },
  plugins: [],
}

