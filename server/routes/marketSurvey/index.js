/* global module, require */

const handlers = require('./handlers');

const register = function (server, options, next) {
  server.route({
    method: 'GET',
    path: '/market-surveys',
    config: handlers.list
  });
  server.route({
    method: 'GET',
    path: '/market-surveys/{id}',
    config: handlers.find
  });

  next();
};

register.attributes = {
  name: 'market-surveys',
  version: '1.0.0'
};

module.exports = register;