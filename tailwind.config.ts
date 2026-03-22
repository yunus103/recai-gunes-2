import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['var(--font-inter)', 'sans-serif'],
  			display: ['var(--font-playfair)', 'serif'],
        script: ['var(--font-script)', 'cursive']
  		},
  		colors: {
  			background: '#0a0a0a',
  			foreground: '#f3f4f6',
        gold: {
          DEFAULT: '#d4af37',
          light: '#f3e5ab',
          dark: '#aa8c2c'
        },
        amber: {
          500: '#f59e0b',
        },
  			card: {
  				DEFAULT: '#111111',
  				foreground: '#f3f4f6'
  			},
  			popover: {
  				DEFAULT: '#111111',
  				foreground: '#f3f4f6'
  			},
  			primary: {
  				DEFAULT: '#d4af37',
  				foreground: '#0a0a0a'
  			},
  			secondary: {
  				DEFAULT: '#1f2937',
  				foreground: '#f3f4f6'
  			},
  			muted: {
  				DEFAULT: '#1f2937',
  				foreground: '#9ca3af'
  			},
  			accent: {
  				DEFAULT: '#1f2937',
  				foreground: '#f3f4f6'
  			},
  			destructive: {
  				DEFAULT: '#7f1d1d',
  				foreground: '#fef2f2'
  			},
  			border: '#1f2937',
  			input: '#1f2937',
  			ring: '#d4af37',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			marquee: {
  				'0%': { transform: 'translateX(0%)' },
  				'100%': { transform: 'translateX(-100%)' }
  			},
        grain: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '10%': { transform: 'translate(-5%,-10%)' },
          '20%': { transform: 'translate(-15%,5%)' },
          '30%': { transform: 'translate(7%,-25%)' },
          '40%': { transform: 'translate(-5%,25%)' },
          '50%': { transform: 'translate(-15%,10%)' },
          '60%': { transform: 'translate(15%,0%)' },
          '70%': { transform: 'translate(0%,15%)' },
          '80%': { transform: 'translate(3%,35%)' },
          '90%': { transform: 'translate(-10%,10%)' },
        }
  		},
  		animation: {
  			marquee: 'marquee 45s linear infinite',
        grain: 'grain 8s steps(10) infinite'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
