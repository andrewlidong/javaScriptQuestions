# Long Word Count

### High level idea

Keep a counter variable.  Split the string into an array of words.  Iterate through the array, incrementing count if the current word has length greater than 7.  Return count.  

### Time and space complexity

Let: <br>

- `n` be the size of the input string <br>

Worst cases: <br>

- Time: `O(n)` <br>
- Space: `O(1)`