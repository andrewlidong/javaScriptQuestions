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
