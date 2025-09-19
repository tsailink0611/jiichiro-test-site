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
        brand: '#404B15',
        accent: '#F5F3F0',
        cream: '#FBF9F6',
      },
      fontFamily: {
        'serif-jp': ['Noto Serif JP', 'serif'],
        'sans-jp': ['Noto Sans JP', 'sans-serif'],
      },
      aspectRatio: {
        '13/7': '13 / 7',
      },
    },
  },
  plugins: [],
}