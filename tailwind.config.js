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
        "secondary" : '#1d3557',
        'white-smoke': '#f5f3f4',
        'blue' : '#3f37c9',
        'light-blue':'#219ebc',
        'bg-color': '#bbbbf9'
      },
      width:{
        'width100p': '100%',
        'width90p': '90%',
        'width780p' : '780px'
      },
      borderWidth:{
        'border-1px': '1px'
      },
      height:{

        'height85%': '85%',
        'height5%': '5%',
        'height15%': '15%',
        'height95%': '95%',
      }
    },
  },
  plugins: [],
}
