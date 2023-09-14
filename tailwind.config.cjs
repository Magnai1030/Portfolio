/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '720px',
			md: '960px'
		},
		colors: {
			white: '#FFFFFF',
			black: '#200F29',
			neatralLight: '#FAF7F5',
			neatralMedium: '#E7E2DF',
			violet: '#C16E7D',
		},
		fontFamily: {
			sans: ['Outfit', 'sans-serif'],
			serif: ['Roboto-Serif', 'serif']
		},
		borderRadius: {
			xxl: '20px',
			xl: '12px',
			lg: '11px',
			md: '10px',
			sm: '4px'
		},
		borderWidth: {
			md: '1px'
		},
		fontSize: {
			xl: '39px',
			lg: '22px',
			md: '19px',
			base: '16px'
		},
		fontWeight: {
			normal: 300,
			medium: 500,
			bold: 700
		},
		extend: {
			width: {
				customFull: '960px',
				48: '48px',
				46: '46px',
				44: '44px',
				40: '40px'
			},
			padding: {
				10: '10px',
				20: '20px',
				40: '40px',
				60: '60px',
				56: '56px'
			},
			height: {
				core: '56px',
				40: '40px',
				24: '24px',
				22: '22px',
				20: '20px'
			}
		}
	},
	plugins: []
};
