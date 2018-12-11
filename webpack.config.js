const path = require('path')
const mode = process.env.NODE_ENV

let config = {
  mode: mode,
  entry: './lib/index.js',
  output: {
    filename: 'vue-loader.js',
    path: path.resolve(__dirname, './dist'),
    library: 'VueLoader',
    libraryTarget: 'window'
  },
  externals: {
    jquery: 'jQuery'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}

if (mode === 'development') {
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

  config = Object.assign(config, {
    devServer: {
      contentBase: path.resolve(__dirname, './example'),
      port: 4000,
      quiet: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './example/index.html')
      }),
      new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: ['Your application is running here: http://127.0.0.1:4000']
        }
      })
    ]
  })
}

module.exports = config
