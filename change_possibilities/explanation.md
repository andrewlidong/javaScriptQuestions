# Change Possibilities

### High level idea

If the amount = 0, return 1.  If it's less than 0 or if there are no denominations, return 0.  Otherwise, iterate through denominations, calculate the difference between the amount and denomination, and calculate the number of possible denominations.  Finally, recursively invoke changePossibilities and add it to possibilities counter.  


### Time and space complexity

Let: <br>

- `n` be the size of the denominations array <br>

Worst cases: <br>

- Time: `O(n^2)` <br>
- Space: `O(1)`