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
      // Fonts
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            // outputPath: "../fonts/"
            outputPath: (url, resourcePath, context) => {
              // console.log("url", url);
              // console.log("resourcePath", resourcePath);
              // console.log("context", context);

              // `resourcePath` is original absolute path to asset
              // `context` is directory where stored asset (`rootContext`) or `context` option

              // To get relative path you can use
              // const relativePath = path.relative(context, resourcePath);

              const relativePath = Path.relative(context, resourcePath);

              // if (/my-custom-image\.png/.test(resourcePath)) {
              //   return `other_output_path/${url}`;
              // }

              // if (/images/.test(context)) {
              //   return `image_output_path/${url}`;
              // }

              // return `output_path/${url}`;
              return relativePath;
            }
          }
        }]
      },
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
