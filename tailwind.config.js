/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
        'script': ['Great Vibes', 'cursive'],
      },
      colors: {
        'gold': '#D4AF37',
        'cream': '#FFF8DC',
      }
    },
  },
  plugins: [],
}