// Write a function `hipsterfy(sentence)` that takes takes a string containing
// several words as input. Remove the last vowel from each word. `'y'` is not a vowel.
//
// Examples:
//
// hipsterfy("proper"); // => "propr"
// hipsterfy("proper tonic panther"); // => "propr tonc panthr"
// hipsterfy("towel flicker banana"); // => "towl flickr banan"
// hipsterfy("runner anaconda"); // => "runnr anacond"
// hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"

function hipsterfy(sentence) {
  let vowels = 'aeiou'.split('');
  let array = sentence.split(' ');
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let word = array[i].split('').reverse();

    let count = 0;
    let temp = [];

    for (let j = 0; j < word.length; j++) {
      if (vowels.includes(word[j] && count === 0)) {
        count++;
        continue;
      } else {
        temp.push(word[j]);
      }
    }

    temp = temp.reverse().join('');
    result.push(temp);
  }

  return result.join(' ');
}
