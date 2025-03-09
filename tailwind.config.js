/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Marcellus', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1a1a1a',
          light: '#2a2a2a',
        },
      },
    },
  },
  plugins: [],
};