# Count Scores

### High level idea

Instantiate a return object.  Iterate through current array of people objects, and if the person's name is not in our returnObj, add their score, otherwise (taking advantage of unique keys) add the score to the returnObj's score.   

### Time and space complexity

Let: <br>

- `n` be the size of the input array <br>

Worst cases: <br>

- Time: `O(n)` <br>
- Space: `O(n)`
