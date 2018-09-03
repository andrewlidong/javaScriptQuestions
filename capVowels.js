// Write a function called capVowels(string) that takes in a string and returns
// the string where every vowel is capitalized. All other letters should be lowercased.
// Hint: Don't forget that strings are immutable!
//
// Examples:
//
// capVowels('hello world'); // => 'hEllO wOrld'
// capVowels('HELLO WORLD'); // => 'hEllO wOrld'
// capVowels('boOtCamP PreP'); // => 'bOOtcAmp prEp'

function capVowels(string) {
  const vowels = 'aeiouAEIOU'.split('');
  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      result += string[i].toUpperCase();
    } else {
      result += string[i].toLowerCase();
    }
  }

  return result;
}
