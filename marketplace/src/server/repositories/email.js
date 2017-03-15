import Logs from 'logs';
import {
  renderNewUserNotification,
  renderProductPublicationRequestedNotification,
  renderBundlePublicationRequestedNotification,
  renderProductPublishedNotification,
  renderUserValidatedNotification,
  renderAssignmentRequestedNotification,
  renderAssignmentValidatedNotification,
  renderAssignmentValidatedNotificationToSupplier,
  renderPoGenEmail,
} from '../email/renderer';
import React from 'react';
import config from 'config';
import queueDriver from './drivers/queue';
import UserRepository from './user';
import ProductRepository from './product';
import AssignmentRepository from './assignment';
import BundleRepository from './bundle';
import { PERMISSIONS, PO_SYSTEM } from 'helpers/constants';
const testing = process.env.TESTING_EMAIL_ADDRESS || false;
// todo: this auth needs to be dynamic
// TODO: Refactor so that these functions return a similar value - now they take different params and return different responses

export default class EmailRepository {

  constructor(tenant, transport) {
    if (!transport) {
      throw new Error('Missing transport from EmailRepository');
    }
    this.config = config.get(tenant);
    this.mailConfig = this.config.mail;
    this.transport = transport;
    this.tenant = tenant;
    this.queueDriver = new queueDriver(tenant);
    this.userRepository = new UserRepository(tenant);
    this.productRepository = new ProductRepository(tenant);
    this.assignmentRepository = new AssignmentRepository(tenant);
    this.bundleRepository = new BundleRepository(tenant);
  }

  // Each of these functions created the whole email
  // and sends it off to the queue
  // This includes the smtp data
  // The queue system itself knows nothing

/** USER EMAILS **/

  sendNewUserNotifications = ({ req }) => {
    const subject = `${req.tenant.toUpperCase()} - Nouvelle Inscription`;
    const emailVariables = {
      tenantUrl: req.getProtocolAndDomain(),
      tenant: req.tenant.toUpperCase(),
      sex: req.body.sex || '',
      lastname: req.body.lastname || '',
      name: req.body.name || '',
      society: req.body.company.name || '',
      activityFields: req.body.company.activity_fields ? req.body.company.activity_fields.map(af => af.name) : [],
      siret: req.body.company.siret || '',
      subject,
    };
    // todo: url is empty here. We need it for the url link!
    const jobData = {
      options: {
        from: `${this.mailConfig.from.name} <${this.mailConfig.from.address}>`,
        subject,
        html: renderNewUserNotification(emailVariables),
      },
      transport: this.transport,
    };
    this.userRepository.getWithPermissions([PERMISSIONS.VALIDATE_USERS.id])
    .then(admins => {
      if (!admins.length) {
        console.log('No users with permission VALIDATE_USERS available');
        Logs.email.trace('No recipients available for email. Not sending anything.');
        Logs.email.trace('No users with permission found:');
        Logs.email.trace(PERMISSIONS.VALIDATE_USERS.id);
        Logs.email.trace('sendNewUserNotifications');
        Logs.email.trace(jobData.options);
        return;
      }
      const to = admins.map(a => a.email).join(', ');
      console.log('sendNewUserNotifications::SENDING MAIL TO:', to);
      jobData.options.to = !!testing ? testing : to;
      this.queueDriver.addEmail(jobData);
    })
    .catch(err => {
      const log = `
        ERROR
        ${err.message}
        ${err.stack}
      `;
      Logs.logger.error(log);
    });
    return Promise.resolve();
  };

  sendUserValidatedNotification = ({ req, action }) => {
    const user = action.user;
    if (!user) {
      Logs.logger.error('No use found after activating user.');
      return Promise.reject(action);
    }
    const subject = `${req.tenant} - Inscription validée`;
    const emailVariables = {
      tenantUrl: req.getProtocolAndDomain(),
      tenant: req.tenant,
      subject,
    };
    const jobData = {
      options: {
        from: `${this.mailConfig.from.name} <${this.mailConfig.from.address}>`,
        subject,
        html: renderUserValidatedNotification(emailVariables),
        to: !!testing ? testing : user.email,
      },
      transport: this.transport,
    };
    console.log('sendUserValidatedNotification::SENDING MAIL TO:', user.email);
    this.queueDriver.addEmail(jobData);
    return Promise.resolve(action);
  };

/** PRODUCT EMAILS **/

  sendProductPublicationRequestedNotification = ({ req, product }) => {
    const subject = `${req.tenant.toUpperCase()} - Publication souhaitée`;
    const emailVariables = {
      name: req.user.name,
      lastname: req.user.lastname,
      siret: '93675671256725376', // need to add siret to call
      companyName: '',
      corners: [],
      tenant: req.tenant,
      sex: req.user.sex,
      tenantUrl: req.getProtocolAndDomain(),
      productName: '',
      subject,
    };
    const jobData = {
      options: {
        from: `${this.mailConfig.from.name} <${this.mailConfig.from.address}>`,
        subject,
        html: '',
      },
      transport: this.transport,
    };
    this.productRepository.get(product.id)
    .then(p => {
      emailVariables.productName = p.name;
      emailVariables.corners = p.corners ? p.corners.map(c => c.name) : [];
      emailVariables.companyName = p.company ? p.company.name : '';
      jobData.options.html = renderProductPublicationRequestedNotification(emailVariables);
    })
    .then(() => this.userRepository.getWithPermissions([PERMISSIONS.VALIDATE_PUBLICATION_PRODUCT.id]))
    .then(admins => {
      if (admins.length === 0) {
        Logs.email.trace('No recipients available for email. Not sending anything.');
        Logs.email.trace('sendProductPublicationRequestedNotification');
        Logs.email.trace('No users with permission found:');
        Logs.email.trace(PERMISSIONS.VALIDATE_PUBLICATION_PRODUCT.id);
        Logs.email.trace(jobData.options);
        return;
      }
      const to = admins.map(a => a.email).join(', ');
      console.log('sendProductPublicationRequestedNotification::SENDING MAIL TO:', to);
      jobData.options.to = !!testing ? testing : to;
      this.queueDriver.addEmail(jobData);
    })
    .catch(err => {
      const log = `
        ERROR
        ${err.message}
        ${err.stack}
      `;
      Logs.logger.error(log);
    });
    return Promise.resolve(action);
  };

  sendProductPublishedNotification = ({ req, action }) => {
    const product = action.product;
    this.productRepository.getProductPublishedNotificationData(product.id)
    .then(productData => {
      const subject = `${productData[0].name} - Produit publié`;
      const emailVariables = {
        productName: productData[0].name,
        productUrl: `${req.getProtocolAndDomain()}/product/${productData[0].alias}`,
        tenant: req.tenant,
        subject,
      };
      const jobData = {
        options: {
          from: `${this.mailConfig.from.name} <${this.mailConfig.from.address}>`,
          subject,
          html: renderProductPublishedNotification(emailVariables),
          to: !!testing ? testing : productData[0].email,
        },
        transport: this.transport,
      };
      console.log('sendProductPublishedNotification::SENDING MAIL TO:', productData[0].email);
      this.queueDriver.addEmail(jobData);
    })
    .catch(err => {
      const log = `
        ERROR
        ${err.message}
        ${err.stack}
      `;
      Logs.logger.error(log);
    });
    return Promise.resolve(action);
  };

/** ASSIGNMENT EMAILS **/

  sendAssignmentRequestedNotification = ({ action, req }) => {
    let assignment;
    const tenant = req.store.getState().get('tenant');
    const tenantUrl = req.getProtocolAndDomain();
    const subject = `${tenant.toUpperCase()} - Nouvelle dotation`;
    const emailVariables = {
      assignorFirstname: '',
      assignorLastname: '',
      assigneeFirstname: '',
      assigneeLastname: '',
      tenant,
      tenantUrl,
      subject,
    };
    const jobData = {
      options: {
        from: `${this.mailConfig.from.name} <${this.mailConfig.from.address}>`,
        subject,
        html: '',
      },
      transport: this.transport,
    };
    // This is sent to all users with the permission VALIDATE_ASSIGNMENT
    this.assignmentRepository.getOne(parseInt(action.assignment.id, 10))
    .then(ass => {
      assignment = Object.assign(ass);
      return this.userRepository.getLoggedInUser(assignment.assigned_to_info.id);
    })
    .then(assignee => {
      emailVariables.assigneeFirstname = assignee.name;
      emailVariables.assigneeLastname = assignee.lastname;
    })
    .then(() => this.userRepository.getLoggedInUser(assignment.assigned_by_info.id))
    .then(assignor => {
      emailVariables.assignorFirstname = assignor.name;
      emailVariables.assignorLastname = assignor.lastname;
      jobData.options.html = renderAssignmentRequestedNotification(emailVariables);
      return this.userRepository.getWithPermissions([PERMISSIONS.VALIDATE_ASSIGNMENT.id]);
    })
    .then(managers => {
      if (managers.length === 0) {
        Logs.email.trace('No recipients available for email. Not sending anything.');
        Logs.email.trace('sendAssignmentRequestedNotification');
        Logs.email.trace('No users with permission found:');
        Logs.email.trace(PERMISSIONS.VALIDATE_ASSIGNMENT.id);
        Logs.email.trace(jobData.options);
        return;
      }
      const to = managers.map(a => a.email).join(', ');
      console.log('sendAssignmentRequestedNotification::SENDING MAIL TO:', to);
      jobData.options.to = !!testing ? testing : to;
      this.queueDriver.addEmail(jobData);
    })
    .catch(err => {
      const log = `
        ERROR
        ${err.message}
        ${err.stack}
      `;
      Logs.logger.error(log);
    });
    return Promise.resolve(assignment);
  };

  sendAssignmentValidatedNotification = ({ req, action }) => {
    // This is sent to just the creator of the assignment
    let assignment;
    const tenant = req.store.getState().get('tenant');
    const tenantUrl = req.getProtocolAndDomain();
    const subject = `${tenant.toUpperCase()} - Dotation validée`;
    const emailVariables = {
      assigneeFirstname: '',
      assigneeLastname: '',
      tenant,
      tenantUrl,
      productName: 'PRODUCT_NAME',
      subject,
    };
    const jobData = {
      options: {
        to: '',
        from: `${this.mailConfig.from.name} <${this.mailConfig.from.address}>`,
        subject,
        html: '',
      },
      transport: this.transport,
    };
    this.assignmentRepository.getOne(parseInt(action.assignment.id, 10))
    .then(ass => {
      assignment = ass;
      return this.userRepository.getLoggedInUser(assignment.assigned_to_info.id);
    })
    .then(assignee => {
      emailVariables.assigneeFirstname = assignee.name;
      emailVariables.assigneeLastname = assignee.lastname;
      return this.userRepository.getLoggedInUser(assignment.assigned_by_info.id);
    })
    .then(assignor => {
      jobData.options.to = !!testing ? testing : assignor.email;
      return Promise.resolve();
    })
    .then(() => Promise.resolve(assignment.items.filter(i => !!parseInt(i.id_product, 10)).map(i => parseInt(i.id_product, 10))))
    .then(productIds => new ProductRepository(tenant).getProductsAndSuppliersByIds(productIds))
    .then(assignmentProducts => {
      assignmentProducts.forEach(ap => {
        console.log('sendAssignmentValidatedNotification::SENDING MAIL TO:', jobData.options.to);
        this.queueDriver.addEmail({
          ...jobData,
          options: Object.assign({}, jobData.options, { html: renderAssignmentValidatedNotification({ ...emailVariables, productName: ap.name }) }),
        });
      });
      return Promise.resolve();
    })
    .catch(err => {
      const log = `
        ERROR
        ${err.message}
        ${err.stack}
      `;
      Logs.logger.error(log);
    });
    return Promise.resolve(assignment);
  };

  sendAssignmentValidatedNotificationToSupplier = ({ req, action }) => {
    // This is sent to just the creator of the assignment
    let assignment;
    const tenant = req.store.getState().get('tenant');
    const tenantUrl = req.getProtocolAndDomain();
    const subject = `${tenant.toUpperCase()} - Dotation validée`;
    const emailVariables = {
      assigneeFirstname: '',
      assigneeLastname: '',
      assignorFirstname: '',
      assignorLastname: '',
      tenant,
      tenantUrl,
      productName: '',
      subject,
    };
    const jobData = {
      options: {
        to: '',
        from: `${this.mailConfig.from.name} <${this.mailConfig.from.address}>`,
        subject,
        html: '',
      },
      transport: this.transport,
    };
    this.assignmentRepository.getOne(parseInt(action.assignment.id, 10))
    .then(ass => {
      assignment = ass;
      return this.userRepository.getLoggedInUser(assignment.assigned_to_info.id);
    })
    .then(assignee => {
      emailVariables.assigneeFirstname = assignee.name;
      emailVariables.assigneeLastname = assignee.lastname;
      return this.userRepository.getLoggedInUser(assignment.assigned_by_info.id);
    })
    .then(assignor => {
      emailVariables.assignorFirstname = assignor.name;
      emailVariables.assignorLastname = assignor.lastname;
      return Promise.resolve();
    })
    .then(() => Promise.resolve(assignment.items.filter(i => !!parseInt(i.id_product, 10)).map(i => parseInt(i.id_product, 10))))
    .then(productIds => new ProductRepository(tenant).getProductsAndSuppliersByIds(productIds))
    .then(assignmentProducts => {
      assignmentProducts.forEach(ap => {
        const downloadUrl = PO_SYSTEM.URL.GET.replace('&format=PDF', '').replace('[ORDER_ID]', assignment.items.find(a => parseInt(a.id_product, 10) === parseInt(ap.id, 10)).id_po_system);
        console.log('downloadUrl', downloadUrl);
        console.log('sendAssignmentValidatedNotificationToSupplier::SENDING MAIL TO:', ap.supplier_email);
        this.queueDriver.addEmail({
          ...jobData,
          options: Object.assign({}, jobData.options, {
            html: renderAssignmentValidatedNotificationToSupplier({ ...emailVariables, productName: ap.name, downloadUrl }),
            to: !!testing ? testing : ap.supplier_email,
          }),
        });
      });
      return Promise.resolve();
    })
    .catch(err => {
      const log = `
        ERROR
        ${err.message}
        ${err.stack}
      `;
      Logs.logger.error(log);
    });
    return Promise.resolve();
  };
  // TODO: fill this in
  sendPoGenEmail = ({ req, action }) => {
    const user = action.user;
    const orderId = 12398734982;
    const subject = `GFCv2-SNCF - ${orderId}`;
    const emailVariables = {
      tenantUrl: req.getProtocolAndDomain(),
      tenant: req.tenant,
      assigneeFirstname: 'Bobby',
      assigneeLastname: 'Charlton',
      downloadUrl: '/abde.com',
      productName: 'Wonderful Product',
      orderId,
      subject,
    };
    const jobData = {
      options: {
        from: `${this.mailConfig.from.name} <${this.mailConfig.from.address}>`,
        subject,
        html: renderPoGenEmail(emailVariables),
        to: !!testing ? testing : user.email,
      },
      transport: this.transport,
    };
    console.log('sendPoGenEmail::SENDING MAIL TO:', user.email);
    this.queueDriver.addEmail({ ...jobData });
    return Promise.resolve(action);
  };

  /** BUNDLE EMAILS **/

  sendBundlePublicationRequestedNotification = ({ req, action }) => {
    const { bundle } = action;
    const subject = `${req.tenant.toUpperCase()} - Publication souhaitée`;
    const emailVariables = {
      name: req.user.name,
      lastname: req.user.lastname,
      corners: [],
      tenant: req.tenant,
      sex: req.user.sex,
      tenantUrl: req.getProtocolAndDomain(),
      bundleName: '',
      subject,
    };
    const jobData = {
      options: {
        from: `${this.mailConfig.from.name} <${this.mailConfig.from.address}>`,
        subject,
        html: '',
      },
      transport: this.transport,
    };
    this.bundleRepository.getOne(bundle.id)
    .then(b => {
      emailVariables.bundleName = b.title;
      emailVariables.corners = b.corners ? b.corners.map(c => c.name) : [];
      jobData.options.html = renderBundlePublicationRequestedNotification(emailVariables);
    })
    .then(() => this.userRepository.getWithPermissions([PERMISSIONS.VALIDATE_PUBLICATION_BUNDLE.id]))
    .then(admins => {
      if (admins.length === 0) {
        Logs.email.trace('No recipients available for email. Not sending anything.');
        Logs.email.trace('sendBundlePublicationRequestedNotification');
        Logs.email.trace('No users with permission found:');
        Logs.email.trace(PERMISSIONS.VALIDATE_PUBLICATION_BUNDLE.id);
        Logs.email.trace(jobData.options);
        return;
      }
      const to = admins.map(a => a.email).join(', ');
      jobData.options.to = !!testing ? testing : to;
      this.queueDriver.addEmail(jobData);
    })
    .catch(err => {
      const log = `
        ERROR
        ${err.message}
        ${err.stack}
      `;
      Logs.logger.error(log);
    });
    return Promise.resolve(action);
  };
}
