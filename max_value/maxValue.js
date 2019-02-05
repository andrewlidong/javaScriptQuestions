// Write a function `maxValue(array)` that returns the largest value in `array`.
// Assume `array` is an array of numbers.
//
// Examples:
// maxValue([12, 6, 43, 2]); // => 43
// maxValue([]); // => null
// maxValue([-4, -10, 0.43]); // => 0.43

function maxValue(array) {
  if (array.length === 0) return null;
  
  let largest = array[0];

  for (let i = 1; i < array.length; i++) {
    if (largest < array[i]) largest = array[i];
  }

  return largest;
}
