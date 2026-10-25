/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        apapacho: {
          // Paleta primaria oficial
          arena: 'rgb(var(--rgb-arena-suave) / <alpha-value>)',
          adobe: 'rgb(var(--rgb-adobe) / <alpha-value>)',
          ladrillo: 'rgb(var(--rgb-ladrillo) / <alpha-value>)',
          // Paleta secundaria oficial
          oro: 'rgb(var(--rgb-oro) / <alpha-value>)',
          mayolico: 'rgb(var(--rgb-verde-mayolico) / <alpha-value>)',
          profundo: 'rgb(var(--rgb-gris-profundo) / <alpha-value>)',
          blanco: 'rgb(var(--rgb-blanco-puro) / <alpha-value>)',
          // Tokens semánticos centralizados
          bg: 'rgb(var(--rgb-arena-suave) / <alpha-value>)',
          surface: 'rgb(var(--rgb-blanco-puro) / <alpha-value>)',
          primary: 'rgb(var(--rgb-adobe) / <alpha-value>)',
          accent: 'rgb(var(--rgb-ladrillo) / <alpha-value>)',
          gold: 'rgb(var(--rgb-oro) / <alpha-value>)',
          contrast: 'rgb(var(--rgb-verde-mayolico) / <alpha-value>)',
          text: 'rgb(var(--rgb-gris-profundo) / <alpha-value>)',
          dark: 'rgb(var(--rgb-gris-profundo) / <alpha-value>)',
        },
      },
      fontFamily: {
        serif: ['"EB Garamond"', 'Georgia', 'serif'],
        sans: ['"EB Garamond 08"', '"EB Garamond"', 'Georgia', 'serif'],
        sc: ['"EB Garamond SC"', '"EB Garamond AllSC"', '"EB Garamond"', 'Georgia', 'serif'],
      },
      boxShadow: {
        warm: '0 12px 28px -8px rgba(33, 33, 33, 0.10), 0 4px 12px -4px rgba(33, 33, 33, 0.06)',
        'warm-lg': '0 20px 44px -12px rgba(33, 33, 33, 0.22), 0 8px 20px -6px rgba(33, 33, 33, 0.12)',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        apapacho: {
          primary: '#A6824C',
          'primary-content': '#212121',
          secondary: '#487274',
          'secondary-content': '#FFFFFF',
          accent: '#D7846A',
          'accent-content': '#212121',
          neutral: '#212121',
          'neutral-content': '#FEF2E7',
          'base-100': '#FEF2E7',
          'base-200': '#FFFFFF',
          'base-300': '#C29E67',
          'base-content': '#212121',
          info: '#487274',
          success: '#487274',
          warning: '#C29E67',
          error: '#D7846A',
        },
      },
    ],
    darkTheme: 'apapacho',
  },
};
