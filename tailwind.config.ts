import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./_utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./_lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	colors: {
  		black: '#181818',
  		white: '#FFFFFF',
  		purple: '#6939B6',
  		grey: '#F1F1F1',
  		darkGrey: '#595F67',
  		linkBlue: '#0000FF',
  		transparent: 'transparent'
  	},
  	fontSize: {
  		paragraph: [
  			'1rem',
  			{
  				lineHeight: '20px',
  				letterSpacing: '-0.01rem',
  				fontWeight: '300'
  			}
  		],
  		subheadingSmall: [
  			'1rem',
  			{
  				letterSpacing: '-0.02rem',
  				fontWeight: '700'
  			}
  		],
  		subheadingLarge: [
  			'2rem',
  			{
  				letterSpacing: '-0.08rem',
  				fontWeight: '700',
  				lineHeight: '140%'
  			}
  		],
  		heading: [
  			'3.75rem',
  			{
  				letterSpacing: '-0.15rem',
  				fontWeight: '700',
  				lineHeight: '90%'
  			}
  		]
  	},
  	fontFamily: {
  		assistant: 'Assistant'
  	},
  	screens: {
  		phone: '425px',
  		tablet: '800px',
  		desktop: '1280px'
  	},
  	extend: {
  		margin: {
  			'15': '60px'
  		},
  		padding: {
  			'15': '60px'
  		},
  		gap: {
  			'15': '60px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
