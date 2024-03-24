/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app.vue", "./pages/**/*.{vue,js}", "./components/**/*.{vue,js}"],
  darkMode: "class",

  theme: {
    extend: {
      screen: {
        xs: "200px",
      },
      fontFamily: {
        arial: ["arial", "nunito", "sans-serif"],
      },
      fontSize: {
        xxs: "10px",
      },
      colors: {
        accent: "#ffdf00",
        alternativeAccent: "#FAEB7B",
        white: {
          bright: "#fdfdfd",
          dim: "#f0f0f0",
        },
        dim: {
          50: "#5F99F7",
          100: "#5F99F7",
          200: "#38444d",
          300: "#202e3a",
          400: "#253341",
          500: "#5F99F7",
          600: "#5F99F7",
          700: "#192734",
          800: "#162d40",
          900: "#15202b",
        },
      },
    },
  },
  plugins: [],
};
