const typescript = require("rollup-plugin-typescript2");
const { name } = require("./package.json");

module.exports = {
	input: "src/index.ts",
	plugins: [typescript()],
	output: [
		{
			file: `lib/.${name}.umd.js`,
			format: "umd",
			name,
			sourcemap: true,
		},
		{
			file: `lib/${name}.module.js`,
			format: "es",
			name,
			sourcemap: true,
		},
	],
};
