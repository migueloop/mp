import { ITEM, MODELS } from './constants';
import { Actions } from 'v02/flux';

// MKP-905 - Delete this class in refactor

/**
 * Dispatch to the reducer the result of the action , show a success notification and assign to the
 * object to return the new values
 * @param oAction action returned by the API after update / edit item
 * @param oToReturn object that contains the dispatcher and the notification
 * @param oChangedFields object that contains only the new changes
 * @returns {*} object with the new values
 * @private
 */
const _dispatchResult = (oAction, oToReturn, oChangedFields) => {
  oToReturn.props.dispatch(oAction);
  oToReturn.props.notification.add({
    message: `${oToReturn.item_name} updated`,
    level: 'success',
  });
};

/**
 * Will set notification prop of the item in order to show in the view the message
 * @param oToReturn item to set notification error
 * @private
 */
const _dispatchError = oToReturn => {
  oToReturn.props.notification.add({
    message: `Error updating ${oToReturn.item_name.toLowerCase()}`,
    level: 'error',
  });
};


/*
 * Save Item (product, etc...) to the DB when is edited.
 * @param {object} oSaveInfo the object with the information. Must contains keys item, item_name (string), fields, history, props
 */
export const SaveItem = oSaveInfo => {
  if (oSaveInfo) {
    // let lastChange = oSaveInfo.history[oSaveInfo.history.length - 1];
    console.log(oSaveInfo)
    // convert to Array the values to save
    if (!Array.isArray(oSaveInfo.fields)) {
      oSaveInfo.fields = [oSaveInfo.fields];
    }

    // get the values to save
    const obj = oSaveInfo.fields.reduce((obj, field) => {
      let value = oSaveInfo.item[field];

      if (field === 'links') {
        value = value.filter(link => link.url.length > 0);
      }

      /* if ((value !== lastChange[field])) {
       obj[field] = value;
       } */
      obj[field] = value;
      return obj;
    }, {});

    return new Promise((resolve, reject) => {
      // if there are corners and keywords available, save the object
      if (Object.keys(obj).length !== 0) {
        switch (oSaveInfo.item_name) {
          case 'Bundle':
          console.log("Entra en case bundle" );
            new Actions(oSaveInfo.props.tenant).BackOffice.Bundles.Update(oSaveInfo.props.params.id, obj).payload
              .then(action => {
                _dispatchResult(action, oSaveInfo);
                resolve(Object.assign({}, oSaveInfo.item, obj));
              })
              .catch(err => {
                _dispatchError(oSaveInfo);
                reject(err);
              });
            break;
          default:
            break;
        }
      }
      else {
        // we enter here, ie, when we dont have any corner selected. Then there are no keywords listed
        // because the keywords belong to corners.
        reject;
      }
    });
  }
};


export const parseResource = oFile => {
  const oParsedFile = {};

  oParsedFile[MODELS.RESOURCE.NAME] = oFile.originalname;
  oParsedFile[MODELS.RESOURCE.NAME_CUSTOM] = oFile.originalname;
  oParsedFile[MODELS.RESOURCE.ORIGINAL_NAME] = oFile.originalname;
  oParsedFile[MODELS.RESOURCE.TYPE] = oFile.mimetype;
  oParsedFile[MODELS.RESOURCE.IS_HIDDEN] = 0;
  oParsedFile[MODELS.RESOURCE.CREATION_DATE] = Date.now();
  oParsedFile[MODELS.RESOURCE.HOME_ORDER] = null;

  return oParsedFile;
};
