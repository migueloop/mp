import { clean } from 'helpers/utils';
import Repository from './drivers/mysql';
import { _ } from 'underscore';
import config from 'config';
import * as models from './models/index';
import Promise from 'bluebird';
import { join } from 'path';
import fs from 'fs';
import mv from 'mv';
import * as utils from 'helpers/utils';
import { CORNER } from 'repositories/queries/corner';

export default class CornerRepository {

  constructor(tenant) {
    this.tenant = tenant;
    this._repo = new Repository(tenant, 'corner');
  }

  _parse(corners) {
    const isArray = Array.isArray(corners);
    return new Promise((resolve, reject) => {
      if (isArray && corners.length === 0) { return resolve(corners); }
      (isArray ? corners : [corners]).forEach(corner => {
        if (corner.logo) {
          corner.logoUrl = `/${[config.get(this.tenant).upload.path, 'corners', corner.logo].join('/')}`;
        } else {
          corner.logoUrl = '/public/images/placeholders/product.png';
        }
      });
      resolve(corners);
    });
  }

  _getWhere(where = '', params) {
    const self = this;
    if (where && where.length > 0) {
      where = ` where ${where}`;
    }
    return new Promise((resolve, reject) => {
      return this._repo.query(`select * from (${CORNER.ALL}) as products ${where}`, params)
      .then(corners => {
        if (corners.length === 0) {
          return resolve([]);
        }
        corners = corners.map(corner => {
          const { products, bundles, keywords, ...other } = corner;
          return {
            ...other,
            products: JSON.parse(products),
            keywords: JSON.parse(keywords),
            bundles: JSON.parse(bundles),
          };
        });
        resolve(corners);
      })
      .catch(reject);
    });
  }

  get(id) {
    const self = this;
    return new Promise((resolve, reject) => {
      self._getWhere('id = ? limit 1', [id])
      .then(corners => {
        const corner = self._parse(corners[0]);
        console.log(`Corner with id ${id}`, corner);
        return corner;
      })
      .then(resolve)
      .catch(reject);
    });
  }
  isOwnedBy(id, userId) {
    return this._getWhere('id = ? and created_by = ?', [id, userId])
    .then(products => products.length > 0 ? Promise.resolve(true) : Promise.reject(new Error('Invalid user for corner')));
  }

  getKeywords(cornerId) {
    return this._repo.query('select keyword.* from keyword inner join corner_keyword on corner_keyword.id_keyword = keyword.id where corner_keyword.id_corner = ? ', [cornerId]);
  }

  getProducts(cornerId) {
    return this._repo.query('select product.id,product.name, (select name from resource where resource.id = product.logo) logo, product_corner.highlight_product from product inner join product_corner on product_corner.id_product = product.id where product_corner.id_corner = ? ', [cornerId]);
  }

  _getOrCreateKeyword(keyword) {
    const self = this;
    return new Promise((resolve, reject) => {
      return self._repo.query('insert into keyword (name) value (?)', [keyword], ['ER_DUP_ENTRY'])
      .then(result => {
        const keywordObj = { id: result.insertId, name: keyword };
        resolve(keywordObj);
      })
      .catch(err => {
        if (err.code !== 'ER_DUP_ENTRY') { return reject(); }
        self._repo.query('select * from keyword where name = ?', [keyword])
        .then(keywordObjs => {
          if (keywordObjs.length === 1) { return resolve(keywordObjs[0]); }
          return reject();
        });
      });
    });
  }

  getAll() {
    const self = this;
    return new Promise((resolve, reject) => {
      self._getWhere()
      .then(corners => self._parse(corners))
      .then(resolve)
      .catch(reject);
    });
  }

  getCornersAndSolutions() {
    const self = this;
    return new Promise((resolve, reject) => {
      self._repo.query('SELECT *,(select count(*) from product_corner inner join product on product.id = product_corner.id_product where id_corner=corner.id and product.state in (\'published\')) as solutions FROM corner')
      .then(corners => self._parse(corners))
      .then(resolve);
    });
  }

  create(corner) {
    const self = this;
    const cornerModel = new models.Corner();
    return new Promise((resolve, reject) => {
      let validCorner = null;
      const keywords = corner.keywords;
      delete corner.keywords;
      cornerModel.validate(corner)
      .then(validatedCorner => {
        validCorner = validatedCorner;
        return self._repo.insert(validatedCorner);
      })
      .then(res => {
        validCorner.id = res.insertId;
        validCorner.alias = `${clean(validCorner.name)}-${validCorner.id}`;
        return self._repo.update({
          values: { alias: validCorner.alias, last_update: new Date().getTime() },
          filters: { id: validCorner.id },
        })
        .then(() => {
          const returnCorner = () => {
            this.get(validCorner.id)
              .then(resolve)
              .catch(reject);
          };
          if (keywords && keywords.length > 0) {
            const finishKeywords = _.after(keywords.length, returnCorner);
            keywords.forEach((keyword, i) => {
              self._getOrCreateKeyword(keyword).then(dbKeyword => {
                return self._repo.query('insert into corner_keyword (id_corner,id_keyword) values (?,?)', [validCorner.id, dbKeyword.id]);
              })
              .then(() => finishKeywords())
              .catch(err => reject(err));
            });
          } else {
            returnCorner();
          }
        })
        .catch(reject);
      })
      .catch(reject);
    });
  }

  update(obj = { values: {}, filters: {} }) {
    const corner = Object.assign({}, obj);
    if (!corner.filters.id) { return Promise.reject(new Error('Corner id is required')); }
    const keywords = corner.values.keywords;
    delete corner.values.keywords;
    if (Object.keys(corner.values).indexOf('name') !== -1) {
      corner.values.alias = `${clean(corner.values.name)}-${corner.filters.id}`;
    }
    if ((!keywords || keywords.length === 0)) {
      if (Object.keys(corner.values)) {
        corner.values.last_update = new Date().getTime();
        return this._repo.update(corner);
      }
      return Promise.resolve();
    }

    return this.setKeywords(corner.filters.id, keywords)
    .then(() => {
      if (Object.keys(corner.values).length === 0) { return Promise.resolve(); }
      corner.values.last_update = new Date().getTime();
      return this._repo.update(corner);
    });
  }

  setKeywords(id, keywords) {
    return Promise.map(keywords, keyword => {
      return this._repo.query('delete from corner_keyword where id_corner = ?', [id])
      .then(() => this._getOrCreateKeyword(keyword.name))
      .then(k => this._repo.query('insert into corner_keyword SET ?', { id_corner: id, id_keyword: k.id }));
    });
  }

  getAllKeywords() {
    return this._repo.query('select id,name from keyword');
  }

  delete(params) {
    return this._repo.query('delete from product_corner where id_corner = ?', [params.id])
    .then(() => this._repo.query('delete from bundle_corner where id_corner = ?', [params.id]))
    .then(() => this._repo.query('delete from corner_keyword where id_corner = ?', [params.id]))
    .then(() => this._repo.query('delete from corner where id = ?', [params.id]))
    .catch(e => console.log('err', e));
  }

  updateLogo(id, logo) {
    const self = this;
    return new Promise((resolve, reject) => {
      let extension = logo.originalname.split('.');
      extension = extension[extension.length - 1];
      const name = `logo-${id}.${extension}`;
      const newPath = join(global.DIR.PUBLIC, config.get(this.tenant).upload.path, this.tenant, 'corners', name);
      self.get(id)
      .then(corner => {
        const oldLogo = join(global.DIR.PUBLIC, config.get(this.tenant).upload.path, this.tenant, 'corners', corner.logo);
        if (corner.logo && utils.fileExists(oldLogo)) { fs.unlinkSync(oldLogo); }
        mv(logo.path, newPath, {mkdirp: true}, function(err) {
          if (err) {
            console.log("[FATAL] Error uploading LOGO for CORNER: ", JSON.stringify(err, null, 3));
            throw err;
          }
          console.log('[DEBUG] Logo for corner moved successfully');
        });
        this.update({ values: { logo: name }, filters: { id } })
        .then(() => {
          resolve({
            id,
            logo: name,
            logoUrl: `/${[config.get(this.tenant).upload.path, 'corners', name].join('/')}?v${Math.random()}`,
          });
        }).catch(reject);
      }).catch(reject);
    });
  }

  updateBestProduct(cornerId, productId, position) {
    return new Promise((resolve, reject) => {
      Promise.all([
        this._repo.query('update product_corner set highlight_product = 0 where highlight_product = ? and id_corner = ?', [position, cornerId]),
        this._repo.query('update  product_corner set highlight_product = ? where id_product = ? and id_corner = ?', [position, productId, cornerId]),
      ])
      .then(() => resolve({ id: cornerId, highlight_product: position, id_product: productId }))
      .catch(reject);
    });
  }

}
