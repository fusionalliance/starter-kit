const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const basePath = '.';
const assetPath = `${basePath}/assets`;

module.exports = {
  devtool: 'eval-cheap-module-source-map',
  entry: [
    `${assetPath}/js/index.js`,
    `${assetPath}/scss/app.scss`,
  ],
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, 'public'),
  },
  node: {
    fs: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            // creates style nodes from JS strings
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            // translates CSS into CommonJS
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            // compiles Sass to CSS
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded',
              sourceMap: true,
              sourceMapContents: true,
            },
          },
          // Please note we are not running postcss here
        ],
      },
      {
        // Load all images as base64 encoding if they are smaller than 8192 bytes
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        use: [{
          loader: 'url-loader',
          options: {
            // On development we want to see where the file is coming from, hence we preserve the [path]
            name: '[path][name].[ext]?hash=[hash:20]',
            limit: 8192,
          },
        }],
      },
      {
        // Load all icons
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        use: [{
          loader: 'file-loader',
        }],
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: `${basePath}/public/index.html`,
      inject: true,
    }),
  ],
};
