import CornerRepository from 'repositories/corner';
import { ACTION } from 'flux/actions';
import Promise from 'bluebird';

export default class Corners {
  constructor(tenant) {
    this.tenant = tenant;
    this.cornerRepository = new CornerRepository(this.tenant);
  }

  get All() {
    return this.cornerRepository.getAll()
      .then(corners => {
        return Promise.resolve({
          type: ACTION.CORNER.SET_ALL,
          corners,
        });
      });
  }

  get Keywords() {
    return new Promise((resolve, reject) => {
      this.cornerRepository.getAllKeywords()
        .then(keywords => {
          resolve({
            type: ACTION.MISC.SET_KEYWORDS,
            keywords,
          });
        })
        .catch(reject);
    });
  }

  UpdateLogo(corner, logo, options) {
    return new Promise((resolve, reject) => {
      this.cornerRepository.updateLogo(corner, logo, options)
        .then(corner => {
          resolve({
            type: ACTION.CORNER.EDIT,
            corner,
          });
        })
        .catch(reject);
    });
  }

  Edit(id, values) {
    return new Promise((resolve, reject) => {
      this.cornerRepository.update({
        values: Object.assign({}, values),
        filters: {
          id,
        },
      }).then(() => {
        resolve({
          type: ACTION.CORNER.EDIT,
          corner: { id, ...values },
        });
      }).catch(err => {
        reject(err);
      });
    });
  }

  UpdateBestProduct(cornerId, productId, position) {
    return new Promise((resolve, reject) => {
      this.cornerRepository.updateBestProduct(cornerId, productId, position)
        .then(res => {
          resolve({
            type: ACTION.CORNER.UPDATE_BEST_PRODUCT,
            bestProduct: {
              cornerId, productId, position,
            },
          });
        })
        .catch(reject);
    });
  }

  Delete(cornerId) {
    return new Promise((resolve, reject) => {
      this.cornerRepository.delete(cornerId)
        .then(() => {
          resolve({
            type: ACTION.CORNER.DELETE,
            cornerId,
          });
        })
        .catch(reject);
    });
  }

  Create(corner) {
    return new Promise((resolve, reject) => {
      this.cornerRepository.create(corner)
        .then(corner => {
          resolve({
            type: ACTION.CORNER.CREATE,
            corner,
          });
        })
        .catch(reject);
    });
  }

}
