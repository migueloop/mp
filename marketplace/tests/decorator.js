// todo: move this out of redux
import chai from 'chai';
require('../shared/helpers/polifill');
const expect = chai.expect;
describe('Native JavaScript Decorators', () => {
  describe('Array.prototype.isIntersected', () => {
    it('should show that the arrays contain similar numbers', () => {
      const result = [1, 2, 3].isIntersected([3, 4, 5]);
      expect(result).to.be.true;
    });
    it('should show that the arrays contain disimilar numbers', () => {
      const result = [1, 2, 3].isIntersected([4, 5, 6]);
      expect(result).to.be.false;
    });
    it('should show that the arrays contain similar strings', () => {
      const result = ['a', 'b', 'c'].isIntersected(['c', 'd', 'e']);
      expect(result).to.byee.true;
    });
    it('should show that the arrays contain disimilar strings', () => {
      const result = ['a', 'b', 'c'].isIntersected(['d', 'e', 'f']);
      expect(result).to.be.false;
    });
  });
});
