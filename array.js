// Write a function `logEach(array)` that prints every element of the array and its
// index to the console.
//
// Example:
// logEach(["Anthony", "John", "Carson"]); // prints
// 0: Anthony
// 1: John
// 2: Carson

function logEach(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(i + ': ' + array[i]);
  }
}

// Write a function `capWords(words)` that takes in an array of words and
// returns a new array where every word is capitalized.
//
// Example:
// capWords(['hello', 'boOtCaMp', 'PREP!']); // => ['HELLO', 'BOOTCAMP', 'PREP!']

function capWords(words) {
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    arr.push(words[i].toUpperCase());
  }
  return arr;
}

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
