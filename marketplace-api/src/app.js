if (process.env.NODE_ENV !== 'production') {
  require('babel-register');
}
const express = require('express');
const cookieParser = require('cookie-parser')
const SwaggerExpress = require('swagger-express-mw');
const SwaggerUi = require('swagger-tools/middleware/swagger-ui');
const app = express();
const configuration = require('configuration').default;
const cors = require('cors');
const jwt = require('jsonwebtoken');

module.exports = app; // for testing

console.log("setting process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const config = {
  appRoot: __dirname, // required config
  swaggerFile: `${__dirname}/config/swagger.yaml`,
  swaggerSecurityHandlers: {
    AdminSecurity: function securityHandler1(req, authOrSecDef, scopesOrApiKey, cb) {
      // your security code
      console.log('ACA');
      if (req.cookies.mkp || (scopesOrApiKey || '').split(' ')[0] === 'Bearer') {
        const token = req.cookies.mkp || req.headers.authorization.split(' ')[1];
        jwt.verify(token, configuration.get(req.tenant).secret, (err, decoded) => {
          if (err) {
            return cb(err);
          }
          req.user = decoded;
          console.log('user', req.user);
          cb(null, decoded);
        });
      } else {
        // const credentials = auth(req);
        // console.log('AdminSecurity', credentials);
        const err = new Error('Authorization required');
        err.statusCode = 401;
        cb(err);
      }
    },
  },
};
app.use(cors());
app.use(cookieParser());
app.use((err, req, res, next) => {
  console.error(err)
  res.json({
    message: err.message,
  });
})
SwaggerExpress.create(config, (err, swaggerExpress) => {
  if (err) { throw err; }

  app.use(SwaggerUi(swaggerExpress.runner.swagger));


  app.use((req, res, next) => {
    const tenant = req.get('X-Tenant') || configuration.getTenantFromUrl(req.hostname);
    if (!tenant || configuration.tenants.indexOf(tenant) === -1) {
      const error = new Error('no tenant found');
      error.code = 404;
      return next(error);
    }
    req.tenant = tenant;
    next();
  });

  // install middleware
  swaggerExpress.register(app);

  const port = process.env.PORT || 10010;
  app.listen(port);
  console.log('Marketplace API running on port: ', port);
});
