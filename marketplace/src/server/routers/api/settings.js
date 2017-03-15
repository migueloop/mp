import { Router } from 'express';
import Repository from 'repositories/settings';
import Actions from 'flux/actions';
import aclMiddlewareFactory from 'middleware/acl-middelware-factory';

const router = Router();


// ////////
// Get //
// ///////

// FO: get one, can access everybody
router.get('/seo', (req, res) => {
  const tenant = req.store.getState().get('tenant');
  new Repository(tenant).getSEO()
  .then(items => res.status(200).json(items))
  .catch(err => res.status(500).end(JSON.stringify(err)));
});

// FO: get one, can access everybody
router.get('/languages', (req, res) => {
  const tenant = req.store.getState().get('tenant');
  new Repository(tenant).Languages
  .then(items => res.status(200).json(items))
  .catch(err => res.status(500).end(JSON.stringify(err)));
});


// ////////
// Put //
// ////////

router.put('/seo', aclMiddlewareFactory(['EDIT_GENERAL_SETTINGS']), (req, res) => {
  const tenant = req.store.getState().get('tenant');
  new Actions(tenant)
  .BackOffice.Settings.setSEO(req.body)
  .then(action => {
    res.status(200).json(action.seo);
  })
  .catch(err => res.status(500).end(JSON.stringify(err)));
});

export default router;
