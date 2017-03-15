import { Router } from 'express';
import Actions from 'flux/actions';
import EmailRepository from 'repositories/email';
import AssignmentRepository from 'repositories/assignment';
import aclMiddlewareFactory from 'middleware/acl-middelware-factory';
import ensureLogin from 'middleware/authentication-middleware';
import config from 'config';
const router = Router();

import Logs from 'logs';

// ////////
// Get //
// ///////
// , aclMiddlewareFactory(['VALIDATE_ASSIGNMENT', 'EDIT_ASSIGNMENT', 'EDIT_ASSIGNMENT_OWN', 'CANCEL_PENDING_ASSIGNMENT', 'REQUEST_VALIDATION_ASSIGNMENT'])
router.get('/', (req, res, next) => {
  Logs.logger.access('\n \n \n \n \n \n \n \n \n \n \n \n \n \n \n [GET] /assignments/');
  if (req.user) {
    const tenant = req.store.getState().get('tenant');
    new Actions(tenant).Assignments.All
    .then(action => res.status(200).json(action.assignments))
    .catch(next);
  }
  else {
    res.status(401).end('Unauthorized');
  }
});

router.get('/test', (req, res) => res.status(200).json({ bundle: 'test Assignment' }));

router.get('/removed', ensureLogin, (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  new Actions(tenant).Assignments.GetDeleted()
  .then(action => res.status(200).json(action.assignment))
  .catch(next);
});

router.get('/draft', ensureLogin, (req, res, next) => {
  Logs.logger.verbose('[GET] /assignments/draft/');
  const tenant = req.store.getState().get('tenant');
  new Actions(tenant).Assignments.GetDraft()
  .then(action => res.status(200).json(action.assignments))
  .catch(next);
});

router.get('/pending', ensureLogin, (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  new Actions(tenant).Assignments.GetPending()
  .then(action => res.status(200).json(action.assignments))
  .catch(next);
});

router.get('/validated', ensureLogin, (req, res, next) => {
  const tenant = req.store.getState().get('tenant');

  new Actions(tenant).Assignments.GetPublished()
  .then(action => res.status(200).json(action.assignments))
  .catch(next);
});

router.get('/:id', aclMiddlewareFactory(['CREATE_ASSIGNMENT', 'VALIDATE_ASSIGNMENT', 'VALIDATE_ASSIGNMENT_OWN']), (req, res, next) => {
  if (req.user) {
    const tenant = req.store.getState().get('tenant');
    new Actions(tenant).Assignments.GetOne(req.params.id)
    .then(action => res.status(200).json(action.assignment))
    .catch(next);
  } else {
    res.status(401).end('Unauthorized');
  }
});

// GDP
router.get('/:id/gdpinfo/', ensureLogin, (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  new Actions(tenant).Assignments.GetGDPItemInfo(JSON.parse(req.query.payload))
  .then(action => res.status(203).json(action.payload))
  .catch(next);
});


// /////////
// Post //
// ////////

// Create assignment
router.post('/', aclMiddlewareFactory(['CREATE_ASSIGNMENT']), (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  const oAssignment = req.body;
  // set assigned_by if was not set before
  oAssignment.id_assigned_by = oAssignment.id_assigned_by || req.store.getState()
      .get('v02')
      .get('common')
      .get('user').get('id');
  // call the action, which calls the repository
  new Actions(tenant).Assignments.Create(oAssignment)
  .then(action => res.status(200).json(action.assignment))
  .catch(err => {
    console.log('ERROR', err);
    next(err);
  });
});

// Add component
router.post('/:id_assignment/item/:id_item', aclMiddlewareFactory(['CREATE_ASSIGNMENT', 'EDIT_ASSIGNMENT', 'EDIT_ASSIGNMENT_OWN']), (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  const oComponentData = req.body;
  new Actions(tenant).Assignments.AddComponent(oComponentData)
  .then(action => res.status(200).json({ id: action.assignment.id_assignment, component: action.assignment.item }))
  .catch(next);
});


// ////////
// Put //
// ///////

// Timeline system
router.put('/complete/:id/workflow/:id_po_system', ensureLogin, (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  new Actions(tenant).Assignments.CompleteAssignment(req.params.id, req.params.id_po_system, req.body)
  .then(action => res.status(203).json({ id: action.assignment.id, id_po_system: action.assignment.id_po_system }))
  .catch(next);
});

// State modifications
router.put('/:id/demandvalidation', aclMiddlewareFactory(['REQUEST_VALIDATION_ASSIGNMENT', 'REQUEST_VALIDATION_ASSIGNMENT_OWN']), (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  const transport = config.get(tenant).mail.nodemailerTransport;
  const emailRepository = new EmailRepository(tenant, transport);
  const assignmentRepository = new AssignmentRepository(tenant, transport);
  let action;
  new Actions(tenant).Assignments.DemandValidation(req.params.id)
  .then(a => {
    action = a;
    return assignmentRepository.getOne(parseInt(action.assignment.id, 10));
  })
  .then(assignment => res.status(200).json(assignment))
  .then(() => emailRepository.sendAssignmentRequestedNotification({ action, req }))
  .catch(next);
});

router.put('/:id/validate', aclMiddlewareFactory(['VALIDATE_ASSIGNMENT', 'VALIDATE_ASSIGNMENT_OWN']), (req, res, next) => {
  let action;
  const tenant = req.store.getState().get('tenant');
  // Send mail
  const transport = config.get(tenant).mail.nodemailerTransport;
  const emailRepository = new EmailRepository(tenant, transport);
  const assignmentRepository = new AssignmentRepository(tenant, transport);

  new Actions(tenant).Assignments.Validate(req.body)
  .then(a => {
    action = a;
    return assignmentRepository.getOne(parseInt(action.assignment.id, 10));
  })
  .then(assignment => res.status(200).json(assignment))
  .then(() => emailRepository.sendAssignmentValidatedNotification({ req, action }))
  .then(() => emailRepository.sendAssignmentValidatedNotificationToSupplier({ req, action }))
  .catch(e => {
    console.log('VALIDATE error:', e);
    next(e);
  });
});

router.put('/:id/cancelvalidation', aclMiddlewareFactory(['CANCEL_PENDING_ASSIGNMENT', 'CANCEL_PENDING_ASSIGNMENT_OWN']), (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  new Actions(tenant).Assignments.CancelValidation(req.params.id)
  .then(action => res.status(203).json(action.assignment))
  .catch(next);
});

// Update/Modify assignment
router.put('/:id', aclMiddlewareFactory(['EDIT_ASSIGNMENT', 'EDIT_ASSIGNMENT_OWN']), (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  new Actions(tenant).Assignments.Update(parseInt(req.params.id, 10), req.body)
  .then(action => res.status(200).json(action.assignment))
  .catch(next);
});


// //////////
// Delete //
// //////////

router.delete('/:id', aclMiddlewareFactory(['CREATE_ASSIGNMENT', 'VALIDATE_ASSIGNMENT', 'VALIDATE_ASSIGNMENT_OWN']), (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  new Actions(tenant).Assignments.Delete(req.params.id)
  .then(action => res.status(200).json(action.assignment))
  .catch(next);
});


export default router;
