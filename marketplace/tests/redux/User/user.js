import { expect } from 'chai';
import { Map, List,fromJS } from 'immutable';
import { ACTION } from 'actions';
import { makeStore } from 'Core/store';

const store = makeStore();

//REDUCERS
describe('user Reducers', () => {
  let oFakeUser = {logged: true};

  it('Login', () => {

    oFakeUser.logged = true;

    store.dispatch({
      type: ACTION.USER.LOGIN,
      oFakeUser
    });

    expect(store.getState().get('user').toJS().logged).to.equal(true);

  });


  it('Logout', () => {

    oFakeUser.logged = false;

    store.dispatch({
      type: ACTION.USER.LOGOUT,
      oFakeUser
    });

    expect(store.getState().get('user').toJS().logged).to.equal(false);

  });

});

//ACTIONS
describe('user Actions', () => {

  it('SET ACTION', () => {

    //expect(store.getState().get('OBJECT')).to.equal(fromJS(OBJECT));

  });
});