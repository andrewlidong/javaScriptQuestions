# Mirrored Arrays

```js
const mirrorArray = arr => {
  const result = arr;

  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result;
}
```