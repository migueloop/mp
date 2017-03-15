import { expect } from 'chai';
import { Map, List,fromJS } from 'immutable';
import { ACTION } from 'actions';
import { makeStore } from 'Core/store';
import Utils from '../../helpers/utils.js';

const store = makeStore();
let oUtils = new Utils();
const _guid = oUtils.generateGUID();

//REDUCERS UNIT TESTING
//TEST CASES: Listen event, unlisten event
describe('sockets Reducers', () => {

  it('Listen event', () => {

    let oFakeSocketElement = {};

    oFakeSocketElement[_guid] = fromJS(['Edit Gotham City', 'Send Superman to kill Bill']);

    store.dispatch({
      type: ACTION.LISTEN,
      guid:_guid,
      events: oFakeSocketElement[_guid]
    });

    expect(store.getState().get('sockets')).to.equal(fromJS(oFakeSocketElement));

  });


  it('Unlisten event', () => {

    store.dispatch({
      type: ACTION.UNLISTEN,
      guid:_guid
    });

    expect(store.getState().get('sockets')).to.equal(fromJS({}));
  });

});


//ACTIONS UNIT TESTING
describe('sockets Actions', () => {

  it('SET ACTION', () => {

    //expect(store.getState().get('OBJECT')).to.equal(fromJS(OBJECT));

  });
});
