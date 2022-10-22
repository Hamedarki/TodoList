/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    fontFamily:{
      'Lato': ['lato']
    },
   
    extend: {
      
      colors:{
        'primary': '#faedcd',
        'secondary' : '#0b114d',
        'white-smoke': '#f5f3f4',
        'blue' : '#3f37c9',
        'light-blue':'#204ca5',
        'bg-color': '#92B4EC'
      },
      width:{
        'width100p': '100%',
        'width90p': '90%',
        'width700p' : '700px'
      },
      borderWidth:{
        'border-1px': '1px'
      },
      height:{
        'height100vh': '100vh',
        'height95vh': '95vh',
        'height90vh': '90vh',
        'height10vh': '10vh',
        'height5vh': '5vh',
        'height85%': '85%',
        'height85vh': '85vh',
        'height5%': '5%',
        'height15%': '15%',
        'height15vh': '15vh',
        'height95%': '95%',
      }
    },
  },
  plugins: [],
}
