/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(220 20% 96%)',
        accent: 'hsl(180 50% 50%)',
        primary: 'hsl(240 83% 60%)',
        surface: 'hsl(220 20% 99%)',
        foreground: 'hsl(220 15% 15%)',
        'purple-start': 'hsl(258 100% 70%)',
        'purple-end': 'hsl(240 83% 60%)',
        'dark-bg': 'hsl(225 24% 12%)',
        'dark-surface': 'hsl(225 20% 16%)',
        'dark-accent': 'hsl(180 50% 50%)'
      },
      borderRadius: {
        'lg': '12px',
        'md': '8px',
        'sm': '4px',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
      },
      boxShadow: {
        'card': '0 4px 12px hsla(220, 15%, 15%, 0.08)',
        'card-dark': '0 4px 12px hsla(220, 15%, 5%, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 200ms ease-in-out',
        'slide-up': 'slideUp 300ms ease-in-out',
        'slide-down': 'slideDown 300ms ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
