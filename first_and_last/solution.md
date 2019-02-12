# First and Last

```js
function firstAndLast (arr) {
    if (arr.length % 2 === 0) {
        return arr[0] + arr[arr.length - 1];
    } else {
        return arr[0] - arr[arr.length - 1];
    }
}
```