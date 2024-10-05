const path = require('path');
const externals = require('webpack-node-externals');

module.exports = (env) => {
  const isDevelopment = env.NODE_ENV !== 'production';

  return {
    target: 'node',
    performance: {
      hints: false,
      maxAssetSize: 500 * 1024,
    },
    entry: "./src/server/index.js",
    mode: 'production',
    output: {
      path: path.resolve(__dirname, '../ssr-dist'),
      filename: './server/server.js',
      clean: true,
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    externals: [externals()],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
      ]
    },
  }
}