const { color } = require("@mui/system");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
        rose: colors.rose,
        indigo: colors.indigo,
        cyan: colors.cyan,
        teal: colors.teal,
        green: colors.green,
        orange: colors.orange,
        red: colors.red,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
