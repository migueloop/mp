import { clean, fileExists } from 'helpers/utils';
import Repository from './drivers/mysql';
import _ from 'lodash';
import config from 'config';
import fs from 'fs';
import mv from 'mv';
import * as CONSTANTS from 'helpers/constants';
import { join } from 'path';
import * as models from './models/index';
import Promise from 'bluebird';
import { PRODUCT } from 'helpers/constants';
import { guid } from 'helpers/utils';
import { ITEM_QUERIES } from './queries/item';
import * as FEATURES from 'helpers/constants/features';

export default class ProductRepository {
  constructor(tenant) {
    const configuration = config.get(tenant);
    this._repo = new Repository(tenant, 'product');
    this._repoAvailableFeatures = new Repository(tenant, 'product_available_feature');
    this.tenant = tenant;
    this.uploadPath = join(global.DIR.PUBLIC, configuration.upload.path, tenant, 'products');

    this.restriction = {
      material: configuration.restrictions.products.MATERIAL,
      saas: configuration.restrictions.products.SAAS,
      service: configuration.restrictions.products.SERVICE,
    };
  }

  _parse(products) {
    return new Promise((resolve, reject) => {
      if (products.length === 0) {
        return resolve(products);
      }
      const finishParseProduct = _.after(products.length, () => resolve(products));
      products.forEach(product => {
        // product.summary_title = product.baseline;
        // product.company = {
        //   id: product.company_id,
        //   name: product.company_name,
        // };
        // parse editor logo
        // if (product.editor_logo) {
        //   const logoResource = product.resources.find(r => r.id === product.editor_logo);
        //   product.editor_logo_url =
        //     ['', config.get(this.tenant).upload.path, 'products', product.id, logoResource.name].join('/');
        // } else {
        //   product.editor_logo_url = '/public/images/placeholders/product.png';
        // }

        // product.editor = {
        //   title: product.editor_title,
        //   alias: product.editor_alias,
        //   logo: product.editor_logo_url,
        // };
        if (product.logo) {
          product.logoUrl = ['', config.get(this.tenant).upload.path, 'products', product.id, product.resources.find(r => r.id === product.logo).name].join('/');
        } else {
          product.logoUrl = '/public/images/placeholders/product.png';
        }
        const deleteFields = ['logo_url', 'company_id', 'company_name', 'editor_title', 'editor_alias'];
        deleteFields.forEach(field => delete product[field]);
        this._repo.query('select corner.id, corner.name from product_corner inner join corner on corner.id = product_corner.id_corner where product_corner.id_product = ?',
          [product.id])
        .then(productCorners => {
          product.corners = productCorners;
          return this._repo.query('select product_feature.* from product_feature where product_feature.id_product = ? order by product_feature.order',
            [product.id]);
        })
        .then(features => {
          product.features = features;
        })
        .then(finishParseProduct);
      });
    });
  }

// Parse the timeline object and steps so it's in the right format for the front end
  _parseTimeline(timelineObj, tlStepsObj) {
    // complete timeline object
    timelineObj.id = parseInt(timelineObj.id, 10);
    const groupedSteps = tlStepsObj.reduce((p, n) => {
      let match = p.find(s => s.id === n.id_step);
      if (!match) {
        p.push({ id: n.id_step, name: n.step_name, roleIds: [], userIds: [], includesProductOwner: false, manual: false });
      }
      match = p.find(s => s.id === n.id_step);
      if (n.executor_type === 'role') {
        p[p.indexOf(match)].roleIds.push(parseInt(n.id_executor, 10));
      }
      if (n.executor_type === 'user') {
        p[p.indexOf(match)].userIds.push(parseInt(n.id_executor, 10));
      }
      if (n.executor_type === 'product_owner') {
        p[p.indexOf(match)].includesProductOwner = true;
      }
      p[p.indexOf(match)].manual = n.manual === 1;
      return p;
    }, []);
    timelineObj.steps = groupedSteps;
    return timelineObj;
  }

  parseFollowUps(followUps) {
    try {
      const parsedFollowUps = JSON.parse(followUps)
      .filter(followUp => followUp.id_timeline !== 'null')
      .map(followUp => {
        const roleIds = !followUp.role_ids || followUp.role_ids === 'null' ? [] : followUp.role_ids.split(',').map(id => parseInt(id, 10)).filter(num => num > 0);
        const userIds = !followUp.user_ids || followUp.user_ids === 'null' ? [] : followUp.user_ids.split(',').map(id => parseInt(id, 10)).filter(num => num > 0);
        const includeProductOwner = +followUp.include_product_owner;
        return {
          id_follow_up_task: followUp.id_follow_up_task,
          id_timeline: followUp.id_timeline,
          id_step: followUp.id_step,
          include_product_owner: includeProductOwner,
          role_ids: roleIds,
          user_ids: userIds,
        };
      });
      return parsedFollowUps;
    } catch (e) {
      return [];
    }
  }

  _getWhere(where = '', params = []) {
    if (where.length > 0) {
      where = ` where ${where}`;
    }
    // return this._repo.query(ITEM_QUERIES.BUNDLE.GET_ALL + where + ' GROUP BY bundle.id ' + otherClauses, params)
    return new Promise((resolve, reject) => {
      this._repo.query(`${ITEM_QUERIES.PRODUCT.GET_ALL} GROUP BY product.id) as products ${where}`, params)
        .then(products => {
          //console.log("products QUERY!!", products);
          const p = products.map(product => {
            const { corners, resources, editor, company, links, features, keywords, languages, available_features, timeline, tl_steps, follow_ups, ...prod } = product;
            const [cornersObj, resourcesObj, linksObj, featuresObj, keywordsObj, languagesObj, availableFeaturesObj, timelineObj, tlStepsObj] = [corners, resources, links, features, keywords, languages, available_features, timeline, tl_steps]
              .map((elem, index) => {
                try {
                  return JSON.parse(elem);
                } catch (e) {
                  return [];
                }
              });

            if (product.logo) {
              const logo = resourcesObj.find(r => r.id === product.logo).name;
              prod.logoUrl = `/public/uploads/products/${product.id}/${logo}`;
            } else {
              prod.logoUrl = '/public/images/placeholders/product.png';
            }

            // parse editor logo
            const logoResource = resourcesObj.find(r => r.id === product.editor_logo);
            if (product.editor_logo) {
              prod.editor_logo_url = ['', config.get(this.tenant).upload.path, 'products', product.id, logoResource.name].join('/');
              prod.editor_logo = logoResource.id;
            } else {
              prod.editor_logo_url = '/public/images/placeholders/product.png';
              prod.editor_logo = null;
            }
            return {
              ...prod,
              corners: cornersObj,
              resources: resourcesObj,
              links: linksObj,
              ratings: [],
              features: featuresObj,
              keywords: keywordsObj,
              languages: languagesObj,
              availableFeatures: availableFeaturesObj,
              timeline: this._parseTimeline(timelineObj, tlStepsObj),
              followUps: this.parseFollowUps(follow_ups),
            };
          });
          resolve(p);
        })
        .catch(reject);
    });
  }

  get(id) {
    return this._getWhere('id = ?', id).then(products => Promise.resolve(products[0]));
  }

  getProductsAndSuppliersByIds(ids = []) {
    const query = `
    Select p.*, u.email supplier_email from product p
    inner join user u on u.id = p.created_by
    where p.id in(${ids.map(i => parseInt(i, 10)).join(', ')})`;
    return this._repo.query(query);
  }

  isOwnedBy(id, userId) {
    return this._getWhere('id = ? and created_by = ?', [id, userId])
    .then(products => products.length > 0 ? Promise.resolve(true) : Promise.reject(new Error('Invalid user for product')));
  }

  setIdBilling(idBilling, where) {
    return new Promise((resolve, reject) => {
      this._repo.query('select id, name from product where id = ? and billing_token = ?', [where.id, where.billingToken])
      .then(res => {
        if (res.length > 0) {
          return this._repo.query('update product set id_billing = ? where id = ?', [idBilling, where.id]);
        }
        throw new Error('not found');
      })
      .then(res => resolve())
      .catch(reject);
    });
  }

  addFeature(feature) {
    return new Promise((resolve, reject) => {
      this._repo.query('insert into product_feature set ?', feature)
        .then(resolve)
        .catch(err => {
          if (err.code !== 'ER_DUP_ENTRY') { return reject(err); }
          this._repo.query('update product_feature set (name = ?, description = ?) where id_product = ? and order = ?',
          [feature.name, feature.description, feature.id_product, feature.order])
          .then(resolve)
          .catch(reject);
        });
    });
  }

  addKeywordString(productId, keywordName) {
    return this._repo.query('insert into product_keyword (SELECT ? as id_product, ' +
      'keyword.id as id_keyword FROM marketplace_sncf.keyword inner join corner_keyword on ' +
      'corner_keyword.id_keyword = keyword.id where corner_keyword.id_corner in ' +
      '(select id_corner from product_corner where product_corner.id_product = ?)' +
      ' and keyword.name= ? group by keyword.id)',
      [productId, productId, keywordName]);
  }

  // TODO: Check if keyword exist in a corner of this product
  addKeyword(productId, keywordId) {
    return this._repo.query('insert into product_keyword set ?');
  }

  addLanguage(product, lang) {
    return new Promise((resolve, reject) => {
      this._repo.query('insert into product_language set id_product = ?, id_language = ?', [product.id, lang.id])
      .then(resolve)
      .catch(err => {
        if (err.code !== 'ER_DUP_ENTRY') { return reject(err); }
        resolve();
      });
    });
  }

  addOrUpdateLink(product, link) {
    return new Promise((resolve, reject) => {
      switch (product.type) {
        case CONSTANTS.PRODUCT.TYPE.MOBILE:
          this._repo.query('SELECT id from product_link where id_product=? and name = ?', [product.id, link.name])
          .then(existingLinks => {
            if (existingLinks.length === 1) {
              this._repo.query('update product_link set url = ? where id = ? and id_product = ?', [link.url, existingLinks[0].id, product.id])
              .then(() => {
                existingLinks[0].url = link.url;
                return resolve(existingLinks[0]);
              });
            } else {
              this._repo.query('INSERT INTO product_link SET ? ', link)
              .then(result => {
                link.id = result.insertId;
                return resolve(link);
              });
            }
          }).catch(reject);
          break;
        case CONSTANTS.PRODUCT.TYPE.MATERIAL:
          if (link.id) {
            this._repo.query('update product_link set url = ? where id = ? and id_product = ?', [link.url, link.id, product.id])
            .then(() => resolve(link));
          } else {
            this._repo.query('SELECT id from product_link where id_product=?', [product.id])
            .then(links => {
              if (links.length > this.restriction.material) {
                return reject(new Error(`Product of type ${CONSTANTS.PRODUCT.TYPE.MATERIAL} cant have more than ${this.restriction.material}`));
              }
              this._repo.query('INSERT INTO product_link SET ? ', link)
              .then(result => {
                link.id = result.insertId;
                return resolve(link);
              });
            });
          }
          break;
        case CONSTANTS.PRODUCT.TYPE.SAAS:
          if (link.id) {
            this._repo.query('update product_link set url = ? where id = ? and id_product = ?',
              [link.url, link.id, product.id]).then(() => {
                return resolve(link);
              });
          } else {
            this._repo.query('SELECT id from product_link where id_product=?', [product.id])
            .then(links => {
              if (links.length > this.restriction.saas) {
                return reject(new Error(`Product of type ${CONSTANTS.PRODUCT.TYPE.SAAS} cant have more than ${this.restriction.saas}`));
              }
              this._repo.query('INSERT INTO product_link SET ? ', link)
              .then(result => {
                link.id = result.insertId;
                return resolve(link);
              });
            });
          }
          break;
        case CONSTANTS.PRODUCT.TYPE.SERVICE:
          if (link.id) {
            this._repo.query('update product_link set url = ? where id = ? and id_product = ?',
              [link.url, link.id, product.id]).then(() => {
                return resolve(link);
              });
          } else {
            this._repo.query('SELECT id from product_link where id_product=?', [product.id])
            .then(links => {
              if (links.length > this.restriction.service) {
                return reject(new Error(`Product of type ${CONSTANTS.PRODUCT.TYPE.SERVICE} cant have more than ${this.restriction.service}`));
              }
              this._repo.query('INSERT INTO product_link SET ? ', link)
              .then(result => {
                link.id = result.insertId;
                return resolve(link);
              });
            });
          }
          break;
        default:
          return reject(new Error(`Product type inconsistent ${product.name}`));
      }
    });
  }

  addRating(rating) {
    return new Promise((resolve, reject) => {
      this._repo.query('insert into rating set ?', rating)
        .then(resolve)
        .catch(err => {
          if (err.code !== 'ER_DUP_ENTRY') { return reject(err); }
          const userId = rating.id_user;
          const productId = rating.id_product;
          delete rating.id_user;
          delete rating.id_product;
          this._repo.query('update rating set ? where id_product = ? and id_user = ?', [rating, productId, userId])
          .then(resolve)
          .catch(reject);
        });
    });
  }

  // TODO: This function s only for the migration
  addResourceMigration(resource) {
    const tmpPath = join(resource.path, resource.hash);
    const tmpThumb = join(resource.path, `thumb_${resource.hash}`);
    delete resource.path;
    delete resource.hash;
    const globalResource = resource;
    return new Promise((resolve, reject) => {
      this._repo.query('insert into resource set ?', resource)
      .then(response => {
        resource.id = response.insertId;
        const FilenameArray = tmpPath.split('.');
        resource.name = `${resource.id}.${FilenameArray[FilenameArray.length - 1]}`;
        return this._repo.query('update resource set name = ? where id = ?', [resource.name, resource.id]);
      })
      .then(() => {
        try {
          fs.renameSync(tmpPath, join(this.uploadPath, (`${globalResource.id_product}`), globalResource.name));
          if (fileExists(tmpThumb)) {
            fs.renameSync(tmpThumb, join(this.uploadPath, (`${globalResource.id_product}`), `thumb_${globalResource.name}`));
          }
        } catch (e) {
          reject(e);
        }
        resolve(globalResource);
      })
      .catch(reject);
    });
  }

  /** *
   *
   * @param relation {id_product,id_corner}
   * @returns {*}
   */
  addToCorner(relation) {
    return this._repo.query('insert into product_corner set ?', relation);
  }

  /** *
   *
   * @param product product to be created
   * @param user loged user
   * @returns Promise
   */
  create(product, user) {
    const productModel = new models.Product();
    return new Promise((resolve, reject) => {
      let validProduct = null;
      productModel.validate(product)
      .then(validatedProduct => {
        validProduct = validatedProduct;
        validProduct.billing_token = guid();
        validProduct.alias = validProduct.alias || _.uniqueId(`${validProduct.name}-`) + new Date().getTime();
        return this._repo.insert(validProduct);
      })
      .then(res => {
        validProduct.id = res.insertId;
        validProduct.alias = clean(`${validProduct.name}-${validProduct.id}`);
        if (!fileExists(join(this.uploadPath, (`${validProduct.id}`)))) {
          fs.mkdirSync(join(this.uploadPath, (`${validProduct.id}`)));
        }
        return this._repo.update({
          values: {
            alias: validProduct.alias,
          },
          filters: {
            id: validProduct.id,
          },
        });
        return validProduct;
      })
      .catch((error) => console.log("[Error] Errror occured creating product upload: ", error))
      .then(() => {
          return this._getWhere('id=?', [validProduct.id]);
        }
      )
      .then(products => {
        return this._parse(products);
      })
      .then(products => resolve(products[0]))
      .catch(reject);
    });
  }

  createLanguage(lang) {
    return new Promise((resolve, reject) => {
      this._repo.query('insert into language set ?', [lang], ['ER_DUP_ENTRY'])
      .then(result => {
        lang.id = result.insertId;
        resolve(lang);
      })
      .catch(err => {
        if (err.code !== 'ER_DUP_ENTRY') { return reject(err); }
        this._repo.query('select * from `language` where abbreviation = ?', [lang.abbreviation])
        .then(langs => langs.length === 1 ? resolve(langs[0]) : reject());
      });
    });
  }

  delete(id) {
    return this._repo.update({
      filters: { id },
      values: {
        state: PRODUCT.STATE.DELETED,
      },
    })
    .then(() => this.get(id));
  }

  demandPublication(id) {
    console.log('repo::demandPublication::id', id);
    return this._repo.update({
      filters: { id },
      values: { state: PRODUCT.STATE.PENDING },
    });
  }

  publish(id) {
    console.log(`Repository publishing product ${id}...`);
    return this._repo.update({
      filters: { id },
      values: { state: PRODUCT.STATE.PUBLISHED },
    });
  }

  getAll() {
    return this._getWhere();
  }

  getByUser(id) {
    return new Promise((resolve, reject) => {
      this._getWhere('created_by = ?', [id])
      .then(products => this._parse(products))
      .then(resolve);
    });
  }

  getByEditor(userId, options = { onlyPublished: false }) {
    let where = '';
    const params = [userId, userId];
    if (options.onlyPublished) {
      where += 'and product.state = ?';
      params.push(PRODUCT.STATE.PUBLISHED);
    }
    const query = 'select id,name,(select highlight_product_order from editor_highlight_product where id_product=product.id and id_user = ?) as highlight_product from product where product.created_by = ? ';
    return this._repo.query(query + where, params);
  }

  getKeywords(productId) {
    return this._repo.query('select keyword.* from keyword inner join product_keyword on product_keyword.id_keyword = keyword.id where product_keyword.id_product = ? ',
      [productId]);
  }

  getProductPublishedNotificationData(productId) {
    return this._repo.query('select p.name, p.alias, u.email from products p inner join user u on p.created_by = u.id where p.id = ? ',
      [productId]);
  }

  getProductPublishedNotificationRequestData(productId) {
    return this._repo.query('select p.name, u.email, u.name, u.lastname, u.sex from products p inner join user u on p.created_by = u.id where p.id = ? ',
      [productId]);
  }

  getLanguages(productId) {
    return this._repo.query('select language.id,abbreviation from language inner join product_language on language.id = product_language.id_language ' +
      'inner join product on product.id = product_language.id_product ' +
      'where product.id = ? ', [productId]);
  }

  getLatest() {
    return new Promise((resolve, reject) => {
      this._getWhere('state = ? order by publication_date desc LIMIT 3', [CONSTANTS.PRODUCT.STATE.PUBLISHED])
      .then(products => this._parse(products))
      .then(resolve)
      .catch(reject);
    });
  }

  getLinks(productId) {
    return this._repo.query('select product_link.* from product_link inner join product on product.id = product_link.id_product where product.id = ? ', [productId]);
  }

  getPendings() {
    return new Promise((resolve, reject) => {
      this._getWhere('state=?', ['pending'])
      .then(products => this._parse(products))
      .then(resolve);
    });
  }

  getPublished() {
    return this._getWhere('state = ?', [CONSTANTS.PRODUCT.STATE.PUBLISHED]);
  }

  getRatings(productId) {
    return this._repoAvailableFeatures.query('select rating.* from rating inner join product on product.id = rating.id_product where product.id = ? ',
      [productId]);
  }

  getResources(productId) {
    return this._repo.query('select resource.* from resource inner join product on product.id = resource.id_product where product.id = ? ',
      [productId]);
  }

  like(productId, userId, like) {
    const self = this;
    return new Promise((resolve, reject) => {
      self._repo.query('insert into rating set ? ', {
        id_product: productId,
        id_user: userId,
        like,
      }, ['ER_DUP_ENTRY'])
        .then(resolve)
        .catch(err => {
          if (err.code !== 'ER_DUP_ENTRY') { return reject(err); }
          self._repo.query('update rating set `like` = ? where id_product = ? and id_user = ?', [like, productId, userId])
          .then(resolve)
          .catch(reject);
        });
    });
  }

  setEditorBestProduct(relation) {
    const self = this;
    return new Promise((resolve, reject) => {
      self._repo.query('insert into editor_highlight_product set ?', relation)
      .then(resolve)
      .catch(err => {
        if (err.code !== 'ER_DUP_ENTRY') { return reject(err); }
        self._repo.query('update editor_highlight_product set id_product = ? where id_user = ? and highlight_product_order = ?', [relation.id_product, relation.id_user, relation.highlight_product_order])
        .then(resolve)
        .catch(reject);
      });
    });
  }

  setKeywords(id, keywords) {
    return this._repo.query('delete from product_keyword where id_product = ?', [id])
    .then(() => {
      return Promise.map(keywords, keyword => {
        return this._repo.query('insert into product_keyword SET ?', {
          id_product: id,
          id_keyword: keyword.id,
        });
      });
    });
  }

  setCorners(id, corners) {
    return this._repo.query('delete from product_corner where id_product = ?', [id])
    .then(() => {
      return Promise.map(corners, corner => {
        return this._repo.query('insert into product_corner SET ?', { id_product: id, id_corner: corner.id });
      });
    });
  }

  setLinks(id, links) {
    return this._repo.query('delete from product_link where id_product = ?', [id])
    .then(() => {
      return Promise.map(links, link => {
        if (link.url.length === 0) { return Promise.resolve(); }
        return this._repo.query('insert into product_link SET ?', { id_product: id, ...link });
      });
    });
  }

  setFeatures(id, features) {
    return this._repo.query('delete from product_feature where id_product = ?', [id])
    .then(() => {
      return Promise.map(features, feature => {
        if (!feature.name && !feature.description) {
          return Promise.resolve();
        }
        return this._repo.query('insert into product_feature SET ?', { id_product: id, ...feature });
      });
    });
  }

  setLanguages(id, languages) {
    return this._repo.query('delete from product_language where id_product = ?', [id])
    .then(() => {
      return Promise.map(languages, language => {
        return this._repo.query('insert into product_language SET ?', { id_product: id, id_language: language.id });
      });
    });
  }

  updateResources(id, resources) {
    return Promise.map(resources, resource => {
      return this._repo.query('update resource set name_custom = ? where id = ?', [resource.name_custom, resource.id]);
    });
  }

  update(params, user) {
    const paramsBackup = _.omit(params.values, 'keywords', 'corners', 'links', 'features', 'languages', 'resources');

    //! !!STATE CAN NOT BE UPDATED BY THIS METHOD, USE METHOD changeState
    // TODO: Remove this after the migration
    if (!params.bypassValidation) {
      paramsBackup.state = PRODUCT.STATE.DRAFT;
    }

    // if title is changed, set again alias, because with it we will compose the Front Office URL
    if (paramsBackup.name) {
      paramsBackup.alias = `${clean(paramsBackup.name)}-${params.filters.id}`;
    }

    paramsBackup.last_update = Date.now();

    return Promise.all([
      params.values.keywords ? this.setKeywords(params.filters.id, params.values.keywords) : Promise.resolve(),
      params.values.corners ? this.setCorners(params.filters.id, params.values.corners) : Promise.resolve(),
      params.values.links ? this.setLinks(params.filters.id, params.values.links) : Promise.resolve(),
      params.values.features ? this.setFeatures(params.filters.id, params.values.features) : Promise.resolve(),
      params.values.languages ? this.setLanguages(params.filters.id, params.values.languages) : Promise.resolve(),
      params.values.resources ? this.updateResources(params.filters.id, params.values.resources) : Promise.resolve(),
      Object.keys(paramsBackup).length > 0 ? this._repo.update({
        values: paramsBackup,
        filters: params.filters,
      }) : Promise.resolve(),
    ])
    .then(() => this.get(params.filters.id));
  }

  /** *
   *
   * @param product
   */
  addResource(product) {
    if (!product.resource.home_order) {
      product.resource.home_order = null;
    }
    let resource = {};
    return new Promise((resolve, reject) => {
      this._repo.query('update resource set home_order = null where id_product = ? and home_order = ?', [product.id, product.resource.home_order])
      .then(() => {
        resource = {
          id_product: product.id,
          home_order: product.resource.file.home_order,
          original_name: product.resource.file.originalname,
          name_custom: product.resource.file.originalname,
          type: product.resource.file.mimetype,
        };
        return this._repo.query('insert into resource set ?', [resource]);

        //
      })
      .then(res => {
        let extension = product.resource.file.originalname.split('.');
        extension = extension[extension.length - 1];
        resource.id = res.insertId;
        resource.home_order = product.resource.home_order;
        resource.name = `${resource.id}.${extension}`;
        const newPath = join(global.DIR.PUBLIC, config.get(this.tenant).upload.path, this.tenant, 'products', product.id.toString(), resource.name);
        mv(product.resource.file.path, newPath, function(err) {
          if (err) {
            console.log("[FATAL] Error uploading resource for product: ", JSON.stringify(err, null, 3));
            throw err;
          }
          console.log('file moved successfully');
        });
        return this._repo.query('update resource set home_order = ?, name = ? where id = ?',
          [product.resource.home_order, resource.name, resource.id]);
      })
      .then(() => resolve({ id: product.id, resource }))
      // this line was in the catch block but params is not defined.
      // fs.unlink(params.resource.path);
      .catch(err =>{
        fs.unlink(product.resource.file.path);
        console.log("Error adding resource", JSON.stringify(err, null, 3), "\n\n\n\n");
        return reject(err)
      });
    });
  }

  /** *
   *
   * @param product
   */
  addSlideShowFromResource(product) {
    return new Promise((resolve, reject) => {
      this._repo.query('update resource set home_order=null where id_product = ? and home_order = ?',
        [product.id, product.resource.home_order])
        .then(() => {
          this._repo.query('update resource set home_order= ? where id = ?', [product.resource.home_order, product.resource.id])
            .then(resolve)
            .catch(reject);
        });
    });
  }

  deleteFromSlideshow(product) {
    console.log('DELETING PRODUCT', product);
    const order = product.resource.home_order;
    return new Promise((resolve, reject) => {
      this._repo.query('update resource set home_order=null where id_product = ? and home_order = ?', [product.id, order])
      .then(() => {
        this._repo.query('update resource set home_order=home_order-1 where id_product = ? and home_order > ?', [product.id, order])
        .then(resolve)
        .catch(reject);
      });
    });
  }

  deleteResource(product) {
    return new Promise((resolve, reject) => {
      this._repo.query('select * from resource where id_product = ? and id = ?', [product.id, product.resource.id])
      .then(res => {
        res = res[0];
        if (!res) { throw new Error(JSON.stringify({ code: 404, message: 'no resource found' })); }
        const fileToDelete = join(global.DIR.PUBLIC, config.get(this.tenant).upload.path, this.tenant, 'products', product.id.toString(), res.name);
        if (fileExists(fileToDelete)) {
          fs.unlink(fileToDelete);
        }
        return this._repo.query('update resource set home_order=home_order-1 where id_product = ? and home_order > ?', [product.id, res.home_order]);
      })
      .then(() => this._repo.query('delete from resource where id = ?', [product.resource.id]))
      .then(resolve)
      .catch(reject);
    });
  }


  updateFeatureAvailability(oFeature) {
    const bIsAvailable = (oFeature.isAvailable === 'true');
    if (FEATURES[oFeature.id_feature].forceActive && !bIsAvailable) {
      throw new Error(`Trying to deactivate the feature "${oFeature.id_feature}" which must always be active`);
    }
    return new Promise((resolve, reject) => {
      return this._repo.query('SELECT * FROM  product_available_feature WHERE id_product = ? AND id_feature = ?', [oFeature.id_product, oFeature.id_feature])
      .then(res => {
        if (res.length === 0 && bIsAvailable) {
          return this._repo.query('INSERT INTO product_available_feature SET id_product = ?, id_feature = ?', [oFeature.id_product, oFeature.id_feature]);
        } else if (res.length > 0 && !bIsAvailable) {
          return this._repo.query('DELETE FROM product_available_feature WHERE id_product = ? AND id_feature = ?', [oFeature.id_product, oFeature.id_feature]);
        }
        return true;
      })
      .then(resolve)
      .catch(e => {
        console.log('REPO PRODUCT updateFeatureAvailability: ', e);
        reject(e);
      });
    });
  }


  // Timeline actions
  setProductTimeline(payload) {
    return new Promise((resolve, reject) => {
      this._repo.query('UPDATE product SET id_timeline = ? WHERE id = ?', [payload.id, payload.productId])
      .then(() => this._repo.query('DELETE FROM product_timeline_step_executors WHERE id_product = ?', [payload.productId]))
      .then(res => {
        if (payload.id) {
          const newTimelinePermissions = payload.steps.reduce((prev, step) => (
            prev.concat(step.userIds.map(userId => ({
              executor_type: 'user',
              id_executor: userId,
              id_timeline_step: step.id,
              id_product: payload.productId,
            }))
            .concat(
              step.roleIds.map(roleId => ({
                executor_type: 'role',
                id_executor: roleId,
                id_timeline_step: step.id,
                id_product: payload.productId,
              }))
            ))
            .concat(step.includesProductOwner ? [{
              executor_type: 'product_owner',
              id_executor: null,
              id_timeline_step: step.id,
              id_product: payload.productId,
            }] : [])
          ), []);
          return Promise.all(newTimelinePermissions.map(ts => (
            this._repo.query('INSERT into product_timeline_step_executors (executor_type, id_executor, id_timeline_step, id_product) values (?,?,?,?)',
              [
                ts.executor_type,
                ts.id_executor,
                ts.id_timeline_step,
                payload.productId,
              ])
          )));
        }
        resolve(payload);
      })
      .then(() => resolve(payload))
      .catch(e => {
        console.log('REPO PRODUCT SET PRODUCT TIMELINE ERROR: ', e);
        reject(e);
      });
    });
  }

  setFollowUpTasks(payload) {
    const { productId, followUpTasks } = payload;
    const values = [];
    followUpTasks.forEach(followUpTask => {
      if (!followUpTask.timeline) {
        return;
      }
      const removeBadChars = str => {
        return str.replace(/[^a-zA-Z0-9_ ]/g, '');
      };
      followUpTask.timeline.steps.forEach(step => {
        // TODO: clean this data - SQL injection vulnerability
        const rowData = {
          id_product: parseInt(productId, 10),
          id_follow_up_task: removeBadChars(followUpTask.id),
          id_timeline: removeBadChars(followUpTask.timeline.name),
          id_step: removeBadChars(step.name),
          include_product_owner: step.includesProductOwner ? 1 : 0,
          role_ids: step.roleIds.map(id => parseInt(id, 10)).join(','),
          user_ids: step.userIds.map(id => parseInt(id, 10)).join(','),
        };
        values.push(rowData);
      });
    });
    const inputValues = values.map(row => {
      return `(${row.id_product}, "${row.id_follow_up_task}", "${row.id_timeline}", "${row.id_step}", ${row.include_product_owner}, "${row.role_ids}", "${row.user_ids}")`;
    }).join(',');
    const query = `insert into product_follow_ups (id_product, id_follow_up_task, id_timeline, id_step, include_product_owner, role_ids, user_ids) VALUES ${inputValues}`;

    return this._repo.query('DELETE FROM product_follow_ups WHERE id_product = ?', [productId])
    .then(() => this._repo.query(query))
    .then(() => this._repo.query('SELECT * FROM product_follow_ups WHERE id_product = ?', [productId]))
    .then(queryData => {
      const followUps = queryData.map(row => {
        const copy = Object.assign({}, row);
        copy.role_ids = copy.role_ids.split(',').map(id => parseInt(id, 10));
        copy.user_ids = copy.user_ids.split(',').map(id => parseInt(id, 10));
        return copy;
      });
      return Promise.resolve(followUps);
    })
    .catch(e => console.log('REPO PRODUCT SET PRODUCT TIMELINE ERROR: ', e));
  }
}
