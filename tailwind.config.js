/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'white': '#FAFAFA',
        'outerspace': '#313642',
        'arsenic': '#383E4E',
        'orange': '#FA6B51',
        'pink': '#FF637F'
      },
      fontFamily: {
        'montserrat': ['"Montserrat"', 'sans-serif'],
        'oswald': ['"Oswald"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
