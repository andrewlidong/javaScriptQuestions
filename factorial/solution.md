# Factorial

```js
function factorial(n) {
    let product = 1;

    for (let i = n; i > 0; i--) {
        product *= i
    }

    return product;
}
```