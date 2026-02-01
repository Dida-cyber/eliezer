/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: '#2563eb',
        primaryDark: '#1d4ed8',
        accent: '#7c3aed',
        accentLight: '#a78bfa',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(37, 99, 235, 0.15)',
        'glow-lg': '0 0 60px rgba(124, 58, 237, 0.2)',
        'card': '0 4px 24px -4px rgba(0, 0, 0, 0.08), 0 8px 48px -8px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 48px -12px rgba(0, 0, 0, 0.12), 0 12px 32px -8px rgba(0, 0, 0, 0.08)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-via) 50%, var(--tw-gradient-to) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.8' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}

