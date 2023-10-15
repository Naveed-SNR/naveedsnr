/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      margin: {
        9.2: '2.54rem',
        21: '5.4rem',
        29: '6.924rem',
        30: '7.4rem',
        74: '14.06rem',
      },
      height: {
        
        83: '21rem',
      },
      width: {
        
        83: '21rem',
      },
      
      colors: {
        primary: {
          100: '#00eaff',
          200: '#00caff',
          },
        secondary:{
         100: '#008599',
         200: '#0294b5',
        }
      }, 
      fontSize: {
        3: '3rem',
        type: '3.8rem'
      },
      opacity: {
        83: '.83',
      },
      zIndex: {
        11: '11',
        21: '21',
      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        circle: 'circle',
        roman: 'upper-roman',
      }
    },
  },
  plugins: [],
}