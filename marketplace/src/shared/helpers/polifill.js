/**
 * Compares two arrays and returne values in common
 * Only compare the first level for the exact object
 * @param {array} b - array to compare with.
 */

Array.prototype.intersect = function intersect(arr) { return this.filter(element => arr.indexOf(element) !== -1); };

/**
 * Compares two arrays and works out if they contain at least one value in common
 * Only compare the first level for the exact object
 * @param {array} b - array to compare with.
 */
Array.prototype.isIntersected = function isIntersected(b) { return this.reduce((p, n) => p || b.indexOf(n) !== -1, false); };


/**
 * Find the index of the smallest element in an  array
 */

Array.prototype.indexOfSmallest = function indexOfSmallest(k) {
  let lowest = 0;
  const a = this;

  for (let i = 1; i < a.length; i++) {
    if (k) {
      if (a[i][k] < a[lowest][k]) lowest = i;
    } else {
      if (a[i] < a[lowest]) lowest = i;
    }
  }
  return lowest;
};
