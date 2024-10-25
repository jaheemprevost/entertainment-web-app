/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary_red: '#FC4747',
        primary_white: '#FFFFFF',
        midnight_black: '#10141E',
        dark_blue: '#161D2F',
        light_grey: '#5A698F',
      },
      fontFamily: {
        sans: ['var(--font-outfit)'],
      },
    },
  },
  plugins: [],
};
