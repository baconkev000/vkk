/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors:{
        primary: "#373737",
        secondary: "#F2F2F2",
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}