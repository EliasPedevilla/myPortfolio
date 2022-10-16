/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
      },
      colors: {
        transparent: 'transparent',
        black: '#050505',
        darkGrey: '#181818',
        white: '#FCFCFC'
      },
      textColor: {
        black: '#050505',
        darkGrey: '#181818',
        white: '#FCFCFC'
      },
      accentColor: {
        brightGreen: '#36E1C3'
      }
    },
    plugins: []
  }
}
