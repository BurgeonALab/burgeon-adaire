const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = (env) => {
  const isDevelopment = env.NODE_ENV !== 'production';
  const ASSET_PATH = env.ASSET_PATH || 'https://resources.burgeonadaire.com/';

  return {
    mode: isDevelopment ? 'development' : 'production',
    devServer: {
      hot: true,
    },
    performance: {
      hints: false,
      maxAssetSize: 500 * 1024,
    },
    entry: {
      index: './src/index.js',
    },
    output: {
      filename: 'compiled/main.[name].billionaire.[contenthash].js',
      chunkFilename: 'compiled/chunk.[name].billionaire.[chunkhash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: isDevelopment ? '/' : ASSET_PATH,
      clean: true,
    },
    optimization: {
      chunkIds: "natural",
      splitChunks: {
        chunks: 'all',
        minSize: 0,
      },
      runtimeChunk: {
        name: 'runtime',
      },
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
            },
            mangle: true,
            format: {
              comments: false,
            },
          },
          extractComments: true,
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
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: require.resolve('babel-loader'),
              options: {
                plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
              },
            },
          ],
        },
      ],
    },
    plugins: [
      isDevelopment && new ReactRefreshWebpackPlugin(),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      }),
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      }),
      new CopyPlugin(
        [
          { from: "./public/assets/videos", to: "./assets/videos" },
          { from: "./public/assets/images", to: "./assets/images" },
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
        favicon: "./public/favicon.ico",
      }),
      new HtmlWebpackPlugin({
        inject: false,
        template: './public/404.html',
        filename: './404.html',
        favicon: "./public/favicon.ico",
      }),
      new MiniCssExtractPlugin({
        filename: "compiled/main.[name].[contenthash].css",
        chunkFilename: "compiled/chunk.[name].[chunkhash].css",
      }),
      new CompressionPlugin({
        algorithm: "gzip",
        compressionOptions: { level: 9 },
        test: /\.(js|css)$/,
        filename: "../compressed/[name].[contenthash].gzip",
      }),
    ].filter(Boolean),
  }
};