var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  resolve: {
    alias: {
      appAssets: path.resolve(__dirname, 'src/web/appAssets')
    },
    extensions: [".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx??/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          babelrc: false,
          presets: ['es2015', 'react', 'stage-1']
        }
      }
    ]
  }
};
