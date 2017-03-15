import {expect} from 'chai'
import {Map, List,fromJS} from 'immutable'

import { ACTION } from 'actions'
import {makeStore} from 'Core/store'

const store = makeStore();

describe('Authors Reducer', () => {

  const store = makeStore();
  it('Set all Editor', () => {


    let author = {
      id: 1,
      name: 'bart'
    };

    store.dispatch({
      type: ACTION.USER.AUTHOR.SET_ALL,
      authors: [author]
    });

    expect(store.getState().get('authors')).to.equal(fromJS([author]))
  });

  it('Set an Editor if not exists on the list', () => {

    let author = {
      id: 2,
      name: 'bart 2'
    };

    store.dispatch({
      type: ACTION.USER.AUTHOR.SET_ONE,
      author
    });

    expect(store.getState().get('authors')).to.equal(fromJS([{
      id: 1,
      name: 'bart'
    }, author]))
  });

  it('update a editor that exist on the list', () => {

    let author = {
      id: 2,
      name: 'bart 3'
    };

    store.dispatch({
      type: ACTION.USER.AUTHOR.SET_ONE,
      author
    });

    expect(store.getState().get('authors')).to.equal(fromJS([{
      id: 1,
      name: 'bart'
    }, author]))

  })


});