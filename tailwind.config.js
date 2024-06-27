/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          red: "hsl(0, 100%, 66%)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          lightGrayishViolet: "hsl(270, 3%, 87%)",
          darkGrayishViolet: "hsl(279, 6%, 55%)",
          veryDarkViolet: "hsl(278, 68%, 11%)",
        },
      },
      screens: {
        xs: "360px"
      },
    },
  },
  plugins: [],
};
