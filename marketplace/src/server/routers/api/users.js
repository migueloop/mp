import { Router } from 'express';
import Repository from 'repositories/user';
import ensureLogin from 'middleware/authentication-middleware';
const router = Router();

// ////////
// Get //
// ///////

router.get('/', ensureLogin, (req, res, next) => {
  // return res.send(req.query);
  const tenant = req.store.getState().get('tenant');
  // const userIds = req.query.userIds ? req.query.userIds.map(i => parseInt(i, 10)) || [];
  new Repository(tenant, req.user.id).getAll()
  .then(users => res.status(200).json(users))
  .catch(next);
});

export default router;
