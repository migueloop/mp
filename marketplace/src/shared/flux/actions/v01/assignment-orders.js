import AssignmentRepository from 'repositories/assignment';
import TimelineRepository from 'repositories/timeline';
import ProductRepository from 'repositories/product';
import UserRepository from 'repositories/user';
import ItsmRepository from 'repositories/itsm';
import WorkflowRepository from 'repositories/workflow';
import ExternalWorkflowRepository from 'repositories/external-workflow';
import { ACTION } from 'flux/actions';
import queryString from 'query-string';

export default class AssignmentOrders {
  constructor(tenant) {
    this.tenant = tenant;
    this.assignmentRepository = new AssignmentRepository(tenant);
    this.timelineRepository = new TimelineRepository(tenant);
    this.productRepository = new ProductRepository(tenant);
    this.userRepository = new UserRepository(tenant);
    this.itsmRepository = new ItsmRepository(tenant);
    this.workflowRepository = new WorkflowRepository(tenant);
    this.externalWorkflowRepository = new ExternalWorkflowRepository(tenant);
  }

  // getters
  get All() {
    let aAssignments = [];
    let aProducts = [];
    let aUsers = [];
    return Promise.all([this.userRepository.getAll(), this.productRepository.getAll(), this.assignmentRepository.getAll()])
    .then(values => {
      aUsers = values[0];
      aProducts = values[1];
      aAssignments = values[2];
      const timelines = aAssignments.reduce((p, n) => p.concat(n.items.map(i => i.id_po_system)), []);
      return this.timelineRepository.getItemCurrentTimelineStep({ timelines });
    })
    .then(currentSteps => {
      if (!currentSteps) {
        console.log('No current steps found');
      }
      const assignmentOrders = aAssignments
      .reduce((prev, nextAss) => {
        const productItems = nextAss.items.filter(item => !!item.id_product)
        .map(reducedProduct => {
          const productMatch = aProducts.find(p => parseInt(p.id, 10) === parseInt(reducedProduct.id_product, 10));
          if (!productMatch || !productMatch.timeline || !productMatch.timeline.steps) { return null; }
          const currentStepMatch = currentSteps && currentSteps.length && currentSteps.find(step => step.id === reducedProduct.id_po_system);
          const stepName = currentStepMatch ? currentStepMatch.step : null;
          const productSteps = productMatch.timeline.steps;
          const productStep = productMatch.timeline.steps.find(s => s.name === stepName);

          const usersWithAccessToCurrentStep = this.getUsersWithAccessToStep(productStep, aUsers, productMatch.created_by);

          const usersWithAccessToAtLeastOneStep = productSteps.reduce((userIds, nextStep) => {
            return userIds.concat(this.getUsersWithAccessToStep(nextStep, aUsers, productMatch.created_by));
          }, [])
          .filter((id, index, self) => self.indexOf(id) === index);

          return {
            id: reducedProduct.id,
            id_assignment: nextAss.id,
            id_po_system_assignment: nextAss.id_po_system,
            assigned_by_info: nextAss.assigned_by_info,
            assigned_to_info: nextAss.assigned_to_info,
            id_workflow_instance: nextAss.id_workflow_instance,
            id_gdp: reducedProduct.id_gdp,
            id_po_system: reducedProduct.id_po_system,
            name: productMatch.name,
            options: queryString.parse(reducedProduct.options),
            product: productMatch,
            assigned_at: nextAss.assigned_at,
            completed: reducedProduct.completed,
            stepName,
            state: nextAss.state,
            usersWithAccessToCurrentStep,
            usersWithAccessToAtLeastOneStep,
            externalWorkflows: [],
          };
        });
        return prev.concat(productItems);
      }, []);
      return Promise.resolve({ type: ACTION.ASSIGNMENT_ORDER.SET.ALL, assignmentOrders });
    })
    .catch(e => {
      console.log('ERR', e);
      return Promise.resolve({ type: ACTION.ASSIGNMENT_ORDER.SET.ALL, assignmentOrders: [] });
    });
  }

  createEasyVistaWorkflow = assignmentOrder => {
    return this.itsmRepository.createRequest(assignmentOrder)
    .then(externalWorkflowObject => {
      assignmentOrder.externalWorkflows.push(externalWorkflowObject);
      return Promise.resolve({ type: ACTION.ASSIGNMENT_ORDER.UPDATE.ONE, assignmentOrder });
    })
    .catch(err => console.log('createEasyVistaWorkflow::err', err));
  }

  getExternalTimelines = assignmentOrders => {
    return this.externalWorkflowRepository.getWorkflowsForOrders(assignmentOrders.filter(order => order !== null).map(order => order.id))
    .then(workflows => {
      workflows.forEach(workflow => {
        const match = assignmentOrders.find(order => order.id === workflow.orderId);
        if (!match) { return; }
        match.externalWorkflows.push(workflow);
      });
      return Promise.resolve(assignmentOrders);
    })
    .then(() => Promise.resolve({ type: ACTION.ASSIGNMENT_ORDER.SET.ALL, assignmentOrders }));
  }

  getUsersWithAccessToStep = (step = {}, users = [], productOwnerId) => {
    const roleIds = step.roleIds || [];
    const userIds = step.userIds || [];
    const includeProductOwner = step.includeProductOwner;
    const ownerIdToAdd = includeProductOwner ? [productOwnerId] : [];
    const userIdsWithRoles = users.filter(u => roleIds.indexOf(u.id_role) !== -1).map(u => u.id);
    return userIds.concat(userIdsWithRoles).concat(ownerIdToAdd).filter((id, index, self) => self.indexOf(id) === index);
  }
}
