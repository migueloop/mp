import { Router } from 'express';
import CornerRepository from 'repositories/corner';
import multer from 'multer';
import Actions from 'flux/actions';
import aclMiddlewareFactory from 'middleware/acl-middelware-factory';
import ensureLogin from 'middleware/authentication-middleware';

const router = Router();
const upload = multer({ dest: 'public/uploads/' });


// ////////
// Get //
// ///////

// FO: Everybody can access
router.get('/', (req, res) => {
  const tenant = req.store.getState().get('tenant');
  new CornerRepository(tenant).getAll()
  .then(corners => res.status(200).json(corners))
  .catch(err => res.status(500).end(JSON.stringify(err)));
});

// FO: Everybody can access
router.get('/keywords', (req, res) => {
  const tenant = req.store.getState().get('tenant');
  new CornerRepository(tenant).getAllKeywords()
  .then(corners => res.status(200).json(corners))
  .catch(err => res.status(500).end(JSON.stringify(err)));
});


// /////////
// Post //
// ////////

router.post('/:id/bestProduct', aclMiddlewareFactory(['EDIT_CORNER', 'EDIT_USER_CORNER', 'EDIT_USER_CORNER_OWN']), (req, res) => {
  // cornerId, productId, position
  const tenant = req.store.getState().get('tenant');
  new Actions(tenant).Corners
  .UpdateBestProduct(req.params.id, req.body.productId, req.body.position)
  .then(action => {
    res.status(200).json(action.corner);
  })
  .catch(err => res.status(500).end(err.toString()));
});

router.post('/:id/logo', aclMiddlewareFactory(['EDIT_CORNER', 'EDIT_USER_CORNER', 'EDIT_USER_CORNER_OWN']), upload.single('logo'), (req, res) => {
  const tenant = req.store.getState().get('tenant');
  new Actions(tenant).Corners
  .UpdateLogo(req.params.id, req.file)
  .then(action => {
    res.status(203).json(action.corner);
  })
  .catch(err => res.status(500).end(err.message));
});

router.post('/:id', aclMiddlewareFactory(['EDIT_CORNER', 'EDIT_USER_CORNER', 'EDIT_USER_CORNER_OWN']), (req, res) => {
  const tenant = req.store.getState().get('tenant');
  new Actions(tenant).Corners
  .Edit(req.params.id, req.body)
  .then(action => {
    res.status(203).json(action.corner);
  })
  .catch(err => res.status(500).end(err.message));
});


// ////////
// Put //
// ///////

router.put('/', aclMiddlewareFactory(['CREATE_CORNER']), (req, res) => {
  const tenant = req.store.getState().get('tenant');
  const user = req.store.getState().get('v02').get('common').get('user').toJS();
  const corner = req.body.corner;
  new CornerRepository(tenant)
  .create({ ...corner, created_by: user.id })
  .then(newCorner => res.status(200).json(newCorner))
  .catch(err => res.status(500).end(JSON.stringify(err)));
});


// //////////
// Delete //
// //////////

router.delete('/:id', aclMiddlewareFactory(['DELETE_CORNER', 'DELETE_CORNER_OWN']), (req, res) => {
  const tenant = req.store.getState().get('tenant');
  new CornerRepository(tenant)
  .delete({ id: req.params.id })
  .then(() => res.status(200).json())
  .catch(err => res.status(500).end(JSON.stringify(err)));
});

export default router;
