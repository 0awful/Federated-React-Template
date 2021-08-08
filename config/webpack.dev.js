const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  entry: {
    main: './src/index',
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3002,
  },
  output: {
    publicPath: 'auto',
    clean: true,
  },
  resolve: {
    extensions: [
      '.jsx',
      '.js',
      '.json',
      '.css',
      '.scss',
      '.jpg',
      'jpeg',
      'png',
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'auth-app',
      library: { type: 'var', name: 'auth_app' },
      filename: 'remoteEntry.js',
      exposes: {
        './SignOut': './src/components/SignOut',
      },
      remotes: {
        'lib-app': 'lib_app@http://localhost:3000/remoteEntry.js',
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
})
