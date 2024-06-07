/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        'half': '50%',
      }
    },
    
    screens: {
      'tn':'200px',
      'sm': '400px',
      //640 => @media (min-width: 640px) { ... }

      'md': '640px',
      //768 => @media (min-width: 768px) { ... }

      'lg': '900px',
      //1024 => @media (min-width: 1024px) { ... }

      'xl': '1164px',
      //1280 => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      //1536 => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}