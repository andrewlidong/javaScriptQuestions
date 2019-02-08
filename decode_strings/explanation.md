# Decode String

### High level idea

Build a decoded string and instantiate a stack.  As soon as we hit a ']', we add to decoded the stack.  We then pop from the stack.  Instantiating repeats as the number of popped stacks, and decoded so far as a shallow copy of decoded.  Then we add to decoded the number of times repeats happens.  If the length fo the stack is equal to 0 we break, otherwise we push the current character.  

### Time and space complexity

Let: <br>

- `n` be the size of the input array <br>

Worst cases: <br>

- Time: `O(n)` <br>
- Space: `O(n)`

### Edge cases missed

