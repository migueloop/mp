import _ from 'lodash';
import { Validator } from 'jsonschema';
import { PRODUCT, USER, ITEM } from 'helpers/constants';

class ModelBase {
  constructor(oSchema, oEnums) {
    this._schema = oSchema;
    this._enums = oEnums || null;
  }

  checkEnumsValues(obj) {
    const oResult = { success: true, errors: [{ number: 0, message: '' }] };
    for (const key of Object.keys(this._enums)) {
      if (obj.hasOwnProperty(key)) {
        if (!Array.from(this._enums[key]).find(x => x === obj[key])) {
          oResult.success = false;
          ++oResult.errors[0].number;
          oResult.errors[0].message += `\nKey ${key} has value ${obj[key]} that does not exist. Use ${this._enums[key]}`;
        }
      }
    }

    return oResult;
  }

  validate(obj, oDefaultValues) {
    const self = this;
    const validatedObject = {};
    const validator = new Validator();
    return new Promise((resolve, reject) => {
      if (obj !== undefined) {
        // object passed and not undefined, need to be validated
        // first validate if there is any enum
        if (self._enums !== null) {
          const validateEnums = self.checkEnumsValues(obj);
          if (!validateEnums.success) {
            return reject(validateEnums.errors[0].message);
          }
        }
        // validate all object
        const tmpObj = validator.validate(obj, self._schema);
        if (tmpObj.errors.length !== 0) {
          // if not validated
          return reject(`model validation not passed!!. Reason: ${tmpObj.errors[0]}`);
        }
      }

      obj = obj || {};
      Object.assign(validatedObject, oDefaultValues, obj);
      resolve(validatedObject);
    });
  }
}

export class Bundle extends ModelBase {

  constructor() {
    const bundleSchema = {
      id: '/SimpleBundle',
      type: 'object',
      additionalProperties: false,
      properties: {
        title: { type: 'string' },
        baseline: { type: ['string', 'null'] },
        description: { type: ['string', 'null'] },
        created_by_id: { type: 'number' },
        creation_date: { type: 'number' },
        last_update: { type: ['number', 'null'] },
        publication_date: { type: ['number', 'null'] },
        state_id: { type: 'number' },
        alias: { type: ['string', 'null'] },
        logo_id: { type: ['string', 'null'] },
      },
      required: ['title', 'created_by_id', 'state_id'],
    };
    super(bundleSchema);
  }

  validate(bundle) {
    const oDefaultBundleValues = {
      title: null,
      baseline: null,
      description: null,
      created_by_id: '',
      creation_date: Date.now(),
      last_update: Date.now(),
      publication_date: null,
      state_id: ITEM.STATE.DRAFT,
      alias: null,
      logo_id: null,
    };
    return (super.validate(bundle, oDefaultBundleValues));
  }
}


export class Corner extends ModelBase {
  constructor() {
    const cornerSchema = {
      id: '/SimpleCorner',
      type: 'object',
      additionalProperties: false,
      properties: {
        name: { type: 'string' },
        alias: { type: 'string' },
        description: { type: 'string' },
        created_by: { type: 'number' },
        creation_date: { type: 'number' },
        last_update: { type: 'number' },
        logo: { type: 'string' },
      },
      required: ['name', 'created_by'],
    };
    super(cornerSchema);
  }

  validate(corner) {
    const oDefaultCornerValues = {
      name: '',
      alias: '',
      description: '',
      created_by: '',
      creation_date: Date.now(),
      last_update: Date.now(),
      logo: '',
    };
    return (super.validate(corner, oDefaultCornerValues));
  }
}


export class ItemResource extends ModelBase {
  constructor() {
    const itemResourceSchema = {
      id: '/SimpleItemResource',
      type: 'object',
      additionalProperties: false,
      properties: {
        type: { type: ['string', 'null'] },
        name: { type: 'string' },
        original_name: { type: ['string', 'null'] },
        name_custom: { type: ['string', 'null'] },
        creation_date: { type: 'number' },
        is_hidden: { type: 'number' },
        home_order: { type: ['number', 'null'] },
      },
      required: ['name'],
    };
    super(itemResourceSchema);
  }

  validate(itemResource) {
    const oDefaultItemResourceValues = {
      type: null,
      name: '',
      original_name: null,
      name_custom: null,
      creation_date: Date.now(),
      is_hidden: 0,
      home_order: null,
    };
    return (super.validate(itemResource, oDefaultItemResourceValues));
  }
}


export class MessageProduct extends ModelBase {
  constructor() {
    const oEnums = { sex: ['M', 'F'] };
    const messageProductSchema = {
      id: '/SimpleMessageProduct',
      type: 'object',
      additionalProperties: false,
      properties: {
        name: { type: 'string' },
        lastname: { type: 'string' },
        email: { type: ['string', 'null'], format: 'email' },
        sex: { type: 'string' },
        phone: { optional: true },
        company: { optional: true },
        subject: { type: 'string' },
        message: { optional: true },
        id_product: { type: ['number', 'null'] },
        creation_date: { type: 'number', default: Date.now() },
        treated_at: { type: ['number', 'null'] },
      },
      required: ['name', 'lastname', 'sex', 'email', 'subject'],
    };
    super(messageProductSchema);
  }

  validate(messageProduct) {
    const oDefaultMessageProductValues = {
      name: '',
      lastname: '',
      email: '',
      sex: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
      id_product: '',
      creation_date: Date.now(),
      treated_at: null,
    };
    return (super.validate(messageProduct, oDefaultMessageProductValues));
  }
}


export class Assignment extends ModelBase {

  constructor() {
    const assignmentSchema = {
      id: '/SimpleAssignment',
      type: 'object',
      additionalProperties: false,
      properties: {
        alias: { type: ['string', 'null'] },
        assigned_at: { type: ['number', 'null'] },
        created_at: { type: ['number', 'null'] },
        description: { type: 'string' },
        id_assigned_to: { type: ['number', 'null'] },
        id_assigned_by: { type: ['number', 'null'] },
        id_state: { type: ['number', 'null'] },
        id_workflow_instance: { type: ['string', 'null'] },
        id_po_system: { type: ['string', 'null'] },
      },
      required: ['id_assigned_by'],
    };
    super(assignmentSchema);
  }

  validate(assignment) {
    const oDefaultAssignmentValues = {
      alias: null,
      assigned_at: null,
      created_at: Date.now(),
      description: '',
      id_assigned_to: null,
      id_assigned_by: null,
      id_state: null,
      id_workflow_instance: null,
      id_po_system: null,
    };
    return (super.validate(assignment, oDefaultAssignmentValues));
  }
}


export class Product extends ModelBase {
  constructor() {
    const oEnums = {
      type: ['MobileApp', 'SaaS', 'MaterialNDevice', 'Service'],
      state: ['draft', 'pending', 'published', 'deleted'],
    };

    const oProductSchema = {
      id: '/SimpleProduct',
      type: 'object',
      additionalProperties: false,
      properties: {
        name: { type: 'string' },
        alias: { type: 'string' },
        type: { type: 'string' },
        state: { type: 'string' },
        version: { type: 'string' },
        baseline: { type: 'string' },
        description: { type: 'string' },
        created_by: { type: 'number' },
        creation_date: { type: 'number' },
        last_update: { type: 'number' },
        publication_date: { type: ['number', 'null'] },
        submit_observation: { type: ['string', 'null'], optional: true },
        logo: { type: ['number', 'null'], optional: true },
        specification: { type: ['number', 'null'], optional: true },
        editor_description: { type: ['string', 'null'], optional: true },
        editor_logo: { type: ['number', 'null'], optional: true },
        editor_homepage: { type: ['string', 'null'], optional: true },
        editor_legal_mentions: { type: ['string', 'null'], optional: true },
      },
      required: ['name', 'type', 'state'],
    };
    super(oProductSchema, oEnums);
  }

  validate(product) {
    const oDefaultProductValues = {
      name: '',
      alias: '',
      type: '',
      state: PRODUCT.STATE.DRAFT,
      version: '',
      baseline: '',
      description: '',
      created_by: null,
      creation_date: Date.now(),
      last_update: Date.now(),
      publication_date: Date.now(),
      submit_observation: '',
      logo: null,
      specification: null,
      editor_description: '',
      editor_logo: null,
      editor_homepage: '',
      editor_legal_mentions: '',
    };
    return (super.validate(product, oDefaultProductValues));
  }
}


export class User extends ModelBase {
  constructor() {
    const oEnums = { auth_provider: ['local', 'facebook', 'linkedin'] };
    const userSchema = {
      id: '/SimpleUser',
      type: 'object',
      additionalProperties: false,
      properties: {
        email: { type: 'string', format: 'email' },
        password: { type: 'string', minLength: 6 },
        creation_date: { type: 'number', default: Date.now() },
        display_name: { type: ['string', 'null'], optional: true },
        lastname: { type: ['string', 'null'], optional: true },
        name: { type: ['string', 'null'], optional: true },
        auth_provider: { type: 'string' },
        last_connection: { type: ['number', 'null'], default: Date.now() },
        sex: { type: ['string', 'null'], optional: true },
        id_role: { type: 'number', default: USER.ROLE.CUSTOMER },
        phone: { type: ['string', 'null'], optional: true },
        contact_mail: { type: ['string', 'null'], format: 'email', optional: true },
        token: { type: ['string', 'null'], optional: true },
        social_id: { type: ['string', 'null'], optional: true },
      },
      required: ['name', 'email', 'auth_provider'],
    };

    super(userSchema, oEnums);
  }

  validate(user) {
    const oDefaultUserValues = {
      email: '',
      password: '',
      creation_date: Date.now(),
      display_name: '',
      lastname: '',
      name: '',
      auth_provider: USER.PROVIDER.LOCAL,
      last_connection: Date.now(),
      sex: '',
      id_role: 1,
      phone: '',
      contact_mail: '',
    };
    return (super.validate(user, oDefaultUserValues));
  }
}
