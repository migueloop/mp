import { Router } from 'express';
import auth from './auth';
import corners from './corners';
import products from './products';
import companies from './companies';
import users from './users';
import messages from './messages';
import homeCarousel from './home-carousel';
import Repository from 'repositories';
import authenticationMiddleware from 'middleware/authentication-middleware';
import settings from './settings';
import locales from './locale';
import billing from './billing';
import bundles from './bundles';
import acl from './acl';
import assignments from './assignments';
import timelines from './timelines';
import itsm from './itsm';
import workflow from './workflow';
import externalWorkflows from './external-workflows';
import stock from './stock';
import logComments from './log-comments';
import userNotifications from './user-notifications';
import assignmentOrderFollowUps from './assignment-order-follow-ups';
import search from './search';

import Logs from 'logs';

const router = Router();

router.all('*', (req, res, next) => {
  Logs.looger.warn("\n \n \n \n \n \n \n \n \n \n \n * OLD CALL WAY!! IF YOU SEE THIS, CHANGE THIS CALL");

  res.header('Cache-Control', 'no-cache, private, must-revalidate');
  next();
});

router.get('/all', (req, res, next) => {
  Logs.looger.warn("\n \n \n \n \n \n \n \n \n \n \n Routers [GET] /all  OLD CALL WAY!! IF YOU SEE THIS, CHANGE THIS CALL");
  const tenant = req.store.getState().get('tenant');
  const repository = new Repository(tenant);
  //repository.reloadStore(req.store.getState().get('user'));
  // .then(results => {
  //   results.forEach(action => req.store.dispatch(action));
  //   res.json(req.store.getState().toJS());
  // })
  // .catch(next);
});

router.get('/admin/all', authenticationMiddleware, (req, res, next) => {
  Logs.looger.warn("\n \n \n \n \n \n \n \n \n \n \n Routers [GET] /admin/all/  OLD CALL WAY!! IF YOU SEE THIS, CHANGE THIS CALL");
  const tenant = req.store.getState().get('tenant');
  const repository = new Repository(tenant);
  //repository.reloadStoreBackoffice(req.store.getState().get('user'));
  // .then(results => {
  //   results.forEach(action => req.store.dispatch(action));
  //   res.json(req.store.getState().toJS());
  // })
  // .catch(next);
});

router.use('/auth', auth);
router.use('/users', users);
router.use('/corners', corners);
router.use('/products', products);
router.use('/assignments', assignments);
router.use('/companies', companies);
router.use('/settings', settings);
router.use('/message', messages);
router.use('/detail', homeCarousel);
router.use('/locale', locales);
router.use('/billing', billing);
router.use('/bundles', bundles);
router.use('/acl', acl);
router.use('/timelines', timelines);
router.use('/itsm', itsm);
router.use('/workflows', workflow);
router.use('/external-workflows', externalWorkflows);
router.use('/stock', stock);
router.use('/log-comments', logComments);
router.use('/notifications', userNotifications);
router.use('/assignment-order-follow-ups', assignmentOrderFollowUps);
router.use('/search', search);

router.use((err, req, res, next) => res.status(500).json(err))

export default router;
