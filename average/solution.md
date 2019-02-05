# Average

```js
const average = array {
    let sum = 0;
    let count = array.length;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return (sum / count);
}
```