/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'md': {'min': '0px', 'max': '780px'},
        // => @media (min-width: 401px and max-width: 799px) { ... }
        'lg': {'min': '780px'},
        // => @media (min-width: 780px ) { ... }
      },
      colors:{
        primary:'#ff3333',
        secondary: {
          100 : "#9dc3ff",
          200 : "#5b9aff"
        }
      }
    },
  },
  plugins: [],
}

