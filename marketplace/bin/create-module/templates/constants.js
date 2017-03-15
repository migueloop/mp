const getConstants = moduleName => {
  const template = `export default {
  FETCH: 'FETCH ALL ${moduleName} WITH BASIC INFORMATION V02',
  FETCH_CURRENT: 'FETCH CURRENT ${moduleName} V02',
};
`;
  return template;
};

module.exports = getConstants;
