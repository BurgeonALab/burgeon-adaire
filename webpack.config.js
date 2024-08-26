const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  mode: 'production',
  performance: {
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
  },
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: 'scripts/[name].burgeonadaire.js',
    path: path.resolve(__dirname, 'dist/'),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
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
    new CompressionPlugin({
      test: /\.(js|css)$/,
      algorithm: "gzip",
      compressionOptions: { level: 9 },
    }),
  ]
};