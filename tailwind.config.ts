import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta premium: Rose Gold / Champagne / Blush
        primary: {
          50: '#fdf8f6',
          100: '#f9ece6',
          200: '#f5ddd3',
          300: '#ecc5b3',
          400: '#dfa68a',
          500: '#d08c6a',
          600: '#c17555',
          700: '#a15f47',
          800: '#854f3e',
          900: '#6d4336',
          950: '#3a211a',
        },
        // Colores de acento - Rosa suave
        accent: {
          50: '#fef7f7',
          100: '#fdeef0',
          200: '#fcdde3',
          300: '#f9c2cc',
          400: '#f49aab',
          500: '#eb7089',
          600: '#d54d6a',
          700: '#b33b55',
          800: '#96344a',
          900: '#7f3043',
          950: '#461620',
        },
        // Neutros cálidos premium
        neutral: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        },
        // Champagne/Gold para acentos
        gold: {
          50: '#fdfaf3',
          100: '#faf2de',
          200: '#f4e3bc',
          300: '#eccf8f',
          400: '#e3b560',
          500: '#da9a3a',
          600: '#c67f2e',
          700: '#a56328',
          800: '#864f28',
          900: '#6e4225',
          950: '#3e2111',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-lg': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-sm': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-premium': 'linear-gradient(135deg, #fdf8f6 0%, #f9ece6 50%, #fef7f7 100%)',
        'gradient-hero': 'linear-gradient(180deg, #fdf8f6 0%, #ffffff 100%)',
        'gradient-card': 'linear-gradient(180deg, #ffffff 0%, #fafaf9 100%)',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 40px -15px rgba(0, 0, 0, 0.1)',
        'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 40px rgba(208, 140, 106, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
