import webpack from 'webpack';
import path from 'path';

import { HTML, JS, STYL } from './rules';
import { htmlPlugin } from './plugins';

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "../docs"),
        filename: "./index.js",
    },
    devServer: {
        inline:true,
        port: 3006
    },
    module: { rules: [HTML, JS, STYL] },
    plugins: [htmlPlugin],
};