var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname+"/app",
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./scripts/index.js",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
          test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
      }
    ]
  },
  output: {
    path: __dirname + "/build/",
    publicPath: "/build/scripts",
    filename: "build.js"
  },
  plugins: [
    new ExtractTextPlugin('build.css', {
        allChunks: true
    }),
  ],
};


// debug ? [] : [
//   new webpack.optimize.DedupePlugin(),
//   new webpack.optimize.OccurenceOrderPlugin(),
//   new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
// ],
