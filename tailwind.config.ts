import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#080d18',
          900: '#0b1220',
          800: '#111a2e',
          700: '#1a2540',
          600: '#243354',
        },
        gold: {
          300: '#f1d27a',
          400: '#e3bb4e',
          500: '#d4af37',
          600: '#b08f22',
        },
        mint: {
          400: '#34d399',
          500: '#10b981',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};

export default config;
