/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			animation: {
				"slow-ping": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
				"float": "float 6s ease-in-out infinite",
				"rotate": "rotate 8s linear infinite",
				"fade": "fade 4s ease-in-out infinite",
				"move-around": "moveAround 15s ease-in-out infinite",
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				rotate: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				fade: {
					'0%, 100%': { opacity: '0.3' },
					'50%': { opacity: '1' },
				},
				moveAround: {
					'0%': { transform: 'translate(0, 0)' },
					'25%': { transform: 'translate(200px, -100px)' },
					'50%': { transform: 'translate(-150px, -200px)' },
					'75%': { transform: 'translate(-300px, 100px)' },
					'100%': { transform: 'translate(0, 0)' },
				},
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				roboto: ["Roboto", "sans-serif"],
				montserrat: ["Montserrat", "sans-serif"],
				oswald: ["Oswald", "sans-serif"]
			}
		},
	},
	plugins: [],
};