const CracoAlias = require("craco-alias");
const CracoImageOptimizerPlugin = require("craco-image-optimizer-plugin");
const path = require("path");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.paths.json",
      },
    },
    {
      plugin: CracoImageOptimizerPlugin,
      options: {
        svgo: {
          plugins: [
            {
              removeViewBox: false,
            },
          ],
        },
        gifsicle: {
          interlaced: true,
        },
        optipng: {
          optimizationLevel: 7,
        },
        pngquant: {
          quality: [0.65, 0.9],
          speed: 4,
        },
        mozjpeg: {
          progressive: true,
          quality: 65,
        },
      },
    },
  ],
};
