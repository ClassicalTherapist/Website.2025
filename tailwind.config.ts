import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        halo: {
          50: '#f5faf8',
          100: '#e1f4ee',
          200: '#c8eadd',
          300: '#a4d9c6',
          400: '#75c0a8',
          500: '#4ba78c',
          600: '#36896f',
          700: '#2c6c59',
          800: '#254f44',
          900: '#1f3d36',
        },
      },
    },
  },
  plugins: [],
};

export default config;