/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      // 'sm': '480px',
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px'
    },
    colors: {
      blue: "#8B80B6",
      white: '#F9FAFA',
      brown: '#F1CF69',
      green: '#334B35',
      gray: '#F3F2EF',
      red: '#E52C01'
    },
    height: {
			"10v": "10vh",
			"20v": "20vh",
			"30v": "30vh",
			"40v": "40vh",
			"50v": "50vh",
			"60v": "60vh",
			"70v": "70vh",
			"80v": "80vh",
			"90v": "90vh",
			"100v": "100vh",
		},
    fontFamily: {
      'press-start': ['"Press Start 2P"', 'Averia Serif Libre'],
    },
    extend: {},
  },
  plugins: [],
}
