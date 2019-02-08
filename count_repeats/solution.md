# Abbreviate

```js
const countRepeats = string => {
    const obj = {};
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        if (!obj[string[i]]) {
            obj[string[i]] = 1;
        } else {
            obj[string[i]] += 1;
        }
    }

    for (let key in obj) {
        if (obj[key] > 1) count ++;
    }

    return count;
}
```