import Restful from './drivers/restful';

const API = new Restful();

export default class Corner {

  getAll() {
    return API.get({
      endpoint: 'corners',
    });
  }


  updateLogo(corner, img) {
    const data = new FormData();

    data.append('logo', img);
    // data.append('corner',JSON.stringify(corner))
    return API.post({
      endpoint: `corners/${corner.id}/logo`,
      params: data,
    });
  }

  update(params) {
    return API.post({
      endpoint: `corners/${params.filters.id}`,
      params: params.values,
    });
  }

  updateBestProduct(cornerId, productId, position) {
    return API.post({
      endpoint: `corners/${cornerId}/bestProduct`,
      params: {
        productId,
        position,
      },
    });
  }

  getAllKeywords() {
    return API.post({
      endpoint: 'corners/keywords',
      params: params.values,
    });
  }

  delete(cornerId) {
    return API.delete({
      endpoint: `corners/${cornerId}`,
    });
  }

  create(corner) {
    return API.put({
      endpoint: 'corners',
      params: { corner },
    });
  }

}
