import Restful from './drivers/restful';

const API = new Restful();

export default class Message {

  send(message) {
    return API.post({
      endpoint: `message/${message.type}`,
      params: message,
    });
  }
}
