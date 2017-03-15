import { ACTION } from 'flux/actions';

export default class Notification {
  constructor(tenant) {
    this.tenant = tenant;
  }

  set(notification) {
    return Promise.resolve({
      type: ACTION.NOTIFICATE,
      notification,
    });
  }
}
