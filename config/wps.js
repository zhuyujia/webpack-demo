'use strict';
const webpack = require('webpack');
const config = require('./webpack/webpack.config');
let compiler = null;
compiler = webpack(Object.assign({}, config));
compiler.run((err, stats) => {
    if (err) {
        console.error(err.stack || err);
        return false;
    }
});
