/*
 * @file: webpack.server.js
 * @description: Server side webpack configs
 * @date: 09.08.2018
 * @author: Manish Budhiraja
 */

const path = require('path');
const NodeExternals = require('webpack-node-externals'); //eslint-disable-line

module.exports = {
  entry: './server.js',
  externals: [NodeExternals()],
  module: {
    rules: [
      {
        exclude: '/node_modules/',
        loader: 'babel-loader',
        options: { presets: [['env', { modules: false }], 'es2015', 'es2017', 'stage-0', 'react'] },
        test: /\.(js|jsx)$/,
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build',
  },
  resolve: { extensions: ['.js', '.jsx'] },
  target: 'node',
};
