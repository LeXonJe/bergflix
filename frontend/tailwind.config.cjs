module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			bergflix: ['Hellix', 'arial']
		},
		extend: {
			colors: {
				primary: '#FF0230',
				base: {
					100: '#000000',
					200: '#111111',
					300: '#6B6B6B',
					400: '#989898'
				}
			},
			borderRadius: {
				normal: '5px'
			}
		}
	},
	plugins: []
};
