/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        body:    ['var(--font-dm)',   'sans-serif'],
      },
      colors: {
        forge: {
          dark:   '#080C14',
          mid:    '#0D1421',
          amber:  '#F5A623',
          border: 'rgba(255,255,255,0.07)',
        },
      },
      keyframes: {
        revealUp: {
          '0%':   { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.2' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.4' },
        },
        strikeWidth: {
          '0%':   { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        revealUp:   'revealUp 0.7s cubic-bezier(0.16,1,0.3,1) both',
        fadeUp:     'fadeUp 0.6s ease both',
        marquee:    'marquee 30s linear infinite',
        blink:      'blink 1.6s ease infinite',
        pulse:      'pulse 2s ease infinite',
        strike:     'strikeWidth 0.45s ease forwards',
      },
    },
  },
  plugins: [],
};
