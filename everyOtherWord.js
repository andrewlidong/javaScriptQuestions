// Write a function everyOtherWord(sentence) that takes in a sentence and returns
// an array containing every other word in that sentence.
//
// Examples:
//
// everyOtherWord('hello how are you doing on this lovely day?'); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
// everyOtherWord('the weather is wonderful'); // => [ 'the', 'is' ]

function everyOtherWord(sentence) {
  sentence = sentence.split(' ');
  let result = [];

  for (let i = 0; i < sentence.length; i = i + 2) {
    result.push(sentence[i]);
  }

  return result;
}
