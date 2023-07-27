/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',
      purple: '#635FC7',
      'light-purple': '#A8A4FF',
      black: {
        100: '#000112',
        200: '#20212C',
        300: '#2b2c37',
        400: '#3e3f4e',
      },
      grey: {
        100: '#828fa3',
        200: '#e4ebfa',
        300: '#f4f7fd',
      },
      red: {
        100: '#ea5555',
        200: '#ff9898'
      },
    },
    extend: {
      borderRadius: {
        '20px': '20px'
      },
      spacing: {
        '10px': '10px',
        '30px': '30px',
        '50px': '50px',
        '25': '100px',
        '30': '120px',
        '65': '260px',
        '70': '280px',
        '75': '300px'
      },
      fontSize: {
        small: ['12px', 'normal'],
        tiny: ['13px', '23px'],
        middle: ['18px', 'normal'],
      },
      zIndex: {
        '1': '1',
        '1000': '1000'
      }
    },
  },
  plugins: [],
}

