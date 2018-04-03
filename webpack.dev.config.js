var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var autoprefixer = require('autoprefixer');

var devEntryBundle = [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:5000',
    './src/main.js'
]

module.exports = {

    devtool: '#source-map',

    entry: {
        bundle: devEntryBundle
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
        publicPath: '/'
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
                include: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'style'), path.resolve(__dirname, 'src/views')],
                loader: ExtractTextPlugin.extract('style', 'css!postcss!less')
                // loader: 'style-loader!css-loader!postcss-loader!less-loader'
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
    
    // postcss: function() {
    //     return [require('autoprefixer'), require('precss')]
    // },
    postcss: [ autoprefixer({ browsers: ['> 0%', 'last 3 versions'] })],
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("[name].css"),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.js')
    ]
}
