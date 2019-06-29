var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "none",
  entry: {
    main: "./src/index.js"
    //vendor: "./src/vendor.js"
  },
  output: {
    filename: "[name].vendor.js",
    path: path.resolve(__dirname, "dist")
  },

  // devServer: {
  //   port: 4000
  // },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],

  module:{
    rules:[

      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      }
    ]
  }
};