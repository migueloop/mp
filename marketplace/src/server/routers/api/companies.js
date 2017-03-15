import { Router } from 'express';
import { ERROR } from 'helpers/constants';
import Repository from 'repositories/user';
import Actions from 'flux/actions';
import aclMiddlewareFactory from 'middleware/acl-middelware-factory';
import ensureLogin from 'middleware/authentication-middleware';

const router = Router();


// ////////
// Get //
// ///////

// FO: Everybody can access
router.get('/', (req, res) => {
  const tenant = req.store.getState().get('tenant');
  new Actions(tenant).Companies.All
  .then(action => res.status(200).json(action.companies))
  .catch(err => res.status(500).end(JSON.stringify(err)));
});

// FO: Everybody can access
router.get('/activityfields', (req, res) => {
  const tenant = req.store.getState().get('tenant');
  new Repository(tenant)
  .getActivityFields()
  .then(items => res.status(200).json(items))
  .catch(err => res.status(500).end(JSON.stringify(err)));
});

// FO: Everybody can access
router.get('/platforms', (req, res) => {
  const tenant = req.store.getState().get('tenant');
  new Repository(tenant)
  .getPlatforms()
  .then(items => res.status(200).json(items))
  .catch(err => res.status(500).end(JSON.stringify(err)));
});

router.get('/:siret', ensureLogin, (req, res) => {
  const tenant = req.store.getState().get('tenant');
  new Repository(tenant).getCompanyBySiret(req.params.siret)
  .then(company => res.status(200).json(company))
  .catch(err => {
    err = err.message;
    if (ERROR[err] && ERROR[err].CODE === 404) {
      return res.status(404).end(ERROR[err].MESSAGE);
    }
    return res.status(500).end(err.toString());
  });
});

export default router;
