/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8167A0',
        secondary: '#C3D452',
      },
      fontFamily: {
        primary: ['Agatho', 'serif'],
        secondary: ['Gill Sans', 'sans-serif'],
      },
      fontSize: {
        h1: ['48px', { lineHeight: '1.2' }],
        h2: ['36px', { lineHeight: '1.3' }],
        h3: ['30px', { lineHeight: '1.3' }],
        h4: ['24px', { lineHeight: '1.3' }],
        h5: ['20px', { lineHeight: '1.3' }],
        body: ['16px', { lineHeight: '1.6' }],
        bodyLg: ['18px', { lineHeight: '1.5' }],
        caption: ['12px', { lineHeight: '1.5' }],
      },
    },
  },
  plugins: [],
}
