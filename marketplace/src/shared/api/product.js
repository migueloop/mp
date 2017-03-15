import Restful from './drivers/restful';
const API = new Restful();

export default class Product {

  create(product) {
    return API.put({ endpoint: 'products', params: { product } });
  }

  getPublished() {
    return API.get({ endpoint: 'product/published' });
  }

  update(params) {
    return API.post({ endpoint: `products/${params.filters.id}`, params: params.values });
  }

  getAll() {
    return API.get({ endpoint: 'products' });
  }

  delete(id) {
    return API.delete({ endpoint: `products/${id}` });
  }

  demandPublication(id) {
    return API.post({ endpoint: `products/${id}/publish` });
  }

  publish(id) {
    return API.put({ endpoint: `products/${id}/publish` });
  }

  addResource(product) {
    const data = new FormData();
    data.append('resource', product.resource.file);
    return API.put({ endpoint: `products/${product.id}/resource`, params: data });
  }

  addSlideshow(product) {
    const data = new FormData();
    data.append('resource', product.resource.file);
    return API.put({ endpoint: `products/${product.id}/resource/${product.resource.home_order}`, params: data });
  }

  addSlideShowFromResource(product) {
    return API.post({ endpoint: `products/${product.id}/resource/${product.resource.id}/${product.resource.home_order}` });
  }

  deleteFromSlideshow(product) {
    return API.delete({ endpoint: `products/${product.id}/slideshow/${product.resource.home_order}` });
  }

  deleteResource(product) {
    return API.delete({ endpoint: `products/${product.id}/resource/${product.resource.id}` });
  }

  updateFeatureAvailability(oFeature) {
    return API.put({ endpoint: `products/${oFeature.id_product}/feature/${oFeature.id_feature}/available/${oFeature.isAvailable}` });
  }

  setProductTimeline(payload) {
    return API.post({ endpoint: 'products/timeline', params: payload });
  }

  setFollowUpTasks(payload) {
    return API.post({ endpoint: 'products/follow-up-tasks', params: payload });
  }

}
