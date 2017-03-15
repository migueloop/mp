import { Router } from 'express';
import Repository from 'repositories/itsm';
const router = Router();

// ////////
// Post //
// ///////

// FO: Everybody can access
router.post('/', (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  new Repository(tenant).createRequest(req.body.order)
  .then(data => res.status(200).json(data))
  .catch(err => next(err));
});

export default router;
