module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	theme: {
		extend: {
			colors: {
				"primary-blue": "#2D70FF", // Base blue color
				"secondary-blue": "#1358D4", // Darker blue
				"cyan-400": "#00D8FF", // Cyan color for borders and text
				"teal-500": "#00E599", // Teal color for buttons
				"gradient-start": "#2D70FF", // Starting color of gradient
				"gradient-end": "#0C327C", // Ending color of gradient
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"], // Custom font (if you want to use a specific font like Inter)
			},
		},
	},
	plugins: [],
};
