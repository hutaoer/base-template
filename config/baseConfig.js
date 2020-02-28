const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const webpack = require('webpack');
// const menus = require('./systemmenus');
const merge = require('webpack-merge');
const paths = {
    sourcePath: path.resolve(__dirname, '../src')
};

const BUILD_ARGVS = process.env.BUILD_ARGVS;
const TARGET = process.env.TARGET;

function getConfigFilePath(filePath) {
    return path.resolve(paths.sourcePath, filePath)
}

// const { entry, htmlPlugins } = menus.reduce(createHtmlAndEntrys, { entry: {}, htmlPlugins: [] });

const defaultConfig = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        // path: path.resolve(__dirname, '../dist'),
        filename: "main.js",
        // chunkFilename: 'statics/js/[id].[chunkhash:8].chunk.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '我的家乡',
            template: 'index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
        })
    ]
};



module.exports = process.env.EXTENDS ? merge(defaultConfig, require(getConfigFilePath(process.env.EXTENDS))) : defaultConfig;
