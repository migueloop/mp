import CONSTANTS from './CookieConstants';
import cookie from 'react-cookie';

export default function (state, action) {
  switch (action.type) {
    case CONSTANTS.SET:
      if (action.payload) {
        const expires = new Date();
        expires.setYear(new Date().getFullYear() + 10);
        cookie.save('accepted-cookie', true, { expires });
      } else {
        cookie.remove('accepted-cookie');
      }
      return state.set('accepted', action.payload);
    default:
      return state;
  }
}
