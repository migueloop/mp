//import Actions from 'flux/actions';
import { Actions } from 'v02/flux';
import { PERMISSIONS } from 'helpers/constants';
import _ from 'underscore';
import config from 'config';

import Logs from '../logs';

export default class Repositories {
  constructor(tenant) {
    this.tenant = tenant;
  }

  _getFrontOfficeActions(user) {
    // const actions = new Actions(this.tenant, user.token);
    return [
      // actions.Bundles.All,
      // actions.Corners.All,
      // actions.Corners.Keywords,
      // actions.Products.Published,
      // actions.Settings.SEO,
      // actions.BackOffice.Billing.fetch(),
      // actions.HomeCarousel.getAllSlides(),
      // actions.Settings.Languages,
      // actions.Stock.getAll(),
      // actions.LogComments.getAll(),
      // actions.AssignmentOrderFollowUps.getAll(),
    ];
  }


  reloadStore(user) {
    return Promise.all(this._getFrontOfficeActions(user));
  }

  reloadStoreBackoffice(user) {
    // console.log('reloadStoreBackoffice::user', user);
    user.permissions = user.permissions || [];
    const actions = new Actions(this.tenant, user.token).BackOffice;
    const actionsToDispatch = [];

    // actionsToDispatch.push(actions.Acl.fetch());
    // actionsToDispatch.push(actions.AssignmentOrders.All);
    // actionsToDispatch.push(actions.UserNotifications.getByUser(user.id));

    // if (_.contains(user.permissions, PERMISSIONS.EDIT_PRODUCT_OWN.id) ||
    //   _.contains(user.permissions, PERMISSIONS.REQUEST_PUBLICATION_PRODUCT_OWN.id) ||
    //   _.contains(user.permissions, PERMISSIONS.PUBLISH_PRODUCT_OWN.id) ||
    //   _.contains(user.permissions, PERMISSIONS.UNPUBLISH_PRODUCT_OWN.id) ||
    //   _.contains(user.permissions, PERMISSIONS.DELETE_PRODUCT_OWN.id)
    // ) {
    //   actionsToDispatch.push(actions.Products.GetByUser(user.id));
    // }
    //
    // if (_.contains(user.permissions, PERMISSIONS.EDIT_PRODUCT.id) ||
    //   _.contains(user.permissions, PERMISSIONS.REQUEST_PUBLICATION_PRODUCT.id) ||
    //   _.contains(user.permissions, PERMISSIONS.VALIDATE_PUBLICATION_PRODUCT.id) ||
    //   _.contains(user.permissions, PERMISSIONS.PUBLISH_PRODUCT.id) ||
    //   _.contains(user.permissions, PERMISSIONS.UNPUBLISH_PRODUCT.id) ||
    //   _.contains(user.permissions, PERMISSIONS.DELETE_PRODUCT.id) ||
    //   _.contains(user.permissions, PERMISSIONS.VIEW_ASSIGNED_ASSIGNMENT_TO_OWN_ITEMS.id) ||
    //   _.contains(user.permissions, PERMISSIONS.VIEW_ASSIGNED_ASSIGNMENT_TO_USER.id)
    // ) {
    //   actionsToDispatch.push(actions.Products.All);
    // }
    //
    // actionsToDispatch.push(actions.Timelines.All);


    // Check Permissions id have permission to all use Bundles.All
    // If the permissions if only for own bundles return only bundles of this user
    if (user.permissions.includes(PERMISSIONS.EDIT_BUNDLE.id) ||
        user.permissions.includes(PERMISSIONS.EDIT_BUNDLE_OWN.id)
      ) {
      // actionsToDispatch.push(actions.Bundles.All);
    }

    // assignments
    // if (user.permissions.includes(PERMISSIONS.EDIT_ASSIGNMENT_OWN.id) ||
    //     user.permissions.includes(PERMISSIONS.REQUEST_VALIDATION_ASSIGNMENT_OWN.id) ||
    //     user.permissions.includes(PERMISSIONS.VALIDATE_ASSIGNMENT_OWN.id) ||
    //     user.permissions.includes(PERMISSIONS.CANCEL_PENDING_ASSIGNMENT_OWN.id) ||
    //     user.permissions.includes(PERMISSIONS.VIEW_ASSIGNED_ASSIGNMENT_TO_USER.id)) {
    //   actionsToDispatch.push(actions.Assignments.GetByAssigner(user.id));
    //  }

    // // FIXME: Hot fix for SNCF presentation. check real permissions
    // if (true || user.permissions.includes(PERMISSIONS.VALIDATE_ASSIGNMENT.id) ||
    //     user.permissions.includes(PERMISSIONS.EDIT_ASSIGNMENT.id) ||
    //     user.permissions.includes(PERMISSIONS.EDIT_ASSIGNMENT_OWN.id)) {
    //   actionsToDispatch.push(actions.BackOffice.Users(user.id).All);
    // }

    // FIXME: Hot fix for SNCF presentation. check real permissions
    // if (true || user.permissions.includes(PERMISSIONS.VALIDATE_ASSIGNMENT.id) ||
    //   user.permissions.includes(PERMISSIONS.EDIT_ASSIGNMENT.id) ||
    //   user.permissions.includes(PERMISSIONS.CANCEL_PENDING_ASSIGNMENT.id) ||
    //   user.permissions.includes(PERMISSIONS.REQUEST_VALIDATION_ASSIGNMENT.id) ||
    //   user.permissions.includes(PERMISSIONS.VIEW_ASSIGNED_ASSIGNMENT_TO_OWN_ITEMS.id) ||
    //   user.permissions.includes(PERMISSIONS.VIEW_ASSIGNED_ASSIGNMENT_TO_USER.id)) {
    //   actionsToDispatch.push(actions.Assignments.All);
    //   const workFlowConfig = config.get(this.tenant).workflow;
    //   if (workFlowConfig) {
    //     actionsToDispatch.push(actions.BackOffice.Workflow.fetch({
    //       disable: workFlowConfig.disable,
    //       endpoint: {
    //         front: workFlowConfig.endpoint.front.url,
    //         api: workFlowConfig.endpoint.api.url,
    //       },
    //     }));
    //   }
    // }

    // if (user.permissions.isIntersected([
    //   PERMISSIONS.REQUEST_PUBLICATION_BUNDLE_OWN.id,
    //   PERMISSIONS.VALIDATE_PUBLICATION_BUNDLE.id,
    //   PERMISSIONS.EDIT_BUNDLE.id,
    //   PERMISSIONS.EDIT_BUNDLE_OWN.id,
    // ])) {
    //   //actionsToDispatch.push(actions.Bundles.All);
    // } else if (user.permissions.includes(PERMISSIONS.EDIT_BUNDLE_OWN.id)) {
    //   // actionsToDispatch.push(actions.Bundles.ByUser(user.id));
    // }

    Logs.logger.access('reloadStoreBackoffice Ended!!');
    return Promise.all(this._getFrontOfficeActions(user).concat(actionsToDispatch));
  }
}
