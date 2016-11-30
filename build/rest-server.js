var jsonServer = require('json-server')
var jsf = require('json-schema-faker')
var config = require('../config')
var middlewares = jsonServer.defaults()

var schema = config.rest.schema
var host = config.rest.host
var port = config.rest.port
var server = jsonServer.create()
var router = jsonServer.router(jsf(schema))

exports.run = function() {
    server.use(middlewares)
    server.use(router)
    server.listen(port, host, function () {
        console.log('REST Server is listening on: ' + host + ':' + port)
    })
}
