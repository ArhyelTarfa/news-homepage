/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        modal : "rgba(0, 0, 0, 0.5)",
        Softorange: "hsl(35, 77%, 62%)",
        Softred: "hsl(5, 85%, 63%)",
        Grayishblue: "hsl(233, 8%, 79%)",
        Darkgrayishblue: "hsl(236, 13%, 42%)",
        Verydarkblue: "hsl(240, 100%, 5%)",
        Offwhite: "hsl(36, 100%, 99%)"
      },
      fontFamily:{
        "inter": ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
