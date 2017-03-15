import Validator from 'revalidator';

export default class ValidateUserCreation {

  static schema = {
    user: {
      additionalProperties: false,
      properties: {
        sex: {
          description: 'sex',
          type: ['string', 'null'],
          required: true,
        },
        lastname: {
          description: 'lastname required',
          type: 'string',
          required: true,
          minLength: 4,
        },
        name: {
          description: 'name required',
          type: 'string',
          minLength: 4,
          required: true,
          message: 'message error with name',
        },
        email: {
          description: 'email required',
          type: 'string',
          format: 'email',
          required: true,
          message: 'message error with email',
        },
        password: { type: 'string', minLength: 6 },
        creation_time: { type: 'number', default: Date.now() },
        display_name: { type: ['string', 'null'], optional: true },
        auth_provider: { type: 'string' },
        last_connection: { type: ['number', 'null'], default: Date.now() },
        id_role: { type: 'number' },
        token: { type: ['string', 'null'], optional: true },
        social_id: { type: ['string', 'null'], optional: true },
      },
    },
    company: {
      id: 'Company',
      type: 'object',
      additionalProperties: false,
      properties: {
        name: { type: 'string', required: true, minLength: 5 },
        siret: { type: 'string', pattern: /\d{3}-?\d{3}-?\d{3}-?\d{5}/, required: true },
        activity_fields: { type: 'array' },
        platforms: { type: 'array' },
        usecase: { type: 'string', optional: true },
      },
    },
  };

  static validate(user, onlyCompany = false) {
    const { company, passwordConfirmation, ...userInfo } = user;

    const validation = Validator.validate(userInfo, ValidateUserCreation.schema.user);

    let errors = validation.errors.reduce((errors, current) => {
      errors[current.property] = current.message;
      return errors;
    }, {});

    if (!userInfo.password && !userInfo.social_id) {
      errors.password = 'Password required';
    } else if (userInfo.password.length < 6) {
      errors.password = 'Password min length 6';
    }

    if (passwordConfirmation !== userInfo.password) {
      errors.passwordConfirmation = 'passwords don\'t match';
    }

    if (onlyCompany) {
      errors = {};
    }

    if (company) {
      const validation = Validator.validate(company, ValidateUserCreation.schema.company);

      errors.company = validation.errors.reduce((errors, current) => {
        errors[current.property] = current.message;
        return errors;
      }, {});
    }

    return errors;
  }

}
