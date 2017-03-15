var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const sassLoaders = [
  'style-loader',
  'css-loader',
  'postcss-loader',
  'sass-loader'
]


module.exports = {
  watchOptions: { pull: true },
  devtool: 'cheap-module-source-map',
  entry: [
    // For hot style updates
    'webpack/hot/dev-server',
    'babel-polyfill',
    'intl',
    // The script refreshing the browser on none hot updates
    // 'webpack-dev-server/client?http://localhost:8080/',
    'webpack-hot-middleware/client?path=http://localhost:8080/',
    // 'webpack-hot-middleware/client?path=http://localhost:8080/',
    './src/client/index.js'
  ],
  output: {
    path: path.join(__dirname, 'src', 'client', 'public'),
    publicPath: '/static/',
    filename: 'javascripts/bundle.js',
    chunkFilename: 'javascripts/[id].bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(/^(jsdom)$/),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('develop'),
        BROWSER: true,
      },
    }),
    new ExtractTextPlugin("stylesheets/style.css", {
      allChunks: true
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react', "stage-0"],
          plugins: ["syntax-object-rest-spread", "transform-decorators-legacy","transform-object-assign"]
        }
      },
      {
        test: /\.css$/, // Only .css files
        loader: 'style!css' // Run both loaders
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      },
      {
        test: /\.json/, // Only .css files
        loader: 'json' // Run both loaders
      },
      {
        test: /\.scss$/,
        loader: sassLoaders.join('!')
      },
      { test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: 'url-loader?limit=100000' }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', 'shared'],
    extensions: ['', '.js', '.jsx'],
    alias: {
      repositories: 'api'
    }
  }
};
