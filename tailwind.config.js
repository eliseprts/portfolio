/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'white': '#FAFAFA',
        'yankeesblue': '#1E2336',
        'gunmetal': '#272D42',
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
