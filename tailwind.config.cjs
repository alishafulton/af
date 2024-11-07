module.exports = {
  purge: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/components/**/*.{html,js,jsx,ts,tsx}', 
  './src/pages/**/*.{html,js,jsx,ts,tsx}', 
'./src/components/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '500': '500px'
      },
      letterSpacing: {
        tightest: '-0.1em',
      },
      fontSize: {
        '2xs': '0.5rem',
        'xs': '0.625rem',
        'sm': '0.75rem'
      },
      fontFamily: {
        serif: ["Garamond", "serif"],
        sans: ["SFDisplay", "sans"],
        mono: ["Andale", "mono"],
        fancy: ["Inter", "fancy"],
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
      white: '#FAFAFA',
    },},
  corePlugins: []
}
}                     