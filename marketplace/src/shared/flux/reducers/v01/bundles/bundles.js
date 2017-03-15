import { ACTION } from 'flux/actions';
import { fromJS, List } from 'immutable';
import { ITEM } from 'helpers/constants';

export default function BundlesReducer(state = List(), action = {}) {
  switch (action.type) {
    // case ACTION.BUNDLE.ADD:
    //   return state.push(fromJS(action.bundle));
    case ACTION.BUNDLE.DELETE:
      return state.update(state => {
        return state.update(
          state.findIndex(bundle => {
            return bundle.get('id') === action.bundle.id;
          }), bundle => {
          return bundle.set('state', ITEM.STATE.KEY.DELETED);
        });
      });
    case ACTION.BUNDLE.UPDATE:
      // iterate over the bundles in the reducer for apply changes only to the bundle changed
      return fromJS(state.toJS().map(oBundle => {
        // Because we are iterating over all bundles in reducer, we only want to update the one which we are editing now
        if (oBundle.id === action.bundle.id) {
          // change alias if title is modified

          // finally set the bundle in the reducer
          oBundle = Object.assign({}, oBundle, action.bundle.oValues);

          // set alias if title changed
          if (action.bundle.oValues.title) {
            oBundle.alias = `${action.bundle.oValues.title}-${action.bundle.id}`;
          }
          oBundle.state = ITEM.STATE.KEY.DRAFT;
        }
        return oBundle;
      }));
    case ACTION.BUNDLE.RESOURCE.ADD:
      return state.map(bundle => {
        if (action.bundle.resource.id_bundle !== bundle.get('id')) {
          return bundle;
        }
        return bundle.update('resources', resources => {
          if (!resources) {
            return resources;
          }
          return resources.push(fromJS(action.bundle.resource));
        });
      });
    case ACTION.BUNDLE.RESOURCE.DELETE:
      return state.map(oBundle => {
        if (action.bundle.id_item !== oBundle.get('id')) {
          return oBundle;
        }
        // look if logo had this resource
        if (parseInt(oBundle.get('logo_id'), 10) === parseInt(action.bundle.id_resource, 10)) {
          const oLogoInfo = {
            id: null,
            type: ITEM.PLACEHOLDERS.PICTURES.GENERIC.TYPE,
            url: ITEM.PLACEHOLDERS.PICTURES.GENERIC.URL,
          };
          oBundle = oBundle
            .set('logo_id', null)
            .set('logo_info', oLogoInfo);
        }
        oBundle.state = ITEM.STATE.KEY.DRAFT;

        return oBundle.update('resources', resources => {
          let indexToDelete = -1;
          const aResources = resources.filter((r, index) => {
            const is = r.get('id') === action.bundle.id_resource;
            if (is) {
              indexToDelete = index;
              return r;
            }
          }).delete(indexToDelete);
          return aResources;
        });
      });
    case ACTION.BUNDLE.RESOURCE.ORDER:
      return state.map(bundle => {
        if (action.bundle.id !== bundle.get('id')) {
          return bundle;
        }
        return bundle.update('resources', resources => {
          if (!resources) {
            return resources;
          }
          let indexToDelete = -1;
          // TODO: is resourceToDelete is never used. Remove this code?
          const resourceToDelete = resources.filter((r, index) => {
            const is = r.get('id') === action.bundle.resource.id;
            if (is) {
              indexToDelete = index;
            }
            return is;
          }).first();

          return resources.map(resource => {
            return resource;
          }).delete(indexToDelete);
        });
      });
    case ACTION.BUNDLE.RESOURCE.CAROUSEL_TOGGLE:
      // iterate over the bundles in the reducer for apply changes only to the bundle changed
      return fromJS(state.toJS().map(oBundle => {
        // Because we are iterating over all bundles in reducer, we only want to update the one which we are editing now
        if (oBundle.id === action.bundle.id_bundle) {
          const aResource = oBundle.resources.map(oResource => {
            if (oResource.id === action.bundle.id_resource) {
              oResource.show_carousel = action.bundle.show_carousel;
            }
          });
        }
        return oBundle;
      }));
    case ACTION.BUNDLE.SET.ALL:
      return fromJS(action.bundles);
    case ACTION.BUNDLE.SET.STATE:
      // iterate over the bundles in the reducer for apply changes only to the bundle changed
      return fromJS(state.toJS().map(bundle => {
        // Because we are iterating over all bundles in reducer, we only want to update the one which we are editing now
        if (bundle.id === action.bundle.id) {
          // temp: delete when new db model is done, should works with state_id only
          bundle.state_id = action.bundle.state;
          switch (bundle.state_id) {
            case ITEM.STATE.DELETED:
              bundle.state = ITEM.STATE.KEY.DELETED;
              break;
            case ITEM.STATE.DRAFT:
              bundle.state = ITEM.STATE.KEY.DRAFT;
              break;
            case ITEM.STATE.PUBLISHED:
              bundle.state = ITEM.STATE.KEY.PUBLISHED;
              break;
            case ITEM.STATE.PENDING:
              bundle.state = ITEM.STATE.KEY.PENDING;
              break;
            default:
              break;
          }
        }
        return bundle;
      }));
    case ACTION.BUNDLE.SET.DELETED:
      return fromJS(action.bundles);
    case ACTION.BUNDLE.SET.DRAFT:
      return fromJS(action.bundles);
    case ACTION.BUNDLE.SET.LOGO:
    case ACTION.BUNDLE.SET.PENDING:
      return fromJS(action.bundles);
    case ACTION.BUNDLE.SET.PUBLISHED:
      return fromJS(action.bundles);
    case ACTION.BUNDLE.COMPONENTS.ADD:
      return state.map(oBundle => {
        if (action.bundle.id_bundle !== oBundle.get('id')) {
          return oBundle;
        }
        return oBundle.update('components', aComponents => {
          const aTmpComponents = aComponents.toJS();
          aTmpComponents.push(action.bundle.component);
          return fromJS(aTmpComponents);
        })
        .update('state_id', () => (ITEM.STATE.DRAFT))
        .update('state', () => (ITEM.STATE.KEY.DRAFT));
      });
    case ACTION.BUNDLE.COMPONENTS.DELETE:
      return state.map(oBundle => {
        if (action.bundle.id_bundle !== oBundle.get('id')) {
          return oBundle;
        }
        return oBundle.update('components', aComponents => {
          const aTmpComponents = aComponents.toJS();

          aTmpComponents.forEach((bc, index) => {
            if (+bc.show_order === action.bundle.show_order) {
              aTmpComponents.splice(index, 1);
            }
          });
          return fromJS(aTmpComponents);
        })
        .update('state_id', () => (ITEM.STATE.DRAFT))
        .update('state', () => (ITEM.STATE.KEY.DRAFT));
      });
    case ACTION.BUNDLE.COMPONENTS.ORDER:
      // iterate over bundles and delete the component
      return state.update(bundle => {
        const nComponentIndex = bundle.findIndex(c => c.get('id') === action.bundle.components.id);
        if (nComponentIndex !== -1) {
          return bundle.components.filter(component => {
            return component.id !== action.bundle.components.id;
          });
        }
        return state;
      });
    default:
      return state;
  }
}
