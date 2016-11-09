var webpack = require('webpack')
module.exports = {
  context: __dirname,
  entry: './src/react-memory-stats',
  output: {
    library: 'MemoryStats',
    libraryTarget: 'umd',
    filename: 'react-memory-stats.js',
    path: './lib'
  },
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    }),
    new webpack.optimize.DedupePlugin()
  ]
}
