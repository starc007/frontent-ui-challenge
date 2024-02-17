/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          700: "#26252A",
          800: "#141417",
          900: "#201F23",
        },
        secondary: {
          300: "#9681FF",
          400: "#764FFF",
          500: "#652BFC",
        },
        dark: "#17171A",
      },
    },
  },
  plugins: [],
};
