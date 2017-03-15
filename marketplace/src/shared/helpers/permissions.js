/**
 * Flattens out the multi-dimensional permission tree
 * @param {array} permissions - The permissions list to flatten.
 */
export function flattenPermissions(permissions) {
  return permissions.reduce((p, n) => p.concat(p.indexOf(n) === -1 ? n : [], flattenPermissions(n.includes ? n.includes.filter(i => p.indexOf(i) === -1) : [])), []);
}

/**
 * Flattens out the two-dimensional excluded permissions tree
 * @param {array} permissions - The permissions list whose excludes to flatten.
 */
export function flattenExcludedPermissions(permissions) {
  return permissions.reduce((prev, next) => prev.concat(next.excludes || []), []);
}

/**
 * Checks if have circular dependencies
 * The flattenPermissions will throw if there is a circular dependency so we use that to check
 * @param {array} permissions - The permission list to check for circular dependency
 */
export function hasCircularDependencies(permissions) {
  try {
    flattenPermissions(permissions);
  } catch (e) {
    if (e.name === 'RangeError') {
      return true;
    }
    throw e;
  }
  return false;
}

/**
 * Validates a new permission against a list of permissions
 * @param {array} permissions - The permission list to validate against
 * @param {object} permission - The permission to validate
 */
export function validatePermission(permissions, permission) {
  const currentExcludedPermissions = flattenExcludedPermissions(permissions);
  const permissionsToBeAdded = flattenPermissions([permission]);
  const newExcludedPermissions = flattenExcludedPermissions(permissionsToBeAdded);
  const validation = { valid: true, errors: [] };
  permissionsToBeAdded.forEach(p => {
    const errorObject = { permission: p, conflictsWith: [] };
    p.excludes.forEach(e => {
      if (permissions.map(perm => perm.id).indexOf(e.id) !== -1) {
        validation.valid = false;
        errorObject.conflictsWith.push(e);
      }
    });
    if (errorObject.conflictsWith.length > 0) {
      validation.errors.push(errorObject);
    }
  });
  return validation;
}

export function getExcludedPermissions(permissions, permission) {
  const currentExcludedPermissions = flattenExcludedPermissions(permissions);
  const permissionsToBeAdded = flattenPermissions([permission]);
  const newExcludedPermissions = flattenExcludedPermissions(permissionsToBeAdded);
  return permissionsToBeAdded.reduce((p, n) => currentExcludedPermissions.indexOf(n) !== -1 ? p.concat(n) : p, []);
}

export function validatePermissionList(permissions) {
  const currentExcludedPermissions = flattenExcludedPermissions(permissions);
  const validation = { valid: true, errors: [] };
  permissions.forEach(p => {
    if (currentExcludedPermissions.indexOf(p) !== -1) {
      validation.valid = false;
      validation.errors.push(p.id);
    }
  });
  return validation;
}
