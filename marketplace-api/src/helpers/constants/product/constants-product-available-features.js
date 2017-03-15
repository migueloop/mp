/**
 * Created by coud on 8/18/16.
 */
export const CATEGORY = {
  ARTICLE: 'Article',
  BUNDLE: 'Bundle',
  CORNER: 'Corner',
  PRODUCT: 'Product',
  USER: 'User',
  ASSIGNMENT: 'Assignment',
};

export const PRODUCT_SUMMARY = {
  id: 'PRODUCT_SUMMARY',
  name: 'Can see summary tab',
  descriptions: 'Show summary tab on product view',
  category: CATEGORY.PRODUCT,
  order: 1,
  route: 'summary',
};

export const PRODUCT_FEATURES = {
  id: 'PRODUCT_FEATURES',
  name: 'Can see features tab',
  descriptions: 'Show features tab on product view',
  category: CATEGORY.PRODUCT,
  order: 2,
  route: 'features',
};

export const PRODUCT_RESOURCES = {
  id: 'PRODUCT_RESOURCES',
  name: 'Can see summary tab',
  descriptions: 'Show resources tab on product view',
  category: CATEGORY.PRODUCT,
  order: 3,
  route: 'resources',
};

export const PRODUCT_EDITOR = {
  id: 'PRODUCT_EDITOR',
  name: 'Can see editor tab',
  descriptions: 'Show editor tab on product view',
  category: CATEGORY.PRODUCT,
  order: 4,
  route: 'editor',
};

export default [
  PRODUCT_SUMMARY,
  PRODUCT_FEATURES,
  PRODUCT_RESOURCES,
  PRODUCT_EDITOR,
];
