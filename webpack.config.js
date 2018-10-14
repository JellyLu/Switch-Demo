const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ["es2015"]
          } 
        }
      ]
  }
};