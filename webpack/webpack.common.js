const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devtool: "source-map-eval", // new
  // entry: './src/index.js',
  entry: {
    app: path.resolve(__dirname, "../src/index.js")
  },
  output: {
    path: path.join(__dirname, "../build"),
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
      "~": path.resolve(__dirname, "../src")
    }
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        include: path.join(__dirname, "../src"),
      },
      // {
      //   test: /\.mjs$/,
      //   include: /node_modules/,
      //   type: 'javascript/auto'
      // },

      // {
      //   test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       name: '[path][name].[ext]'
      //     }
      //   }
      // },
      // {
      //   test:/\.(s*)css$/,
      //   use:['style-loader','css-loader', 'sass-loader'],
      // },
      // {
      //   test: /\.(sa|sc|c)ss$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //       options: {
      //         hmr: process.env.NODE_ENV === 'development',
      //       },
      //     },
      //     'css-loader',
      //     'sass-loader',
      //   ],
      // },
      {
        test: /\.html/,
        use: "html-loader"
      },
      // Fonts
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "../fonts/"
          }
        }]
      },
      // Inline SVG 
      {
        test: /\.svg$/,
        loader: "svg-inline-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, "../public"), to: "public" }
    ]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/index.html")
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  watch: true // new
};
