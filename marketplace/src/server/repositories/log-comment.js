import Repository from './drivers/mysql';

export default class LogCommentRepository {

  constructor(tenant) {
    this._repo = new Repository(tenant, 'log_comments');
    this.tenant = tenant;
  }

  getAll() {
    return this._repo.query('select * from log_comments');
  }

  create(payload) {
    const { body, userId, workflowId } = payload;
    const createdAt = Date.now();
    const insertData = [body, userId, workflowId, createdAt];
    return this._repo.query('insert into log_comments (body, id_user, id_workflow, created_at) values (?, ?, ?, ?)', insertData)
    .then(data => {
      const response = {
        id: data.insertId,
        body,
        id_user: userId,
        id_workflow: workflowId,
        created_at: createdAt,
      }
      return Promise.resolve(response);
    });
  }

}
