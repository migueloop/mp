import permissions from './permissions';
import assignment from './assignment';
import features from './features';
import notification from './notification';

export const ERROR = {
  NO_COMPANY_FOUND: {
    TYPE: 'NO_COMPANY_FOUND',
    CODE: 404,
    MESSAGE: 'No Company Found',
  },
};

export const FORM = {
  FO: {
    PRODUCT: {
      CONTACTUS: 'FOProductContactUs',
    },
  },
  SHARED: {
    ASSIGNMENT_ORDER: {
      LINE_1: 'AssignmentOrderLine1',
      LINE_2: 'AssignmentOrderLine2',
    },
  },
};

export const GUID = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  // return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};

export const CONTENT_STATE = {
  PUBLISHED: 1,
  DRAFT: 2,
  DELETED: 3,
  PENDING: 4,
};

export const PRODUCT = {
  TYPE: {
    MOBILE: 'MobileApp',
    SAAS: 'SaaS',
    MATERIAL: 'MaterialNDevice',
    SERVICE: 'Service',
    LINE: 'Line',
  },
  TYPEINFO: {
    MobileApp: { title: 'product_mobileapp', class: 'app' },
    SaaS: { title: 'product_saas', class: 'saas' },
    MaterialNDevice: { title: 'product_material', class: 'device' },
    Service: { title: 'product_service', class: 'service' },
    Line: { title: 'line', class: 'line' },
  },
  PLATFORM: {
    ANDROID: 'ANDROID',
    IOS: 'APPLE',
    WINDOWS: 'WINDOWS',
    WEB: 'REGULAR_LINK',
  },
  STATE: {
    DRAFT: 'draft',
    PENDING: 'pending',
    PUBLISHED: 'published',
    DELETED: 'deleted',
  },
  RATINGS: {
    MAXRATING: 10,
  },
  RESOURCE: {
    APPLICATION: ['application/'],
    FORM: ['form'],
    IMAGE: ['image/'],
    VIDEO: ['video/'],
  },
};

export const MESSAGE = {
  TYPE: {
    FOR_ADMIN: true,
    FOR_PRODUCT: false,
    BOTH: null,
  },
};

export const MODAL = {
  CONTENT: {
    APPLICATION: 'document',
    IMAGE: 'image',
    FORM: 'form',
    VIDEO: 'video',
  },
  MESSAGE: {
    ERROR: {
      HEADER: {
        NO_RESOURCE_FOUND: 'Resource not found',
      },
      CONTENT: {
        NO_RESOURCE_FOUND: 'Sorry for the inconvenience, but the resource that you are trying to access is not available',
      },
    },
    CONTACT: {
      HEADER: 'Contact',
    },
  },
};

export const MODELS = {
  MESSAGE: {
    PRODUCT: {
      NAME: 'name',
      LASTNAME: 'lastname',
      EMAIL: 'email',
      SEX: 'sex',
      MALE: 'M',
      FEMALE: 'F',
      PHONE: 'phone',
      COMPANY: 'company',
      SUBJECT: 'subject',
      MESSAGE: 'message',
      PRODUCTID: 'id_product',
    },
  },
  PRODUCT: {
    TYPE: {
      MobileApp: '',
      Saas: '',
      Service: '',
      MaterialNDevice: '',
    },
  },
  RESOURCE: {
    TYPE: 'type',
    NAME: 'name',
    ORIGINAL_NAME: 'original_name',
    NAME_CUSTOM: 'name_custom',
    CREATION_DATE: 'creation_date',
    IS_HIDDEN: 'is_hidden',
    HOME_ORDER: 'home_order',
  },
};

export const USER = {
  ROLE: {
    CUSTOMER: 1,
    EDITOR: 2,
    ADMIN: 3,
    AUTHOR: 4,
    FLEET_MANAGER: 5,
    KEY: {
      CUSTOMER: 'customer',
      EDITOR: 'editor',
      ADMIN: 'admin',
      AUTHOR: 'author',
      FLEET_MANAGER: 'fleet manager',
    },
  },
  PROVIDER: {
    LOCAL: 'local',
    FACEBOOK: 'facebook',
    LINKEDIN: 'linkedin',
  },
};

export const ITEM = {
  ASSIGNMENT: {
    ITEMS: {
      NUMBER: 1,
    },
  },
  BUNDLE: {
    COMPONENTS: {
      NUMBER: 4,
    },
  },
  KEY: {
    PRODUCT: 'product',
    BUNDLE: 'bundle',
    ASSIGNMENT: 'assignment',
  },
  STATE: {
    PUBLISHED: 1,
    DRAFT: 2,
    DELETED: 3,
    PENDING: 4,
    VALIDATED: 5,
    KEY: {
      PUBLISHED: 'published',
      DRAFT: 'draft',
      DELETED: 'deleted',
      PENDING: 'pending',
      VALIDATED: 'validated',
    },
  },
  PLACEHOLDERS: {
    PICTURES: {
      GENERIC: {
        URL: '/public/images/placeholders/product.png',
        TYPE: 'image/png',
      },
      ADD_ITEM: {
        URL: '/public/images/placeholders/image_add.png',
        TYPE: 'image/png',
      },
      ADD_NEW: {
        URL: '/public/images/placeholders/icon-add.png',
        TYPE: 'image/png',
      },
    },
  },
  RESOURCES: {
    LOGO: 'logo',
    MAIN_PICTURE: 'main_picture',
    EDITOR_LOGO: 'editor_logo',
    RESOURCE: 'resource',
  },
  TYPES: {
    INTERVIEW: 'Interview',
    WHITEBOOK: 'WhiteBook',
    MOBILE: 'MobileApp',
    SAAS: 'SaaS',
    MATERIAL: 'MaterialNDevice',
    SERVICE: 'Service',
    PRODUCT: 'product',
    ASSIGNMENT: 'assignment',
    BUNDLE: 'bundle',
    LINE: 'Line',
    EMAIL: 'Email',
    EMM: 'EMM',
    DEVICE: 'Matériel',
    SUPPORT: 'Support',
  },
  TYPES_ID: {
    BUNDLE: 2,
    PRODUCT: 3,
    ASSIGNMENT: 4,
  },
};

export const QUEUE = {
  TYPES: {
    EMAIL: 'email',
    API: 'api request',
  },
};

export const PERMISSIONS = permissions;

export const USERVOICE = {
  CHAT: {
    ACTIVATOR_ID: 'uservoice-chat',
  },
  URL: {
    INTERCOM_BO: 'http://app.intercom.io/admins/sign_in',
  },
};

export const PLUGINS = {
  INTERCOM_CHAT: 'intercomChat',
  INTERCOM_BO: 'intercomBO',
};

export const PO_SYSTEM = {
  PREFIXES: {
    ASSIGNMENT: 'AS',
    COMPONENT: 'AC',
  },
  URL: {
    GET: 'http://develop-po-mobility.intuiteev.io/api/purchaseOrders?requestId=[ORDER_ID]&format=PDF',
  },
};

export const TIMELINE = {
  TYPE: {
    DEVICE: 'device',
    LINE: 'line',
  },
};

export const ASSIGNMENT = assignment;
export const FEATURES = features;
export const NOTIFICATION = notification;
