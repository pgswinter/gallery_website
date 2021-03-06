const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const publicPath = "./";

module.exports = Merge(CommonConfig, {
	devtool: "cheap-module-source-map",
	// entry: [
 //        './src/components/gallery/modules/index.js',
 //        'webpack/hot/dev-server',
 //        'webpack-dev-server/client?http://localhost:6969'
 //    ],
	output:{
		// path: path.join(__dirname,'./dist/assets'), // Set URL store from local folder
		path: path.join(__dirname,'./views'), // Set URL store from local folder
		filename: '[name].bundle.js',
		publicPath: publicPath, // Permisson access at URL
		sourceMapFilename: '[name].map'
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin() // Enable HMR
	],
	devServer:{
		hot: true,
		port: 3535,
		host: 'localhost',
		historyApiFallback: true,
		noInfo: false,
		stats: 'minimal',
		contentBase: path.resolve(__dirname, './dist/assets'), // Set URL from local folder
		publicPath: publicPath // Permisson access at URL from contentBase
	}
})