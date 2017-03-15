
import Repository from './drivers/mysql';
import { _ } from 'underscore';

export default class SettingsRepository {
  constructor(tenant) {
    this.tenant = tenant;
    this._repo = new Repository(tenant, 'settings');
  }

  getSEO() {
    return this._get('seo');
  }

  setSEO(setting) {
    const settingKey = Object.keys(setting)[0];
    const settingValue = setting[settingKey];

    return new Promise((resolve, reject) => {
      const obj = { key: `seo:${settingKey}`, value: settingValue };
      this._repo.query('insert into general_setting set ? ON DUPLICATE KEY UPDATE ?', [obj, obj])
      .then(() => this.getSEO().then(resolve))
      .catch(reject);
    });
  }

  _get(setting) {
    const self = this;
    return new Promise((resolve, reject) => {
      self._repo.query('SELECT `key`,`value` FROM general_setting where `key` like ?', [`${setting}:%`])
      .then(settings => {
        const settingReturn = {};
        settings.forEach(settingObj => {
          settingReturn[settingObj.key.replace(`${setting}:`, '')] = settingObj.value;
        });
        resolve(settingReturn);
      })
      .catch(reject);
    });
  }

  addOrModify(setting) {
    const self = this;
    return new Promise((resolve, reject) => {
      self._repo.query('insert into general_setting set ?', setting, ['ER_DUP_ENTRY'])
      .then(resolve)
      .catch(err => {
        if (err.code !== 'ER_DUP_ENTRY') { return reject(err); }
        self._repo.query('update general_setting set `value` = ? where `key` = ?', [setting.value, setting.key])
        .then(resolve)
        .catch(reject);
      });
    });
  }

  get Languages() {
    return this._repo.query('select id,name,abbreviation from language');
  }
}
