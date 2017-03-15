import {expect} from 'chai'
import {Map, List,fromJS} from 'immutable'

import { ACTION } from 'actions'
import {makeStore} from 'Core/store'

describe('Tenant Reducer', () => {
  it('set tenant', () => {
    const store = makeStore();

    store.dispatch({
      type: ACTION.SET_TENANT,
      tenant: 'HP'
    });

    expect(store.getState().get('tenant')).to.equal('HP')
  })
});