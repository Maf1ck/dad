/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        maroon: '#800000',
        beige: '#F5E9DA',
      },
      boxShadow: {
        soft: '0 10px 25px -10px rgba(0,0,0,0.2)',
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  plugins: [],
}




