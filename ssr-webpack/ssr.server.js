const path = require('path');
const externals = require('webpack-node-externals');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env) => {
  const isDevelopment = env.NODE_ENV !== 'production';
  return {
    target: 'node',
    performance: {
      hints: false,
      maxAssetSize: 500 * 1024,
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          minify: TerserPlugin.swcMinify,
        }),
      ],
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
            loader: "swc-loader",
            options: {
              module: {
                type: "es6"
              },
              isModule: true,
              minify: true,
              jsc: {
                minify: {
                  compress: {
                    drop_console: isDevelopment ? false : true,
                  },
                  mangle: true,
                  format: {
                    asciiOnly: true,
                    comments: false,
                  }
                },
                target: "es2016",
                parser: {
                  syntax: "ecmascript",
                  jsx: true
                },
                transform: {
                  react: {
                    runtime: "automatic"
                  }
                }
              }
            }
          }
        },
      ]
    },
  }
}