import { clean } from 'helpers/utils';
import Workflow from './drivers/workflow';
import { ITEM, PO_SYSTEM } from 'helpers/constants';
import { URL as WKF_URL } from 'helpers/constants/workflow';
import Repository from './drivers/mysql';
import { ITEM_QUERIES } from './queries/item';
import _ from 'lodash';
import config from 'config';
import { join } from 'path';
import * as models from './models/index';
import Promise from 'bluebird';
import { sha256WithSecretKey } from 'helpers/utils';
import workflowRepository from './workflow';
import GdpRepository from './gdp';
import Logs from 'logs';
// Some of the logic on this page is horrible. HODOR! :(


export default class AssignmentRepository {

  constructor(tenant) {
    const configuration = config.get(tenant);
    this._repo = new Repository(tenant, 'assignment');
    this._repoAssignmentOrder = new Repository(tenant, 'assignment_order');
    this.tenant = tenant;
    this.uploadPath = join(global.DIR.PUBLIC, configuration.upload.path, tenant, 'assignments');
  }

  // Private

  /**
   * Genereate poGEN id with SHA256
   * @param {number} nId the row id
   * @returns {*} The sha256 encrypted id
   * @private
   */
  _generatePOsytemId(nId) {
    const uncryptedId = `${Date.now()}-${PO_SYSTEM.PREFIXES.ASSIGNMENT}-${this.tenant}-${nId}`;
    return sha256WithSecretKey(uncryptedId, config.get(this.tenant).poGen.secret_key).substring(0, 9);
  }

  _getWhere(where = '', params = [], otherClauses = '') {
    where = where.length > 0 ? ` where ${where}` : where;
    const query = `${ITEM_QUERIES.ASSIGNMENT.GET_ALL} ${where} GROUP BY assignment.id ${otherClauses}`;
    return this._repo.query(query, params)
    .then(assignments => {
      // return Promise.resolve(assignments);
      const aParsedAssignments = this._parse(assignments);
      // if we did not parsed nothing means that we dont have any assignment
      return aParsedAssignments.length === 0 ? Promise.resolve([]) : Promise.resolve(aParsedAssignments);
    });
  }

  _parse(aAssignments) {
    const self = this;
    return aAssignments.map(oAssignment => {
      // parse from JSON
      oAssignment.assigned_by_info = oAssignment.assigned_by_info ? JSON.parse(oAssignment.assigned_by_info) : null;
      oAssignment.assigned_to_info = oAssignment.assigned_to_info ? JSON.parse(oAssignment.assigned_to_info) : null;
      oAssignment.items = oAssignment.items ? JSON.parse(oAssignment.items) : null;

      // parse state
      oAssignment.state = self._parseState(oAssignment.id_state);

      // parse items
      oAssignment.items = self._parseItems(oAssignment.items);
      return oAssignment;
    });
  }

  /**
   * Parse single item to insert/update in the DB
   * @param {object} oItem
   * @param {string} sItemType can be bundle or product
   * @private
   */
  _parseItem(oItem, sItemType) {
    // depending on type, we set id_product and id_bundle
    switch (sItemType) {
      case ITEM.TYPES.PRODUCT:
        oItem.id_product = oItem.id_item;
        oItem.id_bundle = null;
        break;
      case ITEM.TYPES.BUNDLE:
        oItem.id_product = null;
        oItem.id_bundle = oItem.id_item;
        break;
      default:
        break;
    }

    // delete fields that we can't insert
    delete oItem.id_item;
    delete oItem.type;
    delete oItem.description;
    delete oItem.editor_title;
    delete oItem.logo;
    delete oItem.name;

    oItem.created_at = Date.now();
    oItem.id_state = ITEM.STATE.PENDING;
    oItem.completed = 0;
  }


  _parseItems(aItems) {
    return aItems.filter(oItem => {
      oItem.completed = +oItem.completed;
      return oItem.id_state !== ITEM.STATE.DELETED.toString();
      // if (oItem.id_state !== ITEM.STATE.DELETED.toString()) {
      //   return oItem;
      // }
    });
  }

  _parseState(nState) {
    switch (nState) {
      case ITEM.STATE.DELETED:
        return ITEM.STATE.KEY.DELETED;
      case ITEM.STATE.DRAFT:
        return ITEM.STATE.KEY.DRAFT;
      case ITEM.STATE.PENDING:
        return ITEM.STATE.KEY.PENDING;
      case ITEM.STATE.VALIDATED:
        return ITEM.STATE.KEY.VALIDATED;
      default:
        // TODO: proper default case needed here
        return undefined;
    }
  }

  _setAlias(sName, nId) {
    return `${clean(sName)}-${nId}`;
  }

  // Getters
  getAll = () => this._getWhere();

  getByAssigner = nId => {
    const self = this;

    return new Promise((resolve, reject) => {
      self._getWhere('assignment.id_assigned_by = ?', [nId])
      .then(resolve)
      .catch(reject);
    });
  };


  getByAssignatedUser = nId => {
    const self = this;
    return new Promise((resolve, reject) => {
      self._getWhere('assignment.id_assigned_to = ?', [nId])
      .then(resolve)
      .catch(reject);
    });
  };


  getDeleted = () => {
    const self = this;
    return new Promise((resolve, reject) => {
      self._getWhere('assignment.id_state = ?', [ITEM.STATE.DELETED])
      .then(res => resolve(res))
      .catch(err => reject(err));
    });
  };


  getDraft = () => {
    const self = this;
    return new Promise((resolve, reject) => {
      self._getWhere('assignment.id_state = ?', [ITEM.STATE.DRAFT])
      .then(res => resolve(res))
      .catch(err => reject(err));
    });
  };


  /**
   * Get a single assignment
   * @param {number} id of the assignment that we want to retrieve
   * @returns {Promise} with the v object
   */
  getOne = id => {
    const pm = new Promise((resolve, reject) => {
      this._getWhere(' assignment.id = ? ', [id])
      .then(res => resolve(res[0]))
      .catch(err => reject);
    });
    return pm;
  };


  getPending = () => {
    const self = this;
    return new Promise((resolve, reject) => {
      self._getWhere('assignment.id_state = ?', [ITEM.STATE.PENDING])
      .then(res => resolve(res))
      .catch(err => reject(err));
    });
  };


  getValidated() {
    return this._getWhere('assignment.id_state = ?', [ITEM.STATE.VALIDATED]);
  }


  // setters

  updateAssignedBy(nId, oAssignedBy) {
    return new Promise((resolve, reject) => {
      this._repo.update({
        values: { id_assigned_by: oAssignedBy ? oAssignedBy.id : null },
        filters: { id: nId },
      })
      .then(resolve)
      .catch(err => {
        console.log('REPOSITORY ASSIGNMENT -->  ERROR UPDATE ASSIGNED BY: ', err);
        reject(err);
      });
    });
  }


  updateAssignedTo(nId, oAssignedTo) {
    return new Promise((resolve, reject) => {
      this._repo.update({
        values: { id_assigned_to: oAssignedTo ? oAssignedTo.id : null },
        filters: { id: nId },
      })
      .then(resolve)
      .catch(err => {
        console.log('REPOSITORY ASSIGNMENT -->  ERROR UPDATE ASSIGNED TO: ', err);
        reject(err);
      });
    });
  }


  addItem(nId, aItem, assignmentOrderOptions) {
    assignmentOrderOptions = assignmentOrderOptions === '' ? [] : assignmentOrderOptions;
    // now we only get the last one, but keep in mind that we will can have an assignment with more than one component
    const oItem = aItem[0];
    oItem.id_assignment = nId;
    const oParsedItem = Object.assign({}, oItem);
    this._parseItem(oParsedItem, oItem.type);
    const optionsMatch = oParsedItem.options && Array.isArray(oParsedItem.options) ? oParsedItem.options.find(option => option.productId === oParsedItem.id_product) : null;
    oParsedItem.options = optionsMatch ? optionsMatch.options : '';
    return new Promise((resolve, reject) => {
      this._repo.query('UPDATE assignment_order SET id_state = ? WHERE id_assignment = ?', [ITEM.STATE.DELETED, oParsedItem.id_assignment])
      // insert product or  bundle
      .then(() => this._repo.query('INSERT INTO assignment_order SET ?', [oParsedItem]))
      // Update the assignment with the alias, items and assigned_to information
      .then(res => this._repoAssignmentOrder.update({ values: { id_po_system: this._generatePOsytemId(res.insertId) }, filters: { id: res.insertId } }))
      .then(() => {
        // if it is a bundle, need to insert the components of this bundle to create orders for each one
        if (oItem.type === ITEM.TYPES.BUNDLE) {
          return this._repo.query('SELECT bc.id_component FROM bundle_component bc WHERE bc.id_bundle = ? ', [oItem.id_item]);
        }
      })
      .then(res => {
        // we are here because we are adding a bundle. Now we will insert the components
        if (oItem.type === ITEM.TYPES.BUNDLE && res.length > 0) {
          const aItems = res.map(oComponent => {
            const aTmpItem = [];
            const options = assignmentOrderOptions.find(option => option.productId === oComponent.id_component);
            aTmpItem.push(oItem.id_assignment);
            aTmpItem.push(oComponent.id_component);
            aTmpItem.push(oItem.id_item);
            aTmpItem.push(ITEM.STATE.PENDING);
            aTmpItem.push(Date.now());
            aTmpItem.push(0);
            aTmpItem.push(options ? options.options : '');
            return aTmpItem;
          });
          return this._repo.query('INSERT INTO assignment_order ( id_assignment, id_product, id_bundle, id_state, created_at, completed, options) VALUES ? ', [aItems]);
        }
      })
      .then(res => {
        // now create the external id_po_system for every component of the bundle
        if (res && res.affectedRows > 0) {
          const aRowsToUpdate = [];

          // create the array of index to update
          for (let rowId = res.insertId, lastRowId = (res.insertId + res.affectedRows); rowId < lastRowId; rowId++) {
            aRowsToUpdate.push(rowId);
          }

          // array of promises to update the id_po_system
          return Promise.map(aRowsToUpdate, row => this._repo.query('UPDATE assignment_order SET id_po_system = ? WHERE id = ?', [this._generatePOsytemId(row), row]));
        }
      })
      .then(() => resolve())
      .catch(err => {
        console.log('REPOSITORY ASSIGNMENT -->  ERROR ADDING NEW ITEM: ', err);
        reject(err);
      });
    });
  }


  // create, delete and update
  /** *
   *
   * @param product product to be created
   * @returns Promise
   */
  create(oAssignment) {
    const assignmentModel = new models.Assignment();
    const self = this;
    const oAssignmentToValidate = {
      description: oAssignment.description,
      id_state: oAssignment.id_state,
      id_assigned_by: oAssignment.id_assigned_by,
      assigned_at: Date.now(),
    };
    const assignmentOrderOptions = oAssignment.assignmentOrderOptions || '';
    let oValidAssignment = null;
    return assignmentModel.validate(oAssignmentToValidate)
      .then(oValidatedAssignment => {
        // set assignment in draft state when created
        oValidatedAssignment.id_state = ITEM.STATE.DRAFT;
        oValidAssignment = oValidatedAssignment;
        // insert in DB the assignment
        return self._repo.insert(oValidatedAssignment);
      })
      .then(res => {
        // Now compose the alias assignment name to use it in the friendly URL getting the ID returned in the insertion
        oValidAssignment.id = res.insertId;
        oValidAssignment.alias = `${this.tenant}-${ITEM.TYPES.ASSIGNMENT}-${oValidAssignment.id}`;

        // Add the order options in
        // We add this to every ptoduct in the list, later we only take the first one.
        const items = oAssignment.items.map(i => Object.assign({}, i, { options: assignmentOrderOptions }));
        // Update the assignment with the alias, items and assigned_to information
        return self.update({
          values: {
            alias: oValidAssignment.alias,
            items,
            assigned_to_info: oAssignment.assigned_to_info,
            id_po_system: this._generatePOsytemId(res.insertId),
          },
          filters: {
            id: oValidAssignment.id,
          },
          assignmentOrderOptions,
        });
      })
      // Get the assignment inserted to resolve it backwards
      .then(() => this._getWhere('assignment.id = ?', [oValidAssignment.id]))
      .then(res => Promise.resolve(res[0]));
  }


  delete(id) {
    return this._repo.update({ filters: { id }, values: { id_state: ITEM.STATE.DELETED } });
  }


  update(oAssignment) {
    const paramsBackup = _.omit(oAssignment.values, 'keywords', 'items', 'assigned_by_info', 'assigned_to_info', 'items', 'id', 'state');
    if (!oAssignment.bypassValidation) {
      paramsBackup.id_state = ITEM.STATE.DRAFT;
    }

    return Promise.all([
      oAssignment.values.hasOwnProperty('assigned_to_info') ? this.updateAssignedTo(oAssignment.filters.id, oAssignment.values.assigned_to_info) : Promise.resolve(),
      oAssignment.values.hasOwnProperty('assigned_by_info') ? this.updateAssignedBy(oAssignment.filters.id, oAssignment.values.assigned_by_info) : Promise.resolve(),
      oAssignment.values.hasOwnProperty('items') ? this.addItem(oAssignment.filters.id, oAssignment.values.items, oAssignment.assignmentOrderOptions) : Promise.resolve(),
      Object.keys(paramsBackup).length > 0 ? this._repo.update({
        values: paramsBackup,
        filters: oAssignment.filters,
      }) : Promise.resolve(),
    ]);
  }

  // State modification
  cancelValidation(id) {
    return this._repo.update({ filters: { id }, values: { id_state: ITEM.STATE.DRAFT } });
  }

  demandValidation = id => this._repo.update({ filters: { id }, values: { id_state: ITEM.STATE.PENDING } });

  validate(oAssignment) {
    console.log('validate::oAssignment', oAssignment);
    let sWorkflowInstanceId = null;
    const id = oAssignment.id;
    const workflow = new workflowRepository(this.tenant);
    delete oAssignment.id;
    return new GdpRepository().create(oAssignment)
    .then(gdpInformation => {
      // Update assignation order to set GDP id (to be able to search data from GDP)
      return Promise.all(gdpInformation.map(assignmentOrder => (
        this._repoAssignmentOrder.update({ values: { id_gdp: `${assignmentOrder.gdpId}` }, filters: { id_po_system: assignmentOrder.assignationOrderId } })
      )));
    })
    .catch(err => {
      console.log(`Error validating assignment ${oAssignment.id}, gdp failed: ${JSON.stringify(err, null, 3)}`);
      next(err);
    })
    .then(() => {
      console.log('oAssignment', JSON.stringify(oAssignment, null, 3), "\n\n\n\n\n\n");
      return workflow.create(oAssignment);
    })
    .then(workflowId => {
      console.log('workflowId', workflowId)
      if (!workflowId) { throw new Error('No workflow id supplied'); }
      sWorkflowInstanceId = workflowId;
      const updateData = { filters: { id }, values: { id_state: ITEM.STATE.VALIDATED, id_workflow_instance: sWorkflowInstanceId } };
      return this._repo.update(updateData);
    })
    .then(res => {
      console.log('res', res);
      return Promise.resolve(res);
    })
    .then(res => res && res.affectedRows > 0 ? Promise.resolve({ id, id_workflow_instance: sWorkflowInstanceId }) : Promise.reject(new Error('Couldn\'t update')));
  }

  // timeline/workflow system
  completeAssignment(id, sPoSystemId, params = {}) {
    const workflowParams = Object.assign({}, { orderId: sPoSystemId }, params);
    console.log('workflowParams', workflowParams);
    const workflow = new workflowRepository(this.tenant);
    return workflow.dispatch(workflowParams)
    .then(res => this._repoAssignmentOrder.update({ filters: { id_po_system: sPoSystemId }, values: { completed: 1 } }))
    .catch(err => {
      Logs.logger.error(err);
      return Promise.reject(err);
    })
    .then(res => res.affectedRows === 1 ? Promise.resolve({ id }) : Promise.reject(new Error('Could not update DB with completed')));
  }

  getGDPItemInfo(payload) {
    return new GdpRepository(this.tenant).getItemsInfo(payload.items)
    .then(res => new Promise.resolve(res));
  }
}
