import { ACTION } from 'flux/actions';
import { fromJS, List } from 'immutable';
import { ITEM } from 'helpers/constants';

export default function ProductsReducer(state = List(), action = {}) {
  switch (action.type) {
    case ACTION.PRODUCT.BILLING.FETCH_OFFERS:
      return state.update(products =>
        products.map(product => {
          if (product.get('id_billing') === parseInt(action.payload.idBilling, 10)) {
            return product.set('offers', fromJS(action.payload.offers));
          }
          return product;
        })
      );
    case ACTION.PRODUCT.ADD:
      return state.push(fromJS(action.product));
    case ACTION.PRODUCT.SET_ALL:
      return fromJS(action.products);
    case ACTION.PRODUCT.EDIT:
      console.log('ACTION.PRODUCT.EDIT::action', action);
      return fromJS(state.toJS().map(product => {
        if (parseInt(product.id, 10) === parseInt(action.product.id, 10)) {
          if (action.product.logo) {
            const logo = product.resources.find(r => r.id === action.product.logo);
            action.product.logoUrl = `/public/uploads/products/${product.id}/${logo.name}`;
          }

          if (action.product.editor_logo) {
            const editorLogoResource = product.resources.find(r => parseInt(r.id, 10) === parseInt(action.product.editor_logo, 10));
            action.product.editor_logo_url = `/public/uploads/products/${product.id}/${editorLogoResource.name}`;
          } else {
            action.product.editor_logo_url = ITEM.PLACEHOLDERS.PICTURES.GENERIC.URL;
          }
          product = Object.assign(product, action.product);
        }
        return product;
      }));
    case ACTION.PRODUCT.RESOURCE.ADD:
      return state.map(product => {
        if (parseInt(action.product.id, 10) !== product.get('id')) {
          return product;
        }
        return product.update('resources', resources => {
          if (!resources) {
            return resources;
          }
          return resources.map(resource => {
            if (action.product.resource.home_order && resource.get('home_order') === action.product.resource.home_order) {
              return resource.set('home_order', null);
            }
            return resource;
          }).push(fromJS(action.product.resource));
        });
      });
    case ACTION.PRODUCT.RESOURCE.DELETE:
      return state.map(product => {
        if (parseInt(action.product.id, 10) !== parseInt(product.get('id'), 10)) {
          return product;
        }

        if (product.get('logo') === action.product.resource.id) {
          product = product
            .set('logo', null)
            .set('logoUrl', '/public/images/placeholders/product.png');
        }

        if (product.get('editor_logo') === action.product.resource.id) {
          product = product
            .set('editor_logo', null);
        }

        if (product.get('specification') === action.product.resource.id) {
          product = product
            .set('specification', null);
        }

        return product.update('resources', resources => {
          if (!resources) {
            return resources;
          }
          let indexToDelete = -1;
          const resourceToDelete = resources.filter((r, index) => {
            const is = r.get('id') === action.product.resource.id;
            if (is) {
              indexToDelete = index;
            }
            return is;
          }).first();

          return resources.map(resource => {
            if (resourceToDelete.get('home_order') && resourceToDelete.get('home_order') < resource.get('home_order')) {
              return resource.set('home_order', resource.get('home_order') - 1);
            }
            return resource;
          }).delete(indexToDelete);
        });
      });
    case ACTION.PRODUCT.RESOURCE.EDIT:
      return state.map(product => {
        if (action.product.id !== product.get('id')) {
          return product;
        }
        return product.update('resources', resources => {
          if (!resources) {
            return resources;
          }
          return resources.map(resource => {
            if (resource.get('id') === action.product.resource.id) {
              return resource.merge(fromJS(action.product.resource));
            }
            return resource;
          });
        });
      });
    case ACTION.PRODUCT.RESOURCE.SLIDESHOW.ADD:
      return fromJS(state.toJS().map(product => {
        if (product.id === action.product.id) {
          let resourceAlreadyExist = false;
          product.resources = product.resources.map(resource => {
            if (!resource.home_order) {
              return resource;
            }
            if (resource.home_order === action.product.resource.home_order) {
              resource.home_order = null;
            }
            if (resource.id === action.product.resource.id) {
              resourceAlreadyExist = true;
              resource.home_order = action.product.resource.home_order;
            }
            return resource;
          });
          if (!resourceAlreadyExist) {
            product.resources.push(action.product.resource);
          }
        }
        return product;
      }));
    case ACTION.PRODUCT.RESOURCE.SLIDESHOW.ADD_FROM_RESOURCE:
      return state.map(product => {
        if (product.get('id') !== action.product.id) {
          return product;
        }
        return product.update('resources', resources => {
          if (!resources) {
            return resources;
          }
          return resources.map(resource => {
            if (resource.get('id') === action.product.resource.id) {
              return resource.set('home_order', action.product.resource.home_order);
            }
            if (resource.get('home_order') === action.product.resource.home_order) {
              return resource.set('home_order', null);
            }
            return resource;
          });
        });
      });
    case ACTION.PRODUCT.RESOURCE.SLIDESHOW.DELETE:
      return state.map(product => {
        if (action.product.id !== product.get('id')) {
          return product;
        }

        return product.update('resources', resources => {
          if (!resources) {
            return resources;
          }

          return resources.map(resource => {
            if (resource.get('home_order') === action.product.resource.home_order) {
              return resource.set('home_order', null);
            }
            if (resource.get('home_order') > action.product.resource.home_order) {
              return resource.update('home_order', order => --order);
            }
            return resource;
          });
        });
      });
    case ACTION.CORNER.EDIT:
      return fromJS(state.toJS().map(product => {
        product.corners = product.corners.map(corner => {
          if (corner.id === action.corner.id) {
            return Object.assign(corner, {
              name: action.corner.name,
            });
          }
          return corner;
        });
        return product;
      }));
    case ACTION.PRODUCT.FEATURES.SET:
      return state.map(product => {
        if (action.feature.id_product !== product.get('id')) {
          return product;
        }

        return product.update('availableFeatures', features => {
          const aFeatures = features.toJS();
          if (features.toJS().isIntersected(action.feature.id_feature) && !action.feature.isAvailable) {
            const i = aFeatures.indexOf(action.feature.id_feature);
            if (i !== -1) {
              aFeatures.splice(i, 1);
            }
          } else if (!features.toJS().isIntersected(action.feature.id_feature) && action.feature.isAvailable) {
            aFeatures.push(action.feature.id_feature);
          }
          return fromJS(aFeatures);
        });
      });
    case ACTION.PRODUCT.TIMELINE.SET:
      const productId = action.payload.productId;
      return state.map(product => productId !== product.get('id') ? product : product.update('timeline', () => action.payload));
    case ACTION.PRODUCT.FOLLOW_UP_TASKS.SET:
      const pId = action.productId;
      return state.map(product => pId !== product.get('id') ? product : product.update('followUps', () => action.followUps));
    default:
      return state;
  }
}
