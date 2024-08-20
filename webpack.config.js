const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].burgeonadaire.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimize: true,
    minimizer: [new TerserPlugin()],
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
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
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
        { from: "./public/ads.txt", to: "ads.txt" },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './public/404.html',
      filename: './404.html',
    }),
    new MiniCssExtractPlugin(),
  ]
};