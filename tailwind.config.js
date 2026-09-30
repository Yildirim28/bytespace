/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        logo: ['"Clash Display"', 'Poppins', 'ui-sans-serif', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#003BE2',
          'blue-dark': '#0030B8',
          lime: '#D4FB20',
          'lime-500': '#CBFC01',
          'lime-soft': '#E8FA8C',
          violet: '#7F30F7',
          mindaro: '#C1E338',
        },
        ink: '#242528',
        muted: '#82868E',
        chip: '#F5F5F6',
        shuttle: {
          50: '#F5F5F6',
          100: '#E5E6E8',
          200: '#CED0D3',
          300: '#ABAEB5',
          400: '#82868E',
          700: '#4B4C53',
          900: '#3A3B3F',
          950: '#242528',
        },
        vulcan: '#040819',
      },
      boxShadow: {
        card: '0 14px 34px -18px rgba(15, 23, 42, 0.28)',
        float: '0 22px 45px -18px rgba(15, 23, 42, 0.30)',
        pill: '0 6px 18px -8px rgba(15, 23, 42, 0.28)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      maxWidth: {
        shell: '1220px',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        floaty: 'floaty 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
