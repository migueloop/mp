import fs from 'fs';
import path from 'path';
import Promise from 'bluebird';
import deepequal from 'deepequal';
import mkdirp from 'mkdirp';
Promise.promisifyAll(fs);

export default function (tenant, conf){
  const myFile = path.join(global.ROOT, 'server/config/files/default/config.init.json');
  return new Promise((resolve,reject) => {
    console.log('ACA')
    fs.readFileAsync(myFile, 'utf8').then((txt) => {
      console.log('ACA 2')
      const tenantFolder = path.join(global.ROOT, `server/config/files/${tenant}`);
      const config = Object.assign(JSON.parse(txt), conf);
      mkdirp.sync(tenantFolder);
      return fs.writeFileSync(path.join(tenantFolder, 'config.json'), JSON.stringify(config, null, 2));
    }).then(resolve).catch(reject);
  })
};

export const AddTenant = (tenant, hosts = []) => {
  const myFile = path.join(global.ROOT, 'server/config/files/tenants.json');
  return new Promise((resolve,reject) => {
    fs.readFileAsync(myFile, 'utf8').then((txt) => {
      const config = JSON.parse(txt);
      config[tenant] = hosts;
      return fs.writeFileSync(myFile, JSON.stringify(config, null, 2));
    }).then(resolve).catch(reject);
  })
}
