const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const Path = require("path");

module.exports = {
  devtool: "source-map-eval",
  entry: {
    app: Path.resolve(__dirname, "../src/index.js")
  },
  output: {
    path: Path.join(__dirname, "../build"),
    filename: "js/[name].js"
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      name: false
    }
  },
  resolve: {
    alias: {
      "~": Path.resolve(__dirname, "../src")
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: Path.resolve(__dirname, "../public"), to: "public" }
    ]),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, "../src/index.html")
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html/,
        use: "html-loader"
      },
      // Inline SVG 
      {
        test: /\.svg$/,
        loader: "svg-inline-loader"
      },
      // Fonts
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets/fonts"
          }
        }]
      },
      // Images
      {
        test: /\.(ico|jpg|jpeg|png|gif|webp)(\?.*)?$/,
        use: [{
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets/images"
          }
        }]
      },
    ]
  },
};
