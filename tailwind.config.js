/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'primary-color': '#2F2F2F',
        'secondary-color': '#D9D9D9',
        'dark-color': '#202020',
        'yellow': '#E9F555',
      }
    },
  },
  plugins: [
    typography
  ],
}
