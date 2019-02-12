# Magic Numbers

```js
const magicNumbers = max => {
  const result = [];

  for (let i = 4; i < max; i++) {
    if (i % 4 === 0 && i % 6 !== 0) result.push(i);
    if (i % 6 === 0 && i % 4 !== 0) result.push(i);
  }

  return result;
}
```