const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const path = require('path')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')

// adds all your dependencies as shared modules
// version is inferred from package.json in the dependencies
// requiredVersion is used from your package.json
// dependencies will automatically use the highest available package
// in the federated app, based on version requirement in package.json
// multiple different versions might coexist in the federated app
// Note that this will not affect nested paths like "lodash/pluck"
// Note that this will disable some optimization on these packages
// with might lead the bundle size problems
const deps = require('./package.json').dependencies

module.exports = merge(common, {
  entry: './src/components/LegalDialog',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: process.env.PORT || 3000,
  },
  target: 'web',
  output: {
    publicPath: 'auto',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'legal_dialog_micro_frontend',
      filename: 'remoteEntry.js',
      exposes: {
        './LegalDialog': './src/components/LegalDialog.tsx',
      },
      shared: {
        ...deps,
        react: {
          requiredVersion: deps.react,
          import: 'react',
          shareKey: 'react',
          shareScope: 'default',
          singleton: true,
        },
        tailwindcss: {
          requiredVersion: deps.tailwindcss,
          import: 'tailwindcss',
          shareKey: 'tailwindcss',
          shareScope: 'default',
          singleton: true,
        },
        'react-dom': {
          requiredVersion: deps['react-dom'],
          import: 'react-dom',
          shareKey: 'react-dom',
          shareScope: 'default',
          singleton: true,
        },
        '@aws-amplify/ui-react': {
          requiredVersion: deps['@aws-amplify/ui-react'],
          import: '@aws-amplify/ui-react',
          shareKey: '@aws-amplify/ui-react',
          shareScope: 'default',
          singleton: true,
        },
        'aws-amplify': {
          requiredVersion: deps['aws-amplify'],
          import: 'aws-amplify',
          shareKey: 'aws-amplify',
          shareScope: 'default',
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
})
