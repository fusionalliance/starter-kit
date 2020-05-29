const CleanWebpackPlugin = require('clean-webpack-plugin');
const cssNano = require('cssnano');
const Dotenv = require('dotenv-webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');

const basePath = '.';
const assetPath = `${basePath}/assets`;
const buildPath = path.resolve(__dirname, 'public');

module.exports = {
  devtool: 'source-map',
  entry: [
    `${assetPath}/js/index.js`,
    `${assetPath}/scss/app.scss`,
  ],
  output: {
    filename: '[name].[hash:20].js',
    path: buildPath,
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
        test: /\.(scss|css|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            // translates CSS into CommonJS
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            // Runs compiled CSS through postcss for vendor prefixing
            loader: 'postcss-loader',
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
        ],
      },
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
      // Inject the js bundle at the end of the body of the given template
      inject: 'body',
    }),
    // new CleanWebpackPlugin(buildPath),
    new FaviconsWebpackPlugin({
      // Your source logo
      logo: `${assetPath}/img/icon.png`,
      // The prefix for all image files (might be a folder or a name)
      prefix: 'icons-[hash]/',
      // Generate a cache file with control hashes and
      // don't rebuild the favicons until those hashes change
      cache: true,
      // Inject the html into the html-webpack-plugin
      inject: true,

      favicons: {
        // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
        appName: '{{projectName}}',
        // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
        background: '#fff',
        // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css',
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: cssNano,
      cssProcessorOptions: {
        map: {
          inline: false,
        },
        discardComments: {
          removeAll: true,
        },
        discardUnused: false,
      },
      canPrint: true,
    }),
  ],
};
