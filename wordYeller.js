// Write a function wordYeller(sentence) that takes in a sentence string as
// input. It should return the sentence where every word has an exclamation
// point behind it, except words that already have punctuation. Punctuation
// marks are ". , ! ? ; :"
//
// Example 1
// var sent = "Stop it now! Please, wont you stop?";
// var yelledWords = wordYeller(sent);
// yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true
//
// Example 2
// var words = "Go to the store and grab the following: milk, bread, run, and cake";
// wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"; => true

function wordYeller(sentence) {
  let punc = ". , ! ? ; :".split(' ');
  sentence = sentence.split(' ');
  let result = [];

  for (let i = 0; i < sentence.length; i++) {
    let word = sentence[i];
    let char = word[word.length - 1];
    if (punc.indexOf(char) < 0) word += '!';
    result.push(word);
  }

  return result.join(' ');
}
