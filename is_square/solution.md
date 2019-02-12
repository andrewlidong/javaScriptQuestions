# Is Square

```js
const isSquare = (num) => {
  for (let i = 1; i < num / 2; i++) {
    if (i * i === num) return true;
  }
  return false;
}
```