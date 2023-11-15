/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: { min: "0px", max: "600px" },
        // => @media (max-width: 600px ) { ... }
        md: { min: "600px", max: "900px" },
        // => @media (min-width: 600px and max-width: 900px) { ... }
        lg: { min: "900px" },
        // => @media (min-width: 980px ) { ... }
      },
      colors: {
        primary: "#ff3333",
        secondary: {
          100: "#9dc3ff",
          200: "#5b9aff",
        },
      },
    },
  },
  plugins: [],
};

