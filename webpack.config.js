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
      },
      {
        test:/\.(s*)css$/,
        use:['style-loader','css-loader', 'sass-loader'],
      },      
      {
        test: /\.html/,
        use: 'raw-loader'
      },
      // Fonts
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      }
      // { test: /\.(png|woff|woff2|eot|ttf|svg)$/, use: ['url-loader?limit=100000'] }
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