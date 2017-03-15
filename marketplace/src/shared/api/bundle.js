import Restful from './drivers/restful';

const API = new Restful();

export default class Bundle {

  delete(nId) {
    return API.delete({
      endpoint: `bundles/${nId}`,
    });
  }


  update(params) {
    return API.put({
      endpoint: `bundles/${params.filters.id}`,
      params: params.values,
    });
  }


  // getter actions
  getAll() {
    return API.get({
      endpoint: 'bundles',
    });
  }


  getDeleted() {
    return API.get({
      endpoint: 'bundles/deleted',
    });
  }


  getDraft() {
    return API.get({
      endpoint: 'bundles/draft',
    });
  }


  getOne(id) {
    return API.get({
      endpoint: `bundles/${id}`,
    });
  }


  getPending() {
    return API.get({
      endpoing: 'bundles/pending',
    });
  }


  getPublished() {
    return API.get({
      endpoint: 'bundles/published',
    });
  }


  // state modification
  demandPublication(id) {
    return API.put({
      endpoint: `bundles/${id}/demandpublication`,
    });
  }


  publish(id) {
    return API.put({
      endpoint: `bundles/${id}/publish`,
    });
  }


  unpublish(id) {
    return API.put({
      endpoint: `bundles/${id}/unpublish`,
    });
  }


  /*
   * Add a file uploaded.
   * Keep in mind: we use data.append to later user resource key in MULTER Express Midleware to get the complet info
   * of the uploaded file (such as the PATH)
   * @param {object} oResource contains resource that is the file selected, id_item is the Id of the item, and sImage
   * to know if is a logo o main_picture (take this string from constants.ITEM
   *
   */

  addResource(oResourceData) {
    const data = new FormData();

    data.append('resource', oResourceData.resource);
    data.append('sImage', oResourceData.sImage);
    data.append('show_carousel', oResourceData.resource.show_carousel);
    data.append('carousel_order', oResourceData.resource.carousel_order);

    return API.post({
      endpoint: `bundles/${oResourceData.id_item}/resource`,
      params: data,
    });
  }


  toggleResourceToCarousel(oResourceData) {
    return API.put({
      endpoint: `bundles/${oResourceData.id_item}/resource/${oResourceData.id_resource}/toggle_carousel/${oResourceData.show_carousel}`,
    });
  }


  deleteResource(oResourceData) {
    return API.delete({
      endpoint: `bundles/${oResourceData.id_item}/resource/${oResourceData.id_resource}`,
    });
  }


  changeLogo(oResourceData) {
    return API.put({
      endpoint: `bundles/${oResourceData.id_item}/logo/${oResourceData.logo_id}`,
    });
  }


  deleteLogo(oResourceData) {
    return API.delete({
      endpoint: `bundles/${oResourceData.id_item}`,
    });
  }


  addComponent(oComponentData) {
    return API.post({
      endpoint: `bundles/${oComponentData.id_item}/component/${oComponentData.component.id}`,
      params: oComponentData,
    });
  }


  deleteComponent(oComponentData) {
    return API.delete({
      endpoint: `bundles/${oComponentData.id_item}/component/${oComponentData.id_component}/${oComponentData.show_order}`,
    });
  }

}
