module.exports = {
  purge: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/components/**/*.{html,js,jsx,ts,tsx}', 
  './src/pages/**/*.{html,js,jsx,ts,tsx}', 
'./src/components/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ["Garamond", "serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
}                     