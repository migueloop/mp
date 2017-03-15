// TODO: remove hard dependency from hp tentant. These tests should be tenant agnostic.
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { expect } from 'chai';
import { Map, List,fromJS } from 'immutable';
import { ACTION } from 'actions';
import { makeStore } from 'Core/store';
import Action from 'actions';
chai.use(chaiAsPromised);
chai.should();

const store = makeStore();

let oFakeMessage = {
  'id_product': 10,
  'email': 'testing@digitaldimension.es',
  'sex': 'M',
  'name': 'TestingName',
  'lastname': 'TestingLastname',
  'phone': '123321654',
  'company':'Test Company CO',
  'subject': 'Je souhaite des renseignements',
  'message': 'Testing message with some text inside. Lorem Ipsum.',
  'type': 'test'
};
let sTenant = 'HP';

//REDUCER UNIT TESTING
//TEST CASES: Set Message
describe('Message Reducers', () => {

  it('SET Message', () => {

    store.dispatch({
      type: ACTION.MESSAGE.SEND,
      message: oFakeMessage
    });

    expect(store.getState().get('message')).to.equal(fromJS([oFakeMessage]));

  });
});

//ACTIONS UNIT TESTING
describe('Message Actions', function() {

  it('Send message', (done) => {

    new Action(sTenant).Message.send(Object.assign({}, oFakeMessage)).should.be.fulfilled.and.notify(done);

  });

  it('Send message with added field should be accepted and added fields deleted ', (done) => {

    let oMalformedMessage = Object.assign({}, oFakeMessage);
    oMalformedMessage.injectedField = 'injected';

    new Action(sTenant).Message.send(oMalformedMessage).should.be.rejected.and.notify(done);

  });

});
