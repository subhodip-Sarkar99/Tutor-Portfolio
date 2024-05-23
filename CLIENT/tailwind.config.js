import daisyui from 'daisyui';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Montserrat:['Montserrat','sans-serif'],
        Roboto:['Roboto','sans-serif'],
      },
      backgroundImage: {
        'timeline': "url('/images/bg-pattern.png')",
      },
      colors:{
        'navbar':'#0A6CAB',
      }
    },
  },
  plugins: ["prettier-plugin-tailwindcss",daisyui],
}