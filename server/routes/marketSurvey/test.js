/* global require */

const test = require('tape');
const server = require('./../../');

const requestDefaults = {
  method: 'GET',
  url: '/market-surveys',
  payload: {}
};

test('GET /markets-surveys', assert => {
  // Curious why Object.create(null) instead of just {} ?? Ask me
  const request = Object.assign(Object.create(null), requestDefaults);

  server.inject(request)
    .then(response => {
      assert.equal(response.statusCode, 200, 'status code is 200');
      assert.end();
    });
});

test('GET /markets-surveys/{id}', assert => {
  const id = '81111600';
  const request = Object.assign(Object.create(null), requestDefaults, {
    url: `/market-surveys/${id}`
  });

  server.inject(request)
    .then(response => {
      assert.equal(response.statusCode, 200, 'status code is 200');
      assert.equal(response.result.data.id, id, 'retrives asked survey')      
      assert.end();
    });
});