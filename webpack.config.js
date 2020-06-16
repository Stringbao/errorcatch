const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require("path");
const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || 'development';
const _mergeConfig = require(`./config/webpack.${_mode}`);
console.log(_mode);
const merge = require('webpack-merge');

let webpackConfig = {
    entry: {
        login:'./src/entry/login.js',
    },
    output: {
        path: path.resolve(__dirname, './dist/'),//输出结果
        filename: 'scripts/[name][hash:8].bundle.js',
        chunkFilename: 'scripts/[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env']
                    }
                },
                exclude: /node_modules/
            },

            {
                test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
                loader: 'url-loader', options: { name: 'fonts/[name].[hash:8].[ext]' }//项目设置打包到dist下的fonts文件夹下
            },
            {
                test: /\.html$/,
                use: [{
                    loader:"html-loader",
                    options:{
                        root:path.resolve(__dirname, 'images')
                    }
                }],
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: './login.html',
            template: './src/views/login.ejs',
            chunks: ['runtime', 'login', 'vender', 'common'],
            mode:argv.mode
        }),
    ],
    resolve: {
        extensions: ['.js', '.css', '.html'],
        alias: {
            "@Service": path.resolve(__dirname, "./src/services"),
            "@css": path.resolve(__dirname, "./src/static/css"),
            // "@DOMAIN": path.resolve(__dirname, "../../../domain.js")
        }
    },
};
module.exports = merge(webpackConfig, _mergeConfig);


