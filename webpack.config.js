const webpack = require("webpack");
const path = require("path");

const stylus_plugin = require("stylus_plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

let config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "./index.js"
    },
    devServer: {
        inline:true,
        port: 3006
    },
    module: {
        rules: [
        {
            test: /\.html$/,
            use: [{
                loader: "html-loader",
                options: { minimize: true }
            }]
        },
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.styl$/,
            exclude: /node_modules/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'stylus-loader',
                    options: {
                        use: [stylus_plugin()],
                    }
                }
            ]
        },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ]
};

module.exports = config;