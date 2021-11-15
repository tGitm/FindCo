const errors = require('restify-errors');
const rjwt = require('restify-jwt-community');
const config = require("../../config/default");
module.exports = function routes(server) {

  var APIV1Controller = require('../controllers/apiV1Controller');

  //Not-Auth routes
  server.post('/v1/register', APIV1Controller.register);
  server.post('/v1/login', APIV1Controller.login);

  server.get('/api/hello', APIV1Controller.list);
  server.get('/api/hello/:id', APIV1Controller.getId)

  //Test AUTH Route
    server.get('/v1/test',
        rjwt({ secret: config.JWT_SECRET }),APIV1Controller.authTest);
}
