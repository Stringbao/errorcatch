const path = require("path");
const SSICompileWebpackPlugin = require('ssi-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    mode: 'development',
    output: {
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]',
                    limit: 8192,
                    outputPath: 'static/images'
                }
            },
        ]
    },
    devServer: {
        inline: true, //检测文件变化，实时构建并刷新浏览器
        port: "9991",
        proxy: {
            '/': {
                target: '',
                // pathRewrite: {
                //     "^/accountAPI": ""
                // },
                secure: false,
                changeOrigin: true
            }
        },
        //404 页面返回 index.html
        historyApiFallback: true,
    },
    plugins: [
        new SSICompileWebpackPlugin({
            localBaseDir: path.resolve(__dirname, '../../../../nec-fe-2c-inc'),
            publicPath: ''
        }),
        new webpack.ProvidePlugin({
            '$tool': [path.resolve(__dirname, "../../../../nec-fe-tool/core.js"), 'default']
        })
    ],
    devtool: 'eval-source-map'
}