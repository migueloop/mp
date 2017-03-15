import { Router } from 'express';
import Repository from 'repositories/timeline';
import Actions from 'flux/actions';
import ensureLogin from 'middleware/authentication-middleware';

const router = Router();


router.get('/', ensureLogin, (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  new Repository(tenant).getAll()
  .then(data => res.json(data))
  .catch(err => next(err));
});

router.get('/itemcurrenttimelinestep', ensureLogin, (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  const payload = req.query.payload;
  if (payload) {
    new Actions(tenant).Timelines.getItemCurrentTimelineStep(JSON.parse(payload))
    .then(action => res.status(200).json(action.currentSteps))
    .catch(err => {
      console.log('itemcurrenttimelinestep::err', err);
      return res.status(err.data.code || err.data.code || 500).json(err);
    });
  }
});

export default router;
