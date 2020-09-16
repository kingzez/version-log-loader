
const path = require('path')
const VersionLogWebpackPlugin = require('../dist/index')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './index.js'),
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname)
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve('dist/version-log-loader.js'),
            options: {
              version: 'version-message'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VersionLogWebpackPlugin({
      version: `build-${Date.now()}`
    }),
    new HtmlWebpackPlugin()
  ]
}
