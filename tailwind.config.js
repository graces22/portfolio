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
        scrollUp: 'scrollUp 8s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-104rem)' },
        },
        scrollUp: {
          '0%': { transform: 'translateY(20%)' },
          '20%': { transform: 'translateY(0%)' },
          '40%': { transform: 'translateY(-20%)' },
          '60%': { transform: 'translateY(-40%)' },
          '80%': { transform: 'translateY(-60%)' },
          '100%': { transform: 'translateY(-80%)' },
        },
      },
        
    fontFamily: {
      'sans': ['Oracle-Regular', 'sans-serif'],
    }
  }
  },
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer"
  ],
}