/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./public/*.{html, js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'form': 'auto 400px 50px auto',
        'mobileform': 'auto 200px 50px auto'
      },
      backgroundImage: {
        'search': 'url("/assets/search.svg")'
      }
    },
    screens: {
      'phone': '100px'
    }
  },
  plugins: [

  ]
}
