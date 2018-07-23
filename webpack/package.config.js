const webpack = require("webpack");
const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");

const pkg = require('../package.json');
const libraryName = pkg.name;

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "./index.js",
        library: libraryName,
        libraryTarget: 'umd',
        publicPath: '/dist/',
        umdNamedDefine: true
    },
    devServer: {
        inline:true,
        port: 3006
    },
    resolve: {
        alias: {
            'react': path.resolve(__dirname, '../node_modules/react'),
            'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.styl$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            }
        ]
    },
    externals: {
        // Don't bundle react or react-dom
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        }
    },
};