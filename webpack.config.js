const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const dotenv = require("dotenv");

dotenv.config();

module.exports = (env) => {
  const isDevelopment = env.NODE_ENV !== "production";
  const ASSET_PATH = env.ASSET_PATH || "https://resources.burgeonadaire.com/";

  return {
    mode: isDevelopment ? "development" : "production",
    devServer: {
      hot: true,
      historyApiFallback: true,
    },
    performance: {
      hints: false,
      maxAssetSize: 500 * 1024,
    },
    entry: {
      index: "./src/index.js",
    },
    output: {
      filename: "compiled/main.[name].billionaire.[contenthash].js",
      chunkFilename: "compiled/chunk.[name].billionaire.[chunkhash].js",
      path: path.resolve(__dirname, "dist"),
      publicPath: isDevelopment ? "/" : ASSET_PATH,
      clean: true,
    },
    optimization: {
      chunkIds: "natural",
      splitChunks: {
        chunks: "all",
        minSize: 0,
      },
      runtimeChunk: {
        name: "runtime",
      },
      minimize: true,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          minify: TerserPlugin.swcMinify,
        }),
        new CssMinimizerPlugin({
          parallel: true,
          minify: CssMinimizerPlugin.cssnanoMinify,
          minimizerOptions: {
            preset: [
              "default",
              {
                discardComments: { removeAll: true },
              },
            ],
          },
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "swc-loader",
            options: {
              module: {
                type: "es6",
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
                    comments: false,
                  },
                },
                target: "es2016",
                parser: {
                  syntax: "ecmascript",
                  jsx: true,
                },
                transform: {
                  react: {
                    runtime: "automatic",
                    development: isDevelopment,
                    refresh: isDevelopment,
                  },
                },
              },
            },
          },
        },
        {
          test: /\.svg/,
          use: {
            loader: "svg-url-loader",
            options: {
              iesafe: true,
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: isDevelopment
                ? "style-loader"
                : MiniCssExtractPlugin.loader,
            },
            "css-loader",
            "postcss-loader",
          ],
        },
      ],
    },
    plugins: [
      isDevelopment && new ReactRefreshWebpackPlugin(),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
      }),
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      }),
      new CopyPlugin({
        patterns: [
          { from: "./public/assets/videos", to: "./assets/videos" },
          {
            from: "./public/assets/videos/new_bai_vid",
            to: "./assets/videos/new_bai_vid",
          },
          {
            from: "./public/assets/images/new_bai_img",
            to: "./assets/images/new_bai_img",
          },
          { from: "./public/robots.txt", to: "./" },
          { from: "./public/sitemap.xml", to: "./" },
          { from: "./public/browserconfig.xml", to: "./configurations" },
          { from: "./public/seobilityverify_9132575.html", to: "./" },
          { from: "./public/webmanifest.json", to: "./configurations" },
          { from: "./public/ads.txt", to: "./" },
        ],
      }),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename: "./index.html",
        favicon: "./public/favicon.ico",
      }),
      new HtmlWebpackPlugin({
        inject: false,
        template: "./public/404.html",
        filename: "./404.html",
        favicon: "./public/favicon.ico",
      }),
      new MiniCssExtractPlugin({
        filename: isDevelopment
          ? "compiled/[name].css"
          : "compiled/main.[name].[contenthash].css",
        chunkFilename: isDevelopment
          ? "compiled/[name].css"
          : "compiled/chunk.[name].[chunkhash].css",
      }),
      new CompressionPlugin({
        algorithm: "gzip",
        compressionOptions: { level: 9 },
        test: /\.(js|css)$/,
        filename: "../compressed/[name].gzip",
      }),
    ].filter(Boolean),
  };
};
