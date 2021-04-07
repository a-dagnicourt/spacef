/* eslint-disable quote-props */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Oswald', 'ui-sans-serif', 'system-ui'],
      body: ['Poppins', 'ui-sans-serif', 'system-ui'],
    },
    zIndex: {
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '100': 100,
      top: 999,
      auto: 'auto',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
