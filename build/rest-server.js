var jsonServer = require('json-server')
var jsf = require('json-schema-faker')
var config = require('../config/rest')
var schema = require('../config/json.data.schema')
var middlewares = jsonServer.defaults()

var generateData = function() {
    return jsf(schema)
}

var server = jsonServer.create()
var router = jsonServer.router(generateData())

exports.run = function() {
    server.use(middlewares)
    server.use(router)
    server.listen(config.port, config.host, function () {
        console.log('REST Server is listening on port ' + config.port)
    })
}
