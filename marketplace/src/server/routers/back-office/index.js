import { Router } from 'express';
import Repository from 'repositories';
import authenticationMiddleware from 'middleware/authentication-middleware';
import config from 'config';

import Logs from '../../logs';

const router = Router();
router.get('/*', authenticationMiddleware, (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  if (config.get(tenant).private && !req.isAuthenticated()) {
    return res.redirect('/login');
  }
  const repository = new Repository(tenant);
  repository.reloadStoreBackoffice(req.user)
  .then(results => {
    results.forEach(action => req.store.dispatch(action));
    res.render({ title: 'Home Marketplace' });
  })
  .catch(err => {
    Logs.logger.error(err);
    next(err);
  });
});

export default router;
