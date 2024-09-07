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
    filename: 'scripts/[name].billionaire.js',
    chunkFilename: 'scripts/[name].billionaire.js',
    path: path.resolve(__dirname, 'dist/'),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
    },
    runtimeChunk: true,
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
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|webp|jpe?g|gif|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/images',
              name: '[name].[ext]',
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
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
    new CopyPlugin(
      [
        { from: "./public/assets/favicons/safari-pinned-tab.svg", to: "assets/images" },
        { from: "./public/robots.txt", to: "./" },
        { from: "./public/sitemap.xml", to: "./" },
        { from: "./public/browserconfig.xml", to: "./" },
        { from: "./public/site.webmanifest", to: "./" },
        { from: "./public/ads.txt", to: "./" },
      ],
    ),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: "./public/assets/favicons/favicon.ico",
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './public/404.html',
      filename: './404.html',
      favicon: "./public/assets/favicons/favicon.ico",
    }),
    new MiniCssExtractPlugin({
      filename: "style/[name].css",
    }),
  ]
};