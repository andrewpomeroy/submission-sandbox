const Path = require("path");
const Webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-eval-source-map",
  output: {
    chunkFilename: "js/[name].chunk.js"
  },
  devServer: {
    inline: true
  },
  plugins: [
    new Webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: Path.resolve(__dirname, "../src"),
        enforce: "pre",
        loader: "eslint-loader",
        options: {
          emitWarning: true,
        }
      },
      {
        test: /\.(js)$/,
        include: Path.resolve(__dirname, "../src"),
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
          sourceMaps: true
        }
      },
      {
        test: /\.s?css$/i,
        use: [
          {
            loader: "style-loader",
            options: {
              sourceMap: true,
            }
          },
          "css-loader?sourceMap=true",
          // Allows us to use relative font paths in *.scss files
          {
            loader: "resolve-url-loader",
            options: {
              sourceMap: true,
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              sourceMapContents: false
            }
          }]
      },
    ],
  },
  watch: true
});
