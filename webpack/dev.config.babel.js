import { HTML, JS, STYL } from './rules';
import { htmlPlugin } from './plugins';

import webpack from 'webpack';

module.exports = {
    devtool: 'eval-source-map',
    devServer: {
        inline: true,
        contentBase: 'src',
        port: 3006,
    },

    entry: "./src/app.js",
    module: {
        rules: [HTML, JS, STYL]
    },
    plugins: [htmlPlugin]
};