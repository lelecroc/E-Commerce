/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        serif: ['Lora', 'serif'],
        sand: ['Inter', 'sans-serif']

      },
      fontSize: {
        'custom-xs': '14px',
        'desktop-sm': '16px',
        'desktop-md': '18px',
        'desktop-lg': '24px',
        'desktop-xl': '30px',
        'desktop-2xl': '40px'
      },
      colors: {
        'light-blue': '#79C5EF',
        'violet' : '#a1a0df',
        'fuschia' : '#CE88F0',
        'fake-white' : '#f9f9f9',
        'icon-gray' : '#d1d8e0',
        'gray-p' : '#686b6b',
        'dark-gray': '#3b3b3b'
      },
      backgroundImage: {
        'gradient-135': 'linear-gradient(135deg, var(--tw-gradient-stops))'
      },
  },
  plugins: [

    require('@tailwindcss/typography'),
  ],
}
}


