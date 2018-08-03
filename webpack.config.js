const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

const restServer = require('./api/server');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const isDevServer = path.basename(require.main.filename) === 'webpack-dev-server.js';

  if (isDevServer) {
    restServer();
  }

  return {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
      },
      extensions: ['.js', '.vue'],
    },
    module: {
      rules: [
        {
          test: /\.(js|vue)$/i,
          enforce: 'pre',
          loader: 'eslint-loader',
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          use: {
            loader: "vue-loader",
          },
        },
        {
          test: /\.pug$/,
          use: ['pug-loader'],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        template: './src/example/index.html',
        filename: './index.html'
      }),
      new WebpackBuildNotifierPlugin(),
    ],
    stats: {
      children: false,
    },
    optimization: {
      noEmitOnErrors: true,
    },
    devtool: isProduction ? 'source-map' : 'eval',  
  };
};
