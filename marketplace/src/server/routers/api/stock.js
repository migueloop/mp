import { Router } from 'express';
import Repository from 'repositories/stock';
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
  const stock = req.body.stock;
  const stockCopy = Object.assign({}, stock);
  stockCopy.created_at = parseInt(stock.createdAt, 10);
  stockCopy.count = parseInt(stock.count, 10);
  stockCopy.id_product = parseInt(stock.productId, 10);
  new Repository(tenant).create(stock)
  .then(data => {
    stockCopy.id = data.insertId;
    return res.json(stockCopy);
  })
  .catch(err => next(err));
});

export default router;
