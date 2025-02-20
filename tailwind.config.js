const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
        pt: ["PT Serif", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        celeste: "#3A89BE",
        azul: "#143F74",
        amarillo: "#D3992D",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
