import CONSTANTS from './FeatureConstants';

export default class FeatureActions {

  setAll = features => {
    console.log('FeatureActions::setAll::features', features);
    return {
      type: CONSTANTS.SET_ALL,
      payload: features,
    };
  }

}
