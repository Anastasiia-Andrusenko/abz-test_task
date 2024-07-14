const { override, addWebpackPlugin } = require('customize-cra');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = override(
  config => {
    if (config.mode === 'production') {
      config.plugins.push(
        new CompressionWebpackPlugin({
          test: /\.(js|css|html|svg)$/,
          filename: '[path][base].gz',
        })
      );
    }
    return config;
  }
);
