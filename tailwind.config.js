/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'green': '#8BD74B',
        'default': '#183B59',
      },
    },
    screens: {
      '2xl': {
        'max': '1600px'
      },
      // => @media (max-width: 1535px) { ... }

      'xl': {
        'max': '1400px'
      },
      // => @media (max-width: 1279px) { ... }

      'lg': {
        'max': '1200px'
      },
      // => @media (max-width: 1023px) { ... }

      'md': {
        'max': '960px'
      },
      // => @media (max-width: 767px) { ... }

      'sm': {
        'max': '640px'
      },
      'xsm': {
        'max': '500px'
      },
    },
  },
  plugins: [],
}