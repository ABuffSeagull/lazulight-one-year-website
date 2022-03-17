module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	settings: {
		react: {
			version: "detect"
		}
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier"
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: "latest",
		sourceType: "module"
	},
	plugins: ["react", "@typescript-eslint"],
	rules: {
		"react/jsx-uses-react": "off",
		"react/react-in-jsx-scope": "off"
	}
};
