const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';

let config = {
    mode: 'development',
    entry: {
        main: ['./src/App.js']
    },
    output: {
        path: path.resolve(__dirname, './dist/assets'),
        filename: isProduction ? '[name].[chunkhash].js' : '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' })
    ],
    devtool: 'source-map'
}

module.exports = config;