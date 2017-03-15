import { ACTION } from 'flux/actions';
import { fromJS } from 'immutable';

export default (state, action) => {
  switch (action.type) {
    case ACTION.ASSIGNMENT_ORDER_FOLLOW_UPS.SET_ALL:
      return fromJS(action.payload);
    case ACTION.ASSIGNMENT_ORDER_FOLLOW_UPS.ADD:
      console.log('ACTION.ASSIGNMENT_ORDER_FOLLOW_UPS.ADD', action);
      const jsState = state.toJS();
      // This returns an array as when you create one follow up you may also create a few automatic follow ups
      const newState = fromJS(jsState.concat(action.payload));
      console.log('newState', newState.toJS());
      return newState;
    case ACTION.ASSIGNMENT_ORDER_FOLLOW_UPS.UPDATE:
      const followUps = state.toJS().slice();
      const itemIndex = followUps.indexOf(followUps.find(item => item.id === action.payload.id));
      followUps[itemIndex] = action.payload;
      console.log('state::followUps', followUps);
      return fromJS(followUps);
    default:
      return state;
  }
};
