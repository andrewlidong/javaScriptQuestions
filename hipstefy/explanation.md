# Hipsterfy

### High level idea

Initialize vowels as an array of aeiou.  Break up the sentence into an array of words.  Initialize a results array.  Iterate through our split sentence and define a temporary word as a reversed array of characters.  Initialize a count and a temp array.  Iterate through our word characters and if count is 0 and the character is a vowel, skip the character and increment count.  Otherwise push the character.  Reverse temp and join the characters together.  Finally push temp into result.  Return the joined result.  

### Time and space complexity

Let: <br>

- `n` be the size of the input array <br>

Worst cases: <br>

- Time: `O(n)` <br>
- Space: `O(n)`

### Edge cases missed

