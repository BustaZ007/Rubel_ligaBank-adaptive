const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const path = require('path');
let mode = "development"
let target = "web";

if(process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  mode: mode,
  target: target,

  output: {
    path: path.resolve(__dirname,"bundle"),
    assetModuleFilename: "images/[hash][ext][query]",
  },

  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: 'fonts/[hash][ext][query]',
        }
      },
      { 
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      }, 
      {
        test: /\.css$/i,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
        ],
      },
      {
        test: /\.scss$/i,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            "resolve-url-loader",
            "sass-loader"
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./project/public/index.html",
  }),
  new CopyPlugin({
    patterns: [
          {
            from: "image/**",
            context: "./project/public"
          },
        ],
    }),
  ],

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devServer: {
    hot: true,
    writeToDisk: true
  },
  entry: './project/src/index.js',
  output: {
    path: path.resolve(__dirname, 'bundle'),
    filename: 'bundle.js',
  },
};