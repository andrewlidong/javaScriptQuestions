// Write a function `pairProduct(arr, num)` that accepts an array of numbers (arr)
// and a target number (num). It should return pairs of indices whose elements multiply
// to `num`. No pair should appear twice in the result.
// Use only `while` loops. No `for` loops.
//
// Examples:
pairProduct([1,2,3,4,5], 4); //=> [ [ 0, 3 ] ]
pairProduct([1,2,3,4,5], 8); //=> [ [ 1, 3 ] ]
pairProduct([1, 2, 3, 12, 8], 24); //=> [ [ 1, 3 ], [ 2, 4 ] ]

function pairProduct(arr, num) {
  let result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for(let j = i+1; j < arr.length; j++) {
      if (arr[i] * arr[j] === num) result.push([i,j]);
    }
  }

  return result;
}
