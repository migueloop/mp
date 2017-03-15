import AssignmentRepository from 'repositories/assignment';
import { ACTION } from 'flux/actions';
import { ITEM } from 'helpers/constants';

export default class Assignments {
  constructor(tenant) {
    this.tenant = tenant;
    this.repository = new AssignmentRepository(tenant);
  }

  // create, delete, update
  Create(oAssignment) {
    return this.repository.create(oAssignment)
    .then(assignment => Promise.resolve({ type: ACTION.ASSIGNMENT.ADD, assignment }));
  }

  Update(nId, oValues) {
    return new Promise((resolve, reject) => {
      this.repository.update({ values: Object.assign({}, oValues), filters: { id: nId } })
      .then(() => {
        oValues.id_state = ITEM.STATE.DRAFT;
        resolve({ type: ACTION.ASSIGNMENT.UPDATE, assignment: { id: parseInt(nId, 10), oValues } });
      })
      .catch(err => reject(err));
    });
  }

  Delete(nId) {
    return new Promise((resolve, reject) => {
      this.repository.delete(nId)
      .then(() => resolve({ type: ACTION.ASSIGNMENT.UPDATE, assignment: { id: nId, id_state: ITEM.STATE.DELETED, state: ITEM.STATE.KEY.DELETED } }))
      .catch(err => reject(err));
    });
  }

  // getters
  get All() {
    return new Promise((resolve, reject) => {
      this.repository.getAll()
      .then(aAssignments => resolve({ type: ACTION.ASSIGNMENT.SET.ALL, assignments: aAssignments }))
      .catch(reject);
    });
  }

  GetByAssigner(nId) {
    return new Promise((resolve, reject) => {
      this.repository.getByAssigner(nId)
      .then(aAssignments => resolve({ type: ACTION.ASSIGNMENT.SET.ALL, assignments: aAssignments }))
      .catch(reject);
    });
  }

  GetByAssignatedUser(nId) {
    return new Promise((resolve, reject) => {
      this.repository.getByAssignatedUser(nId)
      .then(aAssignments => resolve({ type: ACTION.ASSIGNMENT.SET.ALL, assignments: aAssignments }))
      .catch(reject);
    });
  }

  get Validated() {
    return new Promise((resolve, reject) => {
      this.repository.getValidated()
      .then(aAssignments => resolve({ type: ACTION.ASSIGNMENT.SET.ALL, assignments: aAssignments }))
      .catch(reject);
    });
  }

  get Deleted() {
    return new Promise((resolve, reject) => {
      this.repository.getDeleted()
      .then(aAssignments => resolve({ type: ACTION.ASSIGNMENT.SET.DELETED, assignments: aAssignments }))
      .catch(reject);
    });
  }

  get Draft() {
    return new Promise((resolve, reject) => {
      this.repository.getDraft()
      .then(aAssignments => resolve({ type: ACTION.ASSIGNMENT.SET.DRAFT, assignments: aAssignments }))
      .catch(reject);
    });
  }

  get Pending() {
    return new Promise((resolve, reject) => {
      this.repository.getPending()
      .then(aAssignments => resolve({ type: ACTION.ASSIGNMENT.SET.PENDING, assignments: aAssignments }))
      .catch(reject);
    });
  }

  // state changes
  DemandValidation(nId) {
    return new Promise((resolve, reject) => {
      this.repository.demandValidation(nId)
      .then(() => {
        resolve({
          type: ACTION.ASSIGNMENT.UPDATE,
          assignment: { id: nId, id_state: ITEM.STATE.PENDING, state: ITEM.STATE.KEY.PENDING },
        });
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  CancelValidation(nId) {
    return new Promise((resolve, reject) => {
      this.repository.cancelValidation(nId)
      .then(() => {
        resolve({
          type: ACTION.ASSIGNMENT.UPDATE,
          assignment: { id: nId, id_state: ITEM.STATE.DRAFT, state: ITEM.STATE.KEY.DRAFT },
        });
      })
      .catch(err => reject(err));
    });
  }

  Validate(oAssignment) {
    return this.repository.validate(oAssignment)
    .then(result => {
      return Promise.resolve({
        type: ACTION.ASSIGNMENT.UPDATE,
        assignment: { id: result.id, id_state: ITEM.STATE.VALIDATED, state: ITEM.STATE.KEY.VALIDATED, id_workflow_instance: result.id_workflow_instance },
      });
    });
  }

  // timeline actions
  CompleteAssignment(id, sPoSystemId, params = {}) {
    console.log('CompleteAssignment::params', params);
    const assignment = { id, id_po_system: sPoSystemId };
    return this.repository.completeAssignment(id, sPoSystemId, params)
    .then(() => Promise.resolve({ type: ACTION.ASSIGNMENT.COMPLETE, assignment }));
  }


  // GDP
  GetGDPItemInfo(payload) {
    return this.repository.getGDPItemInfo(payload)
    .then(result => (
      Promise.resolve({
        type: ACTION.ASSIGNMENT.GDP.GET_ITEM_INFO,
        payload: result,
      })
    ));
  }
}
