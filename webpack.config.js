/**
 * Created by zhuyujia on 2017/11/8.
 */
const path = require('path');
module.exports = {
    entry: {
        bundle: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
};
