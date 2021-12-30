
const webpack = require("webpack");
const path = require("path");
const PACKAGE = require("./package.json");

// WebPack Plugins.
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /.(js)$/,
        exclude: [/node_modules/],
        use: ["babel-loader"],
      },
      {
        test: /.svg$/,
        use: ["@svgr/webpack", "file-loader"],
      },
      {
        test: /.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
    alias: {
      "@react-rest-playground/images": path.resolve(
        __dirname,
        "src",
        "static",
        "assets",
        "images"
      ),
      "@react-rest-playground/components": path.resolve(
        __dirname,
        "src",
        "components"
      ),
      "@/blocks": path.resolve(
        __dirname,
        "src",
        "components",
        "blocks"
      ),
      "@/ui": path.resolve(
        __dirname,
        "src",
        "components",
        "ui"
      ),
      "@/utils": path.resolve(
        __dirname,
        "src",
        "components",
        "utils"
      ),
      "@/hooks": path.resolve(
        __dirname,
        "src",
        "components",
        "hooks"
      ),
    },
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "react-rest-playground.js",
    chunkFilename: "[name].js",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new webpack.EnvironmentPlugin({
      VERSION: PACKAGE.version,
    }),

    // Take Reference of HTML File.
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "src/static/index.html"),
      APP_ROOT_ID: 'react-rest-playground',
      APP_VERSION: PACKAGE.version
    }),

    // Copy all Assets, Icons to public Folder.
    new CopyPlugin({
      patterns: [
        { from: "./src/static/images", to: "images" },
      ],
    }),
  ],
  devServer: {
    open: true,
    historyApiFallback: true,
    static: {
      directory: "./src/static",
    },
    hot: true,
    port: 3000,
    proxy: {
      "/api": "http://YOUR_API_URL:9000",
    },
  },
};    
