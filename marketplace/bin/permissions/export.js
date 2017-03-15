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
console.log('Exporting permissions...');
const formattedPermissions = permissionsArray
.reduce((p, n) => {
  if (!p[n.category]) {
    p[n.category] = [];
  }
  p[n.category].push({ name: n.name, description: n.descriptions });
  return p;
}, {});

for (const key in formattedPermissions) {
  if ({}.hasOwnProperty.call(formattedPermissions, key)) {
    console.log(`== ${key.toUpperCase()} ==`);
    formattedPermissions[key].forEach(p => {
      console.log(p.name);
      console.log(p.description);
      console.log('');
    });
    console.log('==========');
    console.log('');
  }
}
