var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var args = process.argv.slice(2);
console.log(args);
var isDev = args[1] == '--env=development';
module.exports = {

    entry: {
        bundle: './src/main.js',
        vendor: []
    },
    
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        './React': 'React',
        './ReactDOM': 'ReactDOM'
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        path: path.resolve('./dist/'),
        publicPath: isDev ? 'http://cdn2.66173.cn/reactRel/dist/' : 'http://cdn.66173.cn/reactRel/dist/'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: [path.resolve(__dirname, 'src')],
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-2'],
                    plugins: [
                        'add-module-exports',
                        'transform-object-assign',
                        'transform-decorators-legacy', 
                        'transform-es3-member-expression-literals', 
                        'transform-es3-property-literals'
                    ]
                }
            },
            {
                test: /\.(css|less)$/,
                include: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'style'), path.resolve(__dirname, 'src')],
                loader: ExtractTextPlugin.extract('style', '!css!postcss!less')
            }
        ]
    },

    resolve: {
        alias: {
            'utils_path': path.join(__dirname, 'src/utils'),
            'views_path': path.join(__dirname, 'src/views'),
            'modules_path': path.join(__dirname, 'src/views/modules')
        },
        extensions: ['', '.js', '.jsx']
    },

    postcss: [ autoprefixer({ browsers: ['> 0%', 'last 3 versions'] })],

    plugins: [
        new ExtractTextPlugin("[name].css"),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.js')
    ]
}
