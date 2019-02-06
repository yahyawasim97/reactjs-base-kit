const path = require("path");
const webpack = require("webpack");
const ServiceWorkerWebpackPlugin = require("serviceworker-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CleanPlugin = require("clean-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { name, version } = require("./package.json");

const PORT = 3000;

const getPlugins = () => {
  const plugins = [
    new CleanPlugin(["./dist"], {
      root: path.resolve("./"),
      verbose: true
    }),
    new HtmlWebPackPlugin({
      filename: "./index.html",
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({ filename: `${name}-${version}.css` }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      analyzerHost: "127.0.0.1",
      analyzerPort: "80",
      defaultSizes: "gzip",
      openAnalyzer: process.env.NODE_ENV === "production"
    }),
    new webpack.EnvironmentPlugin({
      DEBUG: process.env.NODE_ENV === "production",
      NODE_ENV: process.env.NODE_ENV === "production" ? "production" : "development"
    }),
    new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV) }),
    new ServiceWorkerWebpackPlugin({ entry: path.join(__dirname, "./firebase-messaging-sw") }),
    new CopyWebpackPlugin(["firebase-messaging-sw.js"])
  ];

  if (process.env.NODE_ENV === "production") {
    plugins.push(
      new CompressionPlugin(),
      new UglifyJsPlugin({
        parallel: true,
        sourceMap: true,
        uglifyOptions: { compress: { inline: false } }
      })
    );
  }

  return plugins;
};

module.exports = {
  devServer: {
    historyApiFallback: true,
    open: true,
    port: PORT,
    watchContentBase: true
  },
  entry: ["babel-polyfill", "./src/index.js", "./styles/index.scss"],
  module: {
    rules: [
      {
        exclude: "/node_modules/",
        loader: "babel-loader",
        options: { presets: [["env", { modules: false }], "es2015", "es2017", "stage-0", "react"] },
        test: /\.(js|jsx)$/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "resolve-url-loader", "sass-loader?sourceMap"]
      },
      {
        loader: "url-loader?limit=100000",
        test: /\.(png|jpg|gif)$/i
      }
    ]
  },
  optimization: { minimize: false },
  output: {
    filename: `${name}-${version}.js`,
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  plugins: getPlugins(),
  profile: true,
  resolve: { extensions: [".js", ".jsx"] }
};
