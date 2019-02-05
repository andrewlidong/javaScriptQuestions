
// Write a function `firstLastCap(sentence)` that takes in a sentence and returns a new
// sentence where the first and last letters of each word is uppercase. All other characters
// should be lowercase.
//
// Examples:
//
// firstLastCap('hello BOOTCAMP PrEp'); // =>'HellO BootcamP PreP'
// firstLastCap('what is on the radio'); // =>'WhaT IS ON ThE RadiO'

const updateWord = word => {
  let newWord = word[0].toUpperCase() + word.slice(1, -1).toLowerCase() + word[word.length-1].toUpperCase();
  return newWord;
};

const firstLastCap = sentence => {
  let result = [];
  sentence = sentence.split(' ');

  for (let i = 0; i < sentence.length; i++) {
    result.push(updateWord(sentence[i]));
  }

  return result.join(' ');
};
