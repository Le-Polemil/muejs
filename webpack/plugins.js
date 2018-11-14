import HtmlWebPackPlugin from 'html-webpack-plugin';
import CopyWebPackPlugin from 'copy-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

export const htmlPlugin = new HtmlWebPackPlugin({
    template: './public/index.html',
    filename: './index.html',
});

export const copyPlugin = (file) => new CopyWebPackPlugin([{ from: file }]);
export const cleanPlugin = (folder) => new CleanWebpackPlugin([folder]);

export const HMRPlugin = ({ webpack }) => new webpack.HotModuleReplacementPlugin();