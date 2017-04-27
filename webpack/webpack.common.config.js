const 
    // Dependencies.
    path               = require('path'),
    webpack            = require('webpack'),
    // Pluggins.
    HtmlWebpackPlugin  = require('html-webpack-plugin'),
    ExtractTextPlugin  = require('extract-text-webpack-plugin'),
    // Path constants.
    ROOT         = path.resolve(__dirname, '../'),
    SOURCE       = path.resolve(ROOT, 'source'),
    PROD         = path.resolve(ROOT, 'production'),
    NODE_MODULES = path.resolve(ROOT, 'node_modules');

var config = {
    target: 'web',
    context : SOURCE,
    entry : {
        app : './app.main.js',
    },
    output : {
        path : PROD,
        filename : '[name]_[chunkhash].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015', 'react', 'stage-0'] }
                }],
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'autoprefixer-loader', 'sass-loader']
                })
            },
            {
                test: /\.(jpg|jpeg|gif)$/,
                exclude: [/node_modules/],
                loader: 'url-loader?limit=10000&name=./images/[name].[ext]'
            },
            {
                test: /\.(svg|ico|png)$/,
                exclude: [/node_modules/],
                loader: 'url-loader?limit=10000&name=./icons/[name].[ext]'
            },
            {
                test: /\.(ttf|eot)$/,
                exclude: [/node_modules/],
                loader: 'url-loader?limit=1&name=./fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'styles_[chunkhash].css',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.tpl.html',
        }),
    ],
    resolve : {
        modules : [NODE_MODULES, SOURCE]
    },
};

// If the app has two or more entry points the CommonChunkPlugin is injected.
if (Object.keys(config.entry).length >= 2) {

    config.plugins = [
        ...config.plugins,
        new webpack.optimize.CommonsChunkPlugin({
            name: 'shared',
            filename: '[name]_[chunkhash].js',
            minChunks: 2,
        })
    ];

}

module.exports = config;