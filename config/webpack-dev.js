/**
 *作者: 杨波
 *功能描述:
 *参数说明:
 *时间: 2019/5/27
 */
const merge = require('webpack-merge');
const path = require('path');
const common = require('./baseConfig.js');
// const { proxy, historyApiFallback }  = require('./proxy');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    // module: {
    //     rules: [
    //         {
    //             test: /\.jsx?$/,
    //             include: [
    //                 path.resolve(__dirname, "../src")
    //             ],
    //             use: ['eslint-loader']
    //         }
    //     ]
    // },
    devServer: {
        contentBase: path.join(__dirname, "../dist"),
        compress: true,
        inline: true,
        disableHostCheck: true,
        host: 'localhost',
        port: 8282,
        // historyApiFallback,
        // proxy,
        // openPage: 'index/',
        overlay: {
            errors: true,
        }
    }
});
