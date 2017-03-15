import { ACTION } from 'actions';
import AnalyticsReducer from 'Reducers/Analytics';
import sinon from 'sinon';

describe('The analytics reducer', () => {
  it('should set the piwik site id', () => {
    const action = {
      type: ACTION.ANALYTICS.SET_PIWIK_SITE_ID,
      piwik_site_id: 1,
    };
    const state = { set: sinon.spy() };
    AnalyticsReducer(state, action);
    state.set.calledWith('piwik_site_id', 1).should.equal(true);
  });
  it('should set the piwik instance url', () => {
    const action = {
      type: ACTION.ANALYTICS.SET_PIWIK_INSTANCE_URL,
      piwik_instance_url: 'new-url',
    };
    const state = { set: sinon.spy() };
    AnalyticsReducer(state, action);
    state.set.calledWith('piwik_instance_url', 'new-url').should.equal(true);
  });
});
