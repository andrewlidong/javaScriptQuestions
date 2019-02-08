# Two Dimensional Size

### High level idea

Build a helper function removeVowels which takes in a word and loops through the word, replacing any word that isn't a vowel.  

With abbreviate, take a sentence and split it on " ".  Instantiate a results array.  Iterate through words and if any word has length less than or equal to 4, push it immediately into the sentence.  Otherwise, push the word with removeVowels invoked onto it.  

### Time and space complexity

Let: <br>

- `n` be the size of the input array <br>

Worst cases: <br>

- Time: `O(n)` <br>
- Space: `O(n)`

### Edge cases missed

