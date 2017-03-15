import { clean, fileExists } from 'helpers/utils';
import { ITEM } from 'helpers/constants';
import { parseResource } from 'helpers/items';
import Repository from './drivers/mysql';
import { ITEM_QUERIES } from './queries/item';
import _ from 'lodash';
import config from 'config';
import fs from 'fs';
import mv from 'mv';
import { join } from 'path';
import * as models from './models/index';
import Promise from 'bluebird';

export default class BundleRepository {

  constructor(tenant) {
    const configuration = config.get(tenant);
    this._repo = new Repository(tenant, 'bundle');
    this.tenant = tenant;
    this.uploadPath = join(global.DIR.PUBLIC, configuration.upload.path, tenant, 'bundles');
  }

  // Private

  _getWhere(where = '', params = [], otherClauses = '') {
    if (where.length > 0) {
      where = ` where ${where}`;
    }

    return this._repo.query(`${ITEM_QUERIES.BUNDLE.GET_ALL} ${where} GROUP BY bundle.id ${otherClauses}`, params)
    .then(bundles => {
      const aParsedBundles = this._parse(bundles);
      // if we did not parsed nothing means that we dont have any bundle
      return aParsedBundles.length === 0 ? Promise.resolve([]) : Promise.resolve(aParsedBundles);
    });
  }


  _parse(aBundles) {
    const self = this;
    return aBundles.map(oBundle => {
      // parse from JSON
      oBundle.components = JSON.parse(oBundle.components);
      oBundle.components_without_logo = JSON.parse(oBundle.components_without_logo);
      oBundle.corners = JSON.parse(oBundle.corners);
      oBundle.keywords = JSON.parse(oBundle.keywords);
      oBundle.resources = JSON.parse(oBundle.resources);
      oBundle.logo_info = JSON.parse(oBundle.logo_info);
      // parse state
      oBundle.state = self._parseState(oBundle);
      // parse logo
      oBundle.logo_info = self._parseLogoInfo(oBundle.logo_info[0], oBundle.id);
      // parse resources
      oBundle.resources.map(oResource => this._parseResource(oResource, oBundle.id));
      // parse components
      oBundle.components = this._parseComponents(oBundle.components, oBundle.components_without_logo);
      delete oBundle.components_without_logo;

      // set link to download bundle
      if (oBundle.link) {
        oBundle.link = `/${[config.get(this.tenant).upload.path, 'bundles', oBundle.id, oBundle.link].join('/')}`;
      }
      return oBundle;
    });
  }

  _parseComponents = (aComponents, aComponentsWithoutLogo) => {
    // first set the righ URL of logo field in the final components array
    if (aComponents && aComponents.length > 0) {
      aComponents.forEach(oComponent => {
        oComponent.logo = oComponent.logo ?
        `/${[config.get(this.tenant).upload.path, 'products', oComponent.id, oComponent.logo].join('/')}`
          : ITEM.PLACEHOLDERS.PICTURES.GENERIC.URL;
      });
    }


    // if we have components without logo, insert in the final components array
    if (aComponentsWithoutLogo && aComponentsWithoutLogo.length > 0) {
      aComponentsWithoutLogo.forEach(oComponent => {
        // first add the logo url, its a generic placeholder (the same that a product has)
        oComponent.logo = ITEM.PLACEHOLDERS.PICTURES.GENERIC.URL;
        // push into the final array
        aComponents.push(oComponent);
      });
    }
    // order final components array depending on the show_order field
    return aComponents.sort((oComponent1, oComponent2) => oComponent1.show_order - oComponent2.show_order);
  };

  _parseLogoInfo = (oLogoInfo, nBundleId) => {
    const oTemp = {};
    // set URL and type or default image
    if (oLogoInfo && oLogoInfo.id && oLogoInfo.url) {
      oTemp.url = `/${[config.get(this.tenant).upload.path, 'bundles', nBundleId, oLogoInfo.url].join('/')}`;
      oTemp.type = oLogoInfo.type;
      oTemp.id = oLogoInfo.id;
    } else {
      oTemp.url = ITEM.PLACEHOLDERS.PICTURES.GENERIC.URL;
      oTemp.type = ITEM.PLACEHOLDERS.PICTURES.GENERIC.TYPE;
    }
    return oTemp;
  };


  _parseResource = (oResource, bundleId) => {
    if (oResource && oResource.id) {
      oResource.id_item = parseInt(oResource.id_item, 10);
      oResource.url = `/${[config.get(this.tenant).upload.path, 'bundles', bundleId, oResource.name].join('/')}`;
      if (oResource.show_carousel) {
        // oResource.show_carousel = parseInt(oResource.show_carousel, 10) === 0 ? false : true;
        oResource.show_carousel = parseInt(oResource.show_carousel, 10) !== 0;
      }
      oResource.carousel_order = oResource.carousel_order ? oResource.carousel_order : null;
    } else {
      oResource.url = ITEM.PLACEHOLDERS.PICTURES.GENERIC.URL;
      oResource.type = ITEM.PLACEHOLDERS.PICTURES.GENERIC.TYPE;
    }
  };

  _parseState = oBundle => {
    switch (oBundle.state_id) {
      case ITEM.STATE.DELETED:
        return ITEM.STATE.KEY.DELETED;
      case ITEM.STATE.DRAFT:
        return ITEM.STATE.KEY.DRAFT;
      case ITEM.STATE.PENDING:
        return ITEM.STATE.KEY.PENDING;
      case ITEM.STATE.PUBLISHED:
        return ITEM.STATE.KEY.PUBLISHED;
      default:
        break;
    }
  };

  /*
   * Upload file to the right article folder with this pattern: /public/tenant/article_id/resource_id.extension
   * @param sOriginalName: The original file name to get the extension
   * @param nIdArticle: Article Id to inclided it in the final path
   * @param nIdNewResource: DB id of the resource to create the new file name
   * @param sPath: original path from the resource uploaded
   * @return {String} with the new name of the resource file (resource_id.extension)
   *
   * */
  _saveFile = (sOriginalName, nIdArticle, nIdNewResource, sPath) => {
    // TODO: check if originalName has no extension take it from the myme type
    // set extension
    let sExtension = sOriginalName.split('.');
    sExtension = sExtension[sExtension.length - 1];
    // will change name, will have the pattern id.extension (i.e. 4.jpg)
    const sResourceNewName = `${nIdNewResource}.${sExtension}`;
    // upload the resource to the right path
    const newPath = join(global.DIR.PUBLIC, config.get(this.tenant).upload.path, this.tenant, 'bundles', nIdArticle.toString(), sResourceNewName);

    mv(sPath, newPath, function(err) {
      if (err) {
        console.log("[FATAL] Error saving resource for BUNDLE: ", JSON.stringify(err, null, 3));
        throw err;
      }
      console.log('file moved successfully');
    });

    return sResourceNewName;
  };

  _setAlias = (sName, nId) => `${clean(sName)}-${nId}`;

  // Create, delete and update
  create = oBundle => {
    const self = this;
    const bundleModel = new models.Bundle();
    return new Promise((resolve, reject) => {
      let validBundle = null;
      // validate the received article with our model
      bundleModel.validate(oBundle)
      .then(validatedBundle => {
        validBundle = validatedBundle;
        // insert in DB the article
        return self._repo.insert(validatedBundle);
      })
      .then(res => {
        // Now compose the alias bundle name to use it in the friendly URL getting the ID returned in the insertion
        validBundle.id = res.insertId;
        validBundle.alias = `${clean(validBundle.title)}-${validBundle.id}`;
        // Create bundle folder if does not exist
        if (!fileExists(join(self.uploadPath, (`${validBundle.id}`)))) {
          fs.mkdirSync(join(self.uploadPath, (`${validBundle.id}`)));
        }
        // Update the bundle with the alias
        return self._repo.update({
          values: {
            alias: validBundle.alias,
          },
          filters: {
            id: validBundle.id,
          },
        });
      })
      // Get the bundle inserted to resolve it backwards
      .then(() => this._getWhere('bundle.id = ?', [validBundle.id]))
      .then(bundle => {
        // create components array empty
        bundle[0].components = [];
        resolve(bundle[0]);
      })
      .catch(error => reject(error));
    });
  };


  delete(id) {
    const nDeletedState = ITEM.STATE.DELETED;
    return this._repo.update({
      filters: { id },
      values: { state_id: nDeletedState },
    });
  }

  update(oBundle) {
    const paramsBackup = _.omit(oBundle.values, 'keywords', 'corners', 'links', 'resources');
    // !!!STATE CAN NOT BE UPDATED BY THIS METHOD, USE METHOD changeState
    // TODO: Remove this after the migration
    if (!oBundle.bypassValidation) {
      paramsBackup.state_id = ITEM.STATE.DRAFT;
    }

    // if name is changed, set again alias, because with it we will compose the Front Office URL
    if (paramsBackup.title) {
      paramsBackup.alias = this._setAlias(paramsBackup.title, oBundle.filters.id);
    }

    // check if is logo
    if (paramsBackup.logo_info) {
      paramsBackup.logo_id = oBundle.values.logo_info.id;
      delete paramsBackup.logo_info;
    }

    return Promise.all([
      oBundle.values.keywords ? this.setKeywords(oBundle.filters.id, oBundle.values.keywords) : Promise.resolve(),
      oBundle.values.corners ? this.setCorners(oBundle.filters.id, oBundle.values.corners) : Promise.resolve(),
      oBundle.values.links ? this.setLinks(oBundle.filters.id, oBundle.values.links) : Promise.resolve(),
      oBundle.values.resources ? this.updateResources(oBundle.filters.id, oBundle.values.resources) : Promise.resolve(),
      Object.keys(paramsBackup).length > 0 ? this._repo.update({
        values: paramsBackup,
        filters: oBundle.filters,
      }) : Promise.resolve(),
    ]);
  }


  // Getters

  /* getAll = () => {
    return this._getWhere().then(bundles => {
      return Promise.resolve(bundles);
    });
  }; */

  getAll = () => this._getWhere().then(bundles => Promise.resolve(bundles));

  getDeleted = () => this._getWhere('bundle.state_id = ?', [ITEM.STATE.DELETED]);

  getDraft = () => this._getWhere('bundle.state_id = ?', [ITEM.STATE.DRAFT]);

  /**
   * Get a single bundle
   * @param {number} id of the bundle that we want to retrieve
   * @returns {Promise} with the bundle object
   */
  getOne = id => this.this._getWhere(' bundle.id = ? ', [id]);

  getPending = () => this._getWhere('bundle.state_id = ?', [ITEM.STATE.PENDING]);

  getPublished() {
    return this._getWhere('bundle.state_id = ?', [ITEM.STATE.PUBLISHED]);
  }

  // Setters

  /**
   *
   * @param {number} idBundle the id of the bundle
   * @param {array} keywords array oof object keyword. Every object should have id key
   * @returns {promise} with the insert result
   */
  setKeywords(idBundle, keywords) {
    return this._repo.query(ITEM_QUERIES.BUNDLE.DELETE_KEYWORD, [idBundle])
    .then(() => Promise.map(keywords, keyword => this._repo.query(ITEM_QUERIES.BUNDLE.INSERT_KEYWORD, { id_bundle: idBundle, id_keyword: keyword.id })));
  }


  /**
   *
   * @param {number} idBundle the id of the bundle
   * @param {array} corners array of objects. Every object should have keys: id, highlight_article
   * @returns {promise} with the insert result
   */
  setCorners(idBundle, corners) {
    return this._repo.query(ITEM_QUERIES.BUNDLE.DELETE_CORNER, [idBundle])
    .then(() => Promise.map(corners, corner => this._repo.query(ITEM_QUERIES.BUNDLE.INSERT_CORNER, { id_bundle: idBundle, id_corner: corner.id })));
  }

  /**
   *
   * @param {number} idBundle id of the bundle
   * @param {array} links array of object. Evert object should have key url
   * @returns {promise} with the result of the insert
   */
  setLinks(idBundle, links) {
    return this._repo.query(ITEM_QUERIES.BUNDLE.DELETE_LINK, [idBundle])
    .then(() => Promise.map(links, link => link.url.length === 0 ? Promise.resolve() : this._repo.query(ITEM_QUERIES.BUNDLE.INSERT_LINK, { id_bundle: idBundle, ...link })));
  }

  // State modifications
  demandPublication = nId => this._repo.update({ filters: { id: nId }, values: { state_id: ITEM.STATE.PENDING } });

  publish = id => this._repo.update({ filters: { id }, values: { state_id: ITEM.STATE.PUBLISHED } });

  unpublish = id => this._repo.update({ filters: { id }, values: { state_id: ITEM.STATE.DRAFT } });

  // Resources
  /**
   *
   * @param {number} id_resource id of the resource. Its unique.
   * @param {number} nOrder order in the carousel
   * @returns {Promise} with id_resource, id_bundle, order
   */
  toggleResourceToCarousel = oResourceData => {
    return new Promise((resolve, reject) => {
      const oBundleResource = {};
      this._repo.query('select * from bundle_resource where id_resource = ? and id_bundle = ?', [oResourceData.id_resource, oResourceData.id_item])
      .then(res => {
        if (!res[0]) {
          reject(`REPOSITORY: no resource with id ${oResourceData.id_resource} and bundle id ${oResourceData.id_item} found`);
        }
        else {
          oBundleResource.id_item = res[0].id_bundle;
          oBundleResource.id_resource = res[0].id_resource;
          oBundleResource.show_carousel = oResourceData.show_carousel;
          const nShowCarousel = oResourceData.show_carousel ? 1 : 0;
          return this._repo.query('update bundle_resource set show_carousel = ? where id_resource = ? and id_bundle = ? ', [nShowCarousel, oResourceData.id_resource, oResourceData.id_item]);
        }
      })
      .then(() => this._repo.query('update bundle set state_id = ? where id = ?', [ITEM.STATE.DRAFT, oResourceData.id_item]))
      .then(res => res.affectedRows === 1 ? resolve(oBundleResource) : reject())
      .catch(err => {
        reject(`REPOSITORY TOGGLE SHOW IN CAROUSEL ERROR: Res ${oResourceData.id_resource} -- ${oResourceData.id_item} -- ${oResourceData.show_carousel} -- ${err}`);
      });
    });
  };


  /**
   * Upload resource to the DB, link it to the item and save the uploaded file
   * @param oResource: 'id' of the item and the file uploaded inside key 'resource'. This last are the file attributes
   * @return {Promise} Promise resolved with the bundle_id and the resource information (included id and url)
   */
  addResource = oResource => {
    const self = this;
    const itemResourceModel = new models.ItemResource();
    const oParsedResource = parseResource(oResource.file);
    const sResourcePath = oResource.file.path;
    oResource.show_carousel = oResource.show_carousel === 'true' ? 1 : 0;
    oResource.carousel_order = oResource.carousel_order === 'null' ? null : parseInt(oResource.carousel_order, 10);

    return new Promise((resolve, reject) => {
      let validItemResource = null;
      // validate with the model the received resource
      itemResourceModel.validate(oParsedResource)
      .then(validatedItemResource => {
        validItemResource = Object.assign({}, validatedItemResource);
        validItemResource.id_bundle = oResource.id_item;
        // first insert new resource into item_resource table
        return this._repo.query('insert into item_resource set ?', [validatedItemResource]);
      })
      .then(res => {
        if (res.affectedRows === 1) {
          validItemResource.id = res.insertId;
          // insert into the bundle_resource table
          return this._repo.query('insert into bundle_resource set id_bundle = ? , id_resource = ?, show_carousel = ?, carousel_order = ? ', [validItemResource.id_bundle, validItemResource.id, oResource.show_carousel, oResource.carousel_order]);
        }
        console.log('REPOSITORY - addResource: Cant insert into item_resource with ', validItemResource);
        reject('REPOSITORY - addResource: Cant insert into item_resource with ', validItemResource);
      })
      .then(res => {
        if (res.affectedRows === 1) {
          // Now upload file. We get the new name of the resource, that is the id.extension
          const sResourceNewName = self._saveFile(validItemResource.original_name, validItemResource.id_bundle, validItemResource.id, sResourcePath);
          validItemResource.url = `/${[config.get(this.tenant).upload.path, 'bundles', validItemResource.id_bundle.toString(), sResourceNewName].join('/')}`;
          validItemResource.name = sResourceNewName;
          // update with the new name
          return this._repo.query('update item_resource set name = ? where id = ?', [sResourceNewName, validItemResource.id]);
        }
        console.log('REPOSITORY - addResource: Cant insert into bundle_resource with ', validItemResource);
        reject('REPOSITORY - addResource: Cant insert into bundle_resource with ', validItemResource);
      })
      .then(res => {
        if (res.affectedRows === 1) {
          return this._repo.query('update bundle set state_id = ? where id = ?', [ITEM.STATE.DRAFT, validItemResource.id_bundle]);
        }
        console.log('REPOSITORY - addResource: Cant update into item_resource with ', validItemResource);
        reject('REPOSITORY - addResource: Cant update into item_resource with ', validItemResource);
      })
      .then(res => {
        if (res.affectedRows === 1) {
          validItemResource.show_carousel = false;
          validItemResource.carousel_order = null;
          resolve({ id: validItemResource.id_bundle, resource: validItemResource });
        } else {
          console.log('REPOSITORY - addResource: Cant update into item_resource with ', validItemResource);
          reject('REPOSITORY - addResource: Cant update into item_resource with ', validItemResource);
        }
      })
      .catch(err => {
        console.error('--> ERR: ', err);
        reject(err);
      });
    });
  };

  deleteResource = oResourceData => {
    return new Promise((resolve, reject) => {
      this._repo.query('select * from item_resource where id = ? ', [oResourceData.id_resource])
      .then(res => {
        res = res[0];
        if (!res) {
          throw new Error(JSON.stringify({ code: 404, message: 'no resource found' }));
        } else {
          const resourcePath = join(global.DIR.PUBLIC, config.get(this.tenant).upload.path, this.tenant, 'bundles', oResourceData.id_item.toString(), res.name);
          fs.unlink(resourcePath);
        }
      })
      .then(() => this._repo.query('delete from bundle_resource where id_bundle = ? and id_resource = ? ', [oResourceData.id_item, oResourceData.id_resource]))
      .then(() => this._repo.query('delete from item_resource where id = ? ', [oResourceData.id_resource]))
      .then(() => this._repo.query('update bundle set state_id = ? where id = ?', [ITEM.STATE.DRAFT, oResourceData.id_item]))
      .then(() => resolve({ id_item: oResourceData.id_item, id_resource: oResourceData.id_resource }))
      .catch(err => reject(err));
    });
  };

  updateResources = resources => Promise.map(resources, resource => this._repo.query('update item_resource set name_custom = ? where id = ?', [resource.name_custom, resource.id]));

  changeLogo = oResourceData => {
    return new Promise((resolve, reject) => {
      this.update({ values: oResourceData.values, filters: oResourceData.filters })
      .then(res => {
        if (res[3].affectedRows === 1) {
          resolve({ id_item: oResourceData.filters.id, logo_id: oResourceData.values.logo_id });
        } else {
          reject('No bundle found');
        }
      })
      .catch(err => reject(err));
    });
  };


  deleteLogo = oResourceData => {
    return new Promise((resolve, reject) => {
      this.update({ values: oResourceData.values, filters: oResourceData.filters })
      .then(res => {
        if (res[3].affectedRows === 1) {
          resolve({ id_item: oResourceData.filters.id, logo_id: null });
        } else {
          reject('No bundle found');
        }
      })
      .catch(err => reject(err));
    });
  };


  // Components

  addComponent = oComponentData => {
    return new Promise((resolve, reject) => {
      this._repo.query('select * from bundle_component where id_bundle = ? and show_order = ?', [oComponentData.id_item, oComponentData.component.show_order])
      .then(res => {
        if (res[0]) {
          return this._repo.query('delete from bundle_component where id_bundle = ? and show_order = ?', [oComponentData.id_item, oComponentData.component.show_order]);
        }
      })
      .then(() => this._repo.query('insert into bundle_component set id_bundle = ? , id_component = ? , show_order = ?', [oComponentData.id_item, oComponentData.component.id, oComponentData.component.show_order]))
      .then(() => this._repo.query('update bundle set state_id = ? where id = ?', [ITEM.STATE.DRAFT, oComponentData.id_item]))
      .then(res => res.affectedRows === 1 ? resolve({ id_item: oComponentData.id_item, component: oComponentData.component }) : reject(`REPOSITORY: Cant add component ${oComponentData.component.id} to bundle ${oComponentData.id_item}`))
      .catch(err => reject(err));
    });
  };


  deleteComponent = oComponentData => {
    return new Promise((resolve, reject) => {
      this._repo.query('select * from bundle_component where id_bundle = ? and id_component = ? and show_order = ?', [oComponentData.id_item, oComponentData.id_component, oComponentData.show_order])
      .then(res => {
        if (res[0]) {
          return this._repo.query('delete from bundle_component where id_bundle = ? and id_component = ? and show_order = ? limit 1', [oComponentData.id_item, oComponentData.id_component, oComponentData.show_order]);
        }
        resolve({ id_item: oComponentData.id_item, id_component: oComponentData.id_component, show_order: oComponentData.show_order });
      })
      .then(() => this._repo.query('update bundle set state_id = ? where id = ?', [ITEM.STATE.DRAFT, oComponentData.id_item]))
      .then(res => {
        if (res.affectedRows === 1) {
          return resolve({ id_item: oComponentData.id_item, id_component: oComponentData.id_component, show_order: oComponentData.show_order });
        }
        reject(`REPOSITORY: Can not delete component ${oComponentData.id_component} from bundle ${oComponentData.id_item}`);
      })
      .catch(err => reject(err));
    });
  };


  getComponents = nId => {
    const self = this;
    return new Promise((resolve, reject) => {
      self._getWhere('select * from bundle_component where id_bundle = ? ', [nId])
      .then(res => resolve(res))
      .catch(err => reject(`REPOSITORY: Cant get components of bundle with id ${nId} -- Error: ${err}`));
    });
  }

}
