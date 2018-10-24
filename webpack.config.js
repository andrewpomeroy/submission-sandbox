const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  context: path.join(__dirname, './'),
  entry: './src/index.js',
  // devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        // query: {
        //   presets: ['es2016'],
        //   plugins: ['transform-class-properties']
        // }
      },
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader']
      // }
      {
        test:/\.(s*)css$/,
        use:['style-loader','css-loader', 'sass-loader'],
      },
      // {
      //   test:/\.(s*)css$/,
      //   exclude: [/node_modules/],
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: ['css-loader', 'sass-loader'],
      //   }),
      // },
      
      // {
      //   test: /.css$/,
      //   exclude: [/node_modules/],
      //   use: vendorsExtractPlugin.extract({
      //     use: ['css-loader'],
      //   }),
      // },
      // { test: /\.html$/, loader: 'ng-cache?prefix=[dir]/[dir]' },
      {
        test: /\.html/,
        use: 'raw-loader'
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