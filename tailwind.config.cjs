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
			neatralMedium: '#E7E2DF'
		},
		fontFamily: {
			sans: ['Outfit', 'sans-serif'],
			serif: ['Roboto-Serif', 'serif']
		},
		borderRadius: {
			lg: '20px',
			md: '10px'
		},
		borderWidth: {
			md: '1px'
		},
		fontSize: {
			lg: '35px',
			md: '22px',
			base: '16px'
		},
		fontWeight: {
			normal: 300,
			medium: 500,
			bold: 700
		},
		extend: {
			width: {
				customFull: '960px'
			},
			padding: {
				20: '20px',
				40: '40px',
				60: '60px'
			},
			height: {
				core: '56px'
			}
		}
	},
	plugins: []
};
