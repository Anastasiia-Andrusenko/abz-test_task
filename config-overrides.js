const { override } = require('customize-cra');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');


module.exports = override(
  (config) => {
    if (config.mode === 'production') {
      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
            },
          },
        }),
      ];

      config.plugins.push(
        new CompressionWebpackPlugin({
          test: /\.(js|css|html|svg)$/,
          filename: '[path][base].gz',
        }), new GenerateSW({
          clientsClaim: true,
          skipWaiting: true,
          exclude: [/\.map$/, /asset-manifest\.json$/, /LICENSE/],
          navigateFallback: '/index.html',
          runtimeCaching: [
            {
              urlPattern: new RegExp('^https://fonts\\.googleapis\\.com/'),
              handler: 'StaleWhileRevalidate',
            },
            {
              urlPattern: new RegExp('^https://fonts\\.gstatic\\.com/'),
              handler: 'StaleWhileRevalidate',
            },
            {
              urlPattern: /\.(?:png|jpg|jpeg|svg|webp|gif)$/,
              handler: 'CacheFirst',
              options: {
                cacheName: 'images',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
                },
              },
            },
          ],
        })
      );
    }
    return config;
  }
);
