import { Router } from 'express';
import Repository from 'repositories/assignment-order-follow-ups';
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
  const payload = Object.assign({}, req.body.payload);
  new Repository(tenant).create(payload)
  .then(followUp => {
    console.log('followup', followUp);
    return res.json(followUp);
  })
  .catch(err => next(err));
});

router.put('/:id', (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  const payload = Object.assign({}, req.body.payload);
  new Repository(tenant).update(payload)
  .then(followUp => res.json(followUp))
  .catch(err => next(err));
});

router.post('/:idFollowUp/complete-current-step', (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  const idFollowUp = parseInt(req.params.idFollowUp, 10);
  const data = req.body || {};
  new Repository(tenant).completeCurrentStep(idFollowUp, data)
  .then(followUp => res.json(followUp))
  .catch(err => next(err));
});


export default router;
