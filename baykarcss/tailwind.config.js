/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#78350F',
        textPrimary: '#0F172A',
        lightYellow: '#FFFCEE',
        yellow: '#FDE68A',
      },
    },
  },
  plugins: [],
}