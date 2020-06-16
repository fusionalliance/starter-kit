const Dotenv = require('dotenv-webpack');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const basePath = '.';
const assetPath = `${basePath}/assets`;

const walkSync = (d) => fs.statSync(d).isDirectory() ? fs.readdirSync(d).map(f => walkSync(path.join(d, f))).flat().map((file) => `./${file}`) : [d];
const getAllFilesWithExtensions = (dir, extensions) => walkSync(dir).filter((file) => extensions.some((ext) => file.endsWith(ext)))

module.exports = {
  devtool: 'eval-cheap-module-source-map',
  entry: [
    `${assetPath}/js/index.js`,
    `${assetPath}/scss/app.scss`,
    ...getAllFilesWithExtensions(`${assetPath}/img`, [
      '.gif',
      '.jpeg',
      '.jpg',
      '.png',
      '.svg',
      '.webp',
    ]),
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
      // Uncomment the below section if a javascript framework is replacing your image references for you
      // {
      //   // Load all images as base64 encoding if they are smaller than 8192 bytes
      //   test: /\.(png|jpe?g|gif|svg|webp)$/,
      //   use: [{
      //     loader: 'url-loader',
      //     options: {
      //       // On development we want to see where the file is coming from, hence we preserve the [path]
      //       name: '[path][name].[ext]?hash=[hash:20]',
      //       limit: 8192,
      //     },
      //   }],
      // },
      {
        test: /\.(gif|png|jpe?g|svg|webp)$/i,
        use: [
          'file-loader?name=[path][name].[ext]',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: false,
              disable: false,
              // TODO: webp works, but currently freaks out other image types if enabled (still valid file but will break in Finder)
              webp: {
                quality: 60,
              },
            },
          },
        ],
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
