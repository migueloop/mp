import { ACTION } from 'flux/actions';
import { List, Map, fromJS } from 'immutable';
import ProductsReducer from './v01/products';
import CornersReducer from './v01/corners';
import BackOfficeReducer from './v01/back-office';
import MiscReducer from './v01/misc';
import SettingsReducer from './v01/settings';
import TenantReducer from './v01/tenant';
import NotificationReducer from './v01/notification';
import UserReducer from './v01/user';
import SocketsReducer from './v01/sockets';
import EditorReducer from './v01/editor';
import MessageReducer from './v01/message';
import HomeCarouselReducer from './v01/home-carousel';
import SeoReducer from './v01/seo';
import AuthorReducer from './v01/author';
import LocaleReducer from './v01/locale';
import AnalyticsReducer from './v01/analytics';
//import BundlesReducer from './v01/bundles';
import UserVoiceReducer from './v01/user-voice';
import { reducer as FormReducer } from 'redux-form';
import AssignmentReducer from './v01/assignments';
import AssignmentOrdersReducer from './v01/assignment-orders';
import FeaturesReducer from './v01/features';
import TimelinesReducer from './v01/timelines';
import StockReducer from './v01/stock';
import LogCommentsReducer from './v01/log-comments';
import UserNotificationsReducer from './v01/user-notifications';
import AssignmentOrderFollowUpsReducer from './v01/assignment-order-follow-ups';

import { reducer as reducerV02 } from 'v02/flux';

export const INITIAL_STATE = fromJS({
  products: List(),
  corners: List(),
  authors: List(),
  backoffice: fromJS({
    users: List(),
    billing: Map({
      disable: true,
    }),
    roles: List(),
  }),
  misc: Map(),
  settings: fromJS({
    seo: Map(),
    languages: List(),
  }),
  user: Map(),
  sockets: Map(),
  tenant: undefined,
  message: List(),
  homeCarousel: List(),
  acceptedCookie: false,
  form: Map(),
  seo: Map({
    title: '',
    url: '',
    meta: List(),
  }),
  // bundles: List(),
  billing: Map({
    endpoint: Map(),
  }),
  userVoice: Map({
    intercom_app_id: '',
  }),
  assignments: List(),
  assignmentOrders: List(),
  features: Map(),
  timelines: List(),
  stock: List(),
  logComments: List(),
  userNotifications: List(),
  assignmentOrderFollowUps: List(),
});

INITIAL_STATE.set('notification', {
  add: () => {},
  remove: () => {},
});

const reducer = (previousState = INITIAL_STATE, action = {}) => (
  previousState
  .update('products', state => ProductsReducer(state, action))
  .update('corners', state => CornersReducer(state, action))
  .update('backoffice', state => BackOfficeReducer(state, action))
  .update('misc', state => MiscReducer(state, action))
  .update('settings', state => SettingsReducer(state, action))
  .update('tenant', state => TenantReducer(state, action))
  .update('notification', state => NotificationReducer(state, action))
  .update('user', state => UserReducer(state, action))
  .update('editors', state => EditorReducer(state, action))
  // .update('sockets', state => SocketsReducer(state, action))
  .update('message', state => MessageReducer(state, action))
  .update('homeCarousel', state => HomeCarouselReducer(state, action))
  .update('form', state => FormReducer(state, action))
  .update('acceptedCookie', state => {
    switch (action.type) {
      case ACTION.ACCEPT_COOKIE:
        return action.value;
      default:
        return state;
    }
  })
  .update('locale', state => state)
  .update('authors', state => AuthorReducer(state, action))
  .update('analytics', state => AnalyticsReducer(state, action))
  //.update('bundles', state => BundlesReducer(state, action))
  .update('userVoice', state => UserVoiceReducer(state, action))
  .update('assignments', state => AssignmentReducer(state, action))
  .update('assignmentOrders', state => AssignmentOrdersReducer(state, action))
  .update('features', state => FeaturesReducer(state, action))
  .update('timelines', state => TimelinesReducer(state, action))
  .update('stock', state => StockReducer(state, action))
  .update('logComments', state => LogCommentsReducer(state, action))
  .update('userNotifications', state => UserNotificationsReducer(state, action))
  .update('assignmentOrderFollowUps', state => AssignmentOrderFollowUpsReducer(state, action))
  .update('v02', state => reducerV02(state, action))
);

export default reducer;
