const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].bai.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|webp|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.svg/,
        use: {
          loader: "svg-url-loader",
          options: {
            iesafe: true,
          }
        }
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./public/assets/favicons", to: "assets/favicons" },
        { from: "./public/assets", to: "assets" },
        { from: "./public/robots.txt", to: "robots.txt" },
        { from: "./public/sitemap.xml", to: "sitemap.xml" },
        { from: "./public/Ads.txt", to: "Ads.txt" },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new HtmlWebpackPlugin({
      template: './public/404.html',
      filename: './404.html',
    }),
  ]
};