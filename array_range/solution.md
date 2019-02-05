# Array Range

```js
const arrayRange = (min, max, step) {
    const arr = [];

    for (let i = min; i <= max; i = i + step) {
        arr.push(i);
    }

    return arr;
}
```