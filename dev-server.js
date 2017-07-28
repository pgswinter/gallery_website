var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.config.js');
var path = require('path');

// var express = require(`express`);
// var app = express();

// app.use(`/`,express.static(`{__dirname}`));

// app.listen(PORT, ()=>{
//   console.log(`Server started: http://localhost:`);
// })

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {

  hot: true,
  filename: config.output.filename,
  publicPath: config.output.publicPath,
  stats: {

    colors: true

  }

})
server.listen(7777,'localhost',function(){});