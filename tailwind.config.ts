import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg:         '#FAF8F4',
          surface:    '#F2EFE9',
          'surface-2':'#EAE6DE',
          text:       '#1A1916',
          muted:      '#7A7470',
          faint:      '#B0AAA4',
          accent:     '#C07A3A',
          'accent-h': '#9E6128',
          border:     '#E2DDD6',
          'border-d': '#C8C2BB',
          dark:       '#111009',
          sand:       '#D4C5A9',
        },
      },
      fontFamily: {
        heading: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem',  { lineHeight: '1rem', letterSpacing: '0.1em' }],
        xs:    ['0.6875rem', { lineHeight: '1rem' }],
        sm:    ['0.8125rem', { lineHeight: '1.25rem' }],
        base:  ['1rem',      { lineHeight: '1.6rem' }],
        lg:    ['1.125rem',  { lineHeight: '1.75rem' }],
        xl:    ['1.35rem',   { lineHeight: '1.75rem' }],
        '2xl': ['1.6rem',    { lineHeight: '2rem' }],
        '3xl': ['2rem',      { lineHeight: '2.4rem' }],
        '4xl': ['2.5rem',    { lineHeight: '2.75rem' }],
        '5xl': ['3.5rem',    { lineHeight: '1.1' }],
        '6xl': ['4.5rem',    { lineHeight: '1.05' }],
        '7xl': ['6rem',      { lineHeight: '1.0' }],
      },
      letterSpacing: {
        widest: '0.2em',
        wider:  '0.12em',
        wide:   '0.08em',
      },
      maxWidth: {
        content: '1200px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee:  'marquee 28s linear infinite',
        'fade-up':'fade-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}

export default config
