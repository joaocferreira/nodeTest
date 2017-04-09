/* global require */

const test = require('tape');
const server = require('./');
const config = require('./../config/default');
const SERVER_HOST = config.getServerHost();
const SERVER_PORT = config.getServerPort();

test('index.js', assert => {
    assert.equal(typeof server.start, 'function', 'server.start is a function');
    assert.equal(server.info.uri, `http://${SERVER_HOST}:${SERVER_PORT}`, 'server running in: http://${SERVER_HOST}:${SERVER_PORT}');
    server.tearDown();
    assert.end()
});