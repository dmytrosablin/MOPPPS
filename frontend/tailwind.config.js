/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'form': 'auto 400px 50px auto',
        'mobileform': 'auto 200px 50px auto'
      },
      backgroundImage: {
        'search': 'url("/src/assets/search.svg")'
      }
    },
    screens: {
      'phone': '100px',
      'pc': '1200px'
    }
  },
  plugins: [],
}

