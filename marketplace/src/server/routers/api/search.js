import { Router } from 'express';
const router = Router();

router.get('/', (req, res, next) => {
  const query = req.query;
  return res.json(query);
});

export default router;
