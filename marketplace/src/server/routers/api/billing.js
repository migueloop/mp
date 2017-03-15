import { Router } from 'express';
import Repository from 'repositories/billing';
import aclMiddlewareFactory from 'middleware/acl-middelware-factory';
import ensureLogin from 'middleware/authentication-middleware';

const router = Router();


// ////////
// Get //
// ///////

// FO: Everybody can access
router.get('/', (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  new Repository(tenant).fetch()
  .then(data => res.json(data));
});

export default router;
