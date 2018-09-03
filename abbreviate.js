// Write a function `abbreviate(sentence)` that takes in a sentence string and
// returns a new sentence where words longer than 4 characters have their vowels
// removed. Assume the sentence has all lowercase characters.
// Feel free to use the array below in your solution:
//
// var vowels = ['a', 'e', 'i', 'o', 'u'];
//
// Examples:
//
// abbreviate('bootcamp prep is fun'); // => 'btcmp prep is fun'
// abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
// abbreviate('hello world'); // => 'hll wrld'
// abbreviate('how are you'); // => 'how are you'

const removeVowels = word => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let newWord = '';

  for (let i = 0; i < word.length; i++) {
    if (!vowels.includes(word[i])) {
      newWord += word[i];
    }
  }

  return newWord;
};

const abbreviate = sentence => {
  sentence = sentence.split(' ');
  let result = [];

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].length <= 4) {
      result.push(sentence[i]);
    } else {
      result.push(removeVowels(sentence[i]));
    }
  }

  return result.join(' ');
};
