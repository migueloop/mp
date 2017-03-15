import { PRODUCT } from 'helpers/constants';

export function filterProductsAlgorithm(product, filters) {
  if (filters.corner) {
    if (!product.corners.length) {
      return false;
    }
    const corner = filters.corner;
    if (!product.corners.reduce((p, n) => n.id === corner || p, false)) {
      return false;
    }
  }

  if (filters.type && product.type !== PRODUCT.TYPE[filters.type]) {
    return false;
  }

  if (filters.name && product.name.toLowerCase().indexOf(filters.name.toLowerCase()) === -1) {
    return false;
  }

  // if (filters.keywords.length > 0 && !filters.keywords.reduce((prev, k) => (prev && !!product.keywords.find(ProductKeyword => k.id === ProductKeyword.id)), true)) {
  if (filters.keywords && filters.keywords.length > 0 && !filters.keywords.reduce((prev, k) => (prev && !!product.keywords.find(ProductKeyword => k.name === ProductKeyword.name)), true)) {
    return false;
  }

  if (filters.platform && PRODUCT.TYPE[filters.type] === PRODUCT.TYPE.MOBILE && !product.links.find(link => (link.name.toLowerCase() === filters.platform))) {
    return false;
  }

  return true;
}


export function filterBundlesAlgorithm(bundle, filters) {
  if (filters.corner) {
    if (!bundle.corners.length) {
      return false;
    }
    const corner = filters.corner;
    if (! bundle.corners.reduce((p, n) => n.id === corner || p, false)) {
      return false;
    }
  }
  // name filter
  if (filters.name && bundle.title.toLowerCase().indexOf(filters.name.toLowerCase()) === -1) {
    return false;
  }
  // keywords filter
  if (filters.keywords && filters.keywords.length > 0 && !filters.keywords.reduce((prev, k) => (prev && !!bundle.keywords.find(bundleKeyword => k.name === bundleKeyword.name)), true)) {
    return false;
  }
  return true;
}
