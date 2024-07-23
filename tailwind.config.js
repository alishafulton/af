module.exports = {
  purge: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/components/**/*.{html,js,jsx,ts,tsx}', 
  './src/pages/**/*.{html,js,jsx,ts,tsx}', 
'./src/components/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
