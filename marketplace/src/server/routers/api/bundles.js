import { Router } from 'express';
import multer from 'multer';
import { Actions } from 'v02/flux';
import EmailRepository from 'repositories/email';
import aclMiddlewareFactory from 'middleware/acl-middelware-factory';
import ensureLogin from 'middleware/authentication-middleware';

const router = Router();
const upload = multer({ dest: 'public/uploads/' });
import config from 'config';

import Logs from 'logs';


// ////////
// Get //
// ///////

// all
router.get('/', ensureLogin, (req, res) => {
  Log.logger.verbose("[GET] routers/api/bundles/");
  const tenant = req.store.getState().get('tenant');
  const token = req.store.getState().get('token');
  new Actions(tenant,token).FrontOffice.Bundles.All.payload
  .then(action => res.status(200).json(action.bundles))
  .catch(err => res.status(500).end(JSON.stringify(err)));
});

// regarding the state
router.get('/deleted', ensureLogin, (req, res) => {
  const tenant = req.store.getState().get('tenant');
  new Actions(tenant).Bundles.GetDeleted()
  .then(action => res.status(200).json(action.bundles))
  .catch(err => res.status(500).end(JSON.stringify(err)));
});

router.get('/draft', ensureLogin, (req, res) => {
  const tenant = req.store.getState().get('tenant');
  new Actions(tenant).Bundles.GetDraft()
  .then(action => res.status(200).json(action.bundles))
  .catch(err => res.status(500).end(JSON.stringify(err)));
});

router.get('/pending', ensureLogin, (req, res) => {
  const tenant = req.store.getState().get('tenant');
  new Actions(tenant).Bundles.GetPending()
  .then(action => res.status(200).json(action.bundles))
  .catch(err => res.status(500).end(JSON.stringify(err)));
});

// FO: can access everybody
router.get('/published', (req, res) => {
  const tenant = req.store.getState().get('tenant');
  new Actions(tenant).Bundles.GetPublished()
  .then(action => res.status(200).json(action.bundles))
  .catch(err => res.status(500).end(JSON.stringify(err)));
});

router.get('/test', (req, res) => res.status(200).json({ bundle: 'test bundle' }));

// FO: get one, can access everybody
router.get('/:id', (req, res) => {
  const tenant = req.store.getState().get('tenant');
  new Actions(tenant).Bundles.GetOne(req.params.id)
  .then(action => res.status(200).json(action.bundle))
  .catch(err => res.status(500).end(JSON.stringify(err)));
});


// /////////
// Post //
// ////////

// Create
router.post('/', aclMiddlewareFactory(['CREATE_BUNDLE']), (req, res) => {
  const tenant = req.store.getState().get('tenant');
  const oBundle = req.body;
  // set created by if was not set before
  oBundle.created_by_id = oBundle.created_by_id || req.store.getState().get('v02').get('common').get('user').toJS().id;
  new Actions(tenant).Bundles.Create(oBundle)
  .then(action => res.status(200).json(action.bundle))
  .catch(err => res.status(500).end(JSON.stringify(err)));
});

// Resources
router.post('/:id/resource', aclMiddlewareFactory(['CREATE_BUNDLE', 'EDIT_BUNDLE', 'EDIT_BUNDLE_OWN']), upload.single('resource'), (req, res) => {
  const tenant = req.store.getState().get('tenant');
  new Actions(tenant).Bundles.AddResource({
    id_item: parseInt(req.params.id, 10),
    file: req.file,
    show_carousel: req.body.show_carousel,
    carousel_order: req.body.carousel_order,
  })
  .then(action => res.status(200).json({ id_bundle: action.bundle.id, resource: action.bundle.resource }))
  .catch(err => res.status(500).end(JSON.stringify(err)));
});

// Components
router.post('/:id_item/component/:id_component', aclMiddlewareFactory(['CREATE_BUNDLE', 'EDIT_BUNDLE', 'EDIT_BUNDLE_OWN']), (req, res) => {
  const tenant = req.store.getState().get('tenant');
  const oComponentData = req.body;
  new Actions(tenant).Bundles.AddComponent(oComponentData)
  .then(action => res.status(200).json({ id_item: action.bundle.id_item, component: action.bundle.component }))
  .catch(err => res.status(500).end(JSON.stringify(err)));
});


// ////////
// Put //
// ////////

// State modifications
router.put('/:id/demandpublication', aclMiddlewareFactory(['REQUEST_PUBLICATION_BUNDLE', 'REQUEST_PUBLICATION_BUNDLE_OWN']), (req, res) => {
  const tenant = req.store.getState().get('tenant');
  const transport = config.get(tenant).mail.nodemailerTransport;
  const emailRepository = new EmailRepository(tenant, transport);
  new Actions(tenant).Bundles.DemandPublication(req.params.id)
  .then(action => {
    res.status(200).json(action.bundle);
    return emailRepository.sendBundlePublicationRequestedNotification({ req, action });
  })
  .catch(err => res.status(500).end(JSON.stringify(err)));
});

router.put('/:id/publish', aclMiddlewareFactory(['VALIDATE_PUBLICATION_BUNDLE', 'PUBLISH_BUNDLE', 'PUBLISH_BUNDLE_OWN']), (req, res) => {
  const tenant = req.store.getState().get('tenant');
  new Actions(tenant).Bundles.Publish(req.params.id)
  .then(action => res.status(200).json(action.bundle))
  .catch(err => res.status(500).end(JSON.stringify(err)));
});

router.put('/:id/unpublish', aclMiddlewareFactory(['UNPUBLISH_BUNDLE', 'UNPUBLISH_BUNDLE_OWN']), (req, res) => {
  const tenant = req.store.getState().get('tenant');
  new Actions(tenant).Bundles.Unpublish(req.params.id)
  .then(action => res.status(203).json(action.bundle))
  .catch(err => res.status(500).end(JSON.stringify(err)));
});

// show new resource in carousel
router.put('/:id_item/resource/:id_resource/toggle_carousel/:show_carousel', aclMiddlewareFactory(['CREATE_BUNDLE', 'EDIT_BUNDLE', 'EDIT_BUNDLE_OWN']), (req, res) => {
  const tenant = req.store.getState().get('tenant');
  // parse the string show_carousel to boolean value
  const bShowCarousel = req.params.show_carousel === 'true';
  new Actions(tenant).Bundles.ToggleShowResourceCarousel({
    id_item: parseInt(req.params.id_item, 10),
    id_resource: parseInt(req.params.id_resource, 10),
    show_carousel: bShowCarousel,
  })
  .then(action => res.status(200).json({ id_item: action.bundle.id_bundle, id_resource: action.bundle.id_resource, show_carousel: action.bundle.show_carousel }))
  .catch(err => res.status(500).end(JSON.stringify(err)));
});

// change logo
router.put('/:id_item/logo/:id_logo', aclMiddlewareFactory(['CREATE_BUNDLE', 'EDIT_BUNDLE', 'EDIT_BUNDLE_OWN']), (req, res) => {
  const tenant = req.store.getState().get('tenant');
  new Actions(tenant).Bundles.ChangeLogo({ id_item: parseInt(req.params.id_item, 10), logo_id: parseInt(req.params.id_logo, 10) })
  .then(action => res.status(200).json({ id_item: action.bundle.id_item, logo_id: action.bundle.logo_id }))
  .catch(err => res.status(500).end(JSON.stringify(err)));
});

// update/modify
router.put('/:id', aclMiddlewareFactory(['CREATE_BUNDLE', 'EDIT_BUNDLE', 'EDIT_BUNDLE_OWN']), (req, res) => {
  const tenant = req.store.getState().get('tenant');
  const oBundle = req.body;
  new Actions(tenant).Bundles.Update(parseInt(req.params.id, 10), req.body)
  .then(action => res.status(200).json(action.bundle))
  .catch(err => res.status(500).end(JSON.stringify(err)));
});


// //////////
// Delete //
// /////////

// resource
router.delete('/:id_item/resource/:id_resource', aclMiddlewareFactory(['CREATE_BUNDLE', 'EDIT_BUNDLE', 'EDIT_BUNDLE_OWN']), (req, res) => {
  const tenant = req.store.getState().get('tenant');
  new Actions(tenant).Bundles.DeleteResource({ id_item: parseInt(req.params.id_item, 10), id_resource: parseInt(req.params.id_resource, 10) })
  .then(action => res.status(203).json({ id_item: action.id_item, id_resource: action.id_resource }))
  .catch(err => res.status(500).end(JSON.stringify(err)));
});

// logo
router.delete('/:id_item/logo', aclMiddlewareFactory(['CREATE_BUNDLE', 'EDIT_BUNDLE', 'EDIT_BUNDLE_OWN']), (req, res) => {
  const tenant = req.store.getState().get('tenant');
  new Actions(tenant).Bundles.DeleteLogo({ id_item: parseInt(req.params.id_item, 10), logo_id: null })
  .then(action => res.status(200).json({ id_item: action.bundle.id_item, logo_id: null }))
  .catch(err => res.status(500).end(JSON.stringify(err)));
});

// from carousel
router.delete('/:id_item/component/:id_component/:show_order', aclMiddlewareFactory(['CREATE_BUNDLE', 'EDIT_BUNDLE', 'EDIT_BUNDLE_OWN']), (req, res) => {
  const tenant = req.store.getState().get('tenant');
  const oComponentData = { id_item: req.params.id_item, id_component: req.params.id_component, show_order: req.params.show_order };
  new Actions(tenant).Bundles.DeleteComponent(oComponentData)
  .then(action => res.status(200).json({ id_item: action.bundle.id_item, id_component: action.bundle.id_component, show_order: action.bundle.show_order }))
  .catch(err => res.status(500).end(JSON.stringify(err)));
});

// delete one
router.delete('/:id', aclMiddlewareFactory(['DELETE_BUNDLE', 'DELETE_BUNDLE_OWN']), (req, res) => {
  const tenant = req.store.getState().get('tenant');
  new Actions(tenant).Bundles.Delete(req.params.id)
  .then(action => res.status(200).json(action.bundle))
  .catch(err => res.status(500).end(JSON.stringify(err)));
});

export default router;
