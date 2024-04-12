/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        farbe1: {
          50: '#FDFEE8',
          100: '#FCFFC2',
          200: '#FEFF89',
          300: '#FFF942',
          400: '#FDEC12',
          500: '#CCA502',
          600: '#A37605',
          700: '#A17707',
          800: '#855D0E',
          900: '#714C12',
          950: '#432805',
        },
        farbe2: {
          50: '#FEF7EE',
          100: '#FAE5C7',
          200: '#F7D8B1',
          300: '#F2BC7F',
          400: '#EB974C',
          500: '#E67929',
          600: '#D8611E',
          700: '#B34A1B',
          800: '#8F3C1D',
          900: '#73321B',
          950: '#3E180C',
        },
        farbe3: {
          50: '#F3FAF8',
          100: '#D2EFE8',
          200: '#AEE1D6',
          300: '#7DCBBD',
          400: '#52AFA0',
          500: '#389487',
          600: '#2B766D',
          700: '#265F59',
          800: '#224D49',
          900: '#20413E',
          950: '#0E2524',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      boxShadow: {
        wide: '80px 110px 77px 25px rgba(38, 95, 89, 0.075);',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
