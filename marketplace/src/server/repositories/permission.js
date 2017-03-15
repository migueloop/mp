import Repository from './drivers/mysql';
// Import necessary repositories
import ProductRepository from './product';
import CornerRepository from './corner';

// TODO: Use database to check permission, now is hardcoded to the roles id's
export default class Permission {
  constructor(tenant) {
    this.tenant = tenant;
    this.productRepository = new ProductRepository(tenant);
    this.cornerRepository = new CornerRepository(tenant);
    this._repo = new Repository(tenant, 'user');
  }

  checkOwnership({ userId, itemId, category }) {
    console.log('category', category);
    return this._ownerships[category] ? this._ownerships[category](itemId, userId) : Promise.resolve(false);
  }

  _ownerships = {
    // Check if this user owns this product
    Product: (itemId, userId) => this.productRepository.isOwnedBy(itemId, userId),
    Corner: (itemId, userId) => this.cornerRepository.isOwnedBy(itemId, userId),
  }

// Special permission checks here
  get validation() {
    return {
      // EDIT_PRODUCT_OWN: (userId, productId) => {
      //   console.log('VALIDATION::EDIT_PRODUCT_OWN');
      //   return Promise.resolve('nice!');
      //   // return Promise.reject(new Error('stop hacking'));
      // },
    };
  }
}
