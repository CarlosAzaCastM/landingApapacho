/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        apapacho: {
          primary: '#AF8F62',
          'primary-light': '#C4A87E',
          'primary-dark': '#8F7147',
          bg: '#FDFBF7',
          'bg-alt': '#F5F0E6',
          surface: '#FAFAFA',
          text: '#333333',
          'text-muted': '#5C5549',
          dark: '#1F1B16',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Lato"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        warm: '0 10px 30px -5px rgba(175, 143, 98, 0.18)',
        'warm-lg': '0 20px 45px -10px rgba(175, 143, 98, 0.28)',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        apapacho: {
          primary: '#AF8F62',
          'primary-content': '#FFFFFF',
          secondary: '#8F7147',
          'secondary-content': '#FFFFFF',
          accent: '#C4A87E',
          'accent-content': '#1F1B16',
          neutral: '#333333',
          'neutral-content': '#FDFBF7',
          'base-100': '#FDFBF7',
          'base-200': '#F5F0E6',
          'base-300': '#E8DFD1',
          'base-content': '#333333',
          info: '#AF8F62',
          success: '#25D366',
          warning: '#D97706',
          error: '#DC2626',
        },
      },
    ],
    darkTheme: 'apapacho',
  },
};
