var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname + '/src',
  // entry: {
  //   app: "./app",
  //   vendor: ["react"],
  // },
  entry: {
    app: './app',
    todo: './redux_todo',
    counter: './redux_counter'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    publicPath: '/assets/'
  },
  module: {
    loaders: [
      {
        test:   /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?sourceMap',
          'postcss'
        )
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css!postcss!sass')
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  // devtool: "source-map",
  postcss: [autoprefixer({
    browsers: ['last 2 versions']
  })],
  devServer: {
    hot: true,
    inline: true,
    contentBase: 'public/'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks: Infinity
    }),
    new ExtractTextPlugin('style.css', {
      allChunks: true
    })
  ]
};
