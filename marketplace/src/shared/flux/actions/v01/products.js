import Repository from 'repositories/product';
import BillingRepository from 'repositories/billing';
import { ACTION } from 'flux/actions';
import { PRODUCT } from 'helpers/constants';

export default class Products {
  constructor(tenant) {
    this.tenant = tenant;
    this.repo = new Repository(this.tenant);
  }

  get All() {
    return this.repo.getAll()
    .then(items => Promise.resolve({ type: ACTION.PRODUCT.SET_ALL, products: items }));
  }

  GetByUser(id) {
    return this.repo.getByUser(id)
    .then(items => Promise.resolve({ type: ACTION.PRODUCT.SET_ALL, products: items }));
  }

  get Published() {
    return this.repo.getPublished()
    .then(items => Promise.resolve({ type: ACTION.PRODUCT.SET_ALL, products: items }));
  }

  Create(product, user) {
    return this.repo.create(product, user)
    .then(p => Promise.resolve({ type: ACTION.PRODUCT.ADD, product: p }));
  }

  Edit(id, values, user) {
    return this.repo.update({ values: Object.assign({}, values), filters: { id } }, user)
    .then(product => {
      values.state = PRODUCT.STATE.DRAFT;
      return Promise.resolve({ type: ACTION.PRODUCT.EDIT, product });
    });
  }

  Delete(id) {
    const values = { state: PRODUCT.STATE.DELETED };
    return this.repo.delete(id)
    .then(() => Promise.resolve({ type: ACTION.PRODUCT.EDIT, product: { id, ...values } }));
  }

  DemandPublication(id) {
    const values = { state: PRODUCT.STATE.PENDING };
    return this.repo.demandPublication(id)
    .then(() => Promise.resolve({ type: ACTION.PRODUCT.EDIT, product: { id, ...values } }));
  }

  Retire(id) {
    const values = { state: PRODUCT.STATE.DRAFT };
    return this.repo.update({ values, filters: { id } })
    .then(() => Promise.resolve({ type: ACTION.PRODUCT.EDIT, product: { id, ...values } }));
  }

  Publish(id) {
    const values = { state: PRODUCT.STATE.PUBLISHED };
    return this.repo.publish(id)
    .then(() => Promise.resolve({ type: ACTION.PRODUCT.EDIT, product: { id, ...values } }))
    .catch(err =>{
      const errorMessage = `An error has occured publishing product ${id}`;
      console.log(`${errorMessage}. ${JSON.stringify(err, null, 3)}`);
      Promise.reject(err);
    });
  }

  /** *
   *
   * @param id: number (product id)
   * @param values {home_order : number,resource : number}
   * @returns {Promise}
   * @constructor
   */
  UpdateResource(product) {
    return this.repo.updateResource(Object.assign({}, product))
    .then(p => Promise.resolve({ type: ACTION.PRODUCT.RESOURCE.EDIT, product: p }));
  }

  AddResource(product) {
    return this.repo.addResource(Object.assign({}, product))
    .then(p => Promise.resolve({ type: ACTION.PRODUCT.RESOURCE.ADD, product: p }));
  }

  AddSlideShow(product) {
    return this.repo.addSlideshow(Object.assign({}, product))
    .then(p => Promise.resolve({ type: ACTION.PRODUCT.RESOURCE.SLIDESHOW.ADD, product: p }));
  }

  AddSlideShowFromResource(product) {
    return this.repo.addSlideShowFromResource(Object.assign({}, product))
    .then(() => Promise.resolve({ type: ACTION.PRODUCT.RESOURCE.SLIDESHOW.ADD_FROM_RESOURCE, product }));
  }

  /** *
   *
   * @param product { id: number, resource: {id : number, ...} }
   * @returns {Promise}
   * @constructor
   */
  DeleteFromSlideshow(product) {
    return this.repo.deleteFromSlideshow(Object.assign({}, product))
    .then(() => Promise.resolve({ type: ACTION.PRODUCT.RESOURCE.SLIDESHOW.DELETE, product }));
  }

  DeleteResource(product) {
    return this.repo.deleteResource(Object.assign({}, product))
    .then(() => Promise.resolve({ type: ACTION.PRODUCT.RESOURCE.DELETE, product }));
  }

  fetchOffers(idBilling) {
    if (!idBilling) { return Promise.resolve({ type: ACTION.PRODUCT.BILLING.FETCH_OFFERS, payload: [] }); }
    return this.repo.getOffersOfProduct(idBilling)
    .then(payload => Promise.resolve({ type: ACTION.PRODUCT.BILLING.FETCH_OFFERS, payload }));
  }

  UpdateFeatureAvailability(oFeature) {
    return this.repo.updateFeatureAvailability(oFeature)
    .then(() => Promise.resolve({ type: ACTION.PRODUCT.FEATURES.SET, feature: { id_product: +oFeature.id_product, id_feature: oFeature.id_feature, isAvailable: oFeature.isAvailable } }));
  }

  setProductTimeline(payload) {
    return this.repo.setProductTimeline(payload)
    .then(() => Promise.resolve({ type: ACTION.PRODUCT.TIMELINE.SET, payload }));
  }

  setFollowUpTasks(payload) {
    return this.repo.setFollowUpTasks(payload)
    .then(followUps => {
      return Promise.resolve({ type: ACTION.PRODUCT.FOLLOW_UP_TASKS.SET, followUps, productId: payload.productId });
    });
  }
}
