// Write a function `divisibleByThreePairSum(array)` that takes an array of numbers.
// It should return an array of all the pairs of indices, whose elements sum to a
// multiple of three.
//
// Examples:
// divisibleByThreePairSum([1, 6, 3, 4, 2, 0]); //=> [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]
// divisibleByThreePairSum([8, 3, 5, 9, 2]); //=> [[1, 3]]

function divisibleByThreePairSum(array) {
  let result = [];

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length; j++) {
      if ((array[i] + array[j]) % 3 === 0) {
        result.push([i,j]);
      }
    }
  }

  return result;
}
