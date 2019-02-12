# Pair Product

```js
const pairProduct = (arr, target) => {
  const pairArr = [];
  let i = 0;
  while (i < arr.length) {
    let j = i + 1;
    while (j < arr.length) {
      if (arr[i] * arr[j] === target) pairArr.push([i,j]);
      j++;
    }
    i++;
  }
  return pairArr;
}
```