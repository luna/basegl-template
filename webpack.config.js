const webpack = require('webpack');
const path    = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    devtool: 'source-map',
    module: {
        rules: [
            { test: /\.js$/   , loader: path.resolve('./basegl-loader.js')}, // TODO: Make it an external dependency
            { test: /\.tsx?$/ , loader: 'awesome-typescript-loader'},
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins:
        [ new webpack.ProvidePlugin({'THREE': 'three'}) // TODO: To be removed in BaseGL 2.0
        ]
};