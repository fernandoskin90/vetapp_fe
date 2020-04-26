const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const merge = require('webpack-merge');
const resolve = require('./webpack.config.resolve.js');

module.exports = merge(resolve, {
  entry: path.join(__dirname, "src", "app.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    port: 3000
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-react']
            }
        },
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
                prependData: `@import "variables";`,
                sassOptions: {
                    includePaths: [path.resolve(__dirname, "src/assets/scss")]
                }
            }
          }
        ]
      },
      {
        test: /.(jpg|jpeg|png|svg|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name]-[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "public", "index.html")
    })
  ]
});
