import { PERMISSIONS } from 'helpers/constants';

const permissionsToArray = (permissions) => {
  let permissionArray = [];
  for (const key in permissions) {
    if ({}.hasOwnProperty.call(permissions, key)) {
      permissionArray = permissionArray.concat(permissions[key]);
    }
  }
  return permissionArray;
};
const permissionsArray = permissionsToArray(PERMISSIONS);

const permissionsWithExclusions = permissionsArray
.filter(p => p.excludes.length > 0)
.map(p => {
  return {
    name: p.name,
    excludes: p.excludes.map(ep => `"${ep.name}"`).join(', '),
  };
});

permissionsWithExclusions.forEach(p => {
  console.log(`== ${p.name.toUpperCase()} ==`);
  console.log(`Excludes: ${p.excludes}`);
  console.log('');
});
