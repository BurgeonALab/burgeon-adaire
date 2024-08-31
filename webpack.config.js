const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: 'production',
  performance: {
    hints: false,
    maxAssetSize: 500 * 1024,
  },
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: 'scripts/[name].burgeonadaire.js',
    chunkFilename: 'scripts/[name].burgeonadairechunk.js',
    path: path.resolve(__dirname, 'dist/'),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
      new CssMinimizerPlugin(),
    ],
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
            options: {
              outputPath: 'images',
            },
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
        use: [
          MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new CopyPlugin(
      [
        { from: "./public/assets/favicons", to: "assets/favicons" },
        { from: "./public/robots.txt", to: "robots.txt" },
        { from: "./public/favicon.ico", to: "favicon.ico" },
        { from: "./public/sitemap.xml", to: "sitemap.xml" },
        { from: "./public/ads.txt", to: "ads.txt" },
      ],
    ),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './public/404.html',
      filename: './404.html',
    }),
    new MiniCssExtractPlugin({
      filename: "style/[name].css",
    }),
  ]
};