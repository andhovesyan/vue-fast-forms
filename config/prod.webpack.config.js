var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: ['vue', 'vue-router'],
    lib: 'vue-fast-forms',
  },
  output: {
    publicPath: '/docs/',
    filename: '[name].js',
    path: path.resolve(__dirname, '../docs'),
  },
  resolveLoader: {
    modules: [path.join(__dirname, '../node_modules')],
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      'vue-fast-forms': path.join(__dirname, '../src/lib'),
    }
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue-loader',
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'file-loader',
      query: {
        name: '[name].[ext]?[hash]',
      },
    }, {
      test: /\.(eot|ttf|svg|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
      query: {
        name: './fonts/[name].[ext]?[hash]',
      },
    }, {
      test: /\.scss$/,
      loaders: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
    }],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
  devtool: '#source-map',
};
