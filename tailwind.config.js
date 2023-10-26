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
      spacing: {
        2.1: '0.542rem',
        3.8: '0.92rem',
        9.2: '2.54rem',
        21: '5.4rem',
        29: '6.924rem',
        30: '7.4rem',
        74: '14.06rem',
      },
      margin: {
        3.8: '0.92rem',
        7.4: '1.82rem',
        9.2: '2.54rem',
        21: '5.4rem',
        29: '6.924rem',
        30: '7.4rem',
        74: '14.06rem',
      },
      padding: {
        3.8: '0.92rem',
        7.4: '1.82rem',
        9.2: '2.54rem',
        21: '5.4rem',
        29: '6.924rem',
        30: '7.4rem',
        74: '14.06rem',
      },
      gap: {
        0.92: '0.21rem',
        1.1: '0.3rem',
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
        3: ['3rem', {lineHeight: '3.8rem'}],
        3.8: ['3.8rem', {lineHeight: '4.4rem'}],
        4: ['4rem', {lineHeight: '4.25rem'}], 
        7.4: ['5.42rem', {lineHeight: '5.844rem'}],
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xxl': '2000',
        // => @media (min-width: 1280px) { ... }
      },
      transitionProperty: {
        border: 'border',
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