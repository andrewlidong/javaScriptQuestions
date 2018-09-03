// Write a function `titleize(title, stopWords)` that takes in a string `title`
// and an array of strings `stopWords`. Return the `title` where every word that
// does not exist in the `stopWords` array is capitalized; all others lowercase.
//
// Hint: Decompose this problem into helper functions. Perhaps create these,
// - removePunctuation(word)
// - isStopWord(word, stopWords)
//
// var punctuation = [";", "!", ".", "?", ",", "-"];
//
// Examples:
//
// titleize("forest gump, the runner", ["the"])
// => "Forest Gump, the Runner"
//
// titleize("MASTER AND COMMANDER", ["and"])
// => "Master and Commander"
//
// titleize("i LOVE; lover of mine", ["love", "of"])
// => "I love; Lover of Mine"
//
// titleize("shall we dance?", ["dance"])
// => "Shall We dance?"


function removePunctuation(word) {
  let punctuation = [";", "!", ".", "?", ",", "-"];
  let temp = '';

  for (let i = 0; i < word.length; i++) {
    if (!punctuation.includes(word[i])) {
      temp += word[i];
    }
  }

  return temp;
}

function isStopWord(word, stopWords) {
  word = removePunctuation(word).toLowerCase();
  if (stopWords.includes(word)) return true;
  return false;
}

function titleize(title, stopWords) {
  let result = [];
  let array = title.split(' ');

  for (let i = 0; i < array.length; i++) {
    if (isStopWord(array[i], stopWords)) {
      result.push(array[i].toLowerCase());
    } else {
      result.push(array[i].toUpperCase());
    }
  }

  return result.join(' ');
}
