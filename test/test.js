var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with home page', function(done) {
    request(app).get('/')
        .expect('Content-Type', /html/)
        .expect(200, done);
  });
});