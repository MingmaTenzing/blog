/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{html,ts}",

  ],
  theme: {
    extend: {
      colors: {
        'purple-text': "#6941C6",
        'darblue-text': '#026AA2',
        'pink-text': '#C11574',
        'gray-text':'#667085'

      }
    },
  },
  plugins: [],
}

