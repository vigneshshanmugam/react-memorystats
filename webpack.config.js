var path = require('path');
var outputPath = path.join(__dirname, 'lib');
var inputPath = path.join(__dirname, 'test');
var webpack = require('webpack');

module.exports = {
  entry: {
      app: path.join(inputPath , 'test.js')
  },
  output: {
      path: outputPath,
      filename: 'app.js',
  },
  module: {
      loaders: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
          }
      ]
  },
   plugins: [
    new webpack.optimize.DedupePlugin()
  ]
}
