import { join } from 'path';
import fs from 'fs';
import { CronJob } from 'cron';
import extend from 'extend';

const tenantsFile = join(__dirname, '/files', 'tenants.json');
const localTenantsFile = join(__dirname, '/files', 'tenants.local.json');

const defaultConfigFile = join(__dirname, '/files', 'default', 'config.json');
const localdefaultConfigFile = join(__dirname, '/files', 'default', 'config.local.json');

const fileExists = fs.existsSync || (filePath => {
  try {
    fs.statSync(filePath);
  } catch (e) {
    if (e.code === 'ENOENT') { return false; }
  }
  return true;
});

// Read a config file and convert to object, handles case where there is no file
const getConfigFromFile = path => {
  if (fileExists(path)) {
    return JSON.parse(fs.readFileSync(path, 'utf8'));
  }
  return {};
};

// gets the default file config
const getDefaultConfig = () => extend(true, {}, getConfigFromFile(defaultConfigFile), getConfigFromFile(localdefaultConfigFile));

// Gets the tenants object
const getTenants = () => extend(true, {}, getConfigFromFile(tenantsFile), getConfigFromFile(localTenantsFile));


let defaultConfig = getDefaultConfig();
// Gets one tenant config from the necessary files
const getTenantConfig = tenant => {
  const localTenantConfigFile = join(__dirname, 'files', tenant, 'config.local.json');
  const tenantConfigFile = join(__dirname, 'files', tenant, 'config.json');
  return extend(true, {}, getDefaultConfig(), getConfigFromFile(tenantConfigFile), getConfigFromFile(localTenantConfigFile));
};

// Builds up an object with all the tenants and their keys
const getTenantConfigs = tenantNames => {
  const configs = {};
  tenantNames.forEach(name => {
    configs[name] = getTenantConfig(name);
  });
  return configs;
};

// Populate the config data at the start
let tenants = getTenants();
let tenantConfigs = getTenantConfigs(Object.keys(tenants));

export function watch() {
  const job = new CronJob('0 */5 * * * *',
  () => {
    try {
      // Populate the config data every 5 minutes. We don't do this on the fly as the op is synchronous.
      tenants = getTenants();
      tenantConfigs = getTenantConfigs(Object.keys(tenants));
      defaultConfig = getDefaultConfig();
    } catch (e) {
      console.log('config error', e);
    }
  },
  () => { /* This function is executed when the job stops */ },
    true /* Start the job right now */
  );
}


export default {
  tenants: Object.keys(tenants), // .concat(['default']),
  getTenantFromUrl: host => {
    for (const tenant in tenants) {
      if (tenants[tenant].indexOf(host) > -1) {
        return tenant;
      }
    }
    return null;
  },

  get(tenant) {
    // console.log('tenant', tenant);
    // console.log('password', tenantConfigs[tenant] && tenantConfigs[tenant].database && tenantConfigs[tenant].database.password);
    // console.log('');
    return tenantConfigs[tenant] || defaultConfig;
  },

  getDatabase(tenant) {
    return this.get(tenant).database;
  },

  getHost(tenant) {
    return this.get(tenant).mainUrl;
  },
};
