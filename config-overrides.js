const { override, addWebpackPlugin } = require('customize-cra');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = override(
  addWebpackPlugin(
    new CompressionWebpackPlugin({
      test: /\.(js|css|html|svg)$/,
      filename: '[path][base].gz',
    })
  )
);
