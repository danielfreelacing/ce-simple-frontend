/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        bordergray: '#949494',
        voilet: '#9747FF',
        black: '#000000',
        white: '#FFFFFF',
        gray: '#949494',
        dakgray: '#393939',
        lightgray: '#D6D6D6',
        green: '#38CD97',
        purple: '#F2E9FF',
        bglightGray: '#F2F2F2',

      },

    },

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '992px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1921px',
      // => @media (min-width: 1536px) { ... }
      '4xl': '2560px',
      // => @media (min-width: 1536px) { ... }

      'small': { 'raw': '(max-height: 550px)' },

      'medium': { 'raw': '(max-height: 700px)' }

    },


  },
  plugins: [require("daisyui")],
}


