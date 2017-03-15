import { Router } from 'express';
import Actions from 'flux/actions';
import Repository from 'repositories/locale';
import aclMiddlewareFactory from 'middleware/acl-middelware-factory';

const router = Router();


// ////////
// Get //
// ///////

// FO: can access everybody
router.get('/:language', (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  new Repository(tenant).getMessages(req.params.language)
  .then(messages => res.status(200).json(messages))
  .catch(error => next({ code: 500, error }));
});

export default router;
