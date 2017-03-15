'use strict';

console.log('Starting event-manager...');

if (process.env.NODE_ENV !== 'production') {
  require('babel-register');
}
var SwaggerExpress = require('swagger-express-mw');
var SwaggerUi = require('swagger-tools/middleware/swagger-ui');
var app = require('express')();
var cors = require('cors');
module.exports = app; // for testing
app.use(cors());
var config = {
  appRoot: __dirname // required config
};

console.log('Starting to create swagger...');
SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  app.use(SwaggerUi(swaggerExpress.runner.swagger));
  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 3000;

  console.log(`Event manager started and listening on port ${port}`);
  app.listen(port);
});
