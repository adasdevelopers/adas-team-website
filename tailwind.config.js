module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			blue: "#39b6fb",
			navy: "#253e4b",
			white: "#ffffff",
			pink: "#f8bbda",
			black: "#080E11",
			"light-blue": "#deeffc",
		},
		fontFamily: {
			title: ["Spartan", "sans-serif"],
			body: ["Open\\ Sans", "sans-serif"],
		},

		extend: {
			keyframes: {
				"fade-in-down": {
					"0%": {
						opacity: "0",
						transform: "translateY(-50px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
			},
			animation: {
				wiggle: "wiggle 1s ease-in-out infinite",
				"fade-in-down": "fade-in-down 1s ease-out",
			},
			width: {
				"11/10": "110%",
				"6/5": "120%",
				"7/5": "140%",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
