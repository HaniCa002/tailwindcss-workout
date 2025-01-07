/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        myc : {
          blu1 : "#4DA1A9",
          blu2 : "#79D7BE",
          light1 : "#F6F4F0",
          bgcol : "#2E5077"
        }
      },
      screens : {
        "3xs" : "320px"
      }
    },
  },
  plugins: [],
}

