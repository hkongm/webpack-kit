var webpack = require("webpack");
var autoprefixer = require('autoprefixer');

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
        loader: "style-loader!css-loader!postcss-loader"
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
};
