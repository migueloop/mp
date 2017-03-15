import Repository from 'repositories/user';
import { ACTION } from 'flux/actions';
import Promise from 'bluebird';
import Users from './users';
import Settings from './settings';
import Billing from './billing';
import Acl from './acl';
import Workflow from './workflow';
import { USER } from 'helpers/constants';

export default class BackOffice {
  constructor(tenant) {
    this.tenant = tenant;
  }

  Users(user) {
    return new Users(this.tenant, user);
  }

  get Settings() {
    return new Settings(this.tenant);
  }

  get Billing() {
    return new Billing(this.tenant);
  }

  get Acl() {
    return new Acl(this.tenant);
  }
  get Workflow() {
    return new Workflow(this.tenant);
  }
}
