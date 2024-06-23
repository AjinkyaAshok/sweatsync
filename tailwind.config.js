/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        'caveat': ['Caveat', 'cursive'],
      },
      fontWeight: {
        '400': '400',
        '500': '500',
        '600': '600',
        '700': '700',
      }
    },
  },
  plugins: [],
}