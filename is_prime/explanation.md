# Is Prime

### High level idea

If the number is less than 2, immediately return false.  Iterate from position 2 to the number, incrementing by 1.  If the number divided by iterator is zero, immediately return false.  If we pass all our checks, return true.  

### Time and space complexity

Let: <br>

- `n` be the size of the input array <br>

Worst cases: <br>

- Time: `O(n)` <br>
- Space: `O(1)`

### Edge cases missed

