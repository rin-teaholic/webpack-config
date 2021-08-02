const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    liveReload: false,
    hot: true,
  },

  target:'web',

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
  ],

  output: {
    filename: '[name].js',
    assetModuleFilename: "images/[name][ext][query]",
  },
});