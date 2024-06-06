/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      igraSans: ['"Igra-Sans", sans-serif'],
      milligram: ['"Milligram", sans-serif'],
      nunito: ['"Nunito Sans", sans-serif']
    },
    container: {
      screens: {
        '2xl': '1280px',
      }
    },
    extend: {},
  },
  plugins: [],
};
