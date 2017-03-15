import { Router } from 'express';
import ProductRepository from 'repositories/product';
import multer from 'multer';
import Actions from 'flux/actions';
import aclMiddlewareFactory from 'middleware/acl-middelware-factory';
import ensureLogin from 'middleware/authentication-middleware';
import BillingRepository from 'repositories/billing';
import EmailRepository from 'repositories/email';
import config from 'config';

const router = Router();
const upload = multer({ dest: 'public/uploads/' });

// /// ////// //////
// Get //  // //  //
// // ////// //////

// FO: Everybody can access
router.get('/lastest', (req, res) => {
  const tenant = req.store.getState().get('tenant');
  const productRepository = new ProductRepository(tenant);
  productRepository
  .getLatest()
  .then(items => res.status(200).json(items))
  .catch(err => res.status(500).end(JSON.stringify(err)));
});
router.get('/', (req, res) => {
  const tenant = req.store.getState().get('tenant');
  new ProductRepository(tenant).getAll()
  .then(items => res.status(200).json(items))
  .catch(err => res.status(500).end(JSON.stringify(err)));
});

// FO: Everybody can access
router.get('/published', (req, res) => {
  const tenant = req.store.getState().get('tenant');
  const productRepository = new ProductRepository(tenant);
  productRepository
  .getPublished()
  .then(items => res.status(200).json(items))
  .catch(err => res.status(500).end(JSON.stringify(err)));
});

// FO: Everybody can access
router.get('/:id/offers', (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  new Actions(tenant).Products.fetchOffers(req.params.id)
  .then(action => res.json({ idBilling: req.params.id, offers: action.payload }))
  .catch(err => res.status(500).end(err.message));
});


// /////////
// Post //
// ////////

// TODO: this use the billing token for security not the current user
router.post('/billing', ensureLogin, (req, res) => {
  const tenant = req.store.getState().get('tenant');
  new ProductRepository(tenant).setIdBilling(req.body.data.Id, {
    billingToken: req.body.params.token,
    id: req.body.data.ReferenceFeature,
  })
  .then(() => res.json({ status: 'ok' }))
  .catch(err => res.status(404).send(err));
});

// action to update timeline for product
router.post('/timeline', ensureLogin, (req, res, next) => {
  if (req.user) {
    const tenant = req.store.getState().get('tenant');
    const payload = req.body;
    new Actions(tenant).Products.setProductTimeline(payload)
    .then(() => res.send(payload))
    .catch(err => next(err));
  } else {
    res.status(401).end('Unauthorized');
  }
});

router.post('/follow-up-tasks', ensureLogin, (req, res, next) => {
  if (req.user) {
    const tenant = req.store.getState().get('tenant');
    const payload = req.body;
    const productRepository = new ProductRepository(tenant);
    productRepository.setFollowUpTasks(payload)
    .then(followUps => res.send(followUps))
    .catch(err => next(err));
  } else {
    res.status(401).end('Unauthorized');
  }
});

// Request the publication of an item
router.post('/:id/publish', aclMiddlewareFactory(['REQUEST_PUBLICATION_PRODUCT', 'REQUEST_PUBLICATION_PRODUCT_OWN']), (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  const productRepository = new ProductRepository(tenant);
  const id = req.params.id;
  // const transport = config.get(tenant).mail.nodemailerTransport;
  productRepository.demandPublication(id)
  .then(() => productRepository.get(id))
  .then(product => {
    res.status(203).json(product);
    return Promise.resolve(product);
  })
  // .then(product => {
  //   console.log('product email to be sent', product);
  //   const emailRepository = new EmailRepository(req.tenant, transport);
  //   emailRepository.sendProductPublicationRequestedNotification({ req, product });
  // })
  .catch(err => {
    console.log('error', err);
    next(err);
  });
});

router.post('/:id/resource/:resource/:order', aclMiddlewareFactory(['EDIT_PRODUCT', 'EDIT_PRODUCT_OWN']), upload.single('resource'), (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  new Actions(tenant).Products
  .AddSlideShowFromResource({
    id: parseInt(req.params.id, 10),
    resource: { id: parseInt(req.params.resource, 10), home_order: parseInt(req.params.order, 10) },
  })
  .then(action => {
    res.status(203).json(action.product);
  })
  .catch(err => next(err));
});

router.post('/:id', aclMiddlewareFactory(['EDIT_PRODUCT', 'EDIT_PRODUCT_OWN']), (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  const user = req.store.getState().get('v02').get('common').get('user').toJS();
  new Actions(tenant).Products
  .Edit(parseInt(req.params.id, 10), req.body, user)
  .then(action => {
    new BillingRepository(tenant).updateProduct(action.product);
    res.status(203).json(action.product);
  })
  .catch(err => next(err));
});


// ////////
// Put //
// ///////

// Publish an item
router.put('/:id/publish', aclMiddlewareFactory(['PUBLISH_PRODUCT', 'PUBLISH_PRODUCT_OWN', 'VALIDATE_PUBLICATION_PRODUCT']), (req, res) => {
  const tenant = req.store.getState().get('tenant');
  const productRepository = new ProductRepository(tenant);
  const transport = config.get(tenant).mail.nodemailerTransport;
  new Actions(req.tenant).Products.Publish(req.params.id)
  .then(action => {
    res.status(203).json(action.product);
    return action;
  })
  .then(action => {
    const emailRepository = new EmailRepository(tenant, transport);
    emailRepository.sendProductPublishedNotification({ req, action });
  })
  .catch(err => res.status(500).end(err.message));
});

router.put('/:id/resource/:order?', aclMiddlewareFactory(['EDIT_PRODUCT', 'EDIT_PRODUCT_OWN']), upload.single('resource'), (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  new Actions(tenant).Products
  .AddResource({
    id: parseInt(req.params.id, 10),
    resource: { home_order: req.params.order !== null ? parseInt(req.params.order, 10) : null, file: req.file },
  })
  .then(action => {
    res.status(203).json(action.product);
  })
  .catch(err => next(err));
});

// features / tabs availability
router.put('/:id/feature/:id_feature/available/:isAvailable', aclMiddlewareFactory(['EDIT_PRODUCT', 'EDIT_PRODUCT_OWN', 'CREATE_PRODUCT']), (req, res) => {
  const tenant = req.store.getState().get('tenant');
  new Actions(tenant).Products
  .UpdateFeatureAvailability({ id_product: +req.params.id, id_feature: req.params.id_feature, isAvailable: req.params.isAvailable })
  .then(action => {
    res.status(203).json(action.product);
  })
  .catch(err => res.status(500).end(err.message));
});

router.put('/', aclMiddlewareFactory(['CREATE_PRODUCT']), (req, res) => {
  const tenant = req.store.getState().get('tenant');
  const user = req.store.getState().get('v02').get('common').get('user').toJS();
  const { product } = req.body;
  product.created_by = user.id;
  new Actions(tenant).Products.Create(product, user)
  .then(action => {
    new BillingRepository(tenant).createProduct(action.product);
    res.status(203).json(action.product);
  })
  .catch(err => res.status(500).end(err.message));
});


// //////////
// Delete //
// //////////

router.delete('/:id/resource/:id_resource', aclMiddlewareFactory(['EDIT_PRODUCT', 'EDIT_PRODUCT_OWN']), (req, res) => {
  const tenant = req.store.getState().get('tenant');
  new Actions(tenant).Products.DeleteResource({ id: parseInt(req.params.id, 10), resource: { id: parseInt(req.params.id_resource, 10) } })
  .then(action => {
    res.status(203).json(action.product);
  })
  .catch(err => res.status(500).end(err.message));
});

router.delete('/:id/slideshow/:home_order', aclMiddlewareFactory(['DELETE_PRODUCT', 'DELETE_PRODUCT_OWN']), (req, res) => {
  const tenant = req.store.getState().get('tenant');
  new Actions(tenant).Products
  .DeleteFromSlideshow({
    id: parseInt(req.params.id, 10),
    resource: { home_order: parseInt(req.params.home_order, 10) },
  })
  .then(action => {
    res.status(203).json(action.product);
  })
  .catch(err => res.status(500).end(err.message));
});

router.delete('/:id', aclMiddlewareFactory(['DELETE_PRODUCT', 'DELETE_PRODUCT_OWN']), (req, res) => {
  const tenant = req.store.getState().get('tenant');
  new Actions(tenant).Products
  .Delete(req.params.id)
  .then(action => {
    new BillingRepository(tenant).deleteProduct(action.product);
    res.status(203).json(action.product);
  })
  .catch(err => res.status(500).end(err.message));
});


export default router;
