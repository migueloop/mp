import Models from 'helpers/repositories';
import Referential from 'helpers/repositories/referential';
import GDPRepository from 'helpers/repositories/gdp';
import WorkflowRepository from 'helpers/repositories/workflow';
import { parse as parseUser } from './user';
import configuration from 'configuration';

export function getAll(req, res, next) {
  const appId = configuration.get(req.tenant).appId;
  const userId = req.user && req.user.idUser || req.query.userId;
  const workflowRepository = new WorkflowRepository(req.tenant, userId);
  const gdpRepository = new GDPRepository(req.tenant, userId);
  let assignmentOrderFollowUps;
  const { AssignmentOrderFollowUps, Assignment, AssignmentOrder, Product, Bundle, Resource, ItemResource } = Models(req.tenant);
  AssignmentOrderFollowUps.findAll({
    include: [{
      model: AssignmentOrder,
      as: 'assignmentOrder',
      include: [{
        model: Assignment,
        as: 'assignment',
      }, {
        model: Product,
        as: 'product',
        include: [{
          model: Resource,
          as: 'resources',
        }],
      }, {
        model: Bundle,
        as: 'bundle',
        include: [{
          model: ItemResource,
          as: 'resources',
        }],
      }],
    }],
  })
  .then(a => {
    return res.json(a.map(p => p.parse()));
    const workflowId = assignmentOrderFollowUps.idWorkflowInstance;
    const gdpId = assignmentOrderFollowUps.assignmentOrder.idGdp;
    const gdpRequest = gdpRepository.getProductInformation(gdpId, assignmentOrderFollowUps.assignmentOrder.product.type);
    const workflowRequest = workflowRepository.get(workflowId);
    return Promise.all([gdpRequest, workflowRequest]);
  })
  // .then(values => {
  //   const gdp = values[0];
  //   // the workflow call actually returns timelines and not a workflwo object...
  //   const timelines = values[1];
  //   res.json({ ...assignmentOrderFollowUps, timelines, assignmentOrder: { ...assignmentOrderFollowUps.assignmentOrder, gdp } });
  // })
  .catch(err => {
    console.error(err);
    next(err);
  });
}

export function get(req, res, next) {
  const appId = configuration.get(req.tenant).appId;
  const id = req.swagger.params.id.value;
  const userId = req.user && req.user.idUser || req.query.userId;
  const workflowRepository = new WorkflowRepository(req.tenant, userId);
  const gdpRepository = new GDPRepository(req.tenant, userId);
  let assignmentOrderFollowUps;
  const { AssignmentOrderFollowUps, Assignment, AssignmentOrder, Product, Bundle, Resource, ItemResource } = Models(req.tenant);
  AssignmentOrderFollowUps.find({
    where: {
      id,
    },
    include: [{
      model: AssignmentOrder,
      as: 'assignmentOrder',
      include: [{
        model: Assignment,
        as: 'assignment',
      }, {
        model: Product,
        as: 'product',
        include: [{
          model: Resource,
          as: 'resources',
        }],
      }, {
        model: Bundle,
        as: 'bundle',
        include: [{
          model: ItemResource,
          as: 'resources',
        }],
      }],
    }],
  })
  .then(a => {
    assignmentOrderFollowUps = a.parse();
    const workflowId = assignmentOrderFollowUps.idWorkflowInstance;
    const gdpId = assignmentOrderFollowUps.assignmentOrder.idGdp;
    const gdpRequest = gdpRepository.getProductInformation(gdpId, assignmentOrderFollowUps.assignmentOrder.product.type);
    const workflowRequest = workflowRepository.get(workflowId);
    return Promise.all([gdpRequest, workflowRequest]);
  })
  .then(values => {
    const gdp = values[0];
    // the workflow call actually returns timelines and not a workflwo object...
    const timelines = values[1];
    res.json({ ...assignmentOrderFollowUps, timelines, assignmentOrder: { ...assignmentOrderFollowUps.assignmentOrder, gdp } });
  })
  .catch(err => {
    console.error(err);
    next(err);
  });
}

export function getExtra(req, res, next) {
  const appId = configuration.get(req.tenant).appId;
  const id = req.swagger.params.id.value;
  let assignmentOrder;
  const { Assignment, AssignmentOrder, Product, Bundle, ProductFollowUps, Resource, ItemResource } = Models(req.tenant);
  AssignmentOrder.find({
    where: {
      id,
    },
    include: [{
      model: Assignment,
      as: 'assignment',
    }, {
      model: Product,
      as: 'product',
      include: [{
        model: Resource,
        as: 'resources',
      },{
        model: ProductFollowUps,
        as: 'followUps',
      }],
    }, {
      model: Bundle,
      as: 'bundle',
      include: [{
        model: ItemResource,
        as: 'resources',
      }],
    }],
  })
    .then(a => {
      assignmentOrder = a.parse();
      return new Referential(req.tenant, req.user.idUser)
        .get({
          endpoint: `accounts/${assignmentOrder.assignment.idAssignedTo}`,
        });
    })
    .then(assignedTo => {
      assignmentOrder.assignment.assignedTo = parseUser(assignedTo, appId);
      return new Referential(req.tenant, req.user.idUser)
        .get({
          endpoint: `accounts/${assignmentOrder.assignment.idAssignedBy}`,
        });
    })
    .then(assignedBy => {
      assignmentOrder.assignment.assignedBy = parseUser(assignedBy, appId);
      res.json(assignmentOrder);
    })
    .catch(err => {
      console.error(err);
      next(err);
    });
}
