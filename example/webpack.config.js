const path = require("path");
const inputPath = path.join(__dirname, "example.js");
const outputPath = path.join(__dirname, "static");

module.exports = {
  context: __dirname,
  entry: {
    app: inputPath
  },
  output: {
    path: outputPath,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
