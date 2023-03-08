/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./packages/renderer/index.html",
    "./packages/renderer/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#424549",
          200: "#36393e",
          300: "#282b30",
          400: "#1e2124",
        },
      },
    },
  },
  plugins: [],
};
