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
        sans: ["SFDisplay", "sans"],
        mono: ["Andale", "mono"],
        },
    colors: {
      transparent: 'transparent',
      black: '#131514',
      tan: '#FAFAFA',
      pink: '#FF5666',
      orange: '#FF785A',
      green: '#41A039',
      blue: '#335FCF',
      purple: '#BEA7E5',
    },},
  variants: {
    extend: {},
  },
  plugins: [],
}
}                     