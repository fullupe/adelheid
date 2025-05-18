/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        navy: {
          50: '#f0f4f9',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
        },
        gold: {
          50: '#fbf8ef',
          100: '#f6efd8',
          200: '#eed9a5',
          300: '#e6c772',
          400: '#d9b455',
          500: '#c9a227',
          600: '#b18d23',
          700: '#8c701c',
          800: '#6e5816',
          900: '#574412',
        },
        teal: {
          50: '#edfafa',
          100: '#d5f2f2',
          200: '#afecec',
          300: '#7edce2',
          400: '#16bdca',
          500: '#0694a2',
          600: '#047481',
          700: '#036672',
          800: '#05505c',
          900: '#014451',
        },
      },
    },
  },
  plugins: [],
};