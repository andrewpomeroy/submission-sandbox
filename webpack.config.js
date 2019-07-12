const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, './'),
  entry: './src/index.js',
  devtool: 'source-map-eval',
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
      },
      // Inline SVG 
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ],
  },
  watch: true
};