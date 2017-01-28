// https://github.com/shelljs/shelljs
require('./check-versions')();
require('shelljs/global');

env.NODE_ENV = 'production';

const ora = require('ora');
const webpack = require('webpack');
const webpackConfig = require('./webpack.lib.conf');

const spinner = ora('building for library...');
spinner.start();

webpack(webpackConfig, (err, stats) => {
  spinner.stop();
  if (err) throw err;
  process.stdout.write(`${stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
  })}\n`);
});
