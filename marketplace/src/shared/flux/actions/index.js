import Promise from 'bluebird';
import CornerActionsV01 from './v01/corners';
import ProductActionsV01 from './v01/products';
import CompanyActionsV01 from './v01/companies';
import UserActionsV01 from './v01/users';
import SettingsActionsV01 from './v01/settings';
import NotificationsActionsV01 from './v01/notifications';
import BackOfficeV01 from './v01/back-office';
import MessageActionV01 from './v01/message';
import HomeCarouselActionV01 from './v01/home-carousel';
import MiscActionV01 from './v01/misc';
import CookieActionV01 from './v01/cookies';
import SeoActionV01 from './v01/seo';
import LocaleActionV01 from './v01/locale';
//import BundlesActionV01 from './v01/bundles';
import UserVoiceV01 from './v01/user-voice';
import AssignmentActionsV01 from './v01/assignments';
import AssignmentOrdersActionsV01 from './v01/assignment-orders';
import FeaturesActionsV01 from './v01/features';
import TimelinesActionsV01 from './v01/timelines';
import AssignmentOrderFollowUpaActionsV01 from './v01/assignment-order-follow-ups';
import StockActionsV01 from './v01/stock';
import LogCommentActionsV01 from './v01/log-comments';
import UserNotificationActionsV01 from './v01/user-notifications';
import API from 'repositories';

export const ACTION = {
  BILLING: {
    FETCH: 'FETCH BILLING',
  },
  WORKFLOW: {
    FETCH: 'FETCH WORKFLOW',
  },
  // BUNDLE: {
  //   ADD: 'ADD A NEW BUNDLE',
  //   DELETE: 'DELETE BUNDLE',
  //   UPDATE: 'UPDATE BUNDLE',
  //   COMPONENTS: {
  //     ADD: 'ADD COMPONENT TO BUNDLE',
  //     DELETE: 'DELETE COMPONENT FROM BUNDLE',
  //     ORDER: 'ORDER BUNDLE COMPONENT',
  //   },
  //   RESOURCE: {
  //     ADD: 'ADD BUNDLE RESOURCE',
  //     DELETE: 'DELETE BUNDLE RESOURCE',
  //     ORDER: 'ORDER BUNDLE RESOURCES',
  //     CAROUSEL_TOGGLE: 'TOGGLE BUNDLE RESOURCE IN CAROUSEL',
  //   },
  //   SET: {
  //     ALL: 'SET ALL BUNDLES ON THE STORE',
  //     PUBLISHED: 'SET PUBLISHED BUNDLES ON THE STORE',
  //     DELETED: 'SET DELETED BUNDLES ON THE STORE',
  //     DRAFT: 'SET DRAFT BUNDLES ON THE STORE',
  //     PENDING: 'SET PENDING BUNDLES ON THE STORE',
  //     LOGO: 'SET BUNDLE LOGO ON THE STORE',
  //     STATE: 'SET BUNDLE NEW STATE',
  //   },
  // },

  CORNER: {
    SET_ALL: 'SET ALL CORNERS ON THE STORE',
    EDIT: 'EDIT CORNER',
    CHANGE_LOGO: 'CHANGE LOGO',
    UPDATE_BEST_PRODUCT: 'UPDATE_BEST_PRODUCT',
    DELETE: 'DELETE CORNER',
    CREATE: 'CREATE CORNER',
  },

  PRODUCT: {
    SET_ALL: 'SET ALL PRODUCTS ON THE STORE',
    EDIT: 'EDIT PRODUCT',
    ADD: 'ADD A NEW PRODUCT',
    SUBSCRIPTION: {
      GET_USER_LINK: 'GET USER LINK FOR SUBSCRIPTION',
    },
    RESOURCE: {
      EDIT: 'EDIT RESOURCE',
      ADD: 'ADD RESOURCE',
      DELETE: 'REMOVE RESOURCE',
      SLIDESHOW: {
        DELETE: 'DELETE FROM SLIDESHOW',
        ADD: 'ADD FROM SLIDESHOW',
        ADD_FROM_RESOURCE: 'ADD FROM RESOURCE',
      },
    },
    BILLING: {
      FETCH_OFFERS: 'FETCH OFFERS OF A PRODUCT',
    },
    FEATURES:
    {
      SET: 'SET AVAILABLE FEATURES FOR A PRODUCT',
    },
    TIMELINE: {
      SET: 'SET TIMELINE FOR A PRODUCT',
    },
    FOLLOW_UP_TASKS: {
      SET: 'SET FOLLOW UP TASKS FOR A PRODUCT',
    },
  },

  USER: {
    LOGIN: 'LOGIN USER',
    LOGOUT: 'LOGOUT USER',
    CONVERT_EDITOR: 'CONVERT USER TO EDITOR',
    SET_ALL: 'SET ALL USERS',
    EDITOR: {
      SET_ALL: 'SET ALL EDITORS',
      ACTIVATE: 'ACTIVATE EDITOR',
      DELETE: 'DELETE EDITOR',
    },
    AUTHOR: {
      SET_ALL: 'SET ALL AUTHORS',
      SET_ONE: 'SET ONE AUTHOR',
      ACTIVATE: 'ACTIVATE EDITOR',
    },
  },

  MESSAGE: {
    SEND: 'SEND MESSAGE',
  },

  HOME_CAROUSEL: {
    GETPAGE: 'GET PAGE DETAIL',
    GETALLSLIDES: 'GET ALL SLIDES INFO',
  },

  MISC: {
    SET_KEYWORDS: 'SET ALL AVAILABLE KEYWORDS',
    SET_PLATFORMS: 'SET AVAILABLE PLATFORMS',
    SET_ACTIVITY_FIELDS: 'SET AVAILABLE ACTIVITY FIELDS',
    SET_COMPANIES: 'SETT ALL COMPANIES',
  },

  SETTINGS: {
    SET_SEO: 'SET SETTINGS SEO DATA',
    SET_LANGUAGES: 'SET LANGUAGE DATA',
  },

  SEO: {
    SET_TITLE: 'SET PAGE TITLE',
    SET_META: 'SET PAGE METADATA',
    SET: 'SET SEO DATA',
    SET_URL: 'SET REQUEST URL',
    SET_FB_ID: 'SET_FB_ID',
  },

  BACKOFFICE: {
    USER: {
      SET_ALL: 'SET ALL USERS ON BACKEND',
      CREATE: 'CREATE A NEW USER',
      EDIT: 'EDIT USER INFORMATION',
      SOFT_DELETE: 'SOFT DELETE USER',
      EDITOR: {
        UPDATE_LOGO: 'UPDATE LOGO FOR EDITOR CORNER',
        UPDATE_BEST_PRODUCT: 'EDIT BEST PRODUCT',
        EDIT: 'EDIT EDITOR CORNER',
      },
      GET_USER_PERMISSIONS: 'GET USER PERMISSIONS',
    },
    ACL: {
      CREATE: 'CREATE ACL',
      UPDATE: 'UPDATE ACL',
      UPDATE_ROLE_PERMISSIONS: 'UPDATE ALL PERMISSIONS FOR ONE ROLE',
      FETCH: 'FETCH ROLES',
    },
    MY_PROFILE: 'SET MY PROFILE FOR EDITION',
  },
  LOCALE: {
    SET: 'SET LOCALE LANGUAGE',
  },
  SET_TENANT: 'SET TENANT',
  ACCEPT_COOKIE: 'ACCEPT COOKIE',
  UPDATE_CORNER: 'UPDATE_CORNER',
  UPDATE_PRODUCT: 'UPDATE PRODUCT',
  SET_ACTIVITY_FIELDS: 'SET ACTIVITY FIELDS',
  SET_PLATFORMS: 'SET PLATFORMS',
  RELOAD: 'RELOAD ALL THE STORE',
  NOTIFICATE: 'FUNCTION THAT CREATE A NEW NOTIFICATION',
  LISTEN: 'LISTEN TO NEW SOCKET EVENT',
  UNLISTEN: 'REMOVE LISTEN TO NEW SOCKET EVENT',
  ANALYTICS: {
    SET_PIWIK_SITE_ID: 'SET PIWIK SITE ID',
    SET_PIWIK_INSTANCE_URL: 'SET PIWIK INSTANCE URL',
  },
  USERVOICE: {
    SET_INTERCOM_APP_ID: 'SET INTERCOM APP ID',
    SET_USER_PRIVATE_KEY: 'SET USER PRIVATE KEY',
  },
  ASSIGNMENT: {
    ADD: 'ADD A NEW ASSIGNMENT',
    DELETE: 'DELETE ASSIGNMENT',
    UPDATE: 'UPDATE ASSIGNMENT',
    COMPLETE: 'FLAG ASSIGNMENT AS COMPLETE',
    ITEMS: {
      ADD: 'ADD ITEM TO ASSIGNMENT',
      DELETE: 'DELETE ITEM FROM ASSIGNMENT',
    },
    SET: {
      ALL: 'SET ALL ASSIGNMENT ON THE STORE',
      VALIDATED: 'SET VALIDATED ASSIGNMENT ON THE STORE',
      DELETED: 'SET DELETED ASSIGNMENT ON THE STORE',
      DRAFT: 'SET DRAFT ASSIGNMENT ON THE STORE',
      PENDING: 'SET PENDING ASSIGNMENT ON THE STORE',
    },
    GDP: {
      GET_ITEM_INFO: 'GET GDP ITEM INFORMATION',
    },
  },
  ASSIGNMENT_ORDER: {
    SET: {
      ALL: 'SET ALL ASSIGNMENT ORDERS IN THE STORE',
    },
    UPDATE: {
      ONE: 'UPDATE ONE ASSIGNMENT ORDER',
    },
  },
  FEATURES: {
    TENANT: 'SET ALL AVAILABLE FEATURES FOR A TENANT',
  },
  TIMELINES: {
    SET_ALL: 'SET ALL AVAILABLE TIMELINES',
    SET_ITEM_CURRENT_STEPS: 'SET CURRENT STEPS OF AN ITEM TIMELINE',
  },
  STOCK: {
    SET_ALL: 'SET ALL STOCK ON STORE',
    ADD: 'ADD STOCK ENTRY TO STORE',
  },
  LOG_COMMENT: {
    SET_ALL: 'SET ALL LOG COMMENTS ON STORE',
    ADD: 'ADD LOG COMMENT ENTRY TO STORE',
  },
  USER_NOTIFICATION: {
    SET_ALL: 'SET ALL USER NOTIFICATIONS ON STORE',
    ADD: 'ADD USER NOTIFICATION ENTRY TO STORE',
    CLICK: 'SET CLICKED_AT TIME ON USER NOTIFICATION ENTRY IN STORE',
    VIEW: 'SET VIEWED_AT TIME ON USER NOTIFICATION ENTRY IN STORE',
    VIEW_ALL: 'SET VIEWED_AT TIME ON ALL USER NOTIFICATION ENTRIES IN STORE',
    CLICK_ALL: 'SET CLICKED_AT TIME ON ALL USER NOTIFICATION ENTRIES IN STORE',
    CREATE_PRODUCT_PUBLICATION_REQUEST_NOTIFICATION: 'ADD PRODUCT PUBLICATION REQUEST NOTIFICATION ENTRY TO STORE',
    CREATE_BUNDLE_PUBLICATION_REQUEST_NOTIFICATION: 'ADD BUNDLE PUBLICATION REQUEST NOTIFICATION ENTRY TO STORE',
    CREATE_ASSIGNMENT_PUBLICATION_REQUEST_NOTIFICATION: 'ADD ASSIGNMENT PUBLICATION REQUEST NOTIFICATION ENTRY TO STORE',
    CREATE_ASSIGNMENT_ORDER_ACTION_NOTIFICATION: 'ADD ASSIGNMENT ORDER ACTION NOTIFICATION ENTRY TO STORE',
  },
  ASSIGNMENT_ORDER_FOLLOW_UPS: {
    SET_ALL: 'SET ALL ASSIGNMENT ORDER FOLLOW UPS ON STORE',
    ADD: 'ADD ASSIGNMENT ORDER FOLLOW UP ENTRY TO STORE',
    UPDATE: 'UPDATE ASSIGNMENT ORDER FOLLOW UP',
  },
};

export default class Action {
  constructor(tenant) {
    this.tenant = tenant;
  }

  get Tenant() {
    return Promise.resolve({ type: ACTION.SET_TENANT, tenant: this.tenant });
  }

  reloadStore() {
    const tenant = this.tenant;
    return new API(tenant).reloadStore(tenant)
    .then(data => Promise.resolve({ type: ACTION.RELOAD, data }))
    .catch(err => console.log('Error reloading store:', err));
  }

  get Corners() {
    return new CornerActionsV01(this.tenant);
  }

  get Products() {
    return new ProductActionsV01(this.tenant);
  }

  get Companies() {
    return new CompanyActionsV01(this.tenant);
  }

  get Users() {
    return new UserActionsV01(this.tenant);
  }

  get Settings() {
    return new SettingsActionsV01(this.tenant);
  }

  get Notification() {
    return new NotificationsActionsV01(this.tenant);
  }

  get BackOffice() {
    return new BackOfficeV01(this.tenant);
  }

  get Message() {
    return new MessageActionV01(this.tenant);
  }

  get HomeCarousel() {
    return new HomeCarouselActionV01(this.tenant);
  }

  get Misc() {
    return new MiscActionV01(this.tenant);
  }

  get Cookie() {
    return new CookieActionV01(this.tenant);
  }

  get Locale() {
    return new LocaleActionV01(this.tenant);
  }

  get Seo() {
    return new SeoActionV01(this.tenant);
  }

  //get Bundles() {
    //return new BundlesActionV01(this.tenant);
  //}

  get UserVoice() {
    return new UserVoiceV01(this.tenant);
  }

  get Assignments() {
    return new AssignmentActionsV01(this.tenant);
  }
  get AssignmentOrders() {
    return new AssignmentOrdersActionsV01(this.tenant);
  }

  get Features() {
    return new FeaturesActionsV01(this.tenant);
  }

  get Timelines() {
    return new TimelinesActionsV01(this.tenant);
  }

  get Stock() {
    return new StockActionsV01(this.tenant);
  }

  get LogComments() {
    return new LogCommentActionsV01(this.tenant);
  }

  get UserNotifications() {
    return new UserNotificationActionsV01(this.tenant);
  }

  get AssignmentOrderFollowUps() {
    return new AssignmentOrderFollowUpaActionsV01(this.tenant);
  }
}
