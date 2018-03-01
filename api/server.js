const js = require('json-server');
const jsf = require('json-schema-faker');
const schema = require('./schema');

const middlewares = js.defaults();
const router = js.router(jsf(schema));
const server = js.create();
const host = '0.0.0.0';
const port = 8090;

module.exports = function() {
    server.use(middlewares);
    server.use(router);
    server.listen(port, host, () => {
        console.log(`REST Server is listening on: ${host}:${port}`);
    });
}
