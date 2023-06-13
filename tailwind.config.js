/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    fontWeight: {
      light: 300,
      base: 400,
      semibold: 600,
      bold: 700,
    },
    colors: {
      accent: {
        DEFAULT: "#F9CC11",
        content: "#030303"
      },
      primary: "#FFFFFF",
      neutral: {
        300: "#1D1C1C",
        200: "#696969",
        100: "#D9D9D9"
      },
      background: "#000000",
    },
    borderRadius: {
      DEFAULT: "10px",
      lg: "20px",
    }
  },
  plugins: [],
}