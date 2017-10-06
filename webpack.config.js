const webpack = require("webpack");
const path = require("path");
const SRC_DIR = path.join(__dirname, "src");
const LIB_DIR = path.join(__dirname, "lib");

module.exports = {
  entry: path.join(SRC_DIR, "react-memory-stats"),
  output: {
    library: "MemoryStats",
    libraryTarget: "umd",
    filename: "react-memory-stats.js",
    path: LIB_DIR
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
};
