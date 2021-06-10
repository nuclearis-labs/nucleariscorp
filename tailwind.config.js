module.exports = {
  purge: ["public/**/*.html", "src/**/*.tsx"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'gable': '#2C4344',
        'pelorous': '#1A9AB8',
        'zircon': '#E7EBEC',
        'submarine': '#89969C'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
