const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { JustSsrPlugin } = require('vue-just-ssr');

module.exports = {
	mode: 'development',
	entry: './src/App.vue',
	output: {
		filename: '[name].js',
		path: path.resolve('dist')
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					{
						loader: 'css-loader',
						options: {
							esModule: false
						}
					}
				]
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new JustSsrPlugin({
			createAppPath: './src/create-app',
		}),
	]
};
