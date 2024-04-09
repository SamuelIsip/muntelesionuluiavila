module.exports = {
  content: [
    "./*.html",
    "./js/**/*.js",
    "./node_modules/flowbite/**/*.js",
    "./lib/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-out 0.2s 1 forwards",
      },
      fontFamily: {
        mono: ["Monotype Corsiva", "serif"],
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'sans-serif'],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};