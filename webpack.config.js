/* eslint-env node */

// const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require("path");

module.exports = {
	context: path.join(__dirname, "./"),
	entry: path.join(__dirname, "./public/scripts/main.js"),
	devtool: "source-map",
	mode: "development",
	output: {
		path: path.join(__dirname, "public"),
		filename: "bundle.js",
	},
	resolve: {
		extensions: [".js"],
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				include: path.join(__dirname, "./public/scripts"),
			},

			{
      	test:/\.(s*)css$/,      
				use:["style-loader","css-loader", "sass-loader"],
			},
      // {

			{
				test: /\.html/,
				use: "raw-loader"
			}
		],
	},
	watch: true
  // devtool: 'source-map',
  // plugins: [
  //   new ExtractTextPlugin({
  //     filename: 'bundle.css',
  //     allChunks: true
  //   }),
  // new webpack.DefinePlugin({
  //   SOCKET_URL: JSON.stringify(process.env.SOCKET_URL ? process.env.SOCKET_URL : 'wss://localhost:3000'),
  // }),
  // ],
};