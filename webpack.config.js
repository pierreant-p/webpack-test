var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    entry: {
        profile: './src/js/profile.js',
        feed: './src/js/feed.js'
    },
    output: {
        path: 'build',
        filename: '[name].js' // Template based on keys in entry above
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [commonsPlugin]
};
