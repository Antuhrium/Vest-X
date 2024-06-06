/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      igraSans: ['"Igra-Sans", sans-serif'],
      milligram: ['"Milligram", sans-serif'],
      nunito: ['"Nunito Sans", sans-serif'],
    },
    colors: {
      black: "#0F0F0F",
      dark: "#151515",
      darkGray: "#1C1C1C",
      gray: "#9C9C9C",
      white: "#FFFFFF",
    },
    container: {
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {},
  },
  plugins: [],
};
