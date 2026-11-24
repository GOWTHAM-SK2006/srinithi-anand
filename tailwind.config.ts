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
        background: '#070707',
        'bg-primary': '#070707',
        'bg-secondary': '#0d0d0d',
        'bg-tertiary': '#121212',
        'bg-card': '#141414',
        'bg-card-hover': '#1a1a1a',
        'gold-champagne': '#DFBA74',
        'gold-metallic': '#E5C07A',
        'gold-muted': '#B68A36',
        'gold-light': '#FCE7B2',
        'gold-bright': '#FFF3CD',
        'gold-deep': '#9A7127',
        'text-primary': '#FFFFFF',
        'text-secondary': '#B8B4AC',
        'border-gold': 'rgba(223, 186, 116, 0.28)',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'gold-shimmer': 'goldShimmer 6s linear infinite',
        'float-slow': 'floatSlow 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        goldShimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      boxShadow: {
        'gold-glow': '0 0 25px -4px rgba(223, 186, 116, 0.35)',
        'gold-glow-lg': '0 0 45px -6px rgba(223, 186, 116, 0.45)',
        'gold-glow-button': '0 0 30px rgba(223, 186, 116, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.6)',
      },
    },
  },
  plugins: [],
};

export default config;
