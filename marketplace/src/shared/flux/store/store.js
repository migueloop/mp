import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import reducers, { INITIAL_STATE } from 'flux/reducers';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import asyncMiddleware from 'v02/flux/middleware/async';

export function makeStore(initialState) {
  // const store = reduxCreateStore(reducers, initialState || INITIAL_STATE, applyMiddleware(asyncMiddleware));
  const store = reduxCreateStore(reducers, initialState || INITIAL_STATE, applyMiddleware(thunk, asyncMiddleware));
  return store;
}
