

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '210px'
      },
      fontFamily: {
        Kumbh_sans: "Kumbh Sans, sans-serif",
        Helvetica: "Helvetica",
      },
    },
    colors: {
      darkBlue: "hsl(209, 23%, 22%)",
      veryDarkBackground: " hsl(207, 26%, 17%)",
      veryDarkBlueText: "hsl(200, 15%, 8%)",
      darkGray: " hsl(0, 0%, 52%)",
      veryLightGray: "hsl(0, 0%, 98%)",
      white: " hsl(0, 0%, 100%)",
    },
  },
  plugins: [],
};

// https://fonts.google.com/specimen/Nunito+Sans