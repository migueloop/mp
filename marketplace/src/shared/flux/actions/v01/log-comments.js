import { ACTION } from 'flux/actions';
import Repository from 'repositories/log-comment';

export default class LogComments {
  constructor(tenant) {
    this.tenant = tenant;
    this.repo = new Repository(this.tenant);
  }

  getAll() {
    return this.repo.getAll()
    .then(payload => Promise.resolve({ type: ACTION.LOG_COMMENT.SET_ALL, payload }));
  }

  create(stock) {
    return this.repo.create(stock)
    .then(payload => Promise.resolve({ type: ACTION.LOG_COMMENT.ADD, payload }));
  }

}
