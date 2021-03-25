module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Oswald', 'ui-sans-serif', 'system-ui'],
      body: ['Poppins', 'ui-sans-serif', 'system-ui'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
