import { clean } from 'helpers/utils';
import { FORM } from 'helpers/constants';
import Repository from './drivers/mysql';
import { _ } from 'underscore';
import * as models from './models/index';

export default class MessageRepository {
  constructor(tenant) {
    this.tenant = tenant;
    this._repo = new Repository(tenant, 'message');
  }

  send(message) {
    const self = this;
    let oMessageModel = {};

    // set the type of the message to validate it
    switch (message.type) {
      // case 'FOProductContactUs':
      case FORM.FO.PRODUCT.CONTACTUS:
        oMessageModel = new models.MessageProduct();
        break;
      default :
        oMessageModel = new models.MessageProduct();
        break;
    }

    return new Promise((resolve, reject) => {
      let oValidMessage = {};

      // clean object message. Only leave necessary fields. We send type to know the type of message
      if (message.type) {
        delete message.type;
      }

      if (message.messageType) {
        delete message.messageType;
      }

      oMessageModel.validate(message)
        .then(oValidatedMessage => {
          oValidMessage = oValidatedMessage;
          return this._repo.insert(oValidatedMessage);
        })
        .then(resolve)
        .catch(err => {
          reject(err);
        });
    });
  }

  getSubjects(type) {
    // if no type is passed return subject that are aplicable to product and admin questions
    if (!type) {
      type = null;
    }
    return this._repo.query('SELECT id,name,description FROM message_subject');// where is_admin = ?',[type])
  }


}
