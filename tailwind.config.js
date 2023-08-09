/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./components/**/*.{html,js,jsx}",
    "./pages/**/*.{html,js,jsx}",
    "./App/**/*.{html,js,jsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        satoshi: ['Satoshi','sans-serif'],
        inter:['Inter','sans-serif']
      }
    },
  },
  plugins: [],
}