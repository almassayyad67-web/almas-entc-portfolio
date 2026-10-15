/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        fur: {
          50: '#FFFDF9',
          100: '#FFF9F2',
          200: '#FFF1E3',
          300: '#FDE5CC',
          400: '#FCD2A5',
          500: '#F9B775',
        },
        paw: {
          50: '#FFF0F5',
          100: '#FFE2EC',
          200: '#FFC8DA',
          300: '#FFA3BF',
          400: '#FF8DA1',
          500: '#FF6B8B',
          600: '#E6496D',
          700: '#C22D50',
        },
        ginger: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
        },
        cateye: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
        },
        whisker: {
          50: '#F6F5F4',
          100: '#E7E5E4',
          200: '#D6D3D1',
          300: '#A8A29E',
          400: '#78716C',
          500: '#57534E',
          600: '#44403C',
          700: '#292524',
          800: '#1C1917',
          900: '#0C0A09',
        },
        cozyblue: {
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          500: '#0EA5E9',
        },
        yarn: {
          100: '#F3E8FF',
          200: '#E9D5FF',
          300: '#D8B4FE',
          500: '#A855F7',
        }
      },
      fontFamily: {
        display: ['"Fredoka"', '"Outfit"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        handwritten: ['"Sniglet"', 'cursive'],
      },
      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2.25rem',
        'pill': '9999px',
      },
      boxShadow: {
        'paw': '0 10px 25px -5px rgba(255, 107, 139, 0.2), 0 8px 10px -6px rgba(41, 37, 36, 0.05)',
        'purr': '0 15px 35px -5px rgba(251, 146, 60, 0.25), 0 0 15px rgba(255, 255, 255, 0.8) inset',
        'cozy': '0 12px 30px -4px rgba(41, 37, 36, 0.08), 0 4px 6px -2px rgba(41, 37, 36, 0.04)',
        'bubbly': '0 18px 40px -10px rgba(41, 37, 36, 0.12), 0 0 0 2px rgba(255, 255, 255, 0.8)',
      },
      animation: {
        'bounce-soft': 'bounceSoft 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'tail-wag': 'tailWag 1.8s ease-in-out infinite',
      },
      keyframes: {
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1.5deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
        tailWag: {
          '0%, 100%': { transform: 'rotate(-12deg)' },
          '50%': { transform: 'rotate(12deg)' },
        }
      }
    },
  },
  plugins: [],
}
