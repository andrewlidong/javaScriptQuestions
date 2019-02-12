# Least Common Multiple

```js
const lcm = (num1, num2) => {
    let result = 0;
    for (let i = 1; i < num1 * num2; i++) {
        if (num1 % i === 0 && num2 % i === 0) return i;
    }
}
```