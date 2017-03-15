import { expect } from 'chai';
import { Map, List,fromJS } from 'immutable';
import { ACTION } from 'actions';
import { makeStore } from 'Core/store';

const store = makeStore();

//TODO: Develop misc action before testing
//REDUCERS UNIT TESTING
//TEST CASES: Set keywords, set platforms, set activity fields
describe('Misc Reducers', () => {

  let aFakeKeywords = [
    {'id': 12, 'name':'testKeyowrd12'},
    {'id': 32, 'name':'testKeyowrd32'},
    {'id': 76, 'name':'testKeyowrd76'},
    {'id': 54, 'name':'testKeyowrd54'}
  ];
  let aFakePlatforms = [
    {'id': 33, 'name': 'spectrum'},
    {'id': 43, 'name': 'commodore'}
  ];
  let aFakeActivityFields = [
    {'id': 422, 'name': 'Lottery'},
    {'id': 21, 'name': 'Cocktails'},
    {'id': 412, 'name': 'IT'},
    {'id': 982, 'name': 'Beach'}
  ];

  it('Set Keywords', () => {

    store.dispatch({
      type: ACTION.MISC.SET_KEYWORDS,
      keywords: aFakeKeywords
    });

    expect(store.getState().get('misc').get('keywords')).to.equal(fromJS(aFakeKeywords));

  });


  it('Set Platforms', () => {

    store.dispatch({
      type: ACTION.MISC.SET_PLATFORMS,
      platforms: aFakePlatforms
    });

    expect(store.getState().get('misc').get('platforms')).to.equal(fromJS(aFakePlatforms));

  });


  it('Set Activity fields', () => {

    store.dispatch({
      type: ACTION.MISC.SET_ACTIVITY_FIELDS,
      activityFields: aFakeActivityFields
    });

    expect(store.getState().get('misc').get('activityFields')).to.equal(fromJS(aFakeActivityFields));

  });

});

//ACTIONS UNIT TESTING
describe('Misc Actions', () => {

  it('SET ACTION', () => {

    //expect(store.getState().get('OBJECT')).to.equal(fromJS(OBJECT));

  });
});