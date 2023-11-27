/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: { min: "0px", max: "300px" },
        // => @media (min-width: 0px and max-width: 300px) { ... }
        sm: { min: "300px", max: "600px" },
        // => @media (min-width: 300px and max-width: 600px) { ... }
        md: { min: "600px", max: "900px" },
        // => @media (min-width: 600px and max-width: 800px) { ... }
        lg: { min: "900px", max: "1200px" },
        // => @media (min-width:900px and max-width: 1200px ) { ... }
        xl: { min: "1200px"},
        // => @media (min-width:1200px ) { ... }
      },
      colors: {
        primary: "#ff3333",
        secondary: {
          100: "#9dc3ff",
          200: "#5b9aff",
        },
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        auto: "auto 1fr",

        // Complex site-specific column configuration
        footer: "200px minmax(900px, 1fr) 100px",
      },
    },
  },
  plugins: [],
};

