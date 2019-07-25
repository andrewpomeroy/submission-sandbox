const Path = require("path");
const Webpack = require("webpack");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  stats: "errors-only",
  bail: true,
  output: {
    filename: "js/[name].[chunkhash:8].js",
    chunkFilename: "js/[name].[chunkhash:8].chunk.js"
  },
  plugins: [
    new Webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new Webpack.optimize.ModuleConcatenationPlugin(),
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.s?css/i,
        use : [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            // Allows us to use relative font paths in *.scss files
            loader: "resolve-url-loader",
            options: {
              debug: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              // source maps need to be handed off to resolve-url-loader so it can do its thing
              sourceMap: true,
              sourceMapContents: false
            }
          }
        ]
      },
      // Fonts
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets/fonts/"
          }
        }]
      },
    ]
  }
});
