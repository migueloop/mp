import { replaceValuesInObject } from 'helpers';
import axios from 'axios';

export default (action, request, ...definitions) => {
  console.log('API CALL', replaceValuesInObject(action.parameters, ...definitions));
  return axios(Object.assign({ timeout: 60000 }, replaceValuesInObject(action.parameters, ...definitions)))
    .then(res => Promise.resolve(res.data));
};
