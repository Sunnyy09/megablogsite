/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico", "sans-serif"],
        playpen: ["Playpen Sans", "sans-serif"],
        fredoka: ["Fredoka", "sans-serif"],
        roboto: ["Roboto Mono", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
