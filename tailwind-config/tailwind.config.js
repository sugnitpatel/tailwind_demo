/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../HTML/**/*.{html,js,php}",
    "../assets/js/ **/*.{html,js,php}",
    "../assets/plugins/ **/*.{html,js,php}",
    "../includes/*.{html,js,php}",
    "../*.{html,js,php}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: 'Merriweather, serif',
        ultra: 'Ultra, serif',
       
      },
      colors: {
        "white": "#ffffff",
        "yellow-lighter": "#f9f5d8",
        "yellow-light": "#f2ebb1",
        "yellow-normal": "#eacc4d",
        "yellow-dark": "#d0ad46",
        "yellow-darker": "#866a3f",
        "brown": "#603b1c",
        "black": "#090905",
        "pich": "#dec5a0",
        "darkest-grey": "#333333",
        "accent": "#b35f06"
      },

      screens: {
        '2xl-max': { 'max': '1535px' },
        'xl-max': { 'max': '1279px' },
        'lg-max': { 'max': '1023px' },
        'md-max': { 'max': '767px' },
        'sm-max': { 'max': '639px' },
        'xs-max': { 'max': '567px' },
      },
      important: true,
      transitionProperty: {
        'height': 'height'
      },
     
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
        lower_roman: 'lower-roman',
      }
    },
  },
 
  plugins: [
    require("@tailwindcss/forms"),
    require('autoprefixer'),
  ],

}

