import Models from 'helpers/repositories';
import Referential from 'helpers/repositories/referential';
import { parse as parseUser } from './user';
import configuration from 'configuration';
import { ASSIGNMENT, PRODUCT } from 'helpers/constants';
import GDPRepository from 'helpers/repositories/gdp';
import WorkflowRepository from 'helpers/repositories/workflow';
import _ from 'underscore';

export function getAll(req, res, next) {
  const workflow = new WorkflowRepository(req.tenant);
  const { Assignment, AssignmentOrder, Product, Bundle, ItemState, Resource, ItemResource, ProductTimelineStepExecutors, Timeline, TimelineStep, ProductFollowUps } = Models(req.tenant);
  Assignment.findAll({
    include: [{
      model: ItemState,
      as: 'state',
    }, {
      model: AssignmentOrder,
      as: 'items',
      include: [{
        model: Product,
        as: 'product',
        include: [{
          model: Resource,
          as: 'resources',
        },
        // {
        //   model: ProductFollowUps,
        //   as: 'followUps',
        // },
        {
          model: ProductTimelineStepExecutors,
          as: 'timelineStepExecutors',
        },
        {
          model: Timeline,
          as: 'timeline',
          include: [
            {
              model: TimelineStep,
              as: 'timelineSteps',
            },
          ],
        },
      ],
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
  .then(assignments => {
    const parsedAssignments = assignments.map(p => p.parse());
    const allOrders = parsedAssignments.reduce((p, n) => p.concat(n.items), []);
    const allOrderPoIds = allOrders.map(order => order.idPoSystem);
    workflow.getActiveSteps(allOrderPoIds.join())
    .then(currentSteps => {
      const updatedAssignments = parsedAssignments.map(a => {
        const clonedAssignment = _.clone(a);
        const orders = clonedAssignment.items;
        const updatedOrders = orders.map(order => {
          const orderClone = _.clone(order);
          orderClone.stepName = null;
          const orderStepMatch = currentSteps.find(step => step.id === orderClone.idPoSystem);
          if (orderStepMatch) {
            orderClone.stepName = orderStepMatch.step;
          }
          return orderClone;
        });
        clonedAssignment.items = updatedOrders;
        return clonedAssignment;
      });
      return res.json(updatedAssignments);
    })
    .catch(err => {
      console.log("Error getting currentSteps. Returning the assignments anyway, the error was: ", JSON.stringify(err, null, 3));
      return res.json(parsedAssignments);
    });
  })
  .catch(err => {
    console.error(err);
    next(err);
  });
}

export function get(req, res, next) {
  const workflow = new WorkflowRepository(req.tenant);
  const appId = configuration.get(req.tenant).appId;
  const id = req.swagger.params.id.value;
  // let assignment;
  const { Assignment, AssignmentOrder, Product, Bundle, ItemState, Resource, ItemResource, ProductTimelineStepExecutors, Timeline, TimelineStep, ProductFollowUps } = Models(req.tenant);
  Assignment.find({
    where: {
      id,
    },
    include: [{
      model: ItemState,
      as: 'state',
    }, {
      model: AssignmentOrder,
      as: 'items',
      include: [
        {
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
            {
              model: ProductTimelineStepExecutors,
              as: 'timelineStepExecutors',
            },
            {
              model: Timeline,
              as: 'timeline',
              include: [
                {
                  model: TimelineStep,
                  as: 'timelineSteps',
                },
              ],
            },
          ],
        },
        {
          model: Bundle,
          as: 'bundle',
          include: [
            {
              model: ItemResource,
              as: 'resources',
            },
          ],
        },
      ],
    }],
  })
  .then(a => {
    const parsedAssignment = a.parse();
    const allOrders = parsedAssignment.items;
    const allOrderPoIds = allOrders.map(order => order.idPoSystem);
    workflow.getActiveSteps(allOrderPoIds.join())
    .then(currentSteps => {
      const clonedAssignment = _.clone(parsedAssignment);
      const orders = clonedAssignment.items;
      const updatedOrders = orders.map(order => {
        const orderClone = _.clone(order);
        orderClone.stepName = null;
        const orderStepMatch = currentSteps.find(step => step.id === orderClone.idPoSystem);
        if (orderStepMatch) {
          orderClone.stepName = orderStepMatch.step;
        }
        return orderClone;
      })
      clonedAssignment.items = updatedOrders;
      return res.json(clonedAssignment);
    }).catch(err => {
      console.log(`Error getting currentStep for assignment with id ${parsedAssignment.id}. Returning the assignment anyway, the error was: ${JSON.stringify(err, null, 3)}`);
      return res.json(parsedAssignment);
    });
    // return new Referential(req.tenant, req.user.idUser).get({ endpoint: `accounts/${assignment.idAssignedTo}` });
  })
  // .then(assignedTo => {
  //   assignment.assignedTo = parseUser(assignedTo, appId);
  //   return new Referential(req.tenant, req.user.idUser).get({ endpoint: `accounts/${assignment.idAssignedBy}` });
  // })
  // .then(assignedBy => {
  //   assignment.assignedBy = parseUser(assignedBy, appId);
  //   return res.json(assignment);
  // })
  .catch(err => {
    console.error(err);
    next(err);
  });
}

export function getExternalInfo(req, res, next) {
  const appId = configuration.get(req.tenant).appId;
  const id = req.swagger.params.id.value;
  let assignment;
  const { Assignment, AssignmentOrder, Product, Bundle, ItemState, Resource, ItemResource, ProductTimelineStepExecutors } = Models(req.tenant);
  Assignment.find({
    where: { id },
    include: [{
      model: ItemState,
      as: 'state',
    }, {
      model: AssignmentOrder,
      as: 'items',
      include: [{
        model: Product,
        as: 'product',
        include: [{
          model: Resource,
          as: 'resources',
        },
        {
          model: ProductTimelineStepExecutors,
          as: 'timelineStepExecutors',
        },
      ],
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
    assignment = a.parse();
    return new Referential(req.tenant, req.user.idUser).get({ endpoint: `accounts/${assignment.idAssignedTo}` });
  })
  .then(assignedTo => {
    assignment.assignedTo = parseUser(assignedTo, appId);
    return new Referential(req.tenant, req.user.idUser).get({ endpoint: `accounts/${assignment.idAssignedBy}` });
  })
  .then(assignedBy => {
    assignment.assignedBy = parseUser(assignedBy, appId);
    return Promise.resolve(assignment);
  })
  .then(a => {
    return Promise.all(
      a.items.map(item => {
        if (!item.product || !item.product.id) {
          return Promise.resolve({ ...item, external: { gdp: {} } });
        }
        return new GDPRepository(req.tenant, req.user.idUser).getProductInformation(item.idGdp, item.product.type)
        .then(gdp => Promise.resolve({ ...item, external: { gdp } }));
      })
    );
  })
  .then(items => res.json({ ...assignment, items }))
  .catch(next);
}

export function remove(req, res, next) {
  const id = req.swagger.params.id.value;
  const { Assignment } = Models(req.tenant);
  Assignment.destroy({
    where: {
      id,
    },
  })
    .then(() => {
      res.json({
        id,
      });
    })
    .catch(next);
}

export function retire(req, res, next) {
  const id = req.swagger.params.id.value;
  const { Assignment, ItemState } = Models(req.tenant);
  Assignment.update({
    idState: ASSIGNMENT.STATUS.DRAFT,
  }, {
    where: {
      id,
    },
  })
    .then(() => (
      Assignment.find({
        where: {
          id,
        },
        include: [{
          model: ItemState,
          as: 'state',
        }],
      })
    ))
    .then(assignment => {
      res.json(assignment);
    })
    .catch(next);
}

// TODO: Write on notification table

export function demandValidation(req, res, next) {
  const id = req.swagger.params.id.value;
  const { Assignment, ItemState } = Models(req.tenant);
  Assignment.update({
    idState: ASSIGNMENT.STATUS.PENDING,
  }, {
    where: {
      id,
    },
  })
    .then(() => (
      Assignment.find({
        where: {
          id,
        },
        include: [{
          model: ItemState,
          as: 'state',
        }],
      })
    ))
    .then(assignment => {
      res.json(assignment);
    })
    .catch(next);
}

export function publish(req, res, next) {
  let assignmentRes;
  const id = req.swagger.params.id.value;
  const { Assignment, AssignmentOrder, Product, Bundle, ItemState, Resource, ItemResource } = Models(req.tenant);
  const resetAssignment = () => Assignment.update({ idState: ASSIGNMENT.STATUS.PENDING }, { where: { id } });
  Assignment.update({
    idState: ASSIGNMENT.STATUS.VALIDATED,
  }, {
    where: {
      id,
    },
  })
  .then(() => (
    Assignment.find({
      where: {
        id,
      },
      include: [{
        model: ItemState,
        as: 'state',
      }, {
        model: AssignmentOrder,
        as: 'items',
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
        }],
      }],
    })
  ))
  .then(assignment => {
    assignmentRes = assignment;
    return Promise.resolve(assignment.parse());
  })
  .then(assignment => {
    // TODO: send data to GDP
    const request = assignment.items.reduce((request, item) => {
      if (!item.product || !item.product.type) {
        return request;
      }
      if (item.product.type === PRODUCT.TYPE.DEVICE) {
        return {
          gdp: {
            ...request.gdp,
            device: {
              'id': 0
            },
          },
          mkp: {
            ...request.mkp,
            device: item,
          },
          timeline: {
            ...request.timeline,
            timelines: request.timeline.timelines.concat([{
              label: 'device',
              id: item.idPoSystem,
              definitions: {
                orderId: item.idPoSystem,
                deviceId: -1,
              },
            }]),
          },
        };
      }

      if (item.product.type === PRODUCT.TYPE.LINE) {
        return {
          gdp: {
            ...request.gdp,
            line: {
              carrierId: 2,
            },
          },
          mkp: {
            ...request.mkp,
            line: item,
          },
          timeline: {
            ...request.timeline,
            timelines: request.timeline.timelines.concat([{
              label: 'line',
              id: item.idPoSystem,
              definitions: {
                orderId: item.idPoSystem,
                lineId: -1,
              },
            }]),
          },
        };
      }
      return request;
    }, {
      gdp: {
        employeeId: assignment.idAssignedTo,
      },
      mkp: {},
      timeline: {
        label: 'gdp',
        id: assignment.idPoSystem,
        definitions: {
          userId: assignment.idAssignedBy,
        },
        timelines: [],
      },
    });
    return new GDPRepository(req.tenant, assignment.idAssignedBy).createAssignment(request.gdp)
    .then(gdp => {
      console.log('gdp res', gdp);
      if (!gdp) {
        throw new Error('No GDP response');
      }
      return Promise.resolve({ gdp, mkp: request.mkp, timeline: request.timeline });
    })
    .catch(err => {
      console.log(`There was an error with GDP validating the assignment ${assignment.id}; the error was: ${err}`);
      //This has to be removed
      // request.gdp = {};
      // request.gdp.deviceId = 1;
      // request.gdp.lineId = 1;
      // return Promise.resolve({ gdp: request.gdp,  mkp: request.mkp, timeline: request.timeline });

      //This is the good code. Shame on Aaron if not executed.
      return Promise.reject(new Error("There was an error with GDP, the assignment could not be validated. Please, try again later"));
    });
  })
  .then(request => {
    let promise;

    if(request.mkp && request.mkp.line){
      //If there's a line, promise will be assigning the lineId of GDP to idGdp
      promise = AssignmentOrder.update({
        idGdp: request.gdp && request.gdp.lineId,
      }, {
        where: {
          id: request.mkp.line.id,
        },
      });
    }
    else if(request.mkp && request.mkp.device){
      //Else, if there's a device promise will be assigning the device id to idGdp
      promise = AssignmentOrder.update({
         idGdp: request.gdp && request.gdp.deviceId,
       }, {
         where: {
           id: request.mkp.device.id,
         },
       });
    }

    return Promise.all([promise])
    .then(() => Promise.resolve(request))
  })
  .then(request => {
    const timelineRequest = {
      ...request.timeline,
      timelines: request.timeline.timelines.map(timeline => {
        if (timeline.definitions.lineId === -1) {
          return {
            ...timeline,
            definitions: {
              ...timeline.definitions,
              lineId: request.gdp.lineId,
            },
          };
        }
        if (timeline.definitions.deviceId === -1) {
          return {
            ...timeline,
            definitions: {
              ...timeline.definitions,
              deviceId: request.gdp.deviceId,
            },
          };
        }
        return timeline;
      }),
    };
    const workflowResponse = new WorkflowRepository(req.tenant).create(timelineRequest);
    return workflowResponse;
  })
  .then(workflow => {
    Assignment.update({
      idWorkflowInstance: workflow.id,
    }, {
      where: {
        id,
      },
    });
  })
  .then(() => {
    console.log(`Assignment ${assignmentRes.id} succesfully validated!!`);
    Promise.resolve(res.json(assignmentRes));
  })
  .catch(e => {
    console.log('Error', e);
    resetAssignment();
    if (e.response && e.response.data) {
      return res.status(500).json(`GDP Error: ${e.response.data.message}`);
    }
    return res.status(500).json(`${e}`);
  });
}
