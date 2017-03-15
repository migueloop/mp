import { flattenPermissions, flattenExcludedPermissions, hasCircularDependencies, validatePermission, getExcludedPermissions, validatePermissionList } from 'helpers/permissions';
import chai from 'chai';
const expect = chai.expect;

describe('PERMISSIONS', () => {
  describe('flattenPermissions', () => {
    it('should flatten the permission tree', () => {
      const CREATE_ARTICLE = {
        id: 'CREATE_ARTICLE',
        includes: [],
        excludes: [],
      };

      const EDIT_ARTICLE_OWN = {
        id: 'EDIT_ARTICLE_OWN',
        includes: [],
        excludes: [],
      };

      const EDIT_ARTICLE = {
        id: 'EDIT_ARTICLE',
        includes: [],
        excludes: [],
      };

      const REQUEST_PUBLICATION_ARTICLE_OWN = {
        id: 'REQUEST_PUBLICATION_ARTICLE_OWN',
        includes: [],
        excludes: [],
      };
      // Include permissions
      CREATE_ARTICLE.includes.push(EDIT_ARTICLE);
      CREATE_ARTICLE.includes.push(REQUEST_PUBLICATION_ARTICLE_OWN);
      EDIT_ARTICLE.includes.push(EDIT_ARTICLE_OWN);

      const expected = [CREATE_ARTICLE, EDIT_ARTICLE, EDIT_ARTICLE_OWN, REQUEST_PUBLICATION_ARTICLE_OWN];
      const actual = flattenPermissions([CREATE_ARTICLE]);
      expect(actual).to.deep.equal(expected);
    });
  });
  describe('flattenExcludedPermissions', () => {
    it('should flatten the excluded permission tree', () => {
      const CREATE_ARTICLE = {
        id: 'CREATE_ARTICLE',
        includes: [],
        excludes: [],
      };

      const EDIT_ARTICLE_OWN = {
        id: 'EDIT_ARTICLE_OWN',
        includes: [],
        excludes: [],
      };

      const EDIT_ARTICLE = {
        id: 'EDIT_ARTICLE',
        includes: [],
        excludes: [],
      };

      const REQUEST_PUBLICATION_ARTICLE_OWN = {
        id: 'REQUEST_PUBLICATION_ARTICLE_OWN',
        includes: [],
        excludes: [],
      };
      // Include permissions
      CREATE_ARTICLE.excludes.push(EDIT_ARTICLE);
      CREATE_ARTICLE.excludes.push(REQUEST_PUBLICATION_ARTICLE_OWN);

      const expected = [EDIT_ARTICLE, REQUEST_PUBLICATION_ARTICLE_OWN];
      const actual = flattenExcludedPermissions([CREATE_ARTICLE]);
      expect(actual).to.deep.equal(expected);
    });
  });
  describe('hasCircularDependencies', () => {
    it('should have circular dependencies', () => {
      const CREATE_ARTICLE = {
        id: 'CREATE_ARTICLE',
        includes: [],
        excludes: [],
      };

      const EDIT_ARTICLE_OWN = {
        id: 'EDIT_ARTICLE_OWN',
        includes: [],
        excludes: [],
      };
      // Include permissions
      CREATE_ARTICLE.includes.push(EDIT_ARTICLE_OWN);
      EDIT_ARTICLE_OWN.includes.push(CREATE_ARTICLE);
      const expected = true;
      const actual = hasCircularDependencies([CREATE_ARTICLE]);
      expect(actual).to.equal(expected);
    });
    it('should not have circular dependencies', () => {
      const CREATE_ARTICLE = {
        id: 'CREATE_ARTICLE',
        includes: [],
        excludes: [],
      };

      const EDIT_ARTICLE_OWN = {
        id: 'EDIT_ARTICLE_OWN',
        includes: [],
        excludes: [],
      };
      // Include permissions
      CREATE_ARTICLE.includes.push(EDIT_ARTICLE_OWN);
      const expected = false;
      const actual = hasCircularDependencies([CREATE_ARTICLE]);
      expect(actual).to.equal(expected);
    });
  });
  describe('validatePermission', () => {
    it('should pass the permission validation', () => {
      const CREATE_ARTICLE = {
        id: 'CREATE_ARTICLE',
        includes: [],
        excludes: [],
      };
      const EDIT_ARTICLE = {
        id: 'EDIT_ARTICLE',
        includes: [],
        excludes: [],
      };
      const EDIT_ARTICLE_OWN = {
        id: 'EDIT_ARTICLE_OWN',
        includes: [],
        excludes: [],
      };
      EDIT_ARTICLE.includes.push(EDIT_ARTICLE_OWN);
      const expected = { valid: true, errors: [] };
      const actual = validatePermission([CREATE_ARTICLE], EDIT_ARTICLE);
      expect(actual).to.deep.equal(expected);
    });
    it('should pass the permission validation for an empty permission list', () => {
      const EDIT_ARTICLE = {
        id: 'EDIT_ARTICLE',
        includes: [],
        excludes: [],
      };
      const EDIT_ARTICLE_OWN = {
        id: 'EDIT_ARTICLE_OWN',
        includes: [],
        excludes: [],
      };
      EDIT_ARTICLE.excludes.push(EDIT_ARTICLE_OWN);
      const expected = { valid: true, errors: [] };
      const actual = validatePermission([], EDIT_ARTICLE);
      expect(actual).to.deep.equal(expected);
    });
    it('should fail the permission validation', () => {
      const CREATE_ARTICLE = {
        id: 'CREATE_ARTICLE',
        includes: [],
        excludes: [],
      };
      const EDIT_ARTICLE = {
        id: 'EDIT_ARTICLE',
        includes: [],
        excludes: [],
      };
      EDIT_ARTICLE.excludes.push(CREATE_ARTICLE);
      const expected = { valid: false, errors: [{ permission: EDIT_ARTICLE, conflictsWith: [CREATE_ARTICLE] }] };
      const actual = validatePermission([CREATE_ARTICLE], EDIT_ARTICLE);
      expect(actual).to.deep.equal(expected);
    });
  });
  describe('getExcludedPermissions', () => {
    it('should return the excluded permissions', () => {
      const CREATE_ARTICLE = {
        id: 'CREATE_ARTICLE',
        includes: [],
        excludes: [],
      };
      const EDIT_ARTICLE = {
        id: 'EDIT_ARTICLE',
        includes: [],
        excludes: [],
      };
      const EDIT_ARTICLE_OWN = {
        id: 'EDIT_ARTICLE_OWN',
        includes: [],
        excludes: [],
      };
      EDIT_ARTICLE.includes.push(EDIT_ARTICLE_OWN);
      CREATE_ARTICLE.excludes.push(EDIT_ARTICLE_OWN);
      const expected = [EDIT_ARTICLE_OWN];
      const actual = getExcludedPermissions([CREATE_ARTICLE], EDIT_ARTICLE);
      expect(actual).to.deep.equal(expected);
    });
    it('should return the excluded permissions', () => {
      const CREATE_ARTICLE = {
        id: 'CREATE_ARTICLE',
        includes: [],
        excludes: [],
      };
      const EDIT_ARTICLE = {
        id: 'EDIT_ARTICLE',
        includes: [],
        excludes: [],
      };
      const EDIT_ARTICLE_OWN = {
        id: 'EDIT_ARTICLE_OWN',
        includes: [],
        excludes: [],
      };
      EDIT_ARTICLE.includes.push(EDIT_ARTICLE_OWN);
      const expected = [];
      const actual = getExcludedPermissions([CREATE_ARTICLE], EDIT_ARTICLE);
      expect(actual).to.deep.equal(expected);
    });
    it('should fail the permission list validation', () => {
      const EDIT_ARTICLE = {
        id: 'EDIT_ARTICLE',
        includes: [],
        excludes: [],
      };
      const EDIT_ARTICLE_OWN = {
        id: 'EDIT_ARTICLE_OWN',
        includes: [],
        excludes: [EDIT_ARTICLE],
      };
      EDIT_ARTICLE.excludes = [EDIT_ARTICLE_OWN];
      const permissions = [EDIT_ARTICLE, EDIT_ARTICLE_OWN];
      const expected = { valid: false, errors: ['EDIT_ARTICLE', 'EDIT_ARTICLE_OWN'] };
      const actual = validatePermissionList(permissions);
      expect(actual).to.deep.equal(expected);
    });
    it('should pass the permission list validation', () => {
      const EDIT_ARTICLE = {
        id: 'EDIT_ARTICLE',
        includes: [],
        excludes: [],
      };
      const EDIT_ARTICLE_OWN = {
        id: 'EDIT_ARTICLE_OWN',
        includes: [],
        excludes: [],
      };
      const permissions = [EDIT_ARTICLE, EDIT_ARTICLE_OWN];
      const expected = { valid: true, errors: [] };
      const actual = validatePermissionList(permissions);
      expect(actual).to.deep.equal(expected);
    });
  });
});
