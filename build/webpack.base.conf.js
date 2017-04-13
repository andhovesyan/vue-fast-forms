const path = require('path');
const config = require('../config');
const utils = require('./utils');

const projectRoot = path.resolve(__dirname, '../');

const env = process.env.NODE_ENV;
// check env & config/index.js to decide whether to enable CSS source maps for the
// constious preprocessor loaders added to vue-loader at the end of this file
const cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap);
const cssSourceMapProd = (env === 'production' && config.build.productionSourceMap);
const useCssSourceMap = cssSourceMapDev || cssSourceMapProd;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    app: './docs/index.js',
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    // root: [path.join(__dirname, '../node_modules')],
    alias: {
      assets: path.resolve(__dirname, '../docs/assets'),
      components: path.resolve(__dirname, '../docs/components'),
      'vue-fast-forms': path.resolve(__dirname, '../src'),
    },
  },
  resolveLoader: {
    modules: [path.join(__dirname, '../node_modules')],
  },
  module: {
    loaders: [{
      enforce: 'pre',
      test: /\.(vue|js)$/,
      loader: 'eslint-loader',
      include: [
        path.join(projectRoot, 'docs'),
      ],
      exclude: /node_modules/,
      options: {
        formatter: require('eslint-friendly-formatter'),
      },
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: utils.cssLoaders({ sourceMap: useCssSourceMap }),
        postcss: [
          require('autoprefixer')({
            browsers: ['last 2 versions'],
          }),
        ],
      },
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [
        path.join(projectRoot, 'src'),
        path.join(projectRoot, 'docs'),
      ],
      exclude: /node_modules/,
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: utils.assetsPath('img/[name].[hash:7].[ext]'),
      },
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
      },
    }],
  },
};
