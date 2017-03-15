// TODO: check these functions are all working when API is complete
import Restful from './drivers/restful';
const API = new Restful();

export default class Assignment {

  // create, delete, update
  create(oAssignment) {
    return API.post({ endpoint: 'assignments', params: oAssignment });
  }

  getAll() {
    return API.get({ endpoint: 'assignments' });
  }

  update(oParams) {
    return API.put({ endpoint: `assignments/${oParams.filters.id}`, params: oParams.values });
  }

  delete(nId) {
    return API.delete({ endpoint: `assignments/${nId}` });
  }

  // getters
  getValidated() {
    return API.get({ endpoint: 'assignments/validated' });
  }

  // setters

  // state changes
  demandValidation(id) {
    return API.put({ endpoint: `assignments/${id}/demandvalidation` });
  }

  validate(oAssignment) {
    return API.put({ endpoint: `assignments/${oAssignment.id}/validate`, params: oAssignment });
  }

  cancelValidation(nId) {
    return API.put({ endpoint: `assignments/${nId}/cancelvalidation` });
  }

  // timeline system
  completeAssignment(nId, sPoSystemId, params) {
    return API.put({ endpoint: `assignments/complete/${nId}/workflow/${sPoSystemId}`, params });
  }


  // GDP
  getGDPItemInfo(payload) {
    return API.get({ endpoint: `assignments/${payload.id}/gdpinfo/`, params: { payload } });
  }

}
