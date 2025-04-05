/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(var(--primary-color) / 0.1)',
          100: 'rgb(var(--primary-color) / 0.2)',
          200: 'rgb(var(--primary-color) / 0.3)',
          300: 'rgb(var(--primary-color) / 0.4)',
          400: 'rgb(var(--primary-color) / 0.5)',
          500: 'rgb(var(--primary-color) / 0.6)',
          600: 'rgb(var(--primary-color) / 0.7)',
          700: 'rgb(var(--primary-color) / 0.8)',
          800: 'rgb(var(--primary-color) / 0.9)',
          900: 'rgb(var(--primary-color))',
        },
        secondary: {
          50: 'rgb(var(--secondary-color) / 0.1)',
          100: 'rgb(var(--secondary-color) / 0.2)',
          200: 'rgb(var(--secondary-color) / 0.3)',
          300: 'rgb(var(--secondary-color) / 0.4)',
          400: 'rgb(var(--secondary-color) / 0.5)',
          500: 'rgb(var(--secondary-color) / 0.6)',
          600: 'rgb(var(--secondary-color) / 0.7)',
          700: 'rgb(var(--secondary-color) / 0.8)',
          800: 'rgb(var(--secondary-color) / 0.9)',
          900: 'rgb(var(--secondary-color))',
        },
        accent: {
          50: 'rgb(var(--accent-color) / 0.1)',
          100: 'rgb(var(--accent-color) / 0.2)',
          200: 'rgb(var(--accent-color) / 0.3)',
          300: 'rgb(var(--accent-color) / 0.4)',
          400: 'rgb(var(--accent-color) / 0.5)',
          500: 'rgb(var(--accent-color) / 0.6)',
          600: 'rgb(var(--accent-color) / 0.7)',
          700: 'rgb(var(--accent-color) / 0.8)',
          800: 'rgb(var(--accent-color) / 0.9)',
          900: 'rgb(var(--accent-color))',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: 'inherit',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                color: 'rgb(var(--primary-color))',
              },
            },
            strong: {
              color: 'inherit',
            },
            code: {
              color: 'inherit',
            },
            h1: {
              color: 'inherit',
            },
            h2: {
              color: 'inherit',
            },
            h3: {
              color: 'inherit',
            },
            h4: {
              color: 'inherit',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 