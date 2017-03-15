import { Router } from 'express';
import Repository from 'repositories/log-comment';
import ensureLogin from 'middleware/authentication-middleware';
const router = Router();

router.get('/', ensureLogin, (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  new Repository(tenant).getAll()
  .then(data => res.json(data))
  .catch(err => next(err));
});

router.post('/', (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  const payload = Object.assign({}, req.body);
  new Repository(tenant).create(payload)
  .then(comment => res.json(comment))
  .catch(err => next(err));
});

export default router;
