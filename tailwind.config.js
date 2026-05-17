/** @type {import('tailwindcss').Config} */
// TODO: HUMAN REVIEW — OKLCH colour palette must be approved on physical screens before mass-replacement.
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ── MarkProm brand tokens (OKLCH) ──────────────────────────
        'mp-forest': {
          DEFAULT: 'oklch(28% 0.07 145)',
          light:   'oklch(38% 0.07 145)',
          deep:    'oklch(18% 0.05 145)',
        },
        'mp-gold': {
          DEFAULT: 'oklch(72% 0.16 75)',
          muted:   'oklch(80% 0.10 75)',
          dark:    'oklch(58% 0.14 75)',
        },
        'mp-stone': {
          DEFAULT: 'oklch(92% 0.01 90)',
          dark:    'oklch(50% 0.01 90)',
        },
        'mp-cream': 'oklch(97% 0.01 90)',
        'mp-ink':   'oklch(18% 0.02 260)',
        'mp-white': '#ffffff',
      },
      fontFamily: {
        // TODO: HUMAN REVIEW — Display typeface must be approved by a designer.
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans:    ['Manrope', 'system-ui', 'sans-serif'],
        // Keep legacy aliases so any remaining components don't break
        headline: ['"Instrument Serif"', 'Georgia', 'serif'],
        body:     ['Manrope', 'sans-serif'],
        label:    ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },
      boxShadow: {
        // Brand-tinted ambient shadow replaces generic shadow-xl
        'mp-ambient':    '0 8px 40px oklch(28% 0.07 145 / 0.12)',
        'mp-ambient-sm': '0 4px 20px oklch(28% 0.07 145 / 0.08)',
        'mp-ambient-lg': '0 20px 60px oklch(28% 0.07 145 / 0.16)',
        // Legacy alias so existing .ambient-shadow class still works
        ambient:    '0 30px 60px rgba(38, 39, 125, 0.08)',
        'ambient-sm': '0 10px 30px rgba(38,39,125,0.05)',
        'ambient-lg': '0 40px 80px rgba(38,39,125,0.10)',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
