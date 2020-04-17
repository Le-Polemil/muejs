export const HTML = {
    test: /\.html$/,
    use: [{
        loader: "html-loader",
        options: { minimize: true }
    }]
};

export const JS = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: "babel-loader"
};

export const STYL = {
    test: /\.styl$/,
    exclude: /node_modules/,
    use: [
        'style-loader',
        'css-loader',
        'stylus-loader'
    ]
};