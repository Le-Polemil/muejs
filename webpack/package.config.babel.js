import {JS, STYL} from "./rules";

const webpack = require("webpack");
const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "../build"),
        filename: "./index.js",
        libraryTarget: 'commonjs2',
    },
    resolve: {
        alias: {
            'react': path.resolve(__dirname, '../node_modules/react'),
            'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
        }
    },
    module: {
        rules: [JS, STYL]
    },
    externals: {
        'react': 'commonjs2 react',
    },
};