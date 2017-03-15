/**
 * Created by cjgm on 6/27/16.
 */
import { ACTION } from 'flux/actions';
import ProductRepository from 'repositories/product';

export default class Features {
  constructor(tenant) {
    this.tenant = tenant;
    this.repository = new ProductRepository(tenant);
  }

  setTenantFeatures(features) {
    return Promise.resolve({
      type: ACTION.FEATURES.TENANT,
      features,
    });
  }

}
