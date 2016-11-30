var path = require('path')
var schema = require('./rest.schema.js')

module.exports = {
  build: {
    env: {
      NODE_ENV: '"production"',
    },
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: '',
    assetsPublicPath: '/',
    productionSourceMap: true,
  },
  dev: {
    env: {
      NODE_ENV: '"development"',
    },
    port: 8080,
    host: "localhost",
    assetsSubDirectory: '',
    assetsPublicPath: '/',
    cssSourceMap: false,
  },
  test: {
    env: 'test',
  },
  rest: {
    host: "localhost",
    port: 8090,
    schema
  },
}
