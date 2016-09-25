let path = require('path')
module.exports = {
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: __dirname,
    filename: 'bundle.js',
    chunkFilename: '[name].chunk.js'
  },
  module: {
    loaders: [ {
      test: /\.js$/,
      loader: 'babel-loader'
    } ]
  }
}
