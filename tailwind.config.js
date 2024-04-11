/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
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
    },
    extend: {
      boxShadow: {
        wide: '80px 110px 77px 25px rgba(38, 95, 89, 0.075);',
      },
    },
  },
  plugins: [],
};
