// Write a function `longWordCount(string)` that takes in a string and returns the
// number of words longer than 7 characters.
//
// Examples:
//
// longWordCount(""); // => 0
// longWordCount("short words only"); // => 0
// longWordCount("one reallylong word"); // => 1
// longWordCount("two reallylong words inthisstring"); // => 2
// longWordCount("allwordword longwordword wordswordword"); // => 3
// longWordCount("seventy schfifty five"); // => 1

function longWordCount(string) {
  let count = 0;
  string = string.split(' ');

  for (let i = 0; i < string.length; i++) {
    if (string[i].length > 7) count++;
  }

  return count;
}
