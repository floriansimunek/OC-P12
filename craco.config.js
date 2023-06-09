const path = require("path");

module.exports = {
	webpack: {
		alias: {
			"@": path.resolve(__dirname, "src"),
			"@assets": path.resolve(__dirname, "src/assets"),
			"@components": path.resolve(__dirname, "src/components"),
			"@mocks": path.resolve(__dirname, "src/mocks"),
			"@entities": path.resolve(__dirname, "src/entities"),
		},
	},
};
