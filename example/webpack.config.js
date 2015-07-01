var path = require('path'),
  inputPath = path.join(__dirname, 'example.js'),
  outputPath = path.join(__dirname, 'static');

module.exports = {
  context: __dirname,
  entry: {
    app: inputPath
  },
  output: {
    path: outputPath,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};
