/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'form': 'auto 400px 50px auto'
      },
      backgroundImage: {
        'search': 'url("/assets/search.svg")'
      }
    },
  },
  plugins: [],
}

