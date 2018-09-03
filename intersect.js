// Write a function intersect(arr1, arr2) that takes in two arrays and returns a
// new array containing the elements common to both arr1 and arr2.
// Hint: use indexOf
// Examples:
// intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']) => [ 'b', 'd' ]
// intersect(['a', 'b', 'c'], ['x', 'y', 'z']) => []

function intersect(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i] > -1)) result.push(arr2[i]);
  }

  return result;
}
