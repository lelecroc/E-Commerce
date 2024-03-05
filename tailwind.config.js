/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{

      },
      fontSize: {
        'desktop-xs': '14px',
        'desktop-sm': '16px',
        'desktop-md': '18px',
        'desktop-lg': '24px',
        'desktop-xl': '30px',
        'desktop-2xl': '40px'
      }
    },
  },
  plugins: [],
}

