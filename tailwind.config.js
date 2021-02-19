module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'blue': '#39b6fb',
      'navy': '#253e4b',
      'white': '#ffffff',
      'pink': '#f8bbda',
      'black': '#000000',
      'light-blue': '#deeffc'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
