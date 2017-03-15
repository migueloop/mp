import { ACTION } from 'flux/actions';
import Repository from 'repositories/user-notification';

export default class UserNotifcations {
  constructor(tenant) {
    this.tenant = tenant;
    this.repo = new Repository(this.tenant);
  }

  getAll() {
    return this.repo.getAll()
    .then(payload => Promise.resolve({ type: ACTION.USER_NOTIFICATION.SET_ALL, payload }));
  }

  getByUser(userId) {
    return this.repo.getByUser(userId)
    .then(payload => Promise.resolve({ type: ACTION.USER_NOTIFICATION.SET_ALL, payload }));
  }

  create(notification) {
    return this.repo.create(notification)
    .then(payload => Promise.resolve({ type: ACTION.USER_NOTIFICATION.ADD, payload }));
  }

  click(id) {
    return this.repo.click(id)
    .then(payload => Promise.resolve({ type: ACTION.USER_NOTIFICATION.CLICK, payload }));
  }

  view(id) {
    return this.repo.view(id)
    .then(payload => Promise.resolve({ type: ACTION.USER_NOTIFICATION.CLICK, payload }));
  }

  viewAllUserNotifications(userId) {
    return this.repo.viewAllUserNotifications(userId)
    .then(payload => Promise.resolve({ type: ACTION.USER_NOTIFICATION.VIEW_ALL, payload }));
  }

  clickAllUserNotifications(userId) {
    return this.repo.clickAllUserNotifications(userId)
    .then(payload => Promise.resolve({ type: ACTION.USER_NOTIFICATION.CLICK_ALL, payload }));
  }

  createProductPublicationRequestNotification(data) {
    console.log('action::createProductPublicationRequestNotification', data);
    return this.repo.createProductPublicationRequestNotification(data)
    .then(payload => Promise.resolve({ type: ACTION.USER_NOTIFICATION.CREATE_PRODUCT_PUBLICATION_REQUEST_NOTIFICATION, payload }));
  }

  createBundlePublicationRequestNotification(data) {
    return this.repo.createBundlePublicationRequestNotification(data)
    .then(payload => Promise.resolve({ type: ACTION.USER_NOTIFICATION.CREATE_BUNDLE_PUBLICATION_REQUEST_NOTIFICATION, payload }));
  }

  createAssignmentPublicationRequestNotification(data) {
    return this.repo.createAssignmentPublicationRequestNotification(data)
    .then(payload => Promise.resolve({ type: ACTION.USER_NOTIFICATION.CREATE_ASSIGNMENT_PUBLICATION_REQUEST_NOTIFICATION, payload }));
  }

  createAssignmentOrderActionNotifications(data) {
    return this.repo.createAssignmentOrderActionNotifications(data)
    .then(payload => Promise.resolve({ type: ACTION.USER_NOTIFICATION.CREATE_ASSIGNMENT_ORDER_ACTION_NOTIFICATION, payload }));
  }

}
