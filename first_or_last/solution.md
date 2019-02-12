# First or Last

```js
function firstOrLast(arr) {
    if (arr.length % 2 === 0) return arr[0];
    if (arr.length % 2 !== 0) return arr[arr.length - 1];
}
```