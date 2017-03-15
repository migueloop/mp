require('helpers/polifill');
import { join } from 'path';
import fs from 'fs';

// Framework
import express from 'express';
import compress from 'compression';
import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';

// Middleware
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import morgan from 'morgan';

// Helpers
import { fileExists, sha256WithSecretKey } from 'helpers/utils';
import getComponentActions from 'helpers/getComponentActions';
import getClientConfig from 'util/getClientConfig';

// Initial Configuration
import config, { watch } from 'config';
import * as mysqlDriver from 'repositories/drivers/mysql';

// Express Routes
import routers from 'routers';

// Express Security
import security from 'config/security-config';

import UserRepository from 'repositories/user';

// React Router
import Routes from 'routes';
import { match, RouterContext } from 'react-router';

// REDUX
import { Provider } from 'react-redux';
import { makeStore } from 'flux/store';
import { Actions } from 'v02/flux';
import ActionsOld from 'flux/actions';

import Logs from 'logs';

import ErrorPageCmpt from 'v02/common/generic-components/error';
import Internationalization from 'v02/common/modules/locale/components/internationalization';
import passport from 'passport';
import session from 'express-session';
import connectRedis from 'connect-redis';

import webpack from 'webpack';
import webpackConfig from '../../webpack.config';
import webpackConfigOsx from '../../webpack.config.osx';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

// SSO
import { Strategy as Identity3Strategy } from './lib/passport-identityserver3';

// API
import API from 'v02/restful-driver';

(() => {
  const path = require('path');
  global.DIR = { ROOT: path.resolve(__dirname, '../') };
  global.DIR.PUBLIC = path.join(global.DIR.ROOT, 'client');
  // reload configuration every 5 minutes
  watch();
})();

const RedisStore = connectRedis(session);

function ignoreMiddleware(url) {
  if (url.indexOf('/public/') === 0 || url.indexOf('/static/') === 0) {
    return true;
  }
  return false;
}

Logs.logger.warn('Temporally disabled server authorization (process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0")');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
process.env.API_V02_ENDPOINT = config.get('').marketplace_api.endpoint;
process.env.API_V02_ENDPOINT_PUBLIC = config.get('').marketplace_api.public_endpoint;
console.log('server::process.env.API_V02_ENDPOINT', process.env.API_V02_ENDPOINT);
const controller = {
  init: () => {
    const app = express();
    controller.setSecurity(app);
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => Logs.logger.info('Server listening on port: ' + PORT));
    controller.addMiddleware(app);
    // controller.setSecurity(app);
    mysqlDriver.init();

    controller.addRoutes(app);
    // To improve speed of the first load after restarting the server
    // preload the routes on memory
    match({ routes: new Routes(config.tenants[0], {}).get(), location: '/' }, () => {
    });
    controller.addErrorHandler(app);
    return app;
  },

  addMiddleware: app => {
    // Run Webpack dev server in development mode
    if (process.env.NODE_ENV === 'development') {
      const webpackConfigToUse = process.env.setup_type === 'osx' ? webpackConfigOsx : webpackConfig;
      const compiler = webpack(webpackConfigToUse);
      app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfigToUse.output.publicPath, stats: 'errors-only' }));
      app.use(webpackHotMiddleware(compiler));
    }
    app.use((req, res, next) => {
      const tenant = config.getTenantFromUrl(req.hostname);
      req.passport = passport;
      const workflowEndpoints = config.get(tenant).workflow && config.get(tenant).workflow.endpoint;
      if (workflowEndpoints && workflowEndpoints.front.proxy && workflowEndpoints.front.proxy.indexOf(req.hostname) !== -1) {
        const httpProxy = require('http-proxy');
        const proxy = httpProxy.createProxyServer();
        return proxy.web(req, res, { target: workflowEndpoints.front.url });
      }
      if (workflowEndpoints && workflowEndpoints.api.proxy && workflowEndpoints.api.proxy.indexOf(req.hostname) !== -1) {
        const httpProxy = require('http-proxy');
        const proxy = httpProxy.createProxyServer();
        return proxy.web(req, res, { target: workflowEndpoints.api.url });
      }
      req.store = makeStore();
      if (!tenant) { throw new Error('No Tenant. Please verify hostname.'); }
      req.getProtocolAndDomain = () => `${req.protocol}://${req.hostname}`;
      req.store.dispatch(new Actions(tenant).Common.Tenant.setName(tenant));
      req.tenant = tenant;
      next();
    });

    app.use(morgan('combined', { format: 'combined', stream: { write: str => Logs.logger.info(str) } }));
    app.set('view engine', 'react');
    app.use(compress());
    app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(cookieParser('signed-cookie-secret'));
    if (process.env.NODEMON) {
      const httpProxy = require('http-proxy');
      const proxy = httpProxy.createProxyServer();
      // We require the bundler inside the if block because
      // it is only needed in a development environment. Later
      // you will see why this is a good idea
      // require('./bundler.js')();
      // Any requests to localhost:3000/build is proxy
      // to webpack-dev-server
      app.use('/static', (req, res) => proxy.web(req, res, { target: 'http://localhost:8080/static' }));
    } else {
      app.use('/static', express.static(`${__dirname}/../client/public`));
    }
    app.use((req, res, next) => {
      if (ignoreMiddleware(req.url)) {
        return next();
      }
      const tenant = config.getTenantFromUrl(req.hostname);
      const hour = 3600000;
      const twentFourHours = hour * 24;
      const redisHost = config.get(tenant).redis.host;
      const redisPort = config.get(tenant).redis.port;
      const sessionPrefix = `sess:${tenant}:`;
      const redisOptions = {
        ttl: twentFourHours,
        host: redisHost,
        port: redisPort,
        prefix: sessionPrefix,
      };
      const sessionStore = new RedisStore(redisOptions);
      session({
        secret: `laksdjh3498078aksjlhdfkjh98ASDqowu${tenant}`,
        resave: true,
        saveUninitialized: false,
        store: sessionStore,
        cookie: { maxAge: twentFourHours, expires: new Date(Date.now() + twentFourHours) },
      })(req, res, next);
    });
    app.use(passport.initialize());
    app.use(passport.session());
    passport.use(new Identity3Strategy('sso', {
      configuration_endpoint: config.get('').identityserver ?
        config.get('').identityserver.configuration_endpoint :
        'https://idsrv.digitaldimension.services/core/.well-known/openid-configuration',
      client_secret: 'secret',
      callback_url: '/login/',
      scopes: ['write'],
      // This optional jwt config will be sent to jsonwebtoken to validate the request's access token
      jwt: {
        ignoreNotBefore: true,
        clockTolerance: 60,
      },
      transformIdentity: (identity, req, success, error) => {
        console.log('transform: TENANT: ', req.tenant);
        // TODO: Check on Referential if this user can access to this application (config.referential.applicationId)
        // on this tenant (config.referential.tenantId)
        // On Error
        // const err = new Error('Can\'t access to this application');
        // err.code = 410;
        // return error(err);
        const id = parseInt(identity.sub, 10);
        new UserRepository(req.tenant, id).get(id)
        .then(user => {
          console.log('transformIdentity::user', user);
          if (user.id_role === -1) {
            const err = new Error('No access');
            err.code = 410;
            throw err;
          }
          return user;
        })
        .then(success)
        .catch(error);
      },
    }));

    passport.serializeUser((user, done) => {
      done(null, { id: user.id, tenant: user.tenant });
    });
    passport.deserializeUser((u, done) => {
      let User;
      new UserRepository(u.tenant, u.id).get(u.id)
      .then(user => {
        User = user;
        return new API(u.tenant)
        .post({
          endpoint: 'user/authorize',
          params: {
            secret: config.get(u.tenant).api.key,
            idUser: u.id,
          },
        });
      })
      .then(({ token }) => done(null, { token, ...User }))
      .catch(e => {
        Logs.logger.error('ERROR AUTHORIZING', e);
        return done(done);
      });
    });

    // add Tenant and redefine render
    app.use((req, res, next) => {
      if (ignoreMiddleware(req.url)) { return next(); }
      const tenant = config.getTenantFromUrl(req.hostname);
      const appLocales = ['es', 'en', 'fr'];
      const locale = req.acceptsLanguages(appLocales) || 'en';
      //  FIXME: for some reason req.url is overwrite somewhere
      req.location = req.url;
      if (req.user) {
        // TODO: FIX THIS ASAP TO USE ACTION CREATOR
        req.store.dispatch({ type: 'LOGIN USER V02', payload: req.user });
      }

      res.render = (params, layout = 'layout') => {
        const Component = require(`v02/common/generic-components/${layout}`).default;
        const routes = new Routes(tenant, req.store).get();
        match({ routes, location: req.location }, (error, redirectLocation, renderProps) => {
          if (error) { return next(error); }
          if (redirectLocation) { return res.redirect(302, redirectLocation.pathname + redirectLocation.search); }
          if (!renderProps) {
            const err = new Error('Page not found');
            err.code = 404;
            return next(err);
          }
          // ensure that user can't have access to features that they don't have available in the config.json of the tenant
          // need to have on every React component a featureName static function that returns the name of the feature. Has to match with model.
          const features = config.get(tenant).features;
          renderProps.components.forEach(c => {
            if (c.featureName) {
              let key = features;
              c.featureName().split('.').forEach(k => {
                key = key[k.toLowerCase()];
                if (key && !key.available) {
                  const err = new Error('Sorry, we haven\'t found the requested page');
                  err.code = 404;
                  err.stack = 'Need help? Please, feel free to contact us';
                  return next(err);
                }
              });
            }
          });
          // new ActionsOld(tenant).Features.setTenantFeatures(config.get(tenant).features)
          // .then(req.store.dispatch);
          const action = new Actions(req.tenant);
          const actions = [
            action.Common.Analytics.set(config.get(req.tenant).piwik),
            action.Common.Locale.fetch(locale),
            action.Common.Seo.setUrl(req.getProtocolAndDomain()),
            action.Common.UserVoice.setIntercomAppId(config.get(tenant).intercom.app_id),
            action.BackOffice.Features.setAll(config.get(tenant).features),
          ];
          if (req.user) {
            actions.push(action.Common.UserVoice.setUserPrivateKey(sha256WithSecretKey(req.user.id, config.get(tenant).intercom.secret_key)));
          }
          if (!req.user) {
            actions.push(action.Common.Seo.fetchSite());
          }
          const clientConfig = getClientConfig(config.get(tenant));
          const ActionsV02 = action;
          console.log('renderProps.components', renderProps.components);
          const componentNames = renderProps.components.map(cmpt => cmpt.displayName);
          console.log('renderProps.components', componentNames);
          componentNames.forEach(name => {
            if (!name) {
              throw new Error('You are trying to render something that is not a component. Please review what components you are loading.');
            }
          });
          const allRequiredActionKeys = renderProps.components.reduce((p, n) => {
            return p.concat(n.requiredActionKeys || []);
          }, []);
          console.log('allRequiredActionKeys', JSON.stringify(allRequiredActionKeys, null, 2));
          // Get all of the actions needed for this component and dispatch them so they are available in the store on the server
          const componentsActions = renderProps.components.reduce((previous, component) => {
            // Here the component is the class
            const requiredActionKeys = component.requiredActionKeys || [];
            console.log('REQUIRED ACTION KEYS', component.name, requiredActionKeys);
            const componentActions = getComponentActions(ActionsV02, renderProps.params, req.query, requiredActionKeys);
            return previous.concat(componentActions);
          }, []);
          console.log('componentsActions', componentsActions);
          const actionsToDispatch = actions.concat(componentsActions);
          Promise.all(actionsToDispatch.map(req.store.dispatch))
          .then(() => {
            console.log('req.store.getState().toJS()', req.store.getState().toJS().v02.backOffice.features.all);
            const HTML = renderToString(
              <Provider store={req.store}>
                <Internationalization >
                  <RouterContext {...renderProps} />
                </Internationalization>
              </Provider>
            );
            res.header('Cache-Control', 'no-cache, private, must-revalidate');
            return res.status(200).send(`<!DOCTYPE html> ${renderToStaticMarkup(<Component {...params} state={req.store.getState().toJS()} clientConfig={clientConfig} >${HTML}</Component>)}`);
          })
          .catch(err => {
            Logs.logger.error('Error getting action promises', err);
            return next(err);
          });
        });
      };
      next();
    });
  },
  addErrorHandler: app => {
    app.use((err, req, res, next) => {
      // No access to this app
      if (err.code === 410) {
        // Redirect to error page because this user dont have access to this application on this tenant (IdentityServer + Referential API)
        return res.json({
          error: 'No access',
        });
      }

      const tenant = config.getTenantFromUrl(req.hostname);
      const code = err.code || err.status || 500;
      let message = err.message || err.statusText;
      let stack = err.stack || err.data;
      // Handle incorrect error creation
      if (err.error) {
        message = err.error.message;
        stack = err.error.stack;
      }
      const errorData = { message, stack, code };
      errorData.code = errorData.code || 500;
      const log = `
        ERROR
        ${code}
        ${err.message}
        ${err.stack}
      `;
      Logs.logger.error(log);
      res.status(code);
      if (req.xhr) {
        return res.json(errorData);
      }
      if (err.code === 401) {
        return res.redirect('/', 302);
      }
      const Component = require('v02/common/generic-components/error/layout').default;
      const ErrorPage = ErrorPageCmpt.get(tenant);
      const errorHTML = renderToStaticMarkup(
      <Provider store={req.store}><Component error={true}><ErrorPage error={errorData} /></Component></Provider>
      );
      res.header('Content-Type', 'text/html');
      return res.end(errorHTML);
    });
  },
  addRoutes: app => {
    app.get('/favicon.ico', (req, res) => {
      const tenantName = req.store.getState().get('tenant');
      const filePath = [global.DIR.PUBLIC].concat('public/uploads', tenantName, 'favicon.ico').join('/');
      res.setHeader('Cache-Control', 'public, max-age=86400, must-revalidate');
      if (fileExists(filePath) && fs.lstatSync(filePath).isFile()) {
        return res.sendFile(filePath);
      }
      return res.sendFile([global.DIR.PUBLIC].concat('public/images/favicon.ico').join('/'));
    });
    // TODO: Do we need this manual static file stuff?
    // Answer Yes, this look recursively a specific tenant file
    app.get('/public/*', (req, res) => {
      const path = req.url.split('/');
      const tenantName = req.store.getState().get('tenant');
      //  remove first "/"
      path.shift();
      // Remove url query
      path[path.length - 1] = path[path.length - 1].split('?')[0];
      for (let i = path.length; i > 0; i--) {
        let filePath = [global.DIR.PUBLIC].concat(path);
        filePath.splice(i, 0, tenantName);
        filePath = filePath.join('/');
        if (fileExists(filePath) && fs.lstatSync(filePath).isFile()) {
          res.setHeader('Cache-Control', 'public, max-age=86400, must-revalidate');
          return res.sendFile(filePath);
        }
      }
      const filePath = join(global.DIR.PUBLIC, path.join('/'));
      if (fileExists(filePath) && fs.lstatSync(filePath).isFile()) {
        res.setHeader('Cache-Control', 'public, max-age=86400, must-revalidate');
        return res.sendFile(filePath);
      }
      return res.status(404).end('No file found');
    });

    app.get('/login',
      (req, res, next) => {
        const clientId = config.get(req.tenant).sso ? config.get(req.tenant).sso.client_id : req.tenant;
        console.log('==================>');
        console.log('attempting auth....');
        console.log('post_logout_redirect_uri', req.location);
        console.log('clientId', clientId);
        return passport.authenticate('sso', {
          acr_values: clientId,
          client_id: clientId,
          post_logout_redirect_uri: `${req.location}`,
        })(req, res, next);
      }, (req, res) => { // Successful login handler, just redirect to homepage^M
        res.redirect('/admin');
      });

    app.get('/logout', (req, res) => {
      passport._strategy('sso').endSession(req, res);
    });

    app.use('/emails', routers.emailTemplates);
    app.use('/Admin', routers.BackOffice);
    app.use('/api/v01', routers.Api);
    app.use('/', routers.FrontOffice);
  },
  setSecurity: app => {
    app.use((req, res, next) => {
      security.headers.forEach(header => {
        res.header(header.name, header.value);
      });
      next();
    });
  },
};

process.on('uncaughtException', function(err) {
  Logs.logger.error("THERE HAS BEEN AN UNEXPECTED EXCEPTION", err);
});

export default controller;
