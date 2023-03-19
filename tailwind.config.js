/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/common/**/*.{js,ts,jsx,tsx}",
    "./src/screens/**/*.{js,ts,jsx,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EA7C69",
        secondary: "#9288E0",
        white: "#FFFFFF",
        baseDark: "#252836",
        baseDark2: "#1F1D2B",
        textLight: "#ABBBC2",
        bgGrey: "#2D303E",
      },
      borderRadius: {
        "full-ios": {
          ios: "9999px",
        },
      },
    },
  },
  plugins: [],
};
