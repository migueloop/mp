import { Router } from 'express';
import MessageRepository from 'repositories/message';
import ProductRepository from 'repositories/product';
import aclMiddlewareFactory from 'middleware/acl-middelware-factory';

const router = Router();


// /////////
// Post //
// ////////

// FO: get one, can access everybody
// TODO: Very unsecure.... It's a form, anyone from FO can do big damage
router.post('/:type', (req, res) => {
  const tenant = req.store.getState().get('tenant');
  const message = req.body;
  const type = req.params.type;
  new MessageRepository(tenant).send({ ...message, messageType: type })
  .then(result => {
    message.id = result.insertId;
    res.status(200).json(message);
  })
  .catch(err => res.status(500).json(err));
});

export default router;
