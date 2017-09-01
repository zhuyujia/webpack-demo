'use strict';
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const context = path.resolve(__dirname, '../../src/pages');
const buildPath = path.resolve(__dirname, '../../build');
module.exports = {
    context: context,
    entry: {
        'index': './index/entry.js'
    },
    output: {
        filename: 'static/js/[name].js',
        path: buildPath,
        publicPath: '/build/static/'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }]
    },
    plugins: [
        new ExtractTextPlugin('static/css/[name].css')
    ]
};
