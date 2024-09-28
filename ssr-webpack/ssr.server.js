const path = require('path');
const externals = require('webpack-node-externals');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  target: 'node',
  entry: "./src/server/index.js",
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../ssr-dist'),
    filename: 'server.js',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: [externals()],
  optimization: {
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
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
}