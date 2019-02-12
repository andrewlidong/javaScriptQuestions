# Divisible by Three Pair Sum

```js
const divisibleByThreePairSum(arr) {
    const result = [];

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length; j++) {
            if ((arr[i] + arr[j]) % 3 === 0) {
                result.push([i, j]);
            }
        }
    }

    return result;
}
```