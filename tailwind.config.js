/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
        newsreader: "Newsreader",
        mona: ["Mona"],
        sans: ["Mona", "sans-serif"],
      },
      colors: {
        feather: {
          dark: "#3B3B3F",
          DEFAULT: "#EDEDEF",
        },
      },
    },
  },
  plugins: [],
};
