import Restful from './drivers/restful';
const API = new Restful();

export default class LogComment {
  constructor(tenant) {
    this.tenant = tenant;
  }

  getByUser(userId) {
    return API.get({ endpoint: `notifications?userId=${userId}` });
  }

  getAll() {
    return API.get({ endpoint: 'notifications' });
  }

  create(params) {
    return API.post({ endpoint: 'notifications', params });
  }

  click(id) {
    return API.post({ endpoint: `notifications/${id}/click` });
  }

  view(id) {
    return API.post({ endpoint: `notifications/${id}/view` });
  }

  viewAllUserNotifications(userId) {
    const params = { userId };
    return API.post({ endpoint: 'notifications/view-all', params });
  }

  clickAllUserNotifications(userId) {
    const params = { userId };
    return API.post({ endpoint: 'notifications/click-all', params });
  }

  createProductPublicationRequestNotification(params) {
    console.log('createProductPublicationRequestNotification::params', params);
    return API.post({ endpoint: 'notifications/add-product-publication-request-notification', params });
  }

  createBundlePublicationRequestNotification(params) {
    return API.post({ endpoint: 'notifications/add-bundle-publication-request-notification', params });
  }

  createAssignmentPublicationRequestNotification(params) {
    return API.post({ endpoint: 'notifications/add-assignment-publication-request-notification', params });
  }

  createAssignmentOrderActionNotifications(params) {
    return API.post({ endpoint: 'notifications/add-assignment-order-action-notification', params });
  }
}
