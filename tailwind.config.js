module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'blue': '#39b6fb',
      'navy': '#253e4b',
      'white': '#ffffff',
      'pink': '#f8bbda',
      'black': '#080E11',
      'light-blue': '#deeffc'
    },
    fontFamily: {
      title: ['Spartan', 'sans-serif'],
      body: ['Open\\ Sans', 'sans-serif']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
