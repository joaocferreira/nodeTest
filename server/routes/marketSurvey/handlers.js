/*global module, require */

const Joi = require('joi');

module.exports = {
  list: {
    handler: (request, reply) => {
      const mockedResponse = {
        data: []
      };
      reply(mockedResponse);
    }
  },
  find:{
    validate: {
      params: {
        id: Joi.any().required()
      }
    },
    handler: (request, reply) => {
      const mockedResponse = {
        data: {
          id: encodeURIComponent(request.params.id)
        }
      };
      reply(mockedResponse);
    }
  }
};