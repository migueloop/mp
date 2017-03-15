import { hasAllOwnProperties } from '../../shared/helpers/object-helpers';
import chai from 'chai';
const expect = chai.expect;

describe('OBJECT HELPERS', () => {
  describe('hasAllOwnProperties', () => {
    it('should show that the object contains all the properties', () => {
      const properties = ['a', 'b', 'c'];
      const obj = {
        a: 123,
        b: undefined,
        c: 'abc',
        d: [],
      };
      const result = hasAllOwnProperties(obj, properties);
      expect(result).to.be.true;
    });
    it('should show that the object contains all the properties given no properties', () => {
      const properties = [];
      const obj = {
        a: 123,
        b: undefined,
        c: 'abc',
        d: [],
      };
      const result = hasAllOwnProperties(obj, properties);
      expect(result).to.be.true;
    });
    it('should show that the object does not contain all the properties', () => {
      const properties = ['a', 'b', 'c', 'e'];
      const obj = {
        a: 123,
        b: undefined,
        c: 'abc',
        d: [],
        567: 'abc',
      };
      const result = hasAllOwnProperties(obj, properties);
      expect(result).to.be.false;
    });
  });
});
