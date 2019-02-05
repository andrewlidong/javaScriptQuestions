# Array Builder

### High level idea

Iterate through the keys in the hash, and within each key, iterate through values, pushing the key into the array for each value.  

### Time and space complexity

Let: <br>

- `n` be the size of hash <br>
- `k` be the sum of integer values <br>

Worst cases: <br>

- Time: `O(kn)` <br>
- Space: `O(kn)`

### Edge cases missed