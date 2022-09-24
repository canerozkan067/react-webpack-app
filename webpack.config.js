const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/,
                use: 'url-loader'
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ],
            },
        ]
    },
    resolve: {
        alias: {
            Helper: path.resolve(__dirname, './src/utils/Helper.js'),
            Components: path.resolve(__dirname, './src/components/')
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ESLintPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            minify: true,
            template: './index.html'
        })
    ],
    devServer: {
        compress: true,
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: true
    }
}

