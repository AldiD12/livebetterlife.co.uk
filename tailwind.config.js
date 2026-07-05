/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        serif: ['Outfit', 'sans-serif'],
      },
      colors: {
        cream: '#F7F3EC',
        sand: '#EFE8DC',
        ivory: '#FDFBF7',
        ink: {
          DEFAULT: '#1B1A17',
          soft: '#2A2823',
        },
        stone: '#6E675C',
        line: '#E4DCCF',
        brass: {
          DEFAULT: '#B08D4C',
          deep: '#8A6A32',
          tint: '#EADFC8',
        },
        primary: {
          DEFAULT: '#1B1A17',
          light: '#2A2823',
        },
      },
      borderRadius: {
        card: '20px',
      },
      boxShadow: {
        card: '0 24px 48px -24px rgba(27,26,23,0.22)',
        nav: '0 8px 30px -12px rgba(27,26,23,0.18)',
      },
    },
  },
  plugins: [],
};
