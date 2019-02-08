# Abbreviate

### High level idea

Instantiate a hash (such that each key is unique), and a counter.  Iterate through the string and insert each unique letter into the set.   Add the count of letters appearing.  Then iterate through the keys and increment count for each key whose value is greater than 1.  

### Time and space complexity

Let: <br>

- `n` be the size of the input array <br>

Worst cases: <br>

- Time: `O(n)` <br>
- Space: `O(n)`
