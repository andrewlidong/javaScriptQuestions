// Write a function `wordPeriods(sentence)` that takes in a sentence and returns a new
// sentence where every word has period after it.
//
// Examples:
//
// wordPeriods('hello world'); // => 'hello. world.'
// wordPeriods('what is the weather today'); // => 'what. is. the. weather. today.'

function periods(sentence) {
  sentence = sentence.split(' ');
  let result = [];

  for (let i = 0; i < sentence.length; i++) {
    result.push(sentence[i] + '.');
  }

  return result.join(' ');
}
