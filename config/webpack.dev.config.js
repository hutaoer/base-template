const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const sourcePath = path.resolve(__dirname, '../src');
module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, '../src/index.js'),
	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, '../dist')
	},
	devServer: {
		// publicPath: '/dist',
		after: () => {
			console.log('over')
		},
		useLocalIp: true,
		host: '0.0.0.0',
		disableHostCheck: true
	},
	// devServer: {
 //        // contentBase: path.join(__dirname, "../dist"),
 //        compress: true,
 //        inline: true,
 //        disableHostCheck: true,
 //        host: 'localhost',
 //    },
	plugins: [new HtmlWebpackPlugin({
		title: '我的家乡yoyo',
		template: 'index.html',
		// inject: true,
		// minify: {
  //           removeComments: true,
  //           collapseWhitespace: true,
  //           removeAttributeQuotes: true
  //       },
	})]
}