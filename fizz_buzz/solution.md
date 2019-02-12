# Fizz Buzz

```js
const fizzBuzz = (max) => {
    const result = [];

    for (let i = 2; i <= max; i++) {
        if (i % 2 === 0 && i % 7 !== 0) result.push(i);
        if (i % 7 === 0 && i % 2 !== 0) result.push(i);
    }

    return result;
}
```