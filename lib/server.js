var path = require('path');
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var webpackConfig = require('../webpack.dev.config');

var portfinder = require('portfinder');

portfinder.basePort = 5000;//防止端口冲突

portfinder.getPort(function(portFinderErr, port){

    var devEntryBundle = [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:' + port,
        './src/main.js'
    ];

    webpackConfig.entry.bundle = devEntryBundle;

    var compiler = webpack(webpackConfig);

    var server = new WebpackDevServer(compiler, {
       contentBase: './public',
       hot: true,
       historyApiFallback: true,
       stats: {
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
      }
    });

    server.listen(port, function(){
        console.log('react dev server start at localhost:%s', port);
    });
});
