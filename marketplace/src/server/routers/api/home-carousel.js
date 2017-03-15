import { Router } from 'express';
import Repository from 'repositories/home-carousel';
import aclMiddlewareFactory from 'middleware/acl-middelware-factory';
import ensureLogin from 'middleware/authentication-middleware';

// ////////
// Get //
// ///////

// FO: can access everybody
const router = Router();
router.get('/:id', (req, res) => {
  const tenant = req.store.getState().get('tenant');
  new Repository(tenant).getPage(req.params.id)
  .then(items => res.status(200).json(items))
  .catch(err => res.status(500).end(JSON.stringify(err)));
});


// ////////
// Put //
// ///////

router.put('/page/:id', ensureLogin, (req, res) => {
  const tenant = req.store.getState().get('tenant');
  new Repository(tenant).setPage(req.body)
  .then(items => res.status(200).json(items))
  .catch(err => res.status(500).end(JSON.stringify(err)));
});

export default router;
