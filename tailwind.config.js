const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-104rem)' },
        },
      },  
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
    }
  }
  },
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer"
  ],
}