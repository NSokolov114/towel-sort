module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix === []) return [];
  let sortedArray = [];
  // add every row to new array,
  // for each even row reverse it first
  for (i=0;i<matrix.length;i++) {
    if (i % 2 === 1) matrix[i] = matrix[i].reverse();
    sortedArray = sortedArray.concat(matrix[i]);
  }
  return sortedArray;
}