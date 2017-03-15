import Repository from 'repositories/bundle';
import { ACTION } from 'flux/actions';
import Promise from 'bluebird';
import { ITEM } from 'helpers/constants';

export default class Bundles {
  constructor(tenant) {
    this.tenant = tenant;
    this.repository = new Repository(this.tenant);
  }
  //
  // // Create, delete and update
  // Create(oBundle) {
  //   return this.repository.create(oBundle)
  //   .then(res => Promise.resolve({ type: ACTION.BUNDLE.ADD, bundle: res }));
  // }
  //
  // Delete(id) {
  //   return this.repository.delete(id)
  //   .then(res => Promise.resolve({ type: ACTION.BUNDLE.DELETE, bundle: { id, state: ITEM.STATE.DELETED } }));
  // }
  //
  // Update(id, oValues) {
  //   return this.repository.update({ values: Object.assign({}, oValues), filters: { id } })
  //   .then(res => Promise.resolve({ type: ACTION.BUNDLE.UPDATE, bundle: { oValues, id: parseInt(id, 10) } }));
  // }
  //
  // // Getters
  // get All() {
  //   return this.repository.getAll()
  //   .then(res => Promise.resolve({ type: ACTION.BUNDLE.SET.ALL, bundles: res }));
  // }
  //
  // ByUser(idUser) {
  //   return this.repository.getByUser(idUser)
  //   .then(res => Promise.resolve({ type: ACTION.BUNDLE.SET.ALL, bundles: res }));
  // }
  //
  // GetDeleted() {
  //   return this.repository.getDeleted()
  //   .then(res => Promise.resolve({ type: ACTION.BUNDLE.SET.DELETED, bundles: res }));
  // }
  //
  // GetDraft() {
  //   return this.repository.getDraft()
  //   .then(res => Promise.resolve({ type: ACTION.BUNDLE.SET.DRAFT, bundles: res }));
  // }
  //
  // GetOne(nId) {
  //   return this.repository.getOne(nId)
  //   .then(res => Promise.resolve({ bundle: res }));
  // }
  //
  // GetPending() {
  //   return this.repository.getPending()
  //   .then(res => Promise.resolve({ type: ACTION.BUNDLE.SET.PENDING, bundles: res }));
  // }
  //
  // get Published() {
  //   return this.repository.getPublished()
  //   .then(res => Promise.resolve({ type: ACTION.BUNDLE.SET.PUBLISHED, bundles: res }));
  // }
  //
  // GetPublished() {
  //   return this.repository.getPublished()
  //   .then(res => Promise.resolve({ type: ACTION.BUNDLE.SET.PUBLISHED, bundles: res }));
  // }
  //
  // // State modifications
  // DemandPublication(id) {
  //   console.log(`[DEBUG] DemandPublication ${id}`);
  //   return this.repository.demandPublication(id)
  //   .then(res => Promise.resolve({ type: ACTION.BUNDLE.SET.STATE, bundle: { id, state: ITEM.STATE.PENDING } }))
  //   .catch(err => {
  //     console.log(`[ERROR] DemandPublication error ${err}`);
  //     this.props.notification.add({
  //       message: `Error ${err}`,
  //       level: 'error',
  //     });
  //   });
  // }
  //
  // Publish(id) {
  //   return this.repository.publish(id)
  //   .then(res => Promise.resolve({ type: ACTION.BUNDLE.SET.STATE, bundle: { id, state: ITEM.STATE.PUBLISHED } }))
  //   .catch(err => {
  //     console.log(`[ERROR] Publish error ${err}`);
  //     this.props.notification.add({
  //       message: `Error ${err}`,
  //       level: 'error',
  //     });
  //   });
  // }
  //
  // Unpublish(id) {
  //   return this.repository.unpublish(id)
  //   .then(res => Promise.resolve({ type: ACTION.BUNDLE.SET.STATE, bundle: { id, state: ITEM.STATE.DRAFT } }));
  // }
  //
  // // Resources
  // AddResource(oResource) {
  //   return this.repository.addResource(Object.assign({}, oResource))
  //   .then(res => Promise.resolve({ type: ACTION.BUNDLE.RESOURCE.ADD, bundle: { id_bundle: res.id_bundle, resource: res.resource } }));
  // }
  //
  // DeleteResource(oResourceData) {
  //   return this.repository.deleteResource(oResourceData)
  //   .then(res => Promise.resolve({ type: ACTION.BUNDLE.RESOURCE.DELETE, bundle: { id_item: oResourceData.id_item, id_resource: oResourceData.id_resource } }));
  // }
  //
  // ToggleShowResourceCarousel(oResourceData) {
  //   return this.repository.toggleResourceToCarousel(Object.assign({}, oResourceData))
  //   .then(res => Promise.resolve({ type: ACTION.BUNDLE.RESOURCE.CAROUSEL_TOGGLE, bundle: { id_bundle: res.id_item, id_resource: res.id_resource, show_carousel: res.show_carousel } }));
  // }
  //
  // ChangeLogo(oBundle) {
  //   return this.repository.changeLogo({ values: { logo_id: oBundle.logo_id }, filters: { id: oBundle.id_item } })
  //   .then(res => Promise.resolve({ type: ACTION.BUNDLE.SET.LOGO, bundle: res }));
  // }
  //
  // DeleteLogo(oBundle) {
  //   return this.repository.deleteLogo({ values: { logo_id: null }, filters: { id: oBundle.id_item } })
  //   .then(res => Promise.resolve({ type: ACTION.BUNDLE.SET.LOGO, bundle: res }));
  // }
  //
  // // Components
  // AddComponent(oComponentData) {
  //   return this.repository.addComponent(Object.assign({}, oComponentData))
  //   .then(res => Promise.resolve({ type: ACTION.BUNDLE.COMPONENTS.ADD, bundle: { id_bundle: oComponentData.id_item, component: res.component } }));
  // }
  //
  // DeleteComponent(oComponentData) {
  //   return this.repository.deleteComponent(Object.assign({}, oComponentData))
  //   .then(res => Promise.resolve({ type: ACTION.BUNDLE.COMPONENTS.DELETE, bundle: { id_bundle: oComponentData.id_item, id_component: res.id_component, show_order: oComponentData.show_order } }));
  // }

}
