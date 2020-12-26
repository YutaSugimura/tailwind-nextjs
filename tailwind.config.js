module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    fontFamily: {
      sans: ['Noto Sans JP', 'Roboto', 'Arial', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
