import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import FixStyleOnlyEntriesPlugin from 'webpack-fix-style-only-entries'

import webpack from 'webpack'
import path from 'path'

module.exports = {
    mode: 'production',
    entry: {
        // base of app
        base: './src/base/index.scss',
        // css styles
        animations: './src/common/_animations.scss',
        backgrounds: './src/common/_backgrounds.scss',
        borders: './src/common/_borders.scss',
        cursors: './src/common/_cursors.scss',
        displays: './src/common/_displays.scss',
        flex: './src/common/_flex.scss',
        images: './src/common/_images.scss',
        lists: './src/common/_lists.scss',
        opacity: './src/common/_opacity.scss',
        overflows: './src/common/_overflows.scss',
        placement: './src/common/_placement.scss',
        scrollbar: './src/common/_scrollbar.scss',
        sizing: './src/common/_sizing.scss',
        spacing: './src/common/_spacing.scss',
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name]/[name].min.js',
    },

    module: {
        rules: [
            {
                test: /\.(scss|sass)$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin(),
        new FixStyleOnlyEntriesPlugin(),
    ],
}
