const path = require('path');
module.exports = {
    devtool: 'source-map',
    entry: {
        index: path.resolve('./test/index.js'),
    },
    output: {
        // devtoolModuleFilenameTemplate: '[absolute-resource-path]',
        path: path.resolve('./dist/'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /.js$/,
            loader: 'babel-loader'
        }]
    }
};
