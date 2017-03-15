import Repository from './drivers/mysql';
import { NOTIFICATION, PERMISSIONS } from 'helpers/constants';

export default class UserNotifcationRepository {

  constructor(tenant) {
    this._repo = new Repository(tenant, 'notifications');
    this.tenant = tenant;
    this.defaultOrder = 'order by created_at desc';
  }

  getAll() {
    return this._repo.query(`select * from notifications ${this.defaultOrder}`);
  }

  getByUser(userId) {
    return this._repo.query(`select * from notifications where id_user = ? ${this.defaultOrder}`, [userId]);
  }

  checkSubjectIdExists = subjectId => {
    if (!subjectId) {
      throw new Error('Subject id missing', subjectId);
    }
  }

  create(payload) {
    const { type, subjectId, userId } = payload;
    const createdAt = Date.now();
    const insertData = [type, subjectId, userId, createdAt];
    return this._repo.query('insert into notifications (type, id_subject, id_user, created_at) values (?, ?, ?, ?)', insertData)
    .then(data => {
      const response = {
        id: data.insertId,
        type,
        id_subject: subjectId,
        id_user: userId,
        created_at: createdAt,
      };
      return Promise.resolve(response);
    });
  }

  createProductPublicationRequestNotification(payload) {
    const { productId, currentUserId, users } = payload;
    // Get all users that have permission to publish any product
    const type = NOTIFICATION.TYPE.PUBLICATION_REQUEST_PRODUCT;
    const subjectId = productId;
    this.checkSubjectIdExists(subjectId);
    const createdAt = Date.now();
    const usersWithPermissions = users.filter(user => user.permissions.includes(PERMISSIONS.VALIDATE_ASSIGNMENT.id));
    const requestCreationPromises = usersWithPermissions.map(row => {
      const userId = row.id;
      const insertData = [type, subjectId, userId, createdAt];
      return this._repo.query('insert into notifications (type, id_subject, id_user, created_at) values (?, ?, ?, ?)', insertData);
    });
    return Promise.all(requestCreationPromises)
    .then(mysqlResponsesArray => {
      const mysqlResponses = [].concat.apply([], mysqlResponsesArray).filter(response => !!response);
      if (!mysqlResponses.length > 0) { return Promise.resolve([]); }
      const insertIds = mysqlResponses.map(response => response.insertId);
      return this._repo.query('select * from notifications where id_user = ? and id in(?)', [currentUserId, insertIds]);
    });
  }

  createBundlePublicationRequestNotification(payload) {
    const { bundleId, currentUserId, users } = payload;
    // Get all users that have permission to publish any bundle
    const type = NOTIFICATION.TYPE.PUBLICATION_REQUEST_BUNDLE;
    const subjectId = bundleId;
    this.checkSubjectIdExists(subjectId);
    const createdAt = Date.now();
    const usersWithPermissions = users.filter(user => user.permissions.includes(PERMISSIONS.PUBLISH_BUNDLE.id) || user.permissions.includes(PERMISSIONS.VALIDATE_PUBLICATION_BUNDLE.id));
    const requestCreationPromises = usersWithPermissions.map(row => {
      const userId = row.id;
      const insertData = [type, subjectId, userId, createdAt];
      return this._repo.query('insert into notifications (type, id_subject, id_user, created_at) values (?, ?, ?, ?)', insertData);
    });
    return Promise.all(requestCreationPromises)
    .then(mysqlResponsesArray => {
      const mysqlResponses = [].concat.apply([], mysqlResponsesArray).filter(response => !!response);
      if (!mysqlResponses.length > 0) { return Promise.resolve([]); }
      const insertIds = mysqlResponses.map(response => response.insertId);
      return this._repo.query('select * from notifications where id_user = ? and id in(?)', [currentUserId, insertIds]);
    });
  }

  createAssignmentPublicationRequestNotification(payload) {
    const { assignmentId, currentUserId, users } = payload;
    // Get all users that have permission to publish any assignment
    const type = NOTIFICATION.TYPE.PUBLICATION_REQUEST_ASSIGNMENT;
    const subjectId = assignmentId;
    this.checkSubjectIdExists(subjectId);
    const createdAt = Date.now();
    const usersWithPermissions = users.filter(user => user.permissions.includes(PERMISSIONS.VALIDATE_ASSIGNMENT.id));
    const requestCreationPromises = usersWithPermissions.map(row => {
      const userId = row.id;
      const insertData = [type, subjectId, userId, createdAt];
      return this._repo.query('insert into notifications (type, id_subject, id_user, created_at) values (?, ?, ?, ?)', insertData);
    });
    return Promise.all(requestCreationPromises)
    .then(mysqlResponsesArray => {
      const mysqlResponses = [].concat.apply([], mysqlResponsesArray).filter(response => !!response);
      if (!mysqlResponses.length > 0) { return Promise.resolve([]); }
      const insertIds = mysqlResponses.map(response => response.insertId);
      return this._repo.query('select * from notifications where id_user = ? and id in(?)', [currentUserId, insertIds]);
    });
  }

  createAssignmentOrderActionNotifications(payload) {
    const { assignmentOrders, currentUserId } = payload;
    const type = NOTIFICATION.TYPE.TIMELINE_ACTION_ASSIGNMENT_ORDER;
    const assignmentOrdersWithActionableUsers = assignmentOrders.filter(order => order.usersWithAccessToCurrentStep.length > 0);
    const createdAt = Date.now();
    const notificationQueries = assignmentOrdersWithActionableUsers.map(order => {
      const subjectReference = order.stepName;
      const orderQueries = order.usersWithAccessToCurrentStep.map(userId => {
        const subjectId = order.id;
        return this._repo.query('select * from notifications  where type = ? and id_subject = ? and id_user = ? and subject_reference = ?', [type, subjectId, userId, subjectReference])
        .then(rows => {
          if (rows.length > 0) { return Promise.resolve(); }
          return this._repo.query('insert into notifications (type, id_subject, id_user, created_at, subject_reference) values (?, ?, ?, ?, ?)', [type, subjectId, userId, createdAt, subjectReference]);
        });
      });
      return Promise.all(orderQueries);
    });
    return Promise.all(notificationQueries)
    .then(mysqlResponsesArray => {
      const mysqlResponses = [].concat.apply([], mysqlResponsesArray).filter(response => !!response);
      if (!mysqlResponses.length > 0) { return Promise.resolve([]); }
      const insertIds = mysqlResponses.map(response => response.insertId);
      return this._repo.query('select * from notifications where id_user = ? and id in(?)', [currentUserId, insertIds]);
    });
  }

  click(id) {
    const timestampNow = Date.now();
    return this._repo.query('update notifications set clicked_at = ? where id = ?', [timestampNow, id])
    .then(() => this._repo.query(`select * from notifications where id = ? ${this.defaultOrder}`, [id]))
    .then(rows => Promise.resolve(rows[0]));
  }

  view(id) {
    const timestampNow = Date.now();
    return this._repo.query('update notifications set viewed_at = ? where id = ?', [timestampNow, id])
    .then(() => this._repo.query(`select * from notifications where id = ? ${this.defaultOrder}`, [id]))
    .then(rows => Promise.resolve(rows[0]));
  }

  viewAllUserNotifications(userId) {
    const timestampNow = Date.now();
    return this._repo.query('update notifications set viewed_at = ? where id_user = ? and viewed_at is null', [timestampNow, userId])
    .then(() => this._repo.query(`select * from notifications where id_user = ? ${this.defaultOrder}`, [userId]));
  }

  clickAllUserNotifications(userId) {
    const timestampNow = Date.now();
    return this._repo.query('update notifications set clicked_at = ? where id_user = ? and clicked_at is null', [timestampNow, userId])
    .then(() => this._repo.query(`select * from notifications where id_user = ? ${this.defaultOrder}`, [userId]));
  }

}
