import CONSTANTS from './LocaleConstants';
import { fromJS } from 'immutable';

export default function (state, action) {
  switch (action.type) {
    case CONSTANTS.FETCH:
      return fromJS({
        language: action.language,
        messages: action.payload,
      });
    default:
      return state;
  }
}
