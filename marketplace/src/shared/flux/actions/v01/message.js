import { ACTION } from 'flux/actions';
import Repository from 'repositories/message';
import Promise from 'bluebird';

export default class Message {
  constructor(tenant) {
    this.tenant = tenant;
  }

  send(message) {
    const repository = new Repository(this.tenant);

    return new Promise((resolve, reject) => {
      repository.send(message)
        .then(() => {
          resolve({
            type: ACTION.MESSAGE.SEND,
            message,
          });
        })
        .catch(reject);
    });
  }
}
