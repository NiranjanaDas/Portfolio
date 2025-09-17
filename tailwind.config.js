/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#ec4899',
        'secondary': '#8b5cf6',
        'accent': '#f59e0b',
        'soft-pink': '#fdf2f8',
        'soft-purple': '#f3e8ff'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'slide-up': 'slideUp 0.3s ease-out forwards'
      },
      keyframes: {
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        slideDown: {
          'from': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        slideUp: {
          'from': {
            opacity: '1',
            transform: 'translateY(0)'
          },
          'to': {
            opacity: '0',
            transform: 'translateY(-10px)'
          }
        }
      }
    },
  },
  plugins: [],
}