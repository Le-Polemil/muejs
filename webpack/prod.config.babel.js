// import webpack from 'webpack';
// import path from 'path';
//
// import { HTML, JS, STYL } from './rules';
// import { cleanPlugin, copyPlugin, HMRPlugin, htmlPlugin } from './plugins';
//
// module.exports = {
//     mode: 'production',
//     devtool: 'source-map',
//
//     entry: {
//         app: "./src/app.js",
//     },
//     output: {
//         path: "/docs",
//         filename: "./index.js",
//     },
//
//     devServer: {
//         inline:true,
//         port: 3006
//     },
//     module: { rules: [HTML, JS, STYL] },
//     plugins: [
//         cleanPlugin('../docs'),
//         copyPlugin('./srcdemo/app.js'),
//         htmlPlugin,
//         HMRPlugin({ webpack }),
//     ],
// };