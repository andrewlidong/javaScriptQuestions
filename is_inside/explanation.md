# Is Inside

### High level idea

In javaScript, indexOf returns the position of the first occurrence of a specified value in a string.  It returns -1 if the value to search for never occurs.  Simply check if the indexOf(el) is greater than -1 and if it is, return true.  Otherwise return false.  

### Time and space complexity

Let: <br>

- `n` be the size of the input array <br>

Worst cases: <br>

- Time: `O(n)` <br>
- Space: `O(1)`