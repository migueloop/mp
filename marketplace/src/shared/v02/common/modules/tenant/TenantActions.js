import CONSTANTS from './TenantConstants';

export default class TenantActions {
  constructor(tenant) {
    this.tenant = tenant;
  }
  setName = (tenantName) => {
    return {
      type: CONSTANTS.SET_NAME,
      payload: tenantName,
    };
  }
}
