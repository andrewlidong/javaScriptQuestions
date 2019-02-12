# Least Common Multiple

```js
const lcm = (num1, num2) => {
    let minimum = Math.min(num1, num2);
    for (let i = minimum; i <= num1 * num2; i++) {
        if (i % num1 === 0 && i % num2 === 0) return i;
    }
}
```