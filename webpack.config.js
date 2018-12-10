const path = require('path')
const mode = process.env.NODE_ENV

let config = {
  mode: 'development',
  entry: './lib/index.js',
  output: {
    filename: 'vue-loader.js',
    path: path.resolve(__dirname, './dist'),
    library: 'VueLoader',
    libraryTarget: 'window'
  },
  externals: {
    jquery: 'jQuery'
  }
}

if (mode === 'development') {
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

  config = Object.assign(config, {
    devServer: {
      contentBase: path.resolve(__dirname, './test'),
      port: 4000,
      quiet: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './test/index.html')
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
