/* global require, module, process */

'use strict';

const Hapi = require('hapi');
const config = require('./../config/default');
const routes = require('./routes');

const SERVER_HOST = config.getServerHost();
const SERVER_PORT = config.getServerPort();

const server = new Hapi.Server();
const plugins = [].concat(routes);

server.connection({
  host: SERVER_HOST,
  port: SERVER_PORT
});

server.register(plugins, (err) => {
  if (err) {
    throw err;
  }

  server.start((err) => {
    if (err) {
      throw err;
    }
    return `Server running at: ${server.info.uri}`;
  });
});



server.tearDown = () => {
  server.stop({ timeout: 0 }, () => process.exit(0));
}

module.exports = server;