var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  stats: { colors: true },
  historyApiFallback: true,
}).listen(8080, 'localhost', function(err, result) {
  if(err) {
    console.log("Error: ", err)
  }

  console.log('Listening at localhost:8080');
});
