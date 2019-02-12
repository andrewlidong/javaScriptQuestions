# Lucky Sevens

```js
const luckySevens = max => {
  const result = [];

  for (i = 7; i <= max; i = i + 7) {
    result.push(i);
  }

  return result;
}
```