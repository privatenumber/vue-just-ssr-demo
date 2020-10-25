const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { JustSsrPlugin } = require('vue-just-ssr');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
	mode: 'development',
	entry: './src/App.vue',
	output: {
		filename: isProduction ? '[name].[contenthash].js' : '[name].js',
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
		...(isProduction ? [
			new HtmlWebpackPlugin({
				scriptLoading: 'defer',
				templateContent: '<!DOCTYPE html><html><head><meta charset="utf-8"></head><body><div id="app"></div></body></html>',
			})
		] : [])
	]
};
