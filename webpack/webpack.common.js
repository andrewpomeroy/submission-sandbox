const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const Path = require("path");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devtool: "source-map-eval", // new
  // entry: './src/index.js',
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
    // new MiniCssExtractPlugin({
    //   filename: "[name].css",
    //   chunkFilename: "[id].css",
    // }),
  ],
  module: {
    rules: [
      // Images
      {
        // test: /\.(ico|jpg|jpeg|png|gif|webp)(\?.*)?$/,
        test: /\.(ico|jpg|jpeg|png|gif|webp)(\?.*)?$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]"
          }
        }
      },
      // Fonts
      // {
      //   test: /\.(ttf|woff|woff2)(\?.*)?$/,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       name: "[path][name].[ext]"
      //     }
      //   }
      // },
      {
        test: /\.html/,
        use: "html-loader"
      },
      // Inline SVG 
      {
        test: /\.svg$/,
        loader: "svg-inline-loader"
      }
    ]
  },
};
