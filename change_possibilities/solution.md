# Change Possibilities

```js
const changePossibilities = (amount, denominations) {
    if (amount === 0) {
        return 1;
    }

    if (amount < 0 || denominations.length === 0) {
        return 0;
    }

    for (let i = 0; i < denominations.length; i++) {
        const denomination = denominations[i];
        const subAmount = amount - denomination;
        const subDenominations = denominations.slice(i);
        possibilities += changePossibilities(subAmount, subDenominations);
    }

    return possibilities;
}
```