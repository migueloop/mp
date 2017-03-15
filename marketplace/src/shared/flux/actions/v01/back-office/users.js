import Repository from 'repositories/user';
import { ACTION } from 'flux/actions';

export default class Users {
  constructor(tenant, user) {
    this.tenant = tenant;
    this.user = user;
  }

  get All() {
    const repository = new Repository(this.tenant, this.user);
    return new Promise((resolve, reject) => {
      repository.getAll()
        .then(items => {
          resolve({
            type: ACTION.BACKOFFICE.USER.SET_ALL,
            users: items,
          });
        })
        .catch(reject);
    });
  }


  Get(id) {
    const repository = new Repository(this.tenant, this.user);
    return new Promise((resolve, reject) => {
      repository.get(id)
        .then(user => {
          resolve({
            type: ACTION.BACKOFFICE.USER.SET_ALL,
            users: user,
          });
        })
        .catch(reject);
    });
  }
}
