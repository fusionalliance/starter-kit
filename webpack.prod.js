const path = require('path');

const basePath = '.';
const assetPath = `${basePath}/assets`;
const buildPath = path.resolve(__dirname, 'dist');

module.exports = {
  entry: `${assetPath}/js/index.js`,
  output: {
    filename: '[name].[hash:20].js',
    path: buildPath,
  },
  module: {
    rules: [
      // Load all images as base64 encoding if they are smaller than 10KB
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: '[path][name].[hash:10].[ext]',
            limit: 10240,
          },
        }],
      },
      {
        test: /\.(gif|png|jpe?g|svg|webp)$/i,
        use: [
          'file-loader?name=[path][name].[hash:10].[ext]',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: false,
              disable: false,
              // TODO: webp works, but currently freaks out other image types if enabled (still valid file but will break in Finder)
              // webp: {
              //   quality: 60,
              // },
            },
          },
        ],
      },
    ],
  },
};
