const getActions = moduleName => {
  const template = `import CONSTANTS from './${moduleName}Constants';
// import Repository from 'v02/api/${moduleName}';
// Remove this or use a real repository
function Repository() {}
Repository.fetch = function () {};
Repository.fetchOne = function () {};

export default class ${moduleName} {
  constructor(tenant, token) {
    this.repository = new Repository(tenant, token);
  }
  fetch() {
    return {
      type: CONSTANTS.FETCH,
      payload: this.repository.fetch(),
    };
  }
  fetchOne(id, params = {}) {
    return {
      type: CONSTANTS.FETCH_CURRENT,
      payload: this.repository.fetchOne(id, params),
    };
  }
}
`;
  return template;
};

module.exports = getActions;
