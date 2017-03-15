// TODO: Fill inclusion and exclusions of permissions

export const CATEGORY = {
  ACL: 'Acl',
  BUNDLE: 'Bundle',
  STOCK: 'STOCK',
  CORNER: 'Corner',
  PRODUCT: 'Product',
  USER: 'User',
  SETTINGS: 'Settings',
  USERVOICE: 'UserVoice',
  ASSIGNMENT: 'Assignment',
  FOLLOW_UP: 'Follow Up',
  APP: 'App',
};

const CREATE_PRODUCT = {
  id: 'CREATE_PRODUCT',
  name: 'Create product',
  descriptions: 'The user can create products',
  category: CATEGORY.PRODUCT,
};

const EDIT_PRODUCT = {
  id: 'EDIT_PRODUCT',
  name: 'Edit any product',
  descriptions: 'The user can edit any product created by themselves or other users.',
  category: CATEGORY.PRODUCT,
};

const CHANGE_PRODUCT_OWNER = {
  id: 'CHANGE_PRODUCT_OWNER',
  name: 'Change the owner of any product',
  descriptions: 'The user can change the owner of a product. Changing the owner of the product could mean that the original creator will not be able to access the product anymore (permission depending).',
  category: CATEGORY.PRODUCT,
};

const EDIT_PRODUCT_OWN = {
  id: 'EDIT_PRODUCT_OWN',
  name: 'Edit own product',
  descriptions: 'The user can edit any product that they created.',
  category: CATEGORY.PRODUCT,
  requiresOwnership: true,
};

const REQUEST_PUBLICATION_PRODUCT_OWN = {
  id: 'REQUEST_PUBLICATION_PRODUCT_OWN',
  name: 'Request publication of own product',
  descriptions: 'The user can request the publication of a product that they created.',
  category: CATEGORY.PRODUCT,
  requiresOwnership: true,
};

const REQUEST_PUBLICATION_PRODUCT = {
  id: 'REQUEST_PUBLICATION_PRODUCT',
  name: 'Request publication any product',
  descriptions: 'The user can request the publication of any product that he/she or any other user created.',
  category: CATEGORY.PRODUCT,
};

const VALIDATE_PUBLICATION_PRODUCT = {
  id: 'VALIDATE_PUBLICATION_PRODUCT',
  name: 'Validate a product',
  descriptions: 'The user can validate the publication of a product. When another user requests that a product be published this permission allows the user to validate that request and thus publish the product.',
  category: CATEGORY.PRODUCT,
};

const PUBLISH_PRODUCT = {
  id: 'PUBLISH_PRODUCT',
  name: 'Publish any product',
  descriptions: 'The user can publish any product that any user created. The user can publish the product without the need of a prior publication request.',
  category: CATEGORY.PRODUCT,
};

const PUBLISH_PRODUCT_OWN = {
  id: 'PUBLISH_PRODUCT_OWN',
  name: 'Publish own product',
  descriptions: 'The user can publish a product that they created. The user can publish the product without the need of a prior publication request.',
  category: CATEGORY.PRODUCT,
  requiresOwnership: true,
};

const UNPUBLISH_PRODUCT = {
  id: 'UNPUBLISH_PRODUCT',
  name: 'Unpublish any product',
  descriptions: 'The user can unpublish any product that any user created.',
  category: CATEGORY.PRODUCT,
};

const UNPUBLISH_PRODUCT_OWN = {
  id: 'UNPUBLISH_PRODUCT_OWN',
  name: 'Unpublish own product',
  descriptions: 'The user can unpublish any product that they created.',
  category: CATEGORY.PRODUCT,
  requiresOwnership: true,
};

const DELETE_PRODUCT = {
  id: 'DELETE_PRODUCT',
  name: 'Delete any product',
  descriptions: 'The user can delete any product that any user created.',
  category: CATEGORY.PRODUCT,
};

const DELETE_PRODUCT_OWN = {
  id: 'DELETE_PRODUCT_OWN',
  name: 'Delete own product',
  descriptions: 'The user can delete any product that he/she created.',
  category: CATEGORY.PRODUCT,
  requiresOwnership: true,
};

const OFFER_PRODUCT = {
  id: 'OFFER_PRODUCT',
  name: 'Create an offer for any product',
  descriptions: '== REQUIRES INPUT FROM JOHN == The user can create an offer for any product.',
  category: CATEGORY.PRODUCT,
};

const CREATE_BUNDLE = {
  id: 'CREATE_BUNDLE',
  name: 'Create bundle',
  descriptions: 'The user can create a bundle.',
  category: CATEGORY.BUNDLE,
};

const EDIT_BUNDLE = {
  id: 'EDIT_BUNDLE',
  name: 'Edit any bundle',
  descriptions: 'The user can edit any bundle created by any user.',
  category: CATEGORY.BUNDLE,
};

const EDIT_BUNDLE_OWN = {
  id: 'EDIT_BUNDLE_OWN',
  name: 'Edit own bundle',
  descriptions: 'The user can edit any bundle that he/she created.',
  category: CATEGORY.BUNDLE,
  requiresOwnership: true,
};

const REQUEST_PUBLICATION_BUNDLE_OWN = {
  id: 'REQUEST_PUBLICATION_BUNDLE_OWN',
  name: 'Request publication of own bundle',
  descriptions: 'The user can request the publication of a bundle that he/she created.',
  category: CATEGORY.BUNDLE,
  requiresOwnership: true,
};

const REQUEST_PUBLICATION_BUNDLE = {
  id: 'REQUEST_PUBLICATION_BUNDLE',
  name: 'Request publication any bundle',
  descriptions: 'The user can request the publication of any bundle created by any user.',
  category: CATEGORY.BUNDLE,
};

const VALIDATE_PUBLICATION_BUNDLE = {
  id: 'VALIDATE_PUBLICATION_BUNDLE',
  name: 'Validate any bundle',
  descriptions: 'The user can validate the publication request for any bundle created by any user. The bundle does not have to have been created by this user.',
  category: CATEGORY.BUNDLE,
};

const PUBLISH_BUNDLE = {
  id: 'PUBLISH_BUNDLE',
  name: 'Publish any bundle',
  descriptions: 'The user can publish any bundle created by any user. This permission allows the user to publish a bundle without a prior publication request.',
  category: CATEGORY.BUNDLE,
};

const PUBLISH_BUNDLE_OWN = {
  id: 'PUBLISH_BUNDLE_OWN',
  name: 'Publish own bundle',
  descriptions: 'The user can publish any bundle that he/she created. This permission allows the user to publish a bundle without a prior publication request.',
  category: CATEGORY.BUNDLE,
  requiresOwnership: true,
};

const UNPUBLISH_BUNDLE = {
  id: 'UNPUBLISH_BUNDLE',
  name: 'Unpublish any bundle',
  descriptions: 'The user can unpublish any bundle created by any user.',
  category: CATEGORY.BUNDLE,
};

const UNPUBLISH_BUNDLE_OWN = {
  id: 'UNPUBLISH_BUNDLE_OWN',
  name: 'Unpublish own bundle',
  descriptions: 'The user can unpublish any bundle that he/she created.',
  category: CATEGORY.BUNDLE,
  requiresOwnership: true,
};

const DELETE_BUNDLE = {
  id: 'DELETE_BUNDLE',
  name: 'Delete any bundle',
  descriptions: 'The user can delete any bundle created by any user.',
  category: CATEGORY.BUNDLE,
};

const DELETE_BUNDLE_OWN = {
  id: 'DELETE_BUNDLE_OWN',
  name: 'Delete owned bundle',
  descriptions: 'The user can delete any bundle that he/she created.',
  category: CATEGORY.BUNDLE,
  requiresOwnership: true,
};

// STOCK

const CREATE_STOCK = {
  id: 'CREATE_STOCK',
  name: 'Create stock',
  descriptions: 'The user can create a stock.',
  category: CATEGORY.STOCK,
};

const EDIT_STOCK = {
  id: 'EDIT_STOCK',
  name: 'Edit any stock',
  descriptions: 'The user can edit any stock created by any user.',
  category: CATEGORY.STOCK,
};

const EDIT_STOCK_OWN = {
  id: 'EDIT_STOCK_OWN',
  name: 'Edit own stock',
  descriptions: 'The user can edit any stock that he/she created.',
  category: CATEGORY.STOCK,
  requiresOwnership: true,
};

const REQUEST_PUBLICATION_STOCK_OWN = {
  id: 'REQUEST_PUBLICATION_STOCK_OWN',
  name: 'Request publication of own stock',
  descriptions: 'The user can request the publication of a stock that he/she created.',
  category: CATEGORY.STOCK,
  requiresOwnership: true,
};

const REQUEST_PUBLICATION_STOCK = {
  id: 'REQUEST_PUBLICATION_STOCK',
  name: 'Request publication any stock',
  descriptions: 'The user can request the publication of any stock created by any user.',
  category: CATEGORY.STOCK,
};

const VALIDATE_PUBLICATION_STOCK = {
  id: 'VALIDATE_PUBLICATION_STOCK',
  name: 'Validate any stock',
  descriptions: 'The user can validate the publication request for any stock created by any user. The stock does not have to have been created by this user.',
  category: CATEGORY.STOCK,
};

const PUBLISH_STOCK = {
  id: 'PUBLISH_STOCK',
  name: 'Publish any stock',
  descriptions: 'The user can publish any stock created by any user. This permission allows the user to publish a stock without a prior publication request.',
  category: CATEGORY.STOCK,
};

const PUBLISH_STOCK_OWN = {
  id: 'PUBLISH_STOCK_OWN',
  name: 'Publish own stock',
  descriptions: 'The user can publish any stock that he/she created. This permission allows the user to publish a stock without a prior publication request.',
  category: CATEGORY.STOCK,
  requiresOwnership: true,
};

const UNPUBLISH_STOCK = {
  id: 'UNPUBLISH_STOCK',
  name: 'Unpublish any stock',
  descriptions: 'The user can unpublish any stock created by any user.',
  category: CATEGORY.STOCK,
};

const UNPUBLISH_STOCK_OWN = {
  id: 'UNPUBLISH_STOCK_OWN',
  name: 'Unpublish own stock',
  descriptions: 'The user can unpublish any stock that he/she created.',
  category: CATEGORY.STOCK,
  requiresOwnership: true,
};

const DELETE_STOCK = {
  id: 'DELETE_STOCK',
  name: 'Delete any stock',
  descriptions: 'The user can delete any stock created by any user.',
  category: CATEGORY.STOCK,
};

const DELETE_STOCK_OWN = {
  id: 'DELETE_STOCK_OWN',
  name: 'Delete owned stock',
  descriptions: 'The user can delete any stock that he/she created.',
  category: CATEGORY.STOCK,
  requiresOwnership: true,
};

const CREATE_CORNER = {
  id: 'CREATE_CORNER',
  name: 'Create Corner',
  descriptions: '== REQUIRES INPUT == - clarify corners == The user can create a thematic corner (Domains/Categories).',
  category: CATEGORY.CORNER,
};

const EDIT_CORNER = {
  id: 'EDIT_CORNER',
  name: 'Edit Corner',
  descriptions: '== REQUIRES INPUT == - clarify corners == The user can edit any thematic corner (Domains/Categories) that any user created.',
  category: CATEGORY.CORNER,
};

const DELETE_CORNER = {
  id: 'DELETE_CORNER',
  name: 'Delete Corner',
  descriptions: '== REQUIRES INPUT == - The user can delete any thematic corner (Domains/Categories) that any user created.',
  category: CATEGORY.CORNER,
};

const EDIT_USER_CORNER = {
  id: 'EDIT_USER_CORNER',
  name: 'Edit any User Corner',
  descriptions: '== REQUIRES INPUT == - The user can edit any user corner that any user created.',
  category: CATEGORY.CORNER,
};

const EDIT_USER_CORNER_OWN = {
  id: 'EDIT_USER_CORNER_OWN',
  name: 'Edit own User Corner',
  descriptions: '== REQUIRES INPUT == - The user can edit their own user corner.',
  category: CATEGORY.CORNER,
  requiresOwnership: true,
};

const CREATE_ROLES = {
  id: 'CREATE_ROLES',
  name: 'Create Roles',
  descriptions: 'The user can create a new role. Each role can have a different set of permissions associated with it.',
  category: CATEGORY.ACL,
};

const EDIT_ROLES_PERMISSION = {
  id: 'EDIT_ROLES_PERMISSION',
  name: 'Edit Roles',
  descriptions: 'The user can edit roles. They can change the name of the role and change the permissions that are associated with that role.',
  category: CATEGORY.ACL,
};

const EDIT_USER_ROLE = {
  id: 'EDIT_USER_ROLE',
  name: 'Edit User Role',
  descriptions: 'The user can change any user\'s role. This is a very powerfuly permission and should be assigned with caution.',
  category: CATEGORY.ACL,
};

const READ_USERS = {
  id: 'READ_USERS',
  name: 'See all users of the system',
  descriptions: 'The user can view the entire list of users in the system.',
  category: CATEGORY.USER,
};

const READ_USERS_DETAILS = {
  id: 'READ_USERS_DETAILS',
  name: 'See user detail',
  descriptions: 'Permission to see the details of a user. This is a very powerfuly permission and should be assigned with caution.',
  category: CATEGORY.USER,
};

const CREATE_USER = {
  id: 'CREATE_USER',
  name: 'Create a user',
  descriptions: 'The user can create new users.',
  category: CATEGORY.USER,
};

const EDIT_USER = {
  id: 'EDIT_USER',
  name: 'Edit user information',
  descriptions: 'The user can edit other users\' information.',
  category: CATEGORY.USER,
};

const VALIDATE_USERS = {
  id: 'VALIDATE_USERS',
  name: 'Validate user',
  descriptions: '== REQUIRES INPUT - this permission relates to hard-coded logic. == The user can validate users that register. The current validation is from "Alisson" to "Bob".',
  category: CATEGORY.USER,
};

const EDIT_GENERAL_SETTINGS = {
  id: 'EDIT_GENERAL_SETTINGS',
  name: 'Can edit general settings',
  descriptions: 'The user can edit general settings such as title and tagline.',
  category: CATEGORY.SETTINGS,
};

const USERVOICE_LIVE_CHAT = {
  id: 'USERVOICE_LIVE_CHAT',
  name: 'Can start live chat with Intercom',
  descriptions: 'When a user with this permission accesses the website they will be prompted with a live chat icon in the bottom right corner of the screen.',
  category: CATEGORY.USERVOICE,
};

const USERVOICE_BO_ACCESS = {
  id: 'USERVOICE_BO_ACCESS',
  name: 'Can access to Intercom Back-office',
  descriptions: 'This permission gives the user access to the Intercom interface via an iframe.',
  category: CATEGORY.USERVOICE,
};

const VIEW_ALL_FOLLOW_UPS = {
  id: 'VIEW_ALL_FOLLOW_UPS',
  name: 'View all follow ups',
  descriptions: 'The user can view all follow ups for assignment orders.',
  category: CATEGORY.FOLLOW_UP,
};

const ACCESS_BI360_FOLLOW_UPS = {
  id: 'ACCESS_BI360_FOLLOW_UPS',
  name: 'Access BI360 follow ups',
  descriptions: 'The user can access all BI360 follow ups.',
  category: CATEGORY.FOLLOW_UP,
  hasUrl: true,
};

const VIEW_ALL_ASSIGNMENTS = {
  id: 'VIEW_ALL_ASSIGNMENTS',
  name: 'View all assignment',
  descriptions: 'The user can view all assignments.',
  category: CATEGORY.ASSIGNMENT,
};

const CREATE_ASSIGNMENT = {
  id: 'CREATE_ASSIGNMENT',
  name: 'Create a new assignment',
  descriptions: 'The user can create an assignment, sssociating a bundle or product to a user. The assignment is not automatically published when created.',
  category: CATEGORY.ASSIGNMENT,
};

const EDIT_ASSIGNMENT = {
  id: 'EDIT_ASSIGNMENT',
  name: 'Can edit any assignment',
  descriptions: 'The user can edit any assignment created by any user.',
  category: CATEGORY.ASSIGNMENT,
};

const EDIT_ASSIGNMENT_OWN = {
  id: 'EDIT_ASSIGNMENT_OWN',
  name: 'Edit own assignment',
  descriptions: 'The user can edit their own assignments.',
  category: CATEGORY.ASSIGNMENT,
};

const REQUEST_VALIDATION_ASSIGNMENT = {
  id: 'REQUEST_VALIDATION_ASSIGNMENT',
  name: 'Request assignment validation',
  descriptions: 'The user can request the validation of any assignment created by any user.',
  category: CATEGORY.ASSIGNMENT,
};

const REQUEST_VALIDATION_ASSIGNMENT_OWN = {
  id: 'REQUEST_VALIDATION_ASSIGNMENT_OWN',
  name: 'Request own assignment validation',
  descriptions: 'The user can request the validation of their own assignment.',
  category: CATEGORY.ASSIGNMENT,
};

const VALIDATE_ASSIGNMENT = {
  id: 'VALIDATE_ASSIGNMENT',
  name: 'Validate assignment',
  descriptions: 'The user can validate any assignment created by any user that is pending validation.',
  category: CATEGORY.ASSIGNMENT,
};

const VALIDATE_ASSIGNMENT_OWN = {
  id: 'VALIDATE_ASSIGNMENT_OWN',
  name: 'Publish own assignment',
  descriptions: '== REQUIRES INPUT - it\'s a bit odd to have this permission as validate permissions and validation request permissions usually exclude each other. ==The user can validate a publish request relating to an assignment they created.',
  category: CATEGORY.ASSIGNMENT,
};

const CANCEL_PENDING_ASSIGNMENT = {
  id: 'CANCEL_PENDING_ASSIGNMENT',
  name: 'Cancel assignment validation request',
  descriptions: 'The user can cancel any validation request for an assignment that has been made. This means that user A could request validation of an assignment and user B (with this permission) could cancel that request.',
  category: CATEGORY.ASSIGNMENT,
};

const CANCEL_PENDING_ASSIGNMENT_OWN = {
  id: 'CANCEL_PENDING_ASSIGNMENT_OWN',
  name: 'Cancel own assignment validation request',
  descriptions: 'The user can cancel any validation request for an assignment that he/she has made.',
  category: CATEGORY.ASSIGNMENT,
};

const VIEW_ASSIGNED_ASSIGNMENT_TO_USER = {
  id: 'VIEW_ASSIGNED_ASSIGNMENT_TO_USER',
  name: 'View assignments assigned to an user',
  descriptions: 'The user can view assignments that are assigned to users. This means that the user does not have to be related to the assignment in anyway. I.e assignor or assignee.',
  category: CATEGORY.ASSIGNMENT,
};

const VIEW_ASSIGNED_ASSIGNMENT_TO_OWN_ITEMS = {
  id: 'VIEW_ASSIGNED_ASSIGNMENT_TO_OWN_ITEMS',
  name: 'View assignments that contains products of an editor',
  descriptions: '== TO BE REMOVED BY CARLOS == The user can view assignments that contain products related to the user. The user does not have to be directly related to the assignment.',
  category: CATEGORY.ASSIGNMENT,
};

const ASSIGNMENTS_LIST_ALL_INFO = {
  id: 'ASSIGNMENTS_LIST_ALL_INFO',
  name: 'View all columns in the assignments list',
  descriptions: '== TO BE REMOVED BY CARLOS== The user can view all available information regarding an assignment. This permission is primarily for fleet managers and editors.',
  category: CATEGORY.ASSIGNMENT,
};
// "TO BE REMOVED BY CARLOS" - Carlos has gone. :S

const ASSIGNMENTS_LIST_BASIC_INFO = {
  id: 'ASSIGNMENTS_LIST_BASIC_INFO',
  name: 'View columns tracking, name and assigned_by columns in the assignments list',
  descriptions: '== TO BE REMOVED BY CARLOS== The user can view assignments assigned to him/herself.',
  category: CATEGORY.ASSIGNMENT,
};

const CAN_ACCESS_BI360 = {
  id: 'CAN_ACCESS_BI360',
  name: 'Can see analytics',
  descriptions: 'The user can access the BI360 analytics.',
  category: CATEGORY.APP,
};

const CAN_ACCESS_GDP = {
  id: 'CAN_ACCESS_GDP',
  name: 'Can see GDP',
  descriptions: 'The user can access the GDP interface.',
  category: CATEGORY.APP,
};

const CAN_ACCESS_GDP2 = {
  id: 'CAN_ACCESS_GDP2',
  name: 'Can see GDP2',
  descriptions: 'The user can access the GDP2 interface.',
  category: CATEGORY.APP,
};

const GERARD_BI360_CHART = {
  id: 'GERARD_BI360_CHART',
  name: 'GESTIONNAIRE_BI360_CHART',
  descriptions: 'The user can view the Gestionnaire BI360 chart on the user place home. This permission is temporary and was hard coded for demonstration purposes.',
  category: CATEGORY.SETTINGS,
};

const MICHEL_BI360_CHART = {
  id: 'MICHEL_BI360_CHART',
  name: 'MANAGER_BI360_CHART',
  descriptions: 'The user can view the Manager BI360 chart on the user place home. This permission is temporary and was hard coded for demonstration purposes.',
  category: CATEGORY.SETTINGS,
};
// Permission includes should not be circular dependencies. If they are then the permission should be merged.
// In other words if two permissions require each other to be activated then they are the same permissions

// Permission excludes should always be circular.
// If a permission excludes another but the other one does not exclude it back then this will create an inconsistency.

const PERMISSIONS = {
  // PRODUCT
  CREATE_PRODUCT: Object.assign(CREATE_PRODUCT, {
    includes: [EDIT_PRODUCT_OWN],
    excludes: [],
  }),
  EDIT_PRODUCT: Object.assign(EDIT_PRODUCT, {
    includes: [
      EDIT_PRODUCT_OWN,
      DELETE_PRODUCT,
    ],
    excludes: [],
  }),
  EDIT_PRODUCT_OWN: Object.assign(EDIT_PRODUCT_OWN, {
    includes: [
      DELETE_PRODUCT_OWN,
    ],
    excludes: [],
  }),
  CHANGE_PRODUCT_OWNER: Object.assign(CHANGE_PRODUCT_OWNER, { includes: [], excludes: [] }),
  REQUEST_PUBLICATION_PRODUCT: Object.assign(REQUEST_PUBLICATION_PRODUCT, {
    includes: [],
    excludes: [
      // VALIDATE_PUBLICATION_PRODUCT,
      // PUBLISH_PRODUCT,
      // PUBLISH_PRODUCT_OWN,
      // UNPUBLISH_PRODUCT,
      // UNPUBLISH_PRODUCT_OWN,
    ],
  }),
  REQUEST_PUBLICATION_PRODUCT_OWN: Object.assign(REQUEST_PUBLICATION_PRODUCT_OWN, {
    includes: [],
    excludes: [
      // VALIDATE_PUBLICATION_PRODUCT,
      // PUBLISH_PRODUCT,
      // PUBLISH_PRODUCT_OWN,
      // UNPUBLISH_PRODUCT,
      // UNPUBLISH_PRODUCT_OWN,
    ],
  }),
  VALIDATE_PUBLICATION_PRODUCT: Object.assign(VALIDATE_PUBLICATION_PRODUCT, {
    includes: [],
    excludes: [
      // REQUEST_PUBLICATION_PRODUCT_OWN,
      // REQUEST_PUBLICATION_PRODUCT,
    ],
  }),
  PUBLISH_PRODUCT: Object.assign(PUBLISH_PRODUCT, {
    includes: [],
    excludes: [
      // REQUEST_PUBLICATION_PRODUCT,
      // REQUEST_PUBLICATION_PRODUCT_OWN,
    ],
  }),
  PUBLISH_PRODUCT_OWN: Object.assign(PUBLISH_PRODUCT_OWN, {
    includes: [],
    excludes: [
      // REQUEST_PUBLICATION_PRODUCT,
      // REQUEST_PUBLICATION_PRODUCT_OWN,
    ],
  }),
  UNPUBLISH_PRODUCT: Object.assign(UNPUBLISH_PRODUCT, {
    includes: [],
    excludes: [
      // REQUEST_PUBLICATION_PRODUCT,
      // REQUEST_PUBLICATION_PRODUCT_OWN,
    ],
  }),
  UNPUBLISH_PRODUCT_OWN: Object.assign(UNPUBLISH_PRODUCT_OWN, {
    includes: [],
    excludes: [
      // REQUEST_PUBLICATION_PRODUCT,
      // REQUEST_PUBLICATION_PRODUCT_OWN,
    ],
  }),
  DELETE_PRODUCT: Object.assign(DELETE_PRODUCT, { includes: [], excludes: [] }),
  DELETE_PRODUCT_OWN: Object.assign(DELETE_PRODUCT_OWN, { includes: [], excludes: [] }),
  OFFER_PRODUCT: Object.assign(OFFER_PRODUCT, { includes: [], excludes: [] }),
  // BUNDLE
  CREATE_BUNDLE: Object.assign(CREATE_BUNDLE, {
    includes: [EDIT_BUNDLE_OWN],
    excludes: [],
  }),
  EDIT_BUNDLE: Object.assign(EDIT_BUNDLE, {
    includes: [DELETE_BUNDLE, EDIT_BUNDLE_OWN],
    excludes: [],
  }),
  EDIT_BUNDLE_OWN: Object.assign(EDIT_BUNDLE_OWN, {
    includes: [DELETE_BUNDLE_OWN],
    excludes: [],
  }),
  REQUEST_PUBLICATION_BUNDLE_OWN: Object.assign(REQUEST_PUBLICATION_BUNDLE_OWN, {
    includes: [],
    excludes: [
      // VALIDATE_PUBLICATION_BUNDLE,
      // PUBLISH_BUNDLE,
      // PUBLISH_BUNDLE_OWN,
      // UNPUBLISH_BUNDLE,
      // UNPUBLISH_BUNDLE_OWN,
    ],
  }),
  REQUEST_PUBLICATION_BUNDLE: Object.assign(REQUEST_PUBLICATION_BUNDLE, {
    includes: [],
    excludes: [
      // VALIDATE_PUBLICATION_BUNDLE,
      // PUBLISH_BUNDLE,
      // PUBLISH_BUNDLE_OWN,
      // UNPUBLISH_BUNDLE,
      // UNPUBLISH_BUNDLE_OWN,
    ],
  }),
  VALIDATE_PUBLICATION_BUNDLE: Object.assign(VALIDATE_PUBLICATION_BUNDLE, {
    includes: [],
    excludes: [
      // REQUEST_PUBLICATION_BUNDLE_OWN,
      // REQUEST_PUBLICATION_BUNDLE,
    ],
  }),
  PUBLISH_BUNDLE: Object.assign(PUBLISH_BUNDLE, {
    includes: [],
    excludes: [
      // REQUEST_PUBLICATION_BUNDLE,
      // REQUEST_PUBLICATION_BUNDLE_OWN,
    ],
  }),
  PUBLISH_BUNDLE_OWN: Object.assign(PUBLISH_BUNDLE_OWN, {
    includes: [],
    excludes: [
      // REQUEST_PUBLICATION_BUNDLE,
      // REQUEST_PUBLICATION_BUNDLE_OWN,
    ],
  }),
  UNPUBLISH_BUNDLE: Object.assign(UNPUBLISH_BUNDLE, {
    includes: [],
    excludes: [
      // REQUEST_PUBLICATION_BUNDLE,
      // REQUEST_PUBLICATION_BUNDLE_OWN,
    ],
  }),
  UNPUBLISH_BUNDLE_OWN: Object.assign(UNPUBLISH_BUNDLE_OWN, {
    includes: [],
    excludes: [
      // UNPUBLISH_BUNDLE_OWN,
      // REQUEST_PUBLICATION_BUNDLE_OWN,
    ],
  }),
  DELETE_BUNDLE: Object.assign(DELETE_BUNDLE, { includes: [], excludes: [] }),
  DELETE_BUNDLE_OWN: Object.assign(DELETE_BUNDLE_OWN, { includes: [], excludes: [] }),

  // STOCK
  CREATE_STOCK: Object.assign(CREATE_STOCK, {
    includes: [EDIT_STOCK_OWN],
    excludes: [],
  }),
  EDIT_STOCK: Object.assign(EDIT_STOCK, {
    includes: [DELETE_STOCK, EDIT_STOCK_OWN],
    excludes: [],
  }),
  EDIT_STOCK_OWN: Object.assign(EDIT_STOCK_OWN, {
    includes: [DELETE_STOCK_OWN],
    excludes: [],
  }),
  REQUEST_PUBLICATION_STOCK_OWN: Object.assign(REQUEST_PUBLICATION_STOCK_OWN, {
    includes: [],
    excludes: [
      // VALIDATE_PUBLICATION_STOCK,
      // PUBLISH_STOCK,
      // PUBLISH_STOCK_OWN,
      // UNPUBLISH_STOCK,
      // UNPUBLISH_STOCK_OWN,
    ],
  }),
  REQUEST_PUBLICATION_STOCK: Object.assign(REQUEST_PUBLICATION_STOCK, {
    includes: [],
    excludes: [
      // VALIDATE_PUBLICATION_STOCK,
      // PUBLISH_STOCK,
      // PUBLISH_STOCK_OWN,
      // UNPUBLISH_STOCK,
      // UNPUBLISH_STOCK_OWN,
    ],
  }),
  VALIDATE_PUBLICATION_STOCK: Object.assign(VALIDATE_PUBLICATION_STOCK, {
    includes: [],
    excludes: [
      // REQUEST_PUBLICATION_STOCK_OWN,
      // REQUEST_PUBLICATION_STOCK,
    ],
  }),
  PUBLISH_STOCK: Object.assign(PUBLISH_STOCK, {
    includes: [],
    excludes: [
      // REQUEST_PUBLICATION_STOCK,
      // REQUEST_PUBLICATION_STOCK_OWN,
    ],
  }),
  PUBLISH_STOCK_OWN: Object.assign(PUBLISH_STOCK_OWN, {
    includes: [],
    excludes: [
      // REQUEST_PUBLICATION_STOCK,
      // REQUEST_PUBLICATION_STOCK_OWN,
    ],
  }),
  UNPUBLISH_STOCK: Object.assign(UNPUBLISH_STOCK, {
    includes: [],
    excludes: [
      // REQUEST_PUBLICATION_STOCK,
      // REQUEST_PUBLICATION_STOCK_OWN,
    ],
  }),
  UNPUBLISH_STOCK_OWN: Object.assign(UNPUBLISH_STOCK_OWN, {
    includes: [],
    excludes: [
      // UNPUBLISH_STOCK_OWN,
      // REQUEST_PUBLICATION_STOCK_OWN,
    ],
  }),
  DELETE_STOCK: Object.assign(DELETE_STOCK, { includes: [], excludes: [] }),
  DELETE_STOCK_OWN: Object.assign(DELETE_STOCK_OWN, { includes: [], excludes: [] }),

  // CORNER
  CREATE_CORNER: Object.assign(CREATE_CORNER, {
    includes: [EDIT_USER_CORNER_OWN],
    excludes: [],
  }),
  EDIT_CORNER: Object.assign(EDIT_CORNER, { includes: [], excludes: [] }),
  DELETE_CORNER: Object.assign(DELETE_CORNER, { includes: [], excludes: [] }),
  EDIT_USER_CORNER: Object.assign(EDIT_USER_CORNER, { includes: [], excludes: [] }),
  EDIT_USER_CORNER_OWN: Object.assign(EDIT_USER_CORNER_OWN, { includes: [], excludes: [] }),
  // ROLE
  CREATE_ROLES: Object.assign(CREATE_ROLES, {
    includes: [
      EDIT_ROLES_PERMISSION,
      READ_USERS,
    ],
    excludes: [],
  }),
  EDIT_ROLES_PERMISSION: Object.assign(EDIT_ROLES_PERMISSION, { includes: [], excludes: [] }),
  // USER
  EDIT_USER_ROLE: Object.assign(EDIT_USER_ROLE, {
    includes: [READ_USERS],
    excludes: [],
  }),
  READ_USERS: Object.assign(READ_USERS, { includes: [], excludes: [] }),
  READ_USERS_DETAILS: Object.assign(READ_USERS_DETAILS, {
    includes: [READ_USERS],
    excludes: [],
  }),
  VALIDATE_USERS: Object.assign(VALIDATE_USERS, {
    includes: [READ_USERS],
    excludes: [],
  }),
  CREATE_USER: Object.assign(CREATE_USER, {
    includes: [
      READ_USERS,
      EDIT_USER,
      READ_USERS_DETAILS,
      VALIDATE_USERS,
    ],
    excludes: [],
  }),
  EDIT_USER: Object.assign(EDIT_USER, {
    includes: [READ_USERS],
    excludes: [],
  }),
  // GENERAL
  EDIT_GENERAL_SETTINGS: Object.assign(EDIT_GENERAL_SETTINGS, { includes: [], excludes: [] }),
  // USERVOICE
  USERVOICE_LIVE_CHAT: Object.assign(USERVOICE_LIVE_CHAT, { includes: [], excludes: [] }),
  USERVOICE_BO_ACCESS: Object.assign(USERVOICE_BO_ACCESS, { includes: [], excludes: [] }),
  // FOLLOW UPS
  VIEW_ALL_FOLLOW_UPS: Object.assign(VIEW_ALL_FOLLOW_UPS, { includes: [], excludes: [] }),
  ACCESS_BI360_FOLLOW_UPS: Object.assign(ACCESS_BI360_FOLLOW_UPS, { includes: [], excludes: [] }),
  // ASSIGNMENT
  VIEW_ALL_ASSIGNMENTS: Object.assign(VIEW_ALL_ASSIGNMENTS, { includes: [], excludes: [] }),
  CREATE_ASSIGNMENT: Object.assign(CREATE_ASSIGNMENT, {
    includes: [EDIT_ASSIGNMENT_OWN],
    excludes: [],
  }),
  EDIT_ASSIGNMENT: Object.assign(EDIT_ASSIGNMENT, {
    includes: [
      EDIT_ASSIGNMENT_OWN,
      VIEW_ALL_ASSIGNMENTS,
    ],
    excludes: [],
  }),
  EDIT_ASSIGNMENT_OWN: Object.assign(EDIT_ASSIGNMENT_OWN, { includes: [], excludes: [] }),
  REQUEST_VALIDATION_ASSIGNMENT: Object.assign(REQUEST_VALIDATION_ASSIGNMENT, {
    includes: [],
    excludes: [
      // VALIDATE_ASSIGNMENT,
      // VALIDATE_ASSIGNMENT_OWN,
    ],
  }),
  REQUEST_VALIDATION_ASSIGNMENT_OWN: Object.assign(REQUEST_VALIDATION_ASSIGNMENT_OWN, {
    includes: [],
    excludes: [
      // VALIDATE_ASSIGNMENT,
      // VALIDATE_ASSIGNMENT_OWN,
    ],
  }),
  VALIDATE_ASSIGNMENT: Object.assign(VALIDATE_ASSIGNMENT, {
    includes: [],
    excludes: [
      // REQUEST_VALIDATION_ASSIGNMENT_OWN,
      // REQUEST_VALIDATION_ASSIGNMENT,
    ],
  }),
  VALIDATE_ASSIGNMENT_OWN: Object.assign(VALIDATE_ASSIGNMENT_OWN, {
    includes: [],
    excludes: [
      // REQUEST_VALIDATION_ASSIGNMENT_OWN,
      // REQUEST_VALIDATION_ASSIGNMENT,
    ],
  }),
  CANCEL_PENDING_ASSIGNMENT: Object.assign(CANCEL_PENDING_ASSIGNMENT, { includes: [], excludes: [] }),
  CANCEL_PENDING_ASSIGNMENT_OWN: Object.assign(CANCEL_PENDING_ASSIGNMENT_OWN, {
    includes: [ASSIGNMENTS_LIST_ALL_INFO, ASSIGNMENTS_LIST_BASIC_INFO],
    excludes: [],
  }),
  VIEW_ASSIGNED_ASSIGNMENT_TO_USER: Object.assign(VIEW_ASSIGNED_ASSIGNMENT_TO_USER, {
    includes: [
      VIEW_ASSIGNED_ASSIGNMENT_TO_OWN_ITEMS,
    ],
    excludes: [],
  }),
  VIEW_ASSIGNED_ASSIGNMENT_TO_OWN_ITEMS: Object.assign(VIEW_ASSIGNED_ASSIGNMENT_TO_OWN_ITEMS, {
    includes: [
      ASSIGNMENTS_LIST_ALL_INFO,
      ASSIGNMENTS_LIST_BASIC_INFO,
    ],
    excludes: [],
  }),
  ASSIGNMENTS_LIST_ALL_INFO: Object.assign(ASSIGNMENTS_LIST_ALL_INFO, { includes: [], excludes: [] }),
  ASSIGNMENTS_LIST_BASIC_INFO: Object.assign(ASSIGNMENTS_LIST_BASIC_INFO, { includes: [], excludes: [] }),
  // GDP
  CAN_ACCESS_GDP: Object.assign(CAN_ACCESS_GDP, { includes: [], excludes: [] }),
  CAN_ACCESS_GDP2: Object.assign(CAN_ACCESS_GDP2, { includes: [], excludes: [] }),
  CAN_ACCESS_BI360: Object.assign(CAN_ACCESS_BI360, { includes: [], excludes: [] }),
  // CHART
  GERARD_BI360_CHART: Object.assign(GERARD_BI360_CHART, { includes: [], excludes: [] }),
  MICHEL_BI360_CHART: Object.assign(MICHEL_BI360_CHART, { includes: [], excludes: [] }),
};

for (const key in PERMISSIONS) {
  if ({}.hasOwnProperty.call(PERMISSIONS, key)) {
    PERMISSIONS[key].descriptions += `\nIncludes: ${PERMISSIONS[key].includes.map(p => `"${p.name}"`).join(', ')}`;
    PERMISSIONS[key].descriptions += `\nExcludes: ${PERMISSIONS[key].excludes.map(p => `"${p.name}"`).join(', ')}`;
  }
}

export default PERMISSIONS;
