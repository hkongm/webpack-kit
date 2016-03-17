var webpack = require("webpack");
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname + "/src",
  entry: "./app.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
    publicPath: "/assets/",
  },
  module: {
    loaders: [
      {
        test:   /\.css$/,
        loader: ExtractTextPlugin.extract("style", "css?sourceMap", "postcss")
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          "style",
          "css!postcss!sass")
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
    ]
  },
  // devtool: "source-map",
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   output: {
    //     ascii_only: true
    //   },
    //   compress: {
    //     warnings: false,
    //     drop_console: true
    //   }
    // }),
    new ExtractTextPlugin("style.css", {
      allChunks: true
    })
  ]
};
