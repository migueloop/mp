const path = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader',
]

module.exports = {
  entry:   [
    'babel-polyfill',
    'intl',
    './dist/client/index.js',
  ],
  output: {
    path:       path.join(__dirname, 'dist', 'client', 'public'),
    publicPath: '/static/',
    filename: 'javascripts/bundle.js',
    chunkFilename: 'javascripts/[id].bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.NoErrorsPlugin(),
    new webpack.IgnorePlugin(/^(jsdom)$/),
    new webpack.optimize.UglifyJsPlugin({ sourceMap: false }),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        BROWSER : true,
        API_V02_ENDPOINT: JSON.stringify(process.env.API_V02_ENDPOINT_PUBLIC),
      },
    }),
    new ExtractTextPlugin("stylesheets/style.css", {
      allChunks: false
    })
  ],
  module: {
    loaders: [
      {
        test:    /\.jsx?$/,
        loader:  'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: false,
          presets:        [ 'es2015', 'react', "stage-0" ],
          plugins:        [ "syntax-object-rest-spread", "transform-decorators-legacy", "transform-object-assign" ],
        },
      },
      {
        test:   /\.css$/, // Only .css files
        loader: 'style!css' // Run both loaders
      },
      {
        test:   /\.json/, // Only .css files
        loader: 'json' // Run both loaders
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      }
    ]
  },
  resolve: {
    modulesDirectories: [ 'node_modules', 'shared' ],
    extensions:         [ '', '.js', '.jsx' ],
    alias:              {
      repositories: 'api'
    }
  }
};
