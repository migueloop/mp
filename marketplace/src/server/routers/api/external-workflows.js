import { Router } from 'express';
import ExternalWorkflowRepository from 'repositories/external-workflow';

const router = Router();

router.get('/for-orders', (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  const orderIds = req.query.orderIds;
  const externalWorkflowRepository = new ExternalWorkflowRepository(tenant);
  new externalWorkflowRepository.getWorkflowsForOrders(orderIds)
  .then(data => res.json(data))
  .catch(err => next(err));
});

export default router;
