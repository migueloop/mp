import Models from 'helpers/repositories';
import Referential from 'helpers/repositories/referential';
import { parse as parseUser } from './user';
import configuration from 'configuration';
import GDPRepository from 'helpers/repositories/gdp';

export function getAll(req, res, next) {
  const { Assignment, AssignmentOrder, Product, Bundle, Resource, ItemResource } = Models(req.tenant);
  AssignmentOrder.findAll({
    include: [{
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
    }, {
      model: Assignment,
      as: 'assignment',
    }],
  })
    .then(assignments => {
      res.json(assignments.map(p => p.parse()));
    }).catch(err => {
      console.error(err);
      next(err);
    });
}

export function get(req, res, next) {
  const appId = configuration.get(req.tenant).appId;
  const id = req.swagger.params.id.value;
  let assignmentOrder;
  const { Assignment, AssignmentOrder, Product, Bundle, ItemState, Resource, ItemResource, ProductFollowUps } = Models(req.tenant);
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
      include: [
        {
          model: Resource,
          as: 'resources',
        },
        // {
        //   model: ProductFollowUps,
        //   as: 'followUps',
        // },
      ],
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
    if (req.query.gdp && req.query.userId) {
      return new GDPRepository(req.tenant, req.query.userId).getProductInformation(assignmentOrder.idGdp, assignmentOrder.product.type);
    }
    return res.json(assignmentOrder);
    // return new Referential(req.tenant, req.user.idUser).get({ endpoint: `accounts/${assignmentOrder.assignment.idAssignedTo}` });
  })
  // .then(assignedTo => {
  //   assignmentOrder.assignment.assignedTo = parseUser(assignedTo, appId);
  //   return new Referential(req.tenant, req.user.idUser).get({ endpoint: `accounts/${assignmentOrder.assignment.idAssignedBy}` });
  // })
  // .then(assignedBy => {
  //   assignmentOrder.assignment.assignedBy = parseUser(assignedBy, appId);
  //   res.json(assignmentOrder);
  // })
  .then(gdp => {
    res.json({ ...assignmentOrder, gdp });
  })
  .catch(err => {
    console.error(err);
    next(err);
  });
}
