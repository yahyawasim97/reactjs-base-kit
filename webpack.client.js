/*
 * @file: webpack.client.js
 * @description: Client side webpack configs
 * @date: 09.08.2018
 * @author: Manish Budhiraja
 */

/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CleanPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const pkg = require('./package.json');

// const VERSION = pkg.version;
// const NAME = pkg.name;
const isDevlopment = process.env.NODE_ENV !== 'production';

const getPlugins = () => {
  const plugins = [
    new CleanPlugin(['./build'], {
      root: path.resolve('./'),
      verbose: true,
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      defaultSizes: 'gzip',
      openAnalyzer: !isDevlopment,
    }),
    new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
    new MiniCssExtractPlugin({
      chunkFilename: isDevlopment ? '[id].css' : '[id].[hash].css',
      filename: isDevlopment ? '[name].css' : '[name].[hash].css',
    }),
  ];

  if (process.env.NODE_ENV === 'production') {
    plugins.push(
      new CompressionPlugin(),
      new UglifyJsPlugin({
        parallel: true,
        sourceMap: true,
        uglifyOptions: { compress: { inline: false } },
      })
    );
  }

  return plugins;
};

module.exports = {
  entry: ['./src/index.js', './styles/index.scss'],
  module: {
    rules: [
      {
        exclude: '/node_modules/',
        loader: 'babel-loader',
        options: { presets: [['env', { modules: false }], 'es2015', 'es2017', 'stage-0', 'react'] },
        test: /\.(js|jsx)$/,
      },
      // {
      //   test: /\.scss$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: ['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap'],
      //   }),
      // },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [isDevlopment ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader?sourceMap'],
      },
      {
        loader: 'url-loader?limit=100000',
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      },
    ],
  },
  output: {
    filename: 'client_bundle.js',
    path: path.resolve(__dirname, 'build/public'),
    publicPath: '/build/public',
  },
  plugins: getPlugins(),
  profile: true,
  resolve: { extensions: ['.js', '.jsx'] },
};
