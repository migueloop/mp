import { ACTION } from 'flux/actions';
export default (state, action) => {
  switch (action.type) {
    case ACTION.ANALYTICS.SET_PIWIK_SITE_ID:
      return state.set('piwik_site_id', action.piwik_site_id);
    case ACTION.ANALYTICS.SET_PIWIK_INSTANCE_URL:
      return state.set('piwik_instance_url', action.piwik_instance_url);
    default:
      return state;
  }
};
