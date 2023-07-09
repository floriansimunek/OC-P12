module.exports = {
	root: true,
	settings: {
		"import/resolver": {
			alias: [
				["@", "./src/"],
				["@assets", "./src/assets"],
				["@components", "./src/components"],
				["@mocks", "./src/mocks"],
				["@entities", "./src/entities"],
			],
		},
	},
};
