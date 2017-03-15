import { Router } from 'express';
import WorkflowRepository from 'repositories/workflow';
import Actions from 'flux/actions';
import ensureLogin from 'middleware/authentication-middleware';

const router = Router();


router.post('/', ensureLogin, (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  new WorkflowRepository(tenant).create(req.body.data)
  .then(data => res.json(data))
  .catch(err => next(err));
});

router.post('/dispatch', ensureLogin, (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  new WorkflowRepository(tenant).dispatch(req.body.data)
  .then(data => res.json(data))
  .catch(err => next(err));
});

router.get('/current-steps', ensureLogin, (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  const ids = req.query.ids;
  if (ids) {
    new Actions(tenant).Timelines.getItemCurrentTimelineStep({ timelines: ids })
    .then(action => res.status(200).json(action.currentSteps))
    .catch(err => {
      console.log('current-steps::err', err);
      return res.status(err.data.code || err.data.code || 500).json(err);
    });
  }
});

export default router;
