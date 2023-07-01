/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  container: {
    padding: '2rem',
    center: true
  },
  theme: {
    extend: {
      container: {
        padding: '4rem',
        center: true
      },
      colors: {
        bk: '#111',
        gr: '#1a1a1a',
        dgn: '#1A4C3F',
        gn: '#26735E',

        lgn: '#319B7E'
      },
      transitionDuration: {
        default: '400ms'
      },
      transitionDuration: {
        default: '600ms'
      },
      transitionTimingFunction: {
        default: 'ease-in-out'
      }
    }
  },
  plugins: []
}
