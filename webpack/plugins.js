import htmlWebPackPlugin from 'html-webpack-plugin';

export const htmlPlugin = new htmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html"
});