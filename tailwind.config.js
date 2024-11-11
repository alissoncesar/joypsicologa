/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Libre Baskerville', 'sans-serif'],
        },
        colors:{
            sepia : '#4A4A43' ,
        }
      }
    },
    plugins: [],
  }