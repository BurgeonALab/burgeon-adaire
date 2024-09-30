const path = require('path');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env) => {
  const isProduction = env === 'production';

  return {
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    entry: "./src/client/index.js",
    mode: "production",
    output: {
      path: path.resolve(__dirname, '../ssr-public'),
      filename: "bundle.js",
      clean: true,
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    optimization: {
      minimize: true,
      minimizer: [
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
        {
          test: /\.svg/,
          use: {
            loader: "svg-url-loader",
            options: {
              iesafe: true,
            }
          }
        },
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "bundle.css",
      }),
      new CopyPlugin({
        patterns: [
          { from: "./src/client/favicon.ico", to: "./" }
        ],
      }),
    ]
  }
}