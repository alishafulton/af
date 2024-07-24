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
        sans: ["Lexend", "sans"],
        },
      },
    colors: {
      transparent: 'transparent',
      black: '#131514',
      tan: '#E5E3D8',
      pink: '#FF5666',
      orange: '#FF785A',
      green: '#0A8754',
      blue: '#335FCF',
    },
  variants: {
    extend: {},
  },
  plugins: [],
}
}                     