const path = require('path');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const dedent = require('dedent');

module.exports = (env) => {
  // const isProduction = env === 'production';

  return {
    // devtool: isProduction ? 'source-map' : 'inline-source-map',
    entry: "./src/client/index.js",
    mode: "production",
    output: {
      path: path.resolve(__dirname, '../ssr-public'),
      filename: "bai.[name].js",
      chunkFilename: "bai.[name].js",
      clean: true,
    },
    resolve: {
      extensions: ['.js', '.jsx']
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
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          },
        },
        {
          test: /\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: "css-loader" },
          ],
        },
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      }),
      new HtmlWebpackPlugin({
        inject: false,
        filename: 'webpacks.js',
        minimize: true,
        templateContent: ({ htmlWebpackPlugin }) => {
          return (
            dedent`
            "use strict";
            (function(m) {     
            var baseUrl = new URL(m.publicPath, document.currentScript.src);        
            m.js.forEach(src => {
            document.head.appendChild(Object.assign(document.createElement('script'), { src: new URL(src, baseUrl).toString() }));
            });
            m.css.forEach(href => {
            document.head.appendChild(Object.assign(document.createElement('link'), { rel: 'stylesheet', href: new URL(href, baseUrl).toString() }));
            });
            })(
            ` +
            JSON.stringify(htmlWebpackPlugin.files, null, 2) +
            ');'
          );
        },
      }),
      new MiniCssExtractPlugin({
        filename: "bai.[name].css",
        chunkFilename: "bai.[name].css"
      }),
      new CopyPlugin({
        patterns: [
          { from: "./src/client/favicon.ico", to: "./" }
        ],
      }),
    ]
  }
}