import { Router } from 'express';
import Repository from 'repositories/user-notification';
import ensureLogin from 'middleware/authentication-middleware';
const router = Router();

router.get('/', ensureLogin, (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  const userId = req.query.userId;
  let query;
  if (userId) {
    query = new Repository(tenant).getByUser(userId);
  } else {
    query = new Repository(tenant).getAll();
  }
  return query.then(data => res.json(data))
  .catch(err => next(err));
});

router.post('/', (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  const payload = Object.assign({}, req.body);
  new Repository(tenant).create(payload)
  .then(notification => res.json(notification))
  .catch(next);
});

router.post('/:id/click', (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  const notificationId = req.params.id;
  new Repository(tenant).click(notificationId)
  .then(notification => res.json(notification))
  .catch(next);
});

router.post('/:id/view', (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  const notificationId = req.params.id;
  new Repository(tenant).click(notificationId)
  .then(notification => res.json(notification))
  .catch(next);
});

router.post('/view-all', (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  const userId = req.body.userId;
  new Repository(tenant).viewAllUserNotifications(userId)
  .then(notifications => res.json(notifications))
  .catch(next);
});

router.post('/click-all', (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  const userId = req.body.userId;
  new Repository(tenant).clickAllUserNotifications(userId)
  .then(notifications => res.json(notifications))
  .catch(next);
});

router.post('/add-product-publication-request-notification', (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  const params = req.body;
  new Repository(tenant).createProductPublicationRequestNotification(params)
  .then(notifications => res.json(notifications))
  .catch(next);
});

router.post('/add-bundle-publication-request-notification', (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  const params = req.body;
  new Repository(tenant).createBundlePublicationRequestNotification(params)
  .then(notifications => res.json(notifications))
  .catch(next);
});

router.post('/add-assignment-publication-request-notification', (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  const params = req.body;
  new Repository(tenant).createAssignmentPublicationRequestNotification(params)
  .then(notifications => res.json(notifications))
  .catch(next);
});

router.post('/add-assignment-order-action-notification', (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  const params = req.body;
  new Repository(tenant).createAssignmentOrderActionNotifications(params)
  .then(notifications => res.json(notifications))
  .catch(next);
});

export default router;
